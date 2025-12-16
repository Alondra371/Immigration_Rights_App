import React from "react";
import "./legalresource.css";

interface Resource {
  title: string;
  description: string;
  url: string;
}

export default function LegalResources() {
  const resources: Resource[] = [
    {
      title: "RAICES",
      description:
        "Free or low-cost legal services for detained immigrants, asylum seekers, and families.",
      url: "https://www.raicestexas.org/",
    },
    {
      title: "ICE Detainee Locator",
      description:
        "Official ICE system to locate detained family members or friends.",
      url: "https://locator.ice.gov/",
    },
    {
      title: "Immigration Legal Services Directory",
      description:
        "Nationwide directory of nonprofit organizations offering immigration legal help.",
      url: "https://www.immigrationadvocates.org/nonprofit/legaldirectory/",
    },
    {
      title: "ACLU – Know Your Rights",
      description:
        "Clear explanations of your rights when interacting with immigration enforcement.",
      url: "https://www.aclu.org/know-your-rights/immigrants-rights/",
    },
  ];

  return (
    <div className="legal-page">
      <div className="legal-container">
        <header className="legal-header">
          <h1>Legal Resources</h1>
          <div className="header-bar" />
          <p>
            Trusted organizations and tools that provide legal assistance,
            education, and protection for immigrants and their families.
          </p>
        </header>

        <section className="card-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <div className="accent-bar" />

              <h2>{resource.title}</h2>
              <p>{resource.description}</p>

              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website <span>→</span>
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}