# Direct contact delivery
The guided email draft works without external credentials. Direct sending remains disabled until all four production runtime variables are configured in Sites:
- RESEND_API_KEY (secret)
- CONTACT_FROM_EMAIL (sender on a verified Resend domain)
- TURNSTILE_SECRET_KEY (secret)
- TURNSTILE_SITE_KEY (public widget key; register the portfolio hostname)

The recipient is fixed server-side to Harsh's provided email. The API validates origin, input sizes and Turnstile hostname/action before contacting Resend. Tokens must pass server-side validation; the client never receives API secrets. No message body is logged or stored by this application. Resend receives the message only when the visitor explicitly sends it.

Configure production variables via Sites and redeploy. Do not commit keys or send them through chat. Local integration tests use mocked provider responses and send no real mail. Actual delivery requires a configured sender and an authorized end-to-end inbox check.

References:
https://resend.com/docs/api-reference/emails/send-email
https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
