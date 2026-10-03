// Shared validation used by both the client forms and the /api/enquiry route.
export function validateEnquiry(d, { requireCity = true } = {}) {
  const e = {};
  if (!d.name || d.name.trim().length < 2) e.name = "Please enter your name.";
  if (!d.phone || !/^[+\d][\d\s-]{7,16}$/.test(d.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!d.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) e.email = "Please enter a valid email address.";
  if (requireCity && (!d.city || d.city.trim().length < 2)) e.city = "Please enter your city.";
  if (d.consent !== "on" && d.consent !== true) e.consent = "Please accept so we can contact you.";
  return e;
}
