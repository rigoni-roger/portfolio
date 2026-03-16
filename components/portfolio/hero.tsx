"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="meRoger"
      className="min-h-[100dvh] flex flex-col justify-center px-5 py-16 md:px-8 lg:px-12"
    >
      <div className="max-w-3xl w-full">
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-3 md:mb-4 text-balance">
            Roger Alves Rigoni
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-primary mb-4 md:mb-6">
            Senior Frontend / Full-Stack Engineer
          </h2>
          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-muted-foreground text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 shrink-0" />
              Brazil (Remote)
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span>English Fluent</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>4+ years experience</span>
          </div>
        </div>

        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg text-pretty">
            Senior Frontend Engineer with{" "}
            <span className="text-foreground font-semibold">4+ years</span> of
            experience building scalable{" "}
            <span className="text-foreground font-semibold">
              Healthcare SaaS
            </span>{" "}
            applications using <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">TypeScript</span>, and modern
            frontend architecture.
          </p>

          <ul className="space-y-2 text-muted-foreground text-sm md:text-base leading-relaxed">
            <li className="pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-primary">
              Strong focus on{" "}
              <span className="text-foreground font-semibold">
                performance, DX, and accessibility
              </span>{" "}
              in complex frontend codebases.
            </li>
            <li className="pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-primary">
              Experience with{" "}
              <span className="text-foreground font-semibold">
                micro-frontends, state management
              </span>{" "}
              and{" "}
              <span className="text-foreground font-semibold">
                component libraries/design systems
              </span>
              .
            </li>
            <li className="pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-primary">
              Comfortable leading frontend initiatives and collaborating closely
              with{" "}
              <span className="text-foreground font-semibold">product</span>,{" "}
              <span className="text-foreground font-semibold">design</span> and{" "}
              <span className="text-foreground font-semibold">
                cross-functional teams
              </span>
              .
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <Button asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <div className="flex items-center gap-2">
            <Link
              href="mailto:rogerrigoni.a@gmail.com"
              className="p-2.5 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/roger-rigoni"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/rigoni-roger"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
