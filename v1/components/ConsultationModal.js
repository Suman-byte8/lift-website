"use client";
import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  city: "",
  propertyType: "Private Villa",
  floors: "3 Floors (G + 2)",
  notes: "",
};

const inputCls =
  "w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-champagne-600";
const labelCls = "text-[11px] uppercase tracking-wider text-stone-600 font-medium block mb-1";

export default function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const set = (key) => (e) => setFormData({ ...formData, [key]: e.target.value });

  const close = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consult-title"
    >
      <div className="bg-white rounded-3xl max-w-xl w-full p-8 md:p-10 shadow-2xl border border-champagne-300 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-6 right-6 p-2 rounded-full text-stone-400 hover:text-mineral hover:bg-stone-100 transition"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check size={32} />
            </div>
            <h3 id="consult-title" className="font-serif text-3xl text-mineral font-normal">
              Consultation Request Received
            </h3>
            <p className="text-stone-600 text-sm max-w-md mx-auto">
              Thank you, <strong>{formData.name}</strong>. An Aurelia Senior Vertical Architect will contact you within 24
              hours with feasibility drawings and custom finishing catalogues.
            </p>
            <button
              onClick={close}
              className="bg-mineral text-white px-8 py-3 rounded-full text-xs uppercase tracking-widest font-medium"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <span className="text-[10px] uppercase tracking-widest text-champagne-700 font-semibold block mb-1">
              Private Architectural Advisory
            </span>
            <h3 id="consult-title" className="font-serif text-2xl sm:text-3xl font-light text-mineral mb-2">
              Request Home Feasibility Assessment
            </h3>
            <p className="text-stone-500 text-xs mb-6">
              Complimentary on-site or digital BIM study for architects, interior designers, and estate homeowners.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4 text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Your Full Name</label>
                  <input required type="text" placeholder="Lady / Lord / Mr / Ms..." value={formData.name} onChange={set("name")} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Email Address</label>
                  <input required type="email" placeholder="client@estate.com" value={formData.email} onChange={set("email")} className={inputCls} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Direct Telephone</label>
                  <input required type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={set("phone")} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Estate Location / City</label>
                  <input required type="text" placeholder="Beverly Hills, London, Zurich..." value={formData.city} onChange={set("city")} className={inputCls} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Residence Type</label>
                  <select value={formData.propertyType} onChange={set("propertyType")} className={`${inputCls} bg-white`}>
                    <option>Private Villa</option>
                    <option>Penthouse / Duplex</option>
                    <option>Heritage / Listed Estate</option>
                    <option>Architectural New Build</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Number of Stops</label>
                  <select value={formData.floors} onChange={set("floors")} className={`${inputCls} bg-white`}>
                    <option>2 Floors (G + 1)</option>
                    <option>3 Floors (G + 2)</option>
                    <option>4 Floors (G + 3)</option>
                    <option>5+ Floors</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelCls}>Special Architectural Notes / Dimensions</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Center of spiral staircase, desire champagne titanium frames..."
                  value={formData.notes}
                  onChange={set("notes")}
                  className={inputCls}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-mineral hover:bg-black text-alabaster py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition shadow-lg mt-2"
              >
                Submit Advisory Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
