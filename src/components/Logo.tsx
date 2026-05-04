import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary-foreground">
          <rect x="3" y="5" width="18" height="2" rx="1" fill="currentColor" />
          <rect x="3" y="17" width="18" height="2" rx="1" fill="currentColor" />
          <circle cx="7" cy="6" r="2.5" fill="currentColor" />
          <circle cx="13" cy="6" r="2.5" fill="currentColor" />
          <circle cx="9" cy="18" r="2.5" fill="currentColor" />
          <circle cx="16" cy="18" r="2.5" fill="currentColor" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-bold text-lg tracking-tight text-foreground">SempoaBSD</span>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Mental Arithmetic</span>
      </div>
    </Link>
  );
}
