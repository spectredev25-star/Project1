type HeroContentProps = {
  badge?: string;

  title: string;

  subtitle: string;

  primaryButton?: React.ReactNode;

  secondaryButton?: React.ReactNode;
};

export default function HeroContent({
  badge,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
}: HeroContentProps) {
  return (
    <>

      {badge && (
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
          {badge}
        </p>
      )}

      <h1 className="text-5xl font-bold leading-tight text-white lg:text-7xl">
        {title}
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
        {subtitle}
      </p>

      <div className="mt-10 flex gap-4">

        {primaryButton}

        {secondaryButton}

      </div>

    </>
  );
}