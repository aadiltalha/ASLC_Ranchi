import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, TrendingUp, Layers, Globe2 } from 'lucide-react';
import { btn, PageHead, ServiceCards, GrowthCTA, TextLink } from '../components/ui.jsx';
import headquarters from '../assets/aslc-headquarters.webp';
import headquartersMobile from '../assets/aslc-headquarters-mobile.webp';

export default function Home() {
  return (
    <>
      <PageHead
        title="Enterprise Capability. Exceptional Growth."
        description="ASLC helps IT organizations build engineering capabilities, transform delivery, and pursue high-value enterprise projects. Based in Ranchi, Jharkhand."
      />

      <section className="home-hero">
        <img
          src={headquarters}
          srcSet={`${headquartersMobile} 900w, ${headquarters} 1600w`}
          sizes="100vw"
          alt="Contemporary glass architecture representing enterprise infrastructure"
          className="hero-image"
          width={1600}
          height={912}
          fetchPriority="high"
        />

        <div className="container hero-content">
          <p className="eyebrow"><span />EXPERTISE THAT BUILDS ENTERPRISES</p>

          <h1>
            Scaling IT Infrastructure<br className="hidden md:block" />{' '}
            Capabilities &<br className="hidden md:block" />{' '}
            <em>Multi-Million Dollar</em><br className="hidden md:block" />{' '}
            Projects.
          </h1>

          <p className="hero-description">
            From operational transformation to enterprise-ready delivery. We build the capabilities that help your organization compete, win, and scale.
          </p>

          <div className="hero-actions">
            <Link to="/services" className={btn('default', 'lg')}>Explore Services <ArrowUpRight /></Link>
            <Link to="/contact" className={btn('heroOutline', 'lg')}>Get in Touch <ArrowUpRight /></Link>
          </div>

          <p className="hero-footnote"><ShieldCheck size={14} />Rooted in Ranchi. Built for national & global impact.</p>
        </div>

        <span className="hero-side-label">
          ASLC / CONSULTING & TRAINING
          <span>RANCHI, INDIA — NATIONAL AMBITION</span>
        </span>
      </section>

      <section className="proof-band" aria-label="Our focus">
        <div className="container proof-inner">
          <div className="proof-item"><strong>End-to-End</strong><span>Organizational transformation</span></div>
          <div className="proof-item"><strong>5 Core Streams</strong><span>One integrated growth strategy</span></div>
          <div className="proof-item"><strong>3-Phase Vision</strong><span>Local roots to national reach</span></div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR CORE EXPERTISE</p>
            <h2>The capabilities behind<br />your next phase of growth.</h2>
          </div>
          <TextLink to="/services">View All Services</TextLink>
        </div>
        <ServiceCards limit={3} />
      </section>

      <section className="section value-band">
        <div className="container split-section">
          <div>
            <p className="eyebrow">BEYOND BUSINESS AS USUAL</p>
            <h2>Move from maintaining<br />systems to shaping<br />enterprise outcomes.</h2>
            <p className="body-copy">
              Low-margin maintenance contracts shouldn’t define your future. ASLC helps you develop the people, processes, and project consultancy capabilities to pursue higher-value domestic and global tenders.
            </p>
            <TextLink to="/about">Discover the ASLC Approach</TextLink>
          </div>

          <div className="transformation">
            <div className="transformation-row">
              <Layers size={25} />
              <div>
                <h3>Build a stronger delivery foundation</h3>
                <p>Turn engineering expertise into structured, repeatable enterprise delivery.</p>
              </div>
            </div>
            <div className="transformation-row">
              <TrendingUp size={25} />
              <div>
                <h3>Unlock higher-value opportunities</h3>
                <p>Position your organization for premium projects, not just routine maintenance.</p>
              </div>
            </div>
            <div className="transformation-row">
              <Globe2 size={25} />
              <div>
                <h3>Compete beyond your current market</h3>
                <p>Develop the confidence and capability to pursue national and international clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section market-band">
        <div className="container split-section">
          <div>
            <p className="eyebrow">THE OPPORTUNITY AHEAD</p>
            <h2>Enterprise demand is evolving.<br />Your capabilities should, too.</h2>
          </div>
          <div>
            <p className="body-copy">
              Cloud, digital infrastructure, and AI are reshaping enterprise priorities. The focus of industry leaders such as Cognizant and Infosys signals the opportunity for capable, delivery-ready IT organizations.
            </p>
            <div className="market-tags">
              <span>Cloud & Hybrid</span>
              <span>Digital Infrastructure</span>
              <span>AI & Automation</span>
            </div>
            <div className="benchmark">
              <span>Cognizant</span>
              <span>Infosys</span>
              <small>Industry context only.<br />No affiliation or endorsement.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A VISION WITHOUT LIMITS</p>
            <h2>Local foundations.<br />National possibilities.</h2>
          </div>
          <TextLink to="/about">Explore More About ASLC</TextLink>
        </div>

        <div className="vision-preview">
          <div className="vision-step">
            <span>01 / LOCAL</span>
            <h3>Rooted in Ranchi</h3>
            <p>Establish strong training pipelines and a dependable capability foundation.</p>
          </div>
          <div className="vision-step">
            <span>02 / REGIONAL</span>
            <h3>Expanding across the East</h3>
            <p>Bring proven methods to neighboring states in the Eastern region.</p>
          </div>
          <div className="vision-step">
            <span>03 / NATIONAL</span>
            <h3>Scaling enterprise impact</h3>
            <p>Equip IT organizations across India for larger, more ambitious opportunities.</p>
          </div>
        </div>
      </section>

      <section className="section value-band">
        <div className="container section-heading">
          <div>
            <p className="eyebrow">ENGAGE WITH PURPOSE</p>
            <h2>The right starting point.<br />A clear path forward.</h2>
          </div>
          <div>
            <p className="body-copy">Focused stream setup or comprehensive transformation — choose an engagement aligned with your ambition.</p>
          </div>
        </div>
      </section>

      <GrowthCTA />
    </>
  );
}
