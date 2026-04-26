export function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-secondary/30 blur-[140px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
