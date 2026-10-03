"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import Field from "./Field";
import Button from "@/components/ui/Button";
import { validateEnquiry } from "./validate";
import { ease } from "@/lib/motion";

const propertyTypes = ["Villa / independent house", "Duplex house", "Duplex apartment", "Penthouse", "Multi-level residence", "New construction", "Other"];
const floors = ["2 floors", "3 floors", "4 floors", "5 floors", "6+ floors", "Not sure yet"];

export default function ContactForm({ type = "consultation", heading = "Book a consultation", submitLabel = "Request consultation", compact }) {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.company) return; // honeypot
    const errs = validateEnquiry(data, { requireCity: !compact });
    setErrors(errs);
    if (Object.keys(errs).length) {
      form.querySelector(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, type }) });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative rounded-[30px] border border-white/80 bg-white/55 p-6 shadow-lift backdrop-blur-xl sm:p-10">
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div key="done" role="status" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }} className="py-14 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-sage-500" strokeWidth={1} aria-hidden="true" />
            <h2 className="mt-6 font-serif text-4xl text-ink">Thank you.</h2>
            <p className="mx-auto mt-3 max-w-sm text-[15px] text-ink-500">A Velora specialist will be in touch within one working day.</p>
            <button onClick={() => setStatus("idle")} className="mt-8 text-[13px] font-semibold text-champagne-600 underline-offset-4 hover:underline">Send another enquiry</button>
          </motion.div>
        ) : (
          <motion.form key="form" noValidate onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-label={heading}>
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">{heading}</h2>
            <p className="mt-2 text-[14px] text-ink-500">Fields marked <span className="text-champagne-600">*</span> are required.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required autoComplete="name" error={errors.name} />
              <Field label="Phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" error={errors.phone} />
              <Field label="Email" name="email" type="email" required autoComplete="email" error={errors.email} />
              {!compact && <Field label="City" name="city" required autoComplete="address-level2" error={errors.city} />}
              {compact && <Field label="City" name="city" autoComplete="address-level2" />}
              {!compact && (
                <>
                  <Field as="select" label="Property type" name="propertyType" options={propertyTypes} />
                  <Field as="select" label="Number of floors" name="floors" options={floors} />
                  <Field as="textarea" label="Message" name="message" className="sm:col-span-2" placeholder="Tell us about your home, timeline and any design preferences." />
                </>
              )}
              {/* honeypot */}
              <div className="hidden" aria-hidden="true"><label>Company<input name="company" tabIndex={-1} autoComplete="off" /></label></div>
              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 text-[13px] leading-relaxed text-ink-500">
                  <input type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-ink/20 accent-champagne-600 focus-visible:ring-2 focus-visible:ring-champagne-500" aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "consent-err" : undefined} />
                  <span>I agree to be contacted about my enquiry. See our <a href="/privacy" className="text-champagne-600 underline underline-offset-2">privacy policy</a>.</span>
                </label>
                {errors.consent && <p id="consent-err" className="mt-1.5 text-[12px] text-red-600">{errors.consent}</p>}
              </div>
            </div>
            {status === "error" && <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-[13px] text-red-700">Something went wrong. Please try again or call us directly.</p>}
            <div className="mt-8">
              <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
                {status === "sending" ? <span className="flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />Sending…</span> : submitLabel}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
