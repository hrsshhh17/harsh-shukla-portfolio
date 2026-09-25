export type Project={slug:string;name:string;eyebrow:string;description:string;stack:string[];live:string;github:string;color:string;category:'Full Stack'|'AI'|'Frontend'|'3D';challenge:string;solution:string;architecture:string[];highlights:string[];evidence:string[];limitation:string};
export const projects:Project[] = [
  {
    "slug": "converge",
    "name": "CONVERGE",
    "eyebrow": "Realtime collaboration workspace",
    "description": "A Next.js workspace application combining shared feeds, messaging, channels and AI-assisted workspace queries.",
    "stack": [
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "PostgreSQL",
      "Realtime"
    ],
    "live": "https://converge-nu-eight.vercel.app",
    "github": "https://github.com/hrsshhh17/converge",
    "color": "#ffb85c",
    "category": "Full Stack",
    "challenge": "Keep workspace conversations and shared content in sync while separating member access between workspaces.",
    "solution": "The implementation uses Supabase-backed workspace data, membership policies and realtime subscriptions. A server route handles AI requests with authenticated workspace context.",
    "architecture": [
      "Next.js / React workspace",
      "Supabase Auth + membership policies",
      "PostgreSQL + Realtime subscriptions",
      "Server-side workspace AI route"
    ],
    "highlights": [
      "Workspace feeds, comments and channels",
      "Realtime updates and presence RPC",
      "SQL migrations defining row-level policies"
    ],
    "evidence": [
      "src/components/RealtimeWorkspace.tsx",
      "database-schema.sql",
      "src/app/api/workspace-ai/route.ts"
    ],
    "limitation": "This case study describes the source implementation; it is not a production security audit."
  },
  {
    "slug": "supportflow-ai",
    "name": "SUPPORTFLOW AI",
    "eyebrow": "Knowledge-grounded support drafts",
    "description": "A support workspace for tickets and knowledge articles, with AI-generated reply drafts that remain subject to agent review.",
    "stack": [
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "PostgreSQL",
      "Gemini API"
    ],
    "live": "https://supportflow-ai-beta.vercel.app",
    "github": "https://github.com/hrsshhh17/supportflow-ai",
    "color": "#ff6b45",
    "category": "AI",
    "challenge": "Generate useful support replies from approved knowledge while keeping draft generation restricted to support agents.",
    "solution": "The draft route checks the signed-in user and role, limits recent draft usage, loads approved articles, requests structured Gemini output and stores the draft with its sources.",
    "architecture": [
      "Next.js ticket workspace",
      "Authenticated draft API route",
      "Approved articles → Gemini API",
      "Supabase draft + source records"
    ],
    "highlights": [
      "Agent role check before generation",
      "Structured draft output and source references",
      "Usage limit and saved drafts for review"
    ],
    "evidence": [
      "src/app/api/tickets/[ticketId]/draft/route.ts",
      "supabase/schema.sql",
      "src/app/workspace/tickets/[ticketId]/page.tsx"
    ],
    "limitation": "AI output is a draft for human review; automatic customer reply delivery is not claimed."
  },
  {
    "slug": "aether",
    "name": "AETHER",
    "eyebrow": "Interactive AI concept website",
    "description": "A technology concept experience built around a custom Three.js particle field, responsive editorial sections and motion-led storytelling.",
    "stack": [
      "React",
      "Vite",
      "Three.js",
      "GSAP",
      "Framer Motion"
    ],
    "live": "https://aether-rosy-three.vercel.app/",
    "github": "https://github.com/hrsshhh17/aether",
    "color": "#e6c27a",
    "category": "Frontend",
    "challenge": "Give an abstract AI concept a distinctive interactive visual identity while retaining readable page content.",
    "solution": "A custom WebGL particle component renders the main visual, while React sections use GSAP entrance timelines and Framer Motion viewport reveals.",
    "architecture": [
      "React page sections",
      "Three.js particle renderer",
      "GSAP entrance timelines",
      "Framer Motion scroll reveals"
    ],
    "highlights": [
      "Custom particle geometry and visual states",
      "Pixel-ratio cap in WebGL renderer",
      "Reduced-motion handling for section reveals"
    ],
    "evidence": [
      "src/ParticleField.jsx",
      "src/main.jsx"
    ],
    "limitation": "A frontend concept project, not a working AI service."
  },
  {
    "slug": "sonic",
    "name": "SONIC",
    "eyebrow": "Music and festival web experience",
    "description": "A multi-route music experience with artist and event presentation, a Three.js audio-field scene, film playback and animated sections.",
    "stack": [
      "React",
      "Vite",
      "React Router",
      "React Three Fiber",
      "GSAP",
      "Lenis"
    ],
    "live": "https://sonic-rho-six.vercel.app/",
    "github": "https://github.com/hrsshhh17/sonic",
    "color": "#ff8b68",
    "category": "3D",
    "challenge": "Connect an immersive music landing page with event, film and shop views while coordinating scroll behaviour.",
    "solution": "React Router provides separate views; a route-aware scroll handler and Lenis/ScrollTrigger integration coordinate movement. The audio field uses React Three Fiber and the film page exposes playback controls.",
    "architecture": [
      "React Router page shell",
      "GSAP + Lenis scroll layer",
      "React Three Fiber audio field",
      "Browser video playback"
    ],
    "highlights": [
      "Dedicated ticket, shop and film views",
      "Canvas-based audio-field presentation",
      "Video play, mute and fullscreen controls"
    ],
    "evidence": [
      "src/App.jsx",
      "src/components/AudioField/AudioField.jsx",
      "src/pages/Film/FilmPage.jsx"
    ],
    "limitation": "Ticket and shop interfaces are portfolio demonstrations; payment processing is not claimed."
  },
  {
    "slug": "veyra",
    "name": "VEYRA",
    "eyebrow": "Cinematic travel and trip planning",
    "description": "A travel frontend combining layered cinematic scenes, destination discovery and an itinerary planning interface.",
    "stack": [
      "React",
      "Vite",
      "React Router",
      "GSAP",
      "Tailwind CSS"
    ],
    "live": "https://veyra-chi-one.vercel.app",
    "github": "https://github.com/hrsshhh17/veyra",
    "color": "#ffd492",
    "category": "Frontend",
    "challenge": "Combine cinematic destination storytelling with practical search and planning controls.",
    "solution": "Layered scenes use GSAP media-query-aware timelines. Separate search, destination-service and trip-planner modules keep discovery and planning distinct from presentation.",
    "architecture": [
      "React Router travel views",
      "Destination search + service module",
      "Trip planner → itinerary view",
      "GSAP cinematic scene layers"
    ],
    "highlights": [
      "Reusable mountain, coast and desert scenes",
      "Destination discovery interface",
      "Trip preferences and itinerary presentation"
    ],
    "evidence": [
      "src/components/cinematic/CinematicExperience.jsx",
      "src/components/planner/TripPlanner.jsx",
      "src/services/destinationService.js"
    ],
    "limitation": "A travel discovery frontend; no booking or payment backend is claimed."
  },
  {
    "slug": "velocity-x132",
    "name": "VELOCITY X132",
    "eyebrow": "Scroll-driven 3D motorcycle experience",
    "description": "A motorcycle concept website with a real-time model, scroll-driven scene transformations and an interactive configurator.",
    "stack": [
      "React",
      "Vite",
      "Three.js",
      "React Three Fiber",
      "Drei",
      "GSAP"
    ],
    "live": "https://velocity-x132.vercel.app",
    "github": "https://github.com/hrsshhh17/velocity-x132",
    "color": "#d88950",
    "category": "3D",
    "challenge": "Coordinate a detailed motorcycle model with the story sections and configurator across different screen sizes.",
    "solution": "The model component loads GLTF assets and maps GSAP timelines to model position and rotation. The scene selects camera and pixel-ratio settings for smaller screens.",
    "architecture": [
      "React content sections",
      "R3F Canvas + Drei environment",
      "GLTF motorcycle model",
      "GSAP model transforms + configurator"
    ],
    "highlights": [
      "Scroll-driven model position and rotation",
      "Configurator turntable and drag interactions",
      "Mobile-specific camera and pixel-ratio settings"
    ],
    "evidence": [
      "src/components/Scene.jsx",
      "src/components/Bike.jsx",
      "src/components/Configure.jsx"
    ],
    "limitation": "An interactive product concept; vehicle specifications are presentation content."
  }
];
export const projectBySlug=(slug:string)=>projects.find(p=>p.slug===slug);
