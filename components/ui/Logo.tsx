type LogoProps = {
  className?: string;
  inverted?: boolean;
};

export function Logo({ className = "", inverted = false }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-lg font-semibold tracking-tight ${
        inverted ? "text-dark-foreground" : "text-foreground"
      } ${className}`}
    >
      Nureal
      <span className="flex items-center gap-0.5" aria-hidden="true">
        <span className="h-2 w-2 rounded-[2px] bg-accent-green" />
        <span className="h-2 w-2 rounded-[2px] bg-accent-yellow" />
      </span>
    </span>
  );
}
