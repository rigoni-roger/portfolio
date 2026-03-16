"use client";

export function Footer() {
  return (
    <footer className="py-6 md:py-8 px-5 md:px-8 lg:px-12 border-t border-border">
      <div className="max-w-3xl flex flex-col sm:flex-row justify-between items-center gap-3 text-xs md:text-sm text-muted-foreground">
        <p>Roger Alves Rigoni {new Date().getFullYear()}</p>
        <p>Built with Next.js, Tailwind CSS & shadcn/ui</p>
      </div>
    </footer>
  );
}
