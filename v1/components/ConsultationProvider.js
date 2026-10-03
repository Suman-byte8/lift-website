"use client";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import ConsultationModal from "@/components/ConsultationModal";

const ConsultationContext = createContext({ open: () => {} });

export function useConsultation() {
  return useContext(ConsultationContext);
}

export default function ConsultationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const value = useMemo(() => ({ open }), [open]);

  return (
    <ConsultationContext.Provider value={value}>
      {children}
      <ConsultationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ConsultationContext.Provider>
  );
}
