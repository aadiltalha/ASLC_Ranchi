import { PageHead, PageIntro, ServiceIcon, GrowthCTA, TextLink } from '../components/ui.jsx';
import { services } from '../data.js';

export default function Services() {
  return (
    <>
      <PageHead
        title="Core Services"
        description="Explore ASLC’s five integrated services: web and apps, internal training, consultancy workstreams, delivery frameworks, and pipeline acquisition."
      />

      <PageIntro
        variant="services"
        eyebrow="OUR CORE SERVICES"
        title="Five streams. One stronger organization."
        description="Integrated expertise that connects your people, processes, and delivery capabilities with higher-value enterprise opportunities."
      />

      <section className="section container">
        {services.map((s, i) => (
          <article key={s.title} id={`service-${i}`} className="service-detail">
            <span className="service-icon"><ServiceIcon icon={s.icon} /></span>
            <div>
              <p className="eyebrow">0{i + 1} / {s.short}</p>
              <h2>{s.title}</h2>
              <p>{s.description}</p>
            </div>
            <aside>
              <p>{s.detail}</p>
              <TextLink to="/contact">Discuss Your Requirements</TextLink>
            </aside>
          </article>
        ))}
      </section>

      <GrowthCTA />
    </>
  );
}
