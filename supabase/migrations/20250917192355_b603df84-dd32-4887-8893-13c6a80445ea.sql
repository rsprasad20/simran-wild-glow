-- Secure newsletter_subscriptions: remove public SELECT access
-- Context: SELECT policy allowed unrestricted reads (USING true), exposing emails.
-- Fix: Drop SELECT policy so only service role (bypasses RLS) can read; public cannot.

-- 1) Ensure table exists (no-op if already there) and RLS is enabled (assumed from existing policies)
-- 2) Drop overly permissive SELECT policy
DROP POLICY IF EXISTS "Users can view subscription with token" ON public.newsletter_subscriptions;

-- Note:
-- - No replacement SELECT policy is created. This means:
--   * Anonymous and authenticated clients cannot read rows directly.
--   * Edge Functions using the SERVICE ROLE (as implemented in `newsletter-subscribe`) still bypass RLS and can read if needed.
-- - Existing public INSERT policy remains so visitors can subscribe.
-- - No changes to UPDATE/DELETE in this migration to avoid unintended side-effects.
