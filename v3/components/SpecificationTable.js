export default function SpecificationTable({ specifications, caption = 'Planning details' }) {
  const rows = Object.entries(specifications || {});
  return (
    <div className="overflow-hidden rounded-[1.4rem] border border-[#dfdbd2] bg-white/55">
      <div className="border-b border-[#dfdbd2] px-5 py-4 md:px-7">
        <p className="text-[10px] uppercase tracking-[0.18em] text-[#8a7657]">{caption}</p>
      </div>
      <dl className="divide-y divide-[#e4e0d7]">
        {rows.map(([label, value]) => (
          <div key={label} className="grid grid-cols-[minmax(120px,0.7fr)_1fr] gap-4 px-5 py-4 text-[12px] leading-5 md:px-7">
            <dt className="capitalize text-muted">{label.replace(/([A-Z])/g, ' $1')}</dt>
            <dd className="text-ink">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="px-5 pb-5 pt-1 text-[10px] leading-5 text-[#83847b] md:px-7">All figures and selections are project-specific; final details follow a site and engineering review.</p>
    </div>
  );
}
