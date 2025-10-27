import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface UnsubscribeRequest {
  unsubscribe_token: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    // Use service role key for secure server-side operations
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { unsubscribe_token }: UnsubscribeRequest = await req.json();

    // Validate token format
    if (!unsubscribe_token || typeof unsubscribe_token !== 'string') {
      return new Response(
        JSON.stringify({ error: "Invalid unsubscribe token" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate UUID format
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(unsubscribe_token)) {
      return new Response(
        JSON.stringify({ error: "Invalid token format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Securely update the subscription using service role
    // Only update if the subscription is currently active
    const { data, error } = await supabase
      .from("newsletter_subscriptions")
      .update({ 
        is_active: false,
        updated_at: new Date().toISOString()
      })
      .eq('unsubscribe_token', unsubscribe_token)
      .eq('is_active', true)
      .select();

    if (error) {
      console.error("Unsubscribe error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to unsubscribe" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Check if any record was updated
    if (!data || data.length === 0) {
      return new Response(
        JSON.stringify({ error: "Invalid token or already unsubscribed" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Newsletter unsubscribe successful:", {
      email: data[0].email,
      timestamp: new Date().toISOString()
    });

    return new Response(
      JSON.stringify({ 
        message: "Successfully unsubscribed from newsletter",
        email: data[0].email
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in newsletter-unsubscribe function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
