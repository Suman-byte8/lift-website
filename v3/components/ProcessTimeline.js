import { Reveal } from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';

export default function ProcessTimeline({ steps }) {
  return (
    <div className="relative mt-12 md:mt-16">
      <div aria-hidden="true" className="absolute left-[15px] top-3 hidden h-px w-[calc(100%-30px)] bg-[#d9d4c9] md:block" />
      <div className="grid gap-0 md:grid-cols-4 md:gap-6">
        {steps.map((step, index) => (
          <Reveal key={step.number} delay={index * 0.08} className="relative grid grid-cols-[32px_1fr] gap-5 border-l border-[#d9d4c9] pb-9 pl-5 last:pb-0 md:block md:border-0 md:pb-0 md:pl-0">
            <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#c2b59e] bg-ivory font-serif text-[11px] text-[#897858] md:h-9 md:w-9">{step.number}</div>
            <div className="md:mt-7">
              <h3 className="font-serif text-[24px] leading-tight text-ink">{step.title}</h3>
              <p className="mt-3 max-w-xs text-[13px] leading-6 text-muted">{step.text}</p>
              {index < steps.length - 1 && <span className="mt-5 hidden items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-[#9c8c70] md:inline-flex">Next <ArrowRight size={12} /></span>}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
