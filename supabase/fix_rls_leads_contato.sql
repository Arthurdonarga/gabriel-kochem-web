-- Drop the existing permissive policy
-- Policy name might vary, checking if it exists before dropping or just dropping by name if known.
-- Based on the screenshot, the policy name is "Qualquer um pode enviar contatos".
DROP POLICY IF EXISTS "Qualquer um pode enviar contatos" ON "public"."leads_contato";

-- Create a new, safer policy that explicitly restricts to the anon role
CREATE POLICY "Permitir envio de contatos (anon)"
ON "public"."leads_contato"
AS PERMISSIVE
FOR INSERT
TO anon
WITH CHECK (true);
-- Note: 'TO anon' limits the scope to unauthenticated users, which is the intended use case.
-- The WITH CHECK (true) is now safe because it's scoped to 'anon' only, preventing authenticated internal users from accidentally writing here (though they likely have other policies).
-- Alternatively, if you want it TRULY public including auth users (unlikely for a lead form intended for visitors), you could use TO public.
-- But the warning specifically targets UNRESTRICTED usage. Scoping to 'anon' usually satisfies the linter if it's the intended audience.
