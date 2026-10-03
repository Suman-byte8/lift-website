import { NextResponse } from "next/server";
import { validateEnquiry } from "@/components/forms/validate";

/**
 * Receives consultation / brochure enquiries.
 * Wire this to your CRM, email service or Google Sheet (e.g. via webhook) before launch —
 * set ENQUIRY_WEBHOOK_URL and the payload is forwarded as JSON.
 */
export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  if (data.company) return NextResponse.json({ ok: true }); // honeypot
  const errors = validateEnquiry(data, { requireCity: data.type === "consultation" });
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  const payload = {
    type: data.type || "consultation",
    name: data.name, phone: data.phone, email: data.email, city: data.city || "",
    propertyType: data.propertyType || "", floors: data.floors || "", message: data.message || "",
    receivedAt: new Date().toISOString(),
  };

  if (process.env.ENQUIRY_WEBHOOK_URL) {
    try {
      await fetch(process.env.ENQUIRY_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    } catch {
      return NextResponse.json({ ok: false, error: "Upstream unavailable" }, { status: 502 });
    }
  }
  return NextResponse.json({ ok: true });
}
