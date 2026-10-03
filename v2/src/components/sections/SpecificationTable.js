import { specLabels } from "@/data/products";

export default function SpecificationTable({ specs, placeholder, caption = "Technical specifications" }) {
  return (
    <div>
      <div className="overflow-hidden rounded-[24px] border border-white/80 bg-white/60 shadow-soft backdrop-blur">
        <table className="w-full text-left">
          <caption className="sr-only">{caption}</caption>
          <tbody>
            {Object.entries(specs).map(([k, v], i) => (
              <tr key={k} className={i ? "border-t border-ink/[0.07]" : ""}>
                <th scope="row" className="w-1/2 px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-500 sm:w-2/5">{specLabels[k] || k}</th>
                <td className="px-6 py-4 text-[14.5px] text-ink">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {placeholder && <p className="mt-4 text-[11.5px] text-ink-300">Indicative placeholder values — to be replaced with certified specifications.</p>}
    </div>
  );
}
