"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-5 md:px-8 lg:px-12">
      <div className="max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-6 md:mb-8">
          Contact
        </h2>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 lg:gap-12">
          <div>
            <p className="text-lg md:text-xl text-foreground mb-3 md:mb-4 text-balance">
              If you'd like to discuss a project or just say hi, I'm always open
              to chat.
            </p>
            <p className="text-muted-foreground text-sm md:text-base">
              I'm open to opportunities as a{" "}
              <span className="text-primary">Frontend Engineer</span> and{" "}
              <span className="text-primary">Full-Stack Engineer</span>.
              Preference for{" "}
              <span className="text-foreground font-medium">
                remote work (worldwide)
              </span>
              .
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            <Link
              href="mailto:rogerrigoni.a@gmail.com"
              className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Email
                </p>
                <p className="text-foreground group-hover:text-primary transition-colors text-sm md:text-base truncate">
                  rogerrigoni.a@gmail.com
                </p>
              </div>
            </Link>

            <Link
              href="https://linkedin.com/in/roger-rigoni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  LinkedIn
                </p>
                <p className="text-foreground group-hover:text-primary transition-colors text-sm md:text-base truncate">
                  linkedin.com/in/roger-rigoni
                </p>
              </div>
            </Link>

            <Link
              href="https://github.com/rigoni-roger"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  GitHub
                </p>
                <p className="text-foreground group-hover:text-primary transition-colors text-sm md:text-base truncate">
                  github.com/rigoni-roger
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-card border border-border">
              <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Location
                </p>
                <p className="text-foreground text-sm md:text-base">
                  Brazil (UTC-3)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
