import { Target, Compass, Handshake } from 'lucide-react';
import { PageHead, PageIntro, GrowthCTA, TextLink } from '../components/ui.jsx';
import campus from '../assets/aslc-campus.webp';
import campusMobile from '../assets/aslc-campus-mobile.webp';

export default function About() {
  return (
    <>
      <PageHead
        title="About Us"
        description="Discover ASLC’s mission to strengthen IT organizations, from our roots in Ranchi to a vision for national enterprise growth."
      />

      <PageIntro
        variant="about"
        image={{ src: campus, mobile: campusMobile }}
        eyebrow="ABOUT ASLC"
        title="Built on expertise. Driven by your potential."
        description="ASLC Consulting & Training Organization brings a capability-first approach to the next generation of IT enterprise growth."
      />

      <section className="section container split-section">
        <div>
          <p className="eyebrow">ABOUT ASLC</p>
          <h2>Stronger organizations.<br />Bigger possibilities.</h2>
          <p className="body-copy">
            Established in 2022 and headquartered in Ranchi, Jharkhand, ASLC is a premium corporate training and capability development organization focused on strengthening IT infrastructure, project management, and program management capabilities.
          </p>
          <p className="body-copy">
            Our mission is to empower IT companies across Jharkhand and Bihar to successfully undertake and deliver large-scale IT infrastructure projects and complex enterprise programs in-house.
          </p>
          <p className="body-copy mt-5">
            We work towards building stronger internal capabilities by upskilling existing IT professionals, enhancing technical and managerial expertise, and equipping teams with the knowledge, processes, and practical skills required to manage complex projects and programs efficiently.
          </p>
          <p className="body-copy mt-5">
            At ASLC, we believe that developing the right people and capabilities is essential to helping IT organizations move beyond routine operations, take on larger opportunities, and build sustainable growth.
          </p>
          <TextLink to="/services">Explore Our Expertise</TextLink>
        </div>

        <img className="about-image" src={campus} alt="Contemporary enterprise architecture" width={1920} height={1088} loading="lazy" />
      </section>

      <section className="section value-band">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HOW WE THINK</p>
              <h2>Capability comes first.<br />Sustainable growth follows.</h2>
            </div>
          </div>

          <div className="about-values">
            <div>
              <Target size={30} />
              <h3>Purposeful transformation</h3>
              <p>Focus every workstream on the capabilities and delivery practices that matter for higher-value opportunities.</p>
            </div>
            <div>
              <Handshake size={30} />
              <h3>Practical partnership</h3>
              <p>Work alongside your organization to connect training and frameworks with the realities of client delivery.</p>
            </div>
            <div>
              <Compass size={30} />
              <h3>Long-term ambition</h3>
              <p>Build a repeatable foundation that can grow from local projects to regional and national enterprise engagements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container split-section">
        <div>
          <p className="eyebrow">RANCHI ROOTS. WIDER HORIZONS.</p>
          <h2>A local foundation.<br />An expanding vision.</h2>
        </div>
        <div>
          <p className="body-copy">
            Based in Ranchi, Jharkhand, ASLC starts with the opportunity to strengthen local training pipelines and organizational capability. Our vision expands sequentially across neighboring Eastern states, before scaling our methodologies to enterprise-level IT companies nationwide.
          </p>
        </div>
      </section>

      <GrowthCTA />
    </>
  );
}
