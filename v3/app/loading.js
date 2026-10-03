export default function Loading() {
  return <div role="status" className="flex min-h-[50vh] items-center justify-center bg-ivory"><div className="text-center"><span className="mx-auto block h-8 w-8 animate-spin motion-reduce:animate-none rounded-full border border-[#d6d2c8] border-t-[#967e58]" /><span className="mt-4 block text-[9px] uppercase tracking-[0.18em] text-muted">AUREL · One moment</span></div></div>;
}
