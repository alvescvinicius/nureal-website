type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? <p className="text-eyebrow mb-3">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="text-lead mt-4">{description}</p> : null}
    </div>
  );
}
