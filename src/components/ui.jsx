import { Link } from 'react-router-dom';
import {
  ArrowUpRight, ArrowRight, Code2, GraduationCap, Network, Files, TrendingUp,
} from 'lucide-react';
import { services } from '../data.js';

/* ---------- Buttons (Tailwind class recipes) ---------- */
const BASE =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';
const VARIANTS = {
  default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
  hero: 'bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-sm',
  heroOutline: 'border border-inverse-border text-inverse bg-transparent hover:bg-inverse/10',
  outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
};
const SIZES = { default: 'h-9 px-4 py-2', lg: 'h-12 rounded px-6', icon: 'h-9 w-9' };

export const btn = (variant = 'default', size = 'default', extra = '') =>
  [BASE, VARIANTS[variant], SIZES[size], extra].filter(Boolean).join(' ');

/* ---------- Page <head> (React 19 hoists these tags) ---------- */
export function PageHead({ title, description, ogTitle, ogDescription, fullTitle }) {
  const t = fullTitle ?? `${title} | ASLC Consulting & Training`;
  return (
    <>
      <title>{t}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle ?? t} />
      <meta property="og:description" content={ogDescription ?? description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}

/* ---------- Small shared pieces ---------- */
export function TextLink({ to, children }) {
  return (
    <Link to={to} className="text-link">
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}

export function GrowthCTA() {
  return (
    <section className="growth-cta">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">YOUR NEXT CHAPTER</p>
          <h2>Ready to build what's next?</h2>
          <p>Let's turn your organization's potential into a clear path for growth.</p>
        </div>
        <Link to="/contact" className={btn('hero', 'lg')}>
          Start a Conversation <ArrowUpRight />
        </Link>
      </div>
    </section>
  );
}

const iconMap = { code: Code2, training: GraduationCap, workstream: Network, framework: Files, pipeline: TrendingUp };

export function ServiceIcon({ icon }) {
  const Icon = iconMap[icon];
  return <Icon size={24} strokeWidth={1.6} />;
}

export function ServiceCards({ limit = 5 }) {
  return (
    <div className="service-grid">
      {services.slice(0, limit).map((s, i) => (
        <Link to={`/services#service-${i}`} key={s.title} className="service-card">
          <span className="service-icon"><ServiceIcon icon={s.icon} /></span>
          <span className="service-number">0{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
          <span className="card-link">Explore service <ArrowUpRight size={17} /></span>
        </Link>
      ))}
    </div>
  );
}

export function PageIntro({ eyebrow, title, description, variant = 'services', image }) {
  return (
    <section className={`page-intro intro-${variant}`}>
      {image && (
        <img
          src={image.src}
          srcSet={`${image.mobile} 900w, ${image.src} 1600w`}
          sizes="100vw"
          className="intro-photo"
          alt="Contemporary architecture and an open landscaped courtyard"
          width={1600}
          height={912}
          fetchPriority="high"
        />
      )}
      <div className="container intro-layout">
        <div className="intro-copy">
          <p className="eyebrow"><span />{eyebrow}</p>
          <h1>{title}</h1>
          <p className="intro-description">{description}</p>
        </div>

        {variant === 'services' && (
          <div className="intro-service-index">
            <span className="intro-index-label">THE CAPABILITY STACK / 01—05</span>
            {services.map((s, i) => (
              <Link to={`/services#service-${i}`} key={s.title}>
                <span>0{i + 1}</span>
                {s.title}
                <ArrowUpRight size={15} />
              </Link>
            ))}
          </div>
        )}

        {variant === 'contact' && (
          <div className="intro-contact-mark">
            <ArrowUpRight strokeWidth={1} />
            <a href="mailto:lashahdeo@gmail.com">lashahdeo@gmail.com</a>
          </div>
        )}
      </div>
    </section>
  );
}
