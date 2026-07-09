"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-secondary">
          <span className="text-primary font-medium">Manjeet Lodha</span>
        </p>
        <p className="text-xs text-secondary/60">
          Built with Next.js, TypeScript and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
