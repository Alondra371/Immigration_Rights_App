import React from "react";

type Widget = {
  title: string;
  description: string;
  badge: string;
  link: string;
};

const widgets: Widget[] = [
  {
    title: "Legal Resources",
    description:
      "Access guides, forms, and links to trusted legal aid organizations to help you navigate the immigration process.",
    badge: "Guides & Forms",
    link: "/legal-resources",
  },
  {
    title: "News & Policy Updates",
    description:
      "Stay informed about immigration news, policy changes, and community stories that may affect you and your family.",
    badge: "News",
    link: "/forum",
  },
  {
    title: "Community Support",
    description:
      "Find local events, workshops, and support networks focused on immigrant rights and community empowerment.",
    badge: "Community",
    link: "/forum",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-title">
              Empowering Immigrants Through Legal Support
            </h1>
            <p className="hero-subtitle">
              We provide accessible legal information, community support, and
              advocacy resources for immigrants and their families navigating a
              complex system.
            </p>

            <div className="hero-actions">
              <a href="/legal-resources" className="btn btn-primary">
                Browse Legal Resources
              </a>
              <a href="/forum" className="btn btn-outline">
                Visit the Forum
              </a>
            </div>

            <div className="hero-meta">
              <p>📍 Focused on immigrant communities and access to justice</p>
              <p>⚖️ Not legal advice, but a starting point for information</p>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-inner">
              <p className="hero-card-label">Need help right now?</p>
              <p className="hero-card-text">
                If you or a loved one is facing an urgent immigration
                situation, you don&apos;t have to go through it alone.
              </p>

              <div className="hero-hotline">
                <div className="hero-hotline-label">Urgent Hotline</div>
                <div className="hero-hotline-number">1-800-LEGAL-AID</div>
              </div>

              <p className="hero-card-note">
                If you are in immediate danger, call your local emergency
                number first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">How We Can Help</h2>
          <p className="section-subtitle">
            Legal information, up-to-date news, and community connection.
          </p>
        </div>

        <div className="widgets-grid">
          {widgets.map((widget) => (
            <article className="widget-card" key={widget.title}>
              <div className="widget-badge">{widget.badge}</div>
              <h3 className="widget-title">{widget.title}</h3>
              <p className="widget-description">{widget.description}</p>
              <a href={widget.link} className="widget-link">
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner">
        <div className="banner-inner">
          <div>
            <h2 className="banner-title">Not sure where to start?</h2>
            <p className="banner-text">
              Start by speaking with a trusted legal aid organization or
              community group. We can help you find options and questions to
              ask when you meet with a professional.
            </p>
          </div>

          <div className="banner-actions">
            <button className="btn btn-light">
              Call Hotline: 1-800-LEGAL-AID
            </button>
            <button className="btn btn-outline-light">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
}
