-- Drop the insecure UPDATE policy that allows unrestricted modifications
DROP POLICY IF EXISTS "Users can update subscription with token" ON newsletter_subscriptions;

-- Note: Unsubscribe functionality will now be handled securely via Edge Function
-- that validates the unsubscribe_token server-side using service_role_key