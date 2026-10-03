"use client";
import { useConsultation } from "@/components/ConsultationProvider";

// Lets server components open the consultation modal.
export default function ConsultButton({ children, className = "", ...rest }) {
  const { open } = useConsultation();
  return (
    <button type="button" onClick={open} className={className} {...rest}>
      {children}
    </button>
  );
}
