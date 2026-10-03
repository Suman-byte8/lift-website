"use client";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// framer-motion's hook is false on the server but may be true on the client's first render,
// which breaks hydration. Only honour the preference after mount.
export default function useSafeReducedMotion() {
  const prefersReduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && Boolean(prefersReduce);
}
