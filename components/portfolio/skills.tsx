"use client";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "State & Data",
    skills: [
      "Redux",
      "Zustand",
      "TanStack Query",
      "REST APIs",
      "GraphQL",
      "MongoDB",
    ],
  },
  {
    title: "UI & Styling",
    skills: [
      "Tailwind CSS",
      "CSS-in-JS",
      "Styled Components",
      "shadcn/ui",
      "Radix UI",
      "Material-UI",
      "Design Systems",
    ],
  },
  {
    title: "Build & Architecture",
    skills: [
      "Vite",
      "Webpack",
      "Module Federation",
      "Micro-frontends",
      "Monorepo",
      "Component Libraries",
    ],
  },
  {
    title: "Testing & Quality",
    skills: [
      "Unit Testing",
      "Integration Testing",
      "Jest",
      "React Testing Library",
      "Code Review",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "CI/CD",
      "Agile",
      "Scrum",
      "ClickUp",
      "Slack",
      "Figma",
      "VS Code",
    ],
  },
];

const softSkills = [
  "Cross-functional Collaboration",
  "Technical Leadership",
  "Problem Solving",
  "Communication",
  "Remote Work",
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-5 md:px-8 lg:px-12 bg-card/30">
      <div className="max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-8 md:mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="space-y-3 p-4 md:p-5 rounded-lg bg-card border border-border/60"
            >
              <h3 className="text-foreground font-medium text-sm md:text-base">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1.5 text-xs md:text-sm rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-border">
          <h3 className="text-foreground font-medium text-sm md:text-base mb-4 md:mb-6">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm rounded-full border border-primary/30 text-primary bg-primary/5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
