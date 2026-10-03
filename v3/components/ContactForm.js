'use client';

import { useState } from 'react';
import { ArrowRight, Check, LoaderCircle } from 'lucide-react';

const inputClass = 'mt-2 min-h-[48px] w-full rounded-xl border border-[#dedad1] bg-[#fbfaf7] px-4 text-[13px] text-ink outline-none transition placeholder:text-[#a1a198] focus:border-[#a8916c] focus:ring-2 focus:ring-[#c6b18e]/20';
const labelClass = 'block text-[10px] font-medium uppercase tracking-[0.14em] text-[#66675f]';

export default function ContactForm({ mode = 'consultation' }) {
  const isBrochure = mode === 'brochure';
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [formKey, setFormKey] = useState(0);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    setError('');
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.requestType = mode;
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Please review the form and try again.');
      setStatus('success');
      form.reset();
      setFormKey((key) => key + 1);
    } catch (submitError) {
      setError(submitError.message || 'We could not send your request. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-[1.4rem] border border-[#cfd7cc] bg-[#eef2ec] p-7 md:p-9">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#6f826e]"><Check size={19} strokeWidth={1.5} /></span>
        <h3 className="mt-5 font-serif text-[30px] leading-tight text-ink">{isBrochure ? 'Your request is with us.' : 'A considered first step.'}</h3>
        <p className="mt-3 text-[13px] leading-6 text-muted">Thank you. The demo endpoint accepted your request, but it does not store or forward form details. Connect this form to your customer-response system before launch.</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-6 text-[10px] uppercase tracking-[0.15em] text-ink underline decoration-[#b8aa91] underline-offset-4">Send another request</button>
      </div>
    );
  }

  return (
    <form key={formKey} onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      {!isBrochure && (
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>Name <span className="text-[#a87866]">*</span><input className={inputClass} name="name" autoComplete="name" required minLength={2} maxLength={90} placeholder="Your name" /></label>
          <label className={labelClass}>Phone <span className="text-[#a87866]">*</span><input className={inputClass} name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={24} placeholder="+91" /></label>
          <label className={labelClass}>Email <span className="text-[#a87866]">*</span><input className={inputClass} name="email" type="email" autoComplete="email" required maxLength={120} placeholder="you@example.com" /></label>
          <label className={labelClass}>City <span className="text-[#a87866]">*</span><input className={inputClass} name="city" autoComplete="address-level2" required maxLength={80} placeholder="Where is your home?" /></label>
          <label className={labelClass}>Property type <span className="text-[#a87866]">*</span>
            <select className={inputClass} name="propertyType" defaultValue="" required>
              <option value="" disabled>Select one</option><option>Villa</option><option>Duplex home</option><option>Apartment</option><option>New construction</option><option>Other</option>
            </select>
          </label>
          <label className={labelClass}>Number of floors <span className="text-[#a87866]">*</span>
            <select className={inputClass} name="floors" defaultValue="" required>
              <option value="" disabled>Select one</option><option>2 levels</option><option>3 levels</option><option>4+ levels</option><option>Not sure yet</option>
            </select>
          </label>
        </div>
      )}
      {isBrochure && <div className="grid gap-5 sm:grid-cols-2"><label className={labelClass}>Name <span className="text-[#a87866]">*</span><input className={inputClass} name="name" autoComplete="name" required minLength={2} maxLength={90} placeholder="Your name" /></label><label className={labelClass}>Email <span className="text-[#a87866]">*</span><input className={inputClass} name="email" type="email" autoComplete="email" required maxLength={120} placeholder="you@example.com" /></label></div>}
      <label className={labelClass}>{isBrochure ? 'What would you like to explore?' : 'A little about your home'}
        <textarea className={`${inputClass} min-h-[130px] resize-y py-3`} name="message" maxLength={1600} required={!isBrochure} placeholder={isBrochure ? 'Optional — tell us what you are researching.' : 'Share anything that would help us prepare for a useful conversation.'} />
      </label>
      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-[10px] leading-5 text-muted">By submitting, you agree that AUREL may use these details to respond to your enquiry. See our <a href="/privacy" className="underline decoration-[#c3b99f] underline-offset-2">privacy note</a>.</p>
        <button type="submit" disabled={status === 'sending'} className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-ink px-6 text-[10px] uppercase tracking-[0.14em] text-ivory transition hover:bg-[#454741] disabled:cursor-wait disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">
          {status === 'sending' ? <>Sending <LoaderCircle size={15} className="animate-spin motion-reduce:animate-none" /></> : <>{isBrochure ? 'Request brochure' : 'Send enquiry'} <ArrowRight size={15} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" /></>}
        </button>
      </div>
      {status === 'error' && <p role="alert" className="rounded-xl border border-[#e2c7be] bg-[#fbf0eb] px-4 py-3 text-[12px] leading-5 text-[#7e493a]">{error}</p>}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
      <p className="sr-only" aria-live="polite">{status === 'sending' ? 'Sending your request' : ''}</p>
    </form>
  );
}
