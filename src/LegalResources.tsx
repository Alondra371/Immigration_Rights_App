import React from "react";

interface Resource {
  title: string;
  description: string;
  url: string;
}

export default function LegalResources() {
  const resources: Resource[] = [
    {
      title: "RAICES (Pro Bono Immigration Legal Services)",
      description:
        "Provides free or low-cost legal services for detained immigrants, asylum seekers, and families.",
      url: "https://www.raicestexas.org/",
    },
    {
      title: "ICE Detainee Locator",
      description:
        "Find your detained family member or friend through ICE's official detainee search system.",
      url: "https://locator.ice.gov/",
    },
    {
      title: "National Immigration Legal Services Directory",
      description:
        "Nationwide directory of organizations offering immigration legal help, many providing low-cost or pro bono support.",
      url: "https://www.immigrationadvocates.org/nonprofit/legaldirectory/",
    },
    {
      title: "Know Your Rights (ACLU)",
      description:
        "Resources explaining your rights when interacting with immigration enforcement.",
      url: "https://www.aclu.org/know-your-rights/immigrants-rights/",
    },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Legal Resources</h1>
      <p className="text-lg mb-6">
        These links provide trustworthy information and help for individuals and families dealing with immigration issues.
      </p>

      <div className="space-y-4">
        {resources.map((resource, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{resource.title}</h2>
            <p className="text-gray-700">{resource.description}</p>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              Visit Site
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}