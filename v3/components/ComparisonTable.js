export default function ComparisonTable({ rows }) {
  const columns = ['Compact home lift', 'Premium glass lift', 'Luxury villa lift'];
  return (
    <>
      <div className="hidden overflow-hidden rounded-[1.5rem] border border-[#dedad1] bg-white/65 md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <caption className="sr-only">Comparison of three home lift design directions. Specifications are indicative placeholders pending engineering review.</caption>
            <thead>
              <tr className="bg-[#eeece5]">
                <th scope="col" className="w-[20%] px-6 py-5 text-[9px] font-medium uppercase tracking-[0.16em] text-muted">At a glance</th>
                {columns.map((column) => <th key={column} scope="col" className="px-6 py-5 font-serif text-[18px] font-normal leading-tight text-ink">{column}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e7e3da]">
              {rows.map((row) => <tr key={row.label} className="transition-colors hover:bg-[#fbfaf7]"><th scope="row" className="px-6 py-4 text-[11px] font-medium text-[#575952]">{row.label}</th>{row.values.map((value, index) => <td key={`${row.label}-${index}`} className="px-6 py-4 text-[11px] leading-5 text-muted">{value}</td>)}</tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid gap-4 md:hidden">
        {columns.map((column, columnIndex) => (
          <article key={column} className="rounded-[1.3rem] border border-[#dedad1] bg-white/60 p-5">
            <h3 className="font-serif text-[23px] text-ink">{column}</h3>
            <dl className="mt-4 divide-y divide-[#e7e3da]">
              {rows.map((row) => <div key={row.label} className="grid grid-cols-[0.8fr_1fr] gap-4 py-3 text-[11px]"><dt className="text-muted">{row.label}</dt><dd className="text-ink">{row.values[columnIndex]}</dd></div>)}
            </dl>
          </article>
        ))}
      </div>
      <p className="mt-4 text-[10px] leading-5 text-muted">Planning guide only. Capacities, dimensions, travel, stops and drive technology are not specified here; each item must be confirmed in the project design and replaced with approved product data before publication.</p>
    </>
  );
}
