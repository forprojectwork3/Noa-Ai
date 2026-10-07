/**
 * docs.js — Editable data repository for the #docs section.
 * Contains placeholder entries that can easily be updated with the final academic report.
 * Topics include: Transcript extraction, Gemini/Ollama model switching, PDF generation,
 * email verification flow, and cloud deployment.
 */

export const architectureFlow = [
  {
    id: 'user',
    step: '01',
    title: 'Student Input',
    subtitle: 'Lecture Ingestion',
    desc: 'Student inputs any YouTube lecture URL or audio recording directly into the Android application.',
    icon: '👤',
    accent: '#A855F7'
  },
  {
    id: 'app',
    step: '02',
    title: 'Native Android App',
    subtitle: 'ExoPlayer & Local Cache',
    desc: 'Engineered with Kotlin, Material 3, and Media3 ExoPlayer for 60fps media processing and Room SQLite caching.',
    icon: '📱',
    accent: '#C084FC'
  },
  {
    id: 'engine',
    step: '03',
    title: 'Hybrid AI Engine',
    subtitle: 'Gemini 1.5 Flash + Ollama',
    desc: 'Routes prompts dynamically: sub-second cloud inference via Google Gemini Flash with offline fallback to local Ollama.',
    icon: '🧠',
    accent: '#FFD21F'
  },
  {
    id: 'outputs',
    step: '04',
    title: 'Synthesized Artifacts',
    subtitle: 'Notes, Transcripts & Cards',
    desc: 'Structured lecture notes, timestamped verbatim transcripts, interactive flashcard decks, and vector PDF exports.',
    icon: '📚',
    accent: '#4ADE80'
  },
  {
    id: 'cloud',
    step: '05',
    title: 'Supabase & Cloud Services',
    subtitle: 'Auth, DB & Transactional SMTP',
    desc: 'Supabase PostgreSQL with Row Level Security (RLS) for student privacy, Render for audio extraction, and Resend for transactional verification.',
    icon: '⚡',
    accent: '#60A5FA'
  }
];

export const toolsAndApproaches = [
  {
    id: 'gemini',
    name: 'Google Gemini 1.5 Flash',
    category: 'AI Engine',
    status: 'chosen',
    statusLabel: 'Adopted (Primary AI)',
    icon: '⚡',
    description: 'High-speed multimodal LLM with up to 1,000,000 token context window for digesting full 2-hour university lectures in a single pass.',
    reason: 'Why we chose it: Near-instantaneous response latency (<1.2s), superior LaTeX equation extraction, and massive context capacity ideal for dense lectures.'
  },
  {
    id: 'ollama',
    name: 'Ollama & Local Llama 3',
    category: 'AI Engine',
    status: 'chosen',
    statusLabel: 'Adopted (Offline Fallback)',
    icon: '🦙',
    description: 'On-device / local-network inference runtime running quantized Llama 3 weights for offline revision without cellular connectivity.',
    reason: 'Why we chose it: Guaranteed student accessibility in campus areas with poor internet, preserving complete data privacy and zero API costs.'
  },
  {
    id: 'supabase',
    name: 'Supabase (PostgreSQL + Auth)',
    category: 'Backend & Data',
    status: 'chosen',
    statusLabel: 'Adopted (Identity & DB)',
    icon: '🗄️',
    description: 'Open-source Firebase alternative providing managed PostgreSQL, JWT authentication, and strict Row Level Security (RLS) policies.',
    reason: 'Why we chose it: Relational schema integrity for study notes and flashcard relations, instant JWT session management, and robust security policies.'
  },
  {
    id: 'render',
    name: 'Render Cloud Platform',
    category: 'Infrastructure',
    status: 'chosen',
    statusLabel: 'Adopted (Microservices)',
    icon: '☁️',
    description: 'Cloud application platform hosting our Python FastAPI microservices for YouTube audio stream demuxing and speech alignment.',
    reason: 'Why we chose it: Seamless Git deployment workflows, native Docker container support, and reliable SSL-terminated HTTP/2 endpoints.'
  },
  {
    id: 'resend',
    name: 'Resend Transactional SMTP',
    category: 'Email Delivery',
    status: 'chosen',
    statusLabel: 'Adopted (Custom SMTP)',
    icon: '✉️',
    description: 'Modern developer-first email API plugged into Supabase Custom SMTP hooks for verification and password recovery.',
    reason: 'Why we chose it: Solved 100% of student onboarding spam issues with verified DKIM/SPF domain reputation and sub-3-second delivery.'
  },
  {
    id: 'kotlin',
    name: 'Kotlin & Android Jetpack',
    category: 'Client Platform',
    status: 'chosen',
    statusLabel: 'Adopted (Native Client)',
    icon: '📱',
    description: 'Native Android SDK using Jetpack components, Media3 ExoPlayer, and Room DB rather than a hybrid web container.',
    reason: 'Why we chose it: Flawless background audio playback, hardware-accelerated rendering, and zero browser sandbox constraints.'
  },
  {
    id: 'whisper-local',
    name: 'Whisper On-Device Mobile',
    category: 'Speech Ingestion',
    status: 'dropped',
    statusLabel: 'Evaluated & Dropped',
    icon: '🚫',
    description: 'Attempted running OpenAI Whisper base model quantized directly within the Android APK package.',
    reason: 'Why we dropped it: 1.4GB APK overhead, intense thermal throttling, and excessive battery drain on budget Android devices used by students.'
  },
  {
    id: 'pwa-web',
    name: 'Browser-Based PWA Client',
    category: 'Client Platform',
    status: 'dropped',
    statusLabel: 'Evaluated & Dropped',
    icon: '🌐',
    description: 'Evaluated developing Noa Ai as a mobile browser progressive web application.',
    reason: 'Why we dropped it: Mobile Chrome and Safari terminate audio streaming when the screen is locked, breaking student lecture listening habits.'
  },
  {
    id: 'firebase-nosql',
    name: 'Firebase Realtime NoSQL',
    category: 'Backend & Data',
    status: 'dropped',
    statusLabel: 'Evaluated & Dropped',
    icon: '🔥',
    description: 'Evaluated Firebase Firestore NoSQL as the primary student study database.',
    reason: 'Why we dropped it: Denormalized document models caused data inconsistency when linking lecture timestamps, flashcard decks, and note revisions.'
  }
];

export const challengesAndSolutions = [
  {
    id: 'transcript-extraction',
    challengeNum: '01',
    title: 'Transcript Extraction from Long Video Lectures',
    category: 'Audio Ingestion Pipeline',
    problem: 'University lectures commonly exceed 90 to 120 minutes with severe background reverberation, variable microphone volume, and heavy accents. Downloading high-resolution MP4 video directly onto student smartphones wasted cellular bandwidth and caused memory out-of-bounds exceptions.',
    solution: 'Engineered an audio-stream demuxing pipeline on our Render backend. The service strips away the video stream, isolates a compressed 16kHz mono audio channel, and partitions the lecture into 5-minute sliding windows with phonetic timestamp alignment before feeding the AI engine.'
  },
  {
    id: 'model-switching',
    challengeNum: '02',
    title: 'Dynamic Model Switching Between Gemini & Ollama',
    category: 'AI Pipeline & Resilience',
    problem: 'Campus Wi-Fi connectivity in lecture halls and student hostels fluctuates heavily. Cloud-dependent AI solutions would abruptly fail mid-lecture, causing students to lose their current study context and generated study notes.',
    solution: 'Designed an intelligent fallback gateway inside the client. When high-speed internet is available, Noa Ai queries Google Gemini Flash for sub-second responses; when network latency exceeds 3000ms or drops offline, the app seamlessly routes inference to a local Ollama instance without losing state.'
  },
  {
    id: 'pdf-generation',
    challengeNum: '03',
    title: 'In-App Vector PDF Generation with LaTeX Equations',
    category: 'Client Document Export',
    problem: 'Technical diplomas and engineering lectures are saturated with formulas, matrices, and circuit diagrams. Standard Android HTML-to-PDF print adapters produced blurry rasterized math, clipped multi-page tables, and caused frame drops on mid-range phones.',
    solution: 'Built a native vector PDF compiler on a background worker thread. Notes are parsed into a lightweight Abstract Syntax Tree (AST), rendering vector typography and crisp mathematical equations with custom page-break algorithms and institutional header branding.'
  },
  {
    id: 'email-verification',
    challengeNum: '04',
    title: 'Transactional Student Email Verification Flow',
    category: 'Identity & Authentication',
    problem: 'Default Supabase shared SMTP servers resulted in student verification emails consistently landing in spam or quarantine folders, creating significant onboarding friction during campus testing rounds.',
    solution: 'Configured Resend as a dedicated transactional SMTP gateway with authenticated DNS records (SPF, DKIM, and DMARC). Integrated custom Supabase auth redirection hooks (/verify and /reset) to ensure instantaneous email delivery and smooth single-tap mobile verification.'
  },
  {
    id: 'production-deployment',
    challengeNum: '05',
    title: 'Backend Container Cold Starts & Cloud Deployment',
    category: 'Cloud Infrastructure',
    problem: 'Free-tier cloud containers frequently spin down during idle night hours, resulting in 45-to-60-second cold-start latency when the first student of the day submitted a lecture for analysis.',
    solution: 'Architected automated lightweight health-check cron triggers and decoupled audio queue processors on Render. Added client-side optimistic loading states and audio caching so the student experiences zero UI lockup even while the backend scales up.'
  }
];

export const reportDetails = {
  title: 'Academic Documentation & Viva Repository',
  subtitle: 'Technical compilation, system diagrams, and research notes for Project Team 3 at Government Polytechnic Proddatur.',
  tags: ['Diploma Project', 'State Board Curriculum', 'Team 3', 'Computer Engineering'],
  cardBadge: 'Academic Viva Ready'
};
