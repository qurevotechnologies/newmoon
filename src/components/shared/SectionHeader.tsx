"use client";

export default function SectionHeader({ subtitle, title, description }: { subtitle: string, title: string, description?: string }) {
  return (
    <div className="text-center mb-8 px-4">
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="w-12 h-[1px] bg-secondary/50"></div>
        <span className="text-secondary tracking-[0.2em] uppercase text-xs font-semibold">{subtitle}</span>
        <div className="w-12 h-[1px] bg-secondary/50"></div>
      </div>
      <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">{title}</h2>
      {description && <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">{description}</p>}
    </div>
  );
}