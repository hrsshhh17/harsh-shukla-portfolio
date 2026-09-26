# Harsh Shukla — Developer Portfolio

A modern portfolio presenting my full-stack engineering work, AI-assisted products, and interactive web experiences. It gives recruiters a concise overview while providing deeper case studies for technical reviewers.

**[View the live portfolio](https://harsh-shukla-portfolio-seven.vercel.app)** · **[Recruiter overview](https://harsh-shukla-portfolio-seven.vercel.app/recruiter)**

## What this portfolio demonstrates

- Full-stack product thinking across interfaces, APIs, authentication, and databases
- Responsive React and Next.js development
- Case studies with architecture, implementation notes, and source evidence
- Interactive motion and 3D web experience work
- Accessible navigation, reduced-motion support, and mobile fallbacks
- SEO metadata, sitemap, social previews, and recruiter-focused content

## Selected work

| Project | Focus | Core technologies |
| --- | --- | --- |
| [Converge](https://converge-nu-eight.vercel.app) | Realtime collaboration workspace | Next.js, TypeScript, Supabase, PostgreSQL |
| [SupportFlow AI](https://supportflow-ai-beta.vercel.app) | Knowledge-grounded support drafts | Next.js, TypeScript, Supabase, Gemini API |
| [Aether](https://aether-rosy-three.vercel.app) | Interactive AI concept experience | React, Three.js, GSAP, Framer Motion |
| [Sonic](https://sonic-rho-six.vercel.app) | Music and festival web experience | React, React Three Fiber, GSAP, Lenis |
| [Veyra](https://veyra-chi-one.vercel.app) | Cinematic travel and planning frontend | React, React Router, GSAP, Tailwind CSS |
| [Velocity X132](https://velocity-x132.vercel.app) | Scroll-driven 3D product experience | React, Three.js, Drei, GSAP |

Each project includes a dedicated case study covering its engineering challenge, implementation approach, architecture, highlights, and boundaries.

## Portfolio stack

- **Framework:** Next.js, React, TypeScript
- **Styling:** Custom responsive CSS
- **Interface components:** Radix UI
- **Runtime:** Vinext on Cloudflare infrastructure
- **Quality:** ESLint, production builds, and responsive browser verification

## Notable features

- Filterable horizontal project showcase
- Live previews and recorded project walkthroughs
- Recruiter summary and resume preview
- Responsive About page with an editorial profile layout
- Expandable certificate collection
- Guided contact brief with validation and review
- Keyboard command menu and desktop pointer interactions
- Touch-friendly navigation and reduced-motion support

## Run locally

### Requirements

- Node.js 22.13 or newer
- pnpm

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:5173` in your browser.

Create a production build with:

```bash
pnpm build
```

## Deploy on Vercel

Import this repository into Vercel and keep the detected framework as **Next.js**. The included `vercel.json` uses the standard Next.js production build while the existing local workflow remains available for the Cloudflare-compatible runtime.

The website works without contact-service credentials by falling back to an email draft. To enable direct contact delivery, configure these environment variables in Vercel:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`

## Project structure

```text
app/                 Pages, metadata, API route, sitemap and manifest
components/          Portfolio UI and interactive components
lib/projects.ts      Project content and case-study data
public/previews/     Project landing-page previews
public/walkthroughs/ Optional project walkthrough recordings
tests/               Contact-flow verification
```

## Contact

For software engineering, full-stack development, or collaboration opportunities:

- [LinkedIn](https://www.linkedin.com/in/hrsshhh17)
- [GitHub](https://github.com/hrsshhh17)
- [Portfolio contact page](https://harsh-shukla-portfolio-seven.vercel.app/contact)

---

Designed and developed by **Harsh Shukla**.
