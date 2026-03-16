"use client";

import { BookOpen, Globe } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-5 md:px-8 lg:px-12">
      <div className="max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-8 md:mb-12">
          About Me
        </h2>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 lg:gap-12">
          <div className="space-y-4 md:space-y-5">
            <p className="text-muted-foreground leading-relaxed text-base md:text-[17px]">
              I'm a developer passionate about creating{" "}
              <span className="text-foreground font-semibold">
                accessible, pixel-perfect user interfaces
              </span>{" "}
              that combine thoughtful design with robust engineering. I love
              working where <span className="font-semibold">design</span> and{" "}
              <span className="font-semibold">development</span> meet, crafting
              experiences that are both beautiful and{" "}
              <span className="font-semibold">highly performant</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-[17px]">
              Currently, I'm a Software Engineer at{" "}
              <span className="text-primary font-semibold">Luma Health</span>,
              helping build and maintain UI components and flows that power the
              platform's frontend. I focus on{" "}
              <span className="font-semibold">web accessibility</span> and{" "}
              <span className="font-semibold">inclusive UX</span> so our product
              works for a wide range of patients and clinicians.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-[17px]">
              I have experience working remotely with{" "}
              <span className="font-semibold">US-based, cross-functional teams</span>{" "}
              and care deeply about{" "}
              <span className="font-semibold">
                code quality, performance, and maintainability
              </span>
              .
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="p-5 md:p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="text-foreground font-medium text-sm md:text-base">Education</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="text-foreground font-medium">
                  Self-Taught Developer
                </span>{" "}
                — Continuous Learning
              </p>
              <ul className="mt-3 space-y-1 text-xs md:text-sm text-muted-foreground">
                <li>Frontend Masters courses (React, TypeScript, Advanced JS)</li>
                <li>Udemy certifications in web development</li>
                <li>Tutorial and documentation-driven learning</li>
              </ul>
            </div>

            <div className="p-5 md:p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="text-foreground font-medium text-sm md:text-base">Languages</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">
                    Portuguese
                  </span>
                  <span className="text-primary text-xs md:text-sm font-medium">
                    Native
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">English</span>
                  <span className="text-primary text-xs md:text-sm font-medium">
                    Fluent
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
