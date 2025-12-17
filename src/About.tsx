// src/About.tsx
import React from "react";

export default function About() {
  return (
    <div className="about-page">
      <section className="section">
        <div className="section-header">
          <h1 className="section-title">About This Project</h1>
          <p className="section-subtitle">
            This demo website was created to explore how technology can make
            immigration information easier to find and easier to understand.
          </p>
        </div>

        <div className="widgets-grid">
          <article className="widget-card">
            <h2 className="card-title">Our Mission</h2>
            <p className="card-description">
              To provide clear, organized, and trustworthy information that
              helps immigrants and their families feel a little less alone while
              navigating a very complicated system.
            </p>
          </article>

          <article className="widget-card">
            <h2 className="card-title">What You Can Do Here</h2>
            <p className="card-description">
              Browse legal resources, read important news, and check the forum
              for events and community updates. This is not legal advice, but a
              starting point for finding help.
            </p>
          </article>

          <article className="widget-card">
            <h2 className="card-title">Disclaimer</h2>
            <p className="card-description">
              This is a student project for learning web development. Always
              confirm information with a licensed attorney or accredited
              representative before making legal decisions.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
