export function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="mb-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#0b7a75]">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
      ) : null}
    </div>
  );
}
