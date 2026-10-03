import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function PageHero({ eyebrow, title, description, image, alt, breadcrumbs = [], align = 'left', size = 'default', children }) {
  const centered = align === 'center';
  return (
    <section className={`relative isolate overflow-hidden ${size === 'short' ? 'min-h-[430px] py-14 md:min-h-[490px] md:py-20' : 'min-h-[530px] py-16 md:min-h-[620px] md:py-24'}`}>
      {image && <Image src={image} alt={alt || ''} fill priority sizes="100vw" className="object-cover" />}
      <div className={`absolute inset-0 ${image ? 'bg-gradient-to-r from-[#f8f5ef]/95 via-[#f8f5ef]/85 to-[#f8f5ef]/42' : 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#e9ece5] via-[#f4f0e8] to-[#f7f5ef]'}`} />
      <div className="relative mx-auto flex min-h-[inherit] max-w-[1440px] items-center px-5 sm:px-8 md:px-12 lg:px-16">
        <div className={`${centered ? 'mx-auto text-center' : ''} max-w-4xl`}>
          <Breadcrumbs items={breadcrumbs} />
          {eyebrow && <p className={`mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a7657] ${centered ? 'text-center' : ''}`}>{eyebrow}</p>}
          <h1 className={`font-serif text-[clamp(3.1rem,7vw,7rem)] font-normal leading-[0.92] tracking-[-0.045em] text-ink ${centered ? 'mx-auto' : ''}`}>{title}</h1>
          {description && <p className={`mt-7 max-w-2xl text-[15px] leading-7 text-[#62645e] md:text-[17px] md:leading-8 ${centered ? 'mx-auto' : ''}`}>{description}</p>}
          {children && <div className={`mt-9 flex flex-col gap-3 sm:flex-row ${centered ? 'justify-center' : ''}`}>{children}</div>}
        </div>
      </div>
    </section>
  );
}
