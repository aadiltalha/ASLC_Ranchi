import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, Menu, X, MapPin, Mail, Moon, Sun } from 'lucide-react';
import { services } from '../data.js';
import { btn } from './ui.jsx';

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Core Services' },
  { to: '/team', label: 'Our Team' },
  { to: '/contact', label: 'Contact' },
];

const navClass = ({ isActive }) => (isActive ? 'nav-active' : undefined);

function Brand() {
  return (
    <Link to="/" className="brand" aria-label="ASLC Consulting and Training home">
      <span className="brand-name">ASLC<span className="brand-dot">.</span></span>
      <span className="brand-caption">CONSULTING & TRAINING<br />ORGANIZATION</span>
    </Link>
  );
}

/* Light / dark switch. The initial class is set by the inline script in index.html. */
function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [switching, setSwitching] = useState(null);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  function toggle() {
    const enabled = !dark;
    setDark(enabled);
    document.documentElement.classList.toggle('dark', enabled);
    try { localStorage.setItem('aslc-theme', enabled ? 'dark' : 'light'); } catch { /* ignore */ }
    setSwitching(enabled ? 'dark' : 'light');
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setSwitching(null), 800);
  }

  const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
  return (
    <>
      <button type="button" className={btn('ghost', 'icon', 'theme-toggle')} onClick={toggle} aria-label={label} title={label}>
        {dark ? <Sun /> : <Moon />}
      </button>
      <div className={`theme-switch-overlay${switching ? ' visible' : ''}`} role="status" aria-live="polite">
        <span className="theme-switch-spinner" aria-hidden="true" />
        <span>{switching === 'dark' ? 'Switching to dark mode' : switching === 'light' ? 'Switching to light mode' : ''}</span>
      </div>
    </>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((n) => (
            <NavLink key={n.to} to={n.to} end className={navClass}>{n.label}</NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Link to="/contact" className={btn('default', 'lg', 'header-cta')}>
            Let's Talk <ArrowUpRight />
          </Link>
          <button
            type="button"
            className={btn('ghost', 'icon', 'mobile-menu-button')}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((n) => (
            <NavLink key={n.to} to={n.to} end className={navClass} onClick={() => setOpen(false)}>
              {n.label}
              <ArrowUpRight size={16} />
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Brand />
          <p>Building capabilities.<br />Unlocking enterprise growth.</p>
          <span className="location"><MapPin size={14} />Ranchi, Jharkhand · India</span>
        </div>

        <div>
          <h3>Explore</h3>
          <nav aria-label="Footer navigation">
            {navigation.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
          </nav>
        </div>

        <div>
          <h3>Our Expertise</h3>
          <nav>
            {services.slice(0, 3).map((s) => <Link key={s.title} to="/services">{s.title}</Link>)}
            <Link to="/services">Delivery Frameworks</Link>
            <Link to="/services">Pipeline Acquisition</Link>
          </nav>
        </div>

        <div className="footer-contact">
          <h3>Start a conversation</h3>
          <a href="mailto:lashahdeo@gmail.com"><Mail size={16} />lashahdeo@gmail.com</a>
          <p>Local roots. National ambition.<br />Global possibilities.</p>
          <Link to="/contact" className="text-link">Get in touch <ArrowUpRight size={16} /></Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ASLC Consulting & Training Organization.</span>
        <span>Built on expertise. Driven by growth.</span>
      </div>
    </footer>
  );
}
