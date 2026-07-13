type ScreenshotPlaceholderProps = {
  label: string;
  className?: string;
};

// TODO: substituir por screenshots reais da Nureal Database IDE.
export function ScreenshotPlaceholder({
  label,
  className = "",
}: ScreenshotPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex aspect-[16/10] w-full items-center justify-center rounded-lg border border-dashed border-border-strong bg-surface ${className}`}
    >
      <span className="text-eyebrow px-6 text-center text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
