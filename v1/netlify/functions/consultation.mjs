// Netlify Function: POST /api/consultation
// Validates the consultation form and optionally forwards it to ENQUIRY_WEBHOOK_URL.

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

const str = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export default async (req) => {
  if (req.method !== "POST") return json({ ok: false, message: "Method not allowed" }, 405);

  let data;
  try {
    data = await req.json();
  } catch {
    return json({ ok: false, message: "Invalid request." }, 400);
  }

  if (data.company) return json({ ok: true }); // honeypot

  const payload = {
    name: str(data.name, 90),
    email: str(data.email, 120),
    phone: str(data.phone, 24),
    city: str(data.city, 80),
    propertyType: str(data.propertyType, 60),
    floors: str(data.floors, 40),
    notes: str(data.notes, 1600),
    receivedAt: new Date().toISOString(),
  };

  if (payload.name.length < 2) return json({ ok: false, message: "Please enter your name." }, 422);
  if (!emailPattern.test(payload.email)) return json({ ok: false, message: "Please enter a valid email." }, 422);
  if (payload.phone.length < 7) return json({ ok: false, message: "Please enter a valid phone number." }, 422);
  if (payload.city.length < 2) return json({ ok: false, message: "Please enter your city." }, 422);

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("Consultation webhook failed", err);
      return json({ ok: false, message: "We could not send your request. Please try again." }, 502);
    }
  } else {
    console.info("Consultation received (no ENQUIRY_WEBHOOK_URL set)", { at: payload.receivedAt });
  }

  return json({ ok: true });
};

export const config = { path: "/api/consultation" };
