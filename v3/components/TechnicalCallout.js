import Image from 'next/image';
import Icon from '@/components/Icon';

export default function TechnicalCallout({ src, alt, callouts = [], aspect = 'aspect-[4/3]' }) {
  return (
    <div className={`relative overflow-hidden rounded-[1.6rem] border border-[#dedad1] bg-[#e6e8e2] ${aspect}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#20211e]/30 via-transparent to-transparent" />
      <div className="absolute left-4 top-4 rounded-full border border-white/65 bg-white/75 px-3 py-2 text-[8px] uppercase tracking-[0.16em] text-[#67675f] backdrop-blur-sm sm:left-6 sm:top-6">AUREL · Design study</div>
      {callouts.map((callout) => (
        <div key={callout.label} className={`absolute hidden items-center gap-2 sm:flex ${callout.position}`}>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/80 bg-white/80 text-[#927b59] shadow-sm backdrop-blur"><Icon name={callout.icon} size={15} strokeWidth={1.3} /></span>
          <span className="rounded-lg border border-white/65 bg-white/80 px-3 py-2 text-[8px] uppercase tracking-[0.13em] text-[#55564f] shadow-sm backdrop-blur">{callout.label}</span>
        </div>
      ))}
      {callouts[0] && <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-xl border border-white/70 bg-white/85 px-3 py-2 text-[9px] uppercase tracking-[0.1em] text-[#55564f] shadow-sm backdrop-blur sm:hidden">{callouts[0].label}</div>}
    </div>
  );
}
