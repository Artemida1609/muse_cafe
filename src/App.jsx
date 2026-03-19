import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#drinks', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#visit', label: 'Visit' },
];

const cards = [
  { icon: '☕', title: 'Specialty Coffee', description: 'Freshly roasted daily from premium beans.' },
  { icon: '🥐', title: 'Artisan Bakery', description: 'Seasonal pastries and handcrafted desserts.' },
  { icon: '🌿', title: 'Local Ingredients', description: 'Every dish uses local produce and care.' },
  { icon: '🎨', title: 'Elegant Interiors', description: 'Calm, artistic space to relax and meet.' },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app">
      <nav className={scrolled ? 'scrolled' : ''}>
        <a className="nav-logo" href="#home">Muse</a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Specialty Café</p>
          <h1 className="hero-title">Muse <strong>Košice</strong></h1>
          <p className="hero-tagline">Čerstvo pražená káva, výtvarné dezerty, poklidná atmosféra.</p>
          <p className="hero-subtitle">U nás pro vás připravujeme každou šálek s láskou. Vzpomínky z kafe začínají tady.</p>
          <div className="hero-ctas">
            <a className="btn-primary" href="#visit">Visit Us</a>
            <a className="btn-ghost" href="#drinks">View Menu</a>
          </div>
          <div className="hero-scroll">
            <span>Scroll</span>
            <div className="hero-scroll-line" />
          </div>
        </div>
      </section>

      <div className="gold-strip">
        <div className="strip-inner">
          <span className="strip-item"><span className="strip-dot" /> Fresh roasted daily</span>
          <span className="strip-item"><span className="strip-dot" /> Desserts in-house</span>
          <span className="strip-item"><span className="strip-dot" /> Cozy atmosphere</span>
          <span className="strip-item"><span className="strip-dot" /> Slow mornings, happy people</span>
          <span className="strip-item"><span className="strip-dot" /> Fresh roasted daily</span>
        </div>
      </div>

      <section className="section-experience" id="experience">
        <p className="section-label">Experience</p>
        <h2 className="section-title">A place for quiet mornings and inspired conversations.</h2>
        <div className="experience-grid">
          {cards.map((item) => (
            <article className="exp-item" key={item.title}>
              <span className="exp-icon">{item.icon}</span>
              <h3 className="exp-title">{item.title}</h3>
              <p className="exp-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gallery" id="gallery">
        <p className="section-label">Gallery</p>
        <h2 className="section-title">Moments from the café</h2>
        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80" alt="Coffee cups on a table" />
            <div className="gallery-caption">Our signature espresso and pastries.</div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80" alt="Barista preparing coffee" />
            <div className="gallery-caption">Crafted by our baristas daily.</div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1521302080394-2b1f2f738e48?auto=format&fit=crop&w=900&q=80" alt="Artisan dessert on wooden table" />
            <div className="gallery-caption">Seasonal desserts from the counter.</div>
          </div>
        </div>
      </section>

      <section className="section-drinks" id="drinks">
        <p className="section-label">Menu</p>
        <h2 className="section-title">Our signature drinks</h2>
        <div className="drinks-grid">
          <article className="drink-card">
            <div className="drink-price">ESPRESSO</div>
            <div className="drink-name">Single Origin Espresso</div>
            <div className="drink-desc">Bold cup with caramel notes and velvety finish.</div>
          </article>
          <article className="drink-card">
            <div className="drink-price">LATTE</div>
            <div className="drink-name">Oat Latte</div>
            <div className="drink-desc">Creamy barista blend with freshly steamed oat milk.</div>
          </article>
          <article className="drink-card">
            <div className="drink-price">TEA</div>
            <div className="drink-name">Matcha & Mint</div>
            <div className="drink-desc">Refreshing green tea with handcrafted sweetness.</div>
          </article>
          <article className="drink-card">
            <div className="drink-price">COFFEE</div>
            <div className="drink-name">Cold Brew</div>
            <div className="drink-desc">Slow-steeped brew with bright and smooth profile.</div>
          </article>
        </div>
      </section>

      <section className="section-about" id="about">
        <div className="about-image-stack">
          <img className="about-img-main" src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=80" alt="Interior coffee" />
          <img className="about-img-secondary" src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=700&q=80" alt="Coffee and cake" />
        </div>
        <div className="about-content">
          <p className="section-label">About</p>
          <h2 className="section-title">A neighborhood café made for connection.</h2>
          <p className="about-text">Muse is where our team crafts each cake and coffee with care — from a quiet roast to your table.</p>
          <div className="about-stats">
            <div><div className="stat-number">12+</div><div className="stat-label">Years of craft</div></div>
            <div><div className="stat-number">23</div><div className="stat-label">Seasonal pastries</div></div>
            <div><div className="stat-number">4.9</div><div className="stat-label">Google rating</div></div>
          </div>
        </div>
      </section>

      <section className="section-interior">
        <div className="interior-overlay" />
        <div className="interior-content">
          <div className="interior-text-block">
            <p className="section-label">Interior</p>
            <h2 className="interior-title">Relax in our warm space.</h2>
            <p className="interior-body">Soft light, handcrafted furniture, and a quiet corner for your next moment.</p>
          </div>
        </div>
      </section>

      <section className="section-visit" id="visit">
        <div className="visit-map-placeholder">
          <p className="map-pin">📍</p>
          <p className="map-address">Hlavná 14, Košice, Slovakia</p>
          <p className="map-city">Open daily 08:00–20:00</p>
        </div>
        <div className="visit-content">
          <p className="section-label">Visit</p>
          <h2 className="visit-title">Drop by for coffee and calm atmosphere.</h2>
          <div className="visit-info">
            <div className="visit-info-item">
              <div className="visit-info-icon">⏰</div>
              <div>
                <div className="visit-info-label">Hours</div>
                <div className="visit-info-value">Mon–Sun: 8:00–20:00</div>
              </div>
            </div>
            <div className="visit-info-item">
              <div className="visit-info-icon">📍</div>
              <div>
                <div className="visit-info-label">Address</div>
                <div className="visit-info-value">Hlavná 14, Košice</div>
              </div>
            </div>
          </div>
          <a className="btn-primary" href="https://maps.google.com" target="_blank" rel="noreferrer">Open map</a>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">Muse</div>
            <p className="footer-tagline">Specialty coffee. Daily pastries. Quiet mornings.</p>
          </div>
          <div>
            <p className="footer-col-title">Quick links</p>
            <ul className="footer-links">
              <li><a href="#experience">Experience</a></li>
              <li><a href="#drinks">Menu</a></li>
              <li><a href="#visit">Visit</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Contact</p>
            <ul className="footer-links">
              <li><a href="mailto:hello@musecafe.com">hello@musecafe.com</a></li>
              <li><a href="tel:+421123456789">+421 123 456 789</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 Muse Cafe Košice</div>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
