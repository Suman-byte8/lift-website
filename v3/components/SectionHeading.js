export default function SectionHeading({ eyebrow, title, description, align = 'left', className = '', light = false }) {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && <p className={`mb-5 text-[10px] font-medium uppercase tracking-[0.2em] ${light ? 'text-[#ddcfb6]' : 'text-[#897a61]'}`}>{eyebrow}</p>}
      <h2 className={`font-serif text-[clamp(2.3rem,5vw,4.8rem)] font-normal leading-[0.98] tracking-[-0.035em] ${light ? 'text-ivory' : 'text-ink'}`}>{title}</h2>
      {description && <p className={`mt-6 max-w-2xl text-[15px] leading-7 ${centered ? 'mx-auto' : ''} ${light ? 'text-ivory/72' : 'text-muted'}`}>{description}</p>}
    </div>
  );
}
