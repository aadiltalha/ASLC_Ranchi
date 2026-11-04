import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin, ArrowUpRight, CheckCircle2, RotateCcw, Navigation } from 'lucide-react';
import { btn, PageHead, PageIntro } from '../components/ui.jsx';
import { plans, services, INQUIRY_EMAIL, WEB3FORMS_KEY } from '../data.js';

const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7324.558181099478!2d85.3321665520125!3d23.378118756294796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1793690840341!5m2!1sen!2sin';
const MAPS_DIRECTIONS_URL = 'https://maps.app.goo.gl/cAv7JkHrVz3y3ScN9';

// Static site: Web3Forms receives the POST and emails it to the address the access key was created for.
const ENDPOINT = 'https://api.web3forms.com/submit';

const fields = [
  { name: 'name', label: 'Full Name', placeholder: 'Your full name', type: 'text', max: 100, auto: 'name' },
  { name: 'organization', label: 'Organization', placeholder: 'Your organization', type: 'text', max: 150, auto: 'organization' },
  { name: 'email', label: 'Email Address', placeholder: 'you@company.com', type: 'email', max: 255, auto: 'email' },
  { name: 'phone', label: 'Phone Number', placeholder: '+91', type: 'tel', max: 20, auto: 'tel' },
];

const serviceOptions = ['General inquiry', ...plans.map((p) => p.name), ...services.map((s) => s.title)];

// Returns an object of { field: message } – empty when everything is valid.
function validate(d) {
  const e = {};
  if (d.name.length < 2) e.name = 'Please enter your full name.';
  if (d.organization.length < 2) e.organization = 'Please enter your organization.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Please enter a valid email address.';
  if (!/^[+\d\s().-]{7,20}$/.test(d.phone)) e.phone = 'Please enter a valid phone number.';
  if (d.message.length < 10) e.message = 'Please share a little more about your requirements (at least 10 characters).';
  return e;
}

export default function Contact() {
  const [params] = useSearchParams();
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [sendError, setSendError] = useState('');

  const selected = plans.find((p) => p.id === params.get('package'))?.name ?? 'General inquiry';

  async function submit(e) {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(e.currentTarget));
    const data = Object.fromEntries(Object.entries(raw).map(([k, v]) => [k, String(v).trim()]));
    const found = validate(data);
    setErrors(found);
    setSendError('');
    if (Object.keys(found).length) return;

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `ASLC inquiry — ${data.service}`,
          from_name: 'ASLC Website',
          name: data.name,
          email: data.email,
          organization: data.organization,
          phone: data.phone,
          service: data.service,
          message: data.message,
          botcheck: data._honey, // spam trap
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false || json.success === 'false') throw new Error(json.message || 'Request failed');
      setStatus('sent');
    } catch {
      setStatus('idle');
      setSendError(`We couldn't send your message. Please try again, or email us directly at ${INQUIRY_EMAIL}.`);
    }
  }

  return (
    <>
      <PageHead
        title="Contact Us"
        description="Talk to ASLC Consulting & Training in Ranchi about IT capability building, organizational transformation, and enterprise project opportunities."
      />

      <PageIntro
        variant="contact"
        eyebrow="CONTACT US"
        title="Let’s build your next chapter."
        description="Tell us where your organization is today — and where you want it to go. The conversation starts here."
      />

      <section className="section container contact-layout">
        <div className="contact-info">
          <p className="eyebrow">START A CONVERSATION</p>
          <h2>Your ambition.<br />Our shared starting point.</h2>
          <p>
            Whether you’re building internal capabilities, setting up a consultancy workstream, or preparing for a bigger opportunity, we’d like to hear from you.
          </p>

          <div className="contact-method">
            <Mail size={21} />
            <div>
              <h3>Email us</h3>
              <a href="mailto:lashahdeo@gmail.com">lashahdeo@gmail.com</a>
            </div>
          </div>

          <div className="contact-method">
            <MapPin size={21} />
            <div>
              <h3>Our base</h3>
              <p>Ranchi, Jharkhand<br />India</p>
            </div>
          </div>
        </div>

        {status === 'sent' ? (
          <div className="confirmation" role="status">
            <CheckCircle2 size={39} />
            <h2>Thank you — message sent.</h2>
            <p>
              Your inquiry has been delivered to the ASLC team. We'll get back to you at the email address you provided.
            </p>
            <div className="confirmation-actions">
              <button type="button" className={btn('outline')} onClick={() => setStatus('idle')}>
                <RotateCcw />Send Another Message
              </button>
            </div>
          </div>
        ) : (
          <form className="contact-form" onSubmit={submit} noValidate>
            {/* Spam trap: hidden from people, bots fill it in */}
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

            {fields.map((f) => (
              <div className="form-field" key={f.name}>
                <label htmlFor={f.name}>{f.label} <span>*</span></label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  maxLength={f.max}
                  required
                  autoComplete={f.auto}
                  aria-invalid={Boolean(errors[f.name])}
                  aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
                />
                {errors[f.name] && <p id={`${f.name}-error`} className="field-error">{errors[f.name]}</p>}
              </div>
            ))}

            <div className="form-field full-field">
              <label htmlFor="service">Selected Service / Package <span>*</span></label>
              <select id="service" name="service" defaultValue={selected}>
                {serviceOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>

            <div className="form-field full-field">
              <label htmlFor="message">Your Message <span>*</span></label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your organization, goals, and requirements…"
                maxLength={2000}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <p id="message-error" className="field-error">{errors.message}</p>}
            </div>

            <p className="form-note full-field">
              Your message is sent directly to the ASLC team.
            </p>

            {sendError && <p className="field-error full-field" role="alert">{sendError}</p>}

            <div className="form-submit full-field">
              <p>Your details are used only to respond to your inquiry.</p>
              <button type="submit" className={btn('default', 'lg')} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : <>Send Message <ArrowUpRight /></>}
              </button>
            </div>
          </form>
        )}
      </section>

      <section className="section container">
        <div className="location-heading">
          <div>
            <p className="eyebrow">FIND US</p>
            <h2>Visit our location.</h2>
            <p>Find us on Google Maps and get directions to our location.</p>
          </div>
          <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className={btn('outline')}>
            <Navigation size={17} />Get Directions<ArrowUpRight size={16} />
          </a>
        </div>

        <div className="contact-map">
          <iframe
            src={MAPS_EMBED_URL}
            title="ASLC Consulting and Training Organization location"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>
    </>
  );
}