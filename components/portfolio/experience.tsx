"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    period: "Jul 2023 — Present",
    title: "Software Engineer",
    company: "Luma Health",
    companyUrl: "https://lumahealth.io",
    description:
      "Healthcare SaaS platform serving 600+ health systems across the United States.",
    highlights: [
      "Owned end-to-end frontend development of SparkOS, an AI-powered automation platform — from architecture decisions to production deployment",
      "Led the Financial module, integrating 3 payment providers (Stripe, NextGen, Instamed) to process real patient payments securely",
      "Built and maintained the Scheduler Calendar, a complex scheduling system used daily by healthcare teams nationwide",
      "Reduced CI/CD pipeline execution time by **50%** through build optimization and caching strategies",
      "Contributed to a micro-frontend architecture using Module Federation with **24+ remote modules**, collaborating across multiple teams",
    ],
    technologies: [
      "React 17/19",
      "TypeScript",
      "Vite",
      "TanStack",
      "Zustand",
      "Module Federation",
      "Stripe SDK",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    period: "Mar 2022 — Jul 2023",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    description:
      "Development of responsive web applications for small businesses.",
    highlights: [
      "Built community social network frontend application with user profiles, posts, comments and real-time interactions",
      "Developed responsive web applications for small businesses using React and TypeScript",
      "Managed complete project lifecycle from requirements gathering to deployment",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Material-UI",
      "React Router",
      "React Query",
      "React Hook Form",
      "Zod",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-5 md:px-8 lg:px-12">
      <div className="max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-8 md:mb-12">
          Work Experience
        </h2>

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="text-sm text-muted-foreground mb-2">{exp.period}</div>

              <div>
                <h3 className="text-base md:text-lg font-medium text-foreground mb-1 flex items-start md:items-center gap-2 flex-wrap">
                  <span>{exp.title}</span>
                  <span className="text-muted-foreground">at</span>
                  {exp.companyUrl ? (
                    <Link
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {exp.company}
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  ) : (
                    <span className="text-primary">{exp.company}</span>
                  )}
                </h3>

                <p className="text-muted-foreground text-sm md:text-base mb-4">{exp.description}</p>

                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground text-sm md:text-base leading-relaxed pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-primary"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
