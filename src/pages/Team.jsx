import { Linkedin, Mail, ArrowUpRight, ArrowRight, MapPin } from 'lucide-react';
import { PageHead } from '../components/ui.jsx';

const CEO = {
  name: 'Lall Ashok Nath Shahdeo',
  role: 'Chief Executive Officer',
  bio: "Leading ASLC's strategic vision, organizational development, and long-term growth. Focused on strengthening IT capabilities, developing meaningful partnerships, and building a foundation for sustainable enterprise success.",
  image: '/members/ceo.webp',
  linkedin: 'https://www.linkedin.com/in/shahdeo/',
  email: 'ceo@aslc.in',
  tags: ['18+ Years Experience in Project Management', 'Leadership', 'Business Strategy', 'Enterprise Growth'],
};

// Add the photos to /public/members/ with these file names.
const TEAM = [ 
  {
    name: 'Aadil Talha',
    role: 'Frontend Developer',
    bio: " Supports ASLC's technical operations, manages IT initiatives, and contributes to building reliable technology solutions and digital capabilities.",
    image: '/members/manager.jpg',
    linkedin: 'https://www.linkedin.com/in/aadil-talha-378a411a8/',
    email: 'aadiltalha@aslc.in',
    tags: ['IT Operations', 'Technical Support', 'Technology'],
  },
  {
    name: 'Abhishek Kumar',
    role: 'IT Executive',
    bio: "Oversees organizational operations, coordinates team activities, and ensures effective execution of ASLC's business objectives and day-to-day activities.",
    image: '/members/it.jpg',
    linkedin: 'https://www.linkedin.com/in/abhishek',
    email: 'abhishekkumar@aslc.in',
    tags: ['Operations', 'Team Management', 'Coordination'],
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <PageHead
        fullTitle="Our Team | ASLC Consulting & Training Organization"
        ogTitle="Our Team | ASLC"
        description="Meet the leadership and team behind ASLC Consulting & Training Organization."
        ogDescription="Meet the people behind ASLC Consulting & Training Organization."
      />

      {/* CEO */}
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
        <div className="mb-10">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-8 bg-primary" />
            MEET OUR LEADERSHIP
          </p>
        </div>

        <div className="grid overflow-hidden rounded-xl border border-border bg-card lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden bg-secondary sm:min-h-[550px] lg:min-h-[650px]">
            <img
              src={CEO.image}
              alt={CEO.name}
              className="absolute inset-0 h-full w-full object-cover object-center grayscale transition-all duration-700 hover:grayscale-0"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">ASLC / LEADERSHIP</p>
              <p className="mt-2 text-sm font-medium">01 — EXECUTIVE LEADERSHIP</p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-10 xl:p-10">
            <div className="mb-12 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">OUR CEO</span>
            </div>

            <div className="mb-7">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">{CEO.role}</p>
              <h1 className="max-w-xl text-4xl font-bold uppercase leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-4xl">
                {CEO.name}
              </h1>
            </div>

            <p className="mb-8 max-w-lg text-sm leading-8 text-muted-foreground sm:text-base">{CEO.bio}</p>

            <div className="mb-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">AREAS OF FOCUS</p>
              <div className="flex flex-wrap gap-2">
                {CEO.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-7">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">CONNECT WITH OUR CEO</p>
              <div className="flex flex-wrap items-center gap-6">
                <a href={CEO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="CEO LinkedIn profile"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                  <Linkedin size={18} />LinkedIn<ArrowUpRight size={15} />
                </a>
                <a href={`mailto:${CEO.email}`}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                  <Mail size={18} />Email<ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-8 bg-primary" />
                THE PEOPLE BEHIND ASLC
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Meet the team.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              The people bringing together expertise, commitment, and collaboration to move ASLC forward.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, index) => (
              <article key={member.name}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[4/4.3] overflow-hidden bg-secondary">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.hidden = true; }}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-5 left-5 text-xs font-semibold tracking-widest text-white">ASLC / 0{index + 2}</span>
                </div>

                <div className="p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">{member.role}</p>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{member.bio}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground">{tag}</span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-5 border-t border-border pt-5">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                      <Linkedin size={18} />LinkedIn
                    </a>
                    <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                      <Mail size={18} />Email
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="flex flex-col justify-between gap-7 rounded-xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:p-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">CONNECT WITH ASLC</p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Let's start a conversation.</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Have a question or want to connect with our organization? We'd be glad to hear from you.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} />Ranchi, Jharkhand, India
            </div>
          </div>
          <a href="mailto:ceo@aslc.in"
            className="inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-primary">
            Contact ASLC<ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
