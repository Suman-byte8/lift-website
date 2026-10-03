import {
  Accessibility, House, Maximize2, VolumeX, Leaf, Gem, Cpu, Waves, BatteryCharging, ShieldCheck,
  SlidersHorizontal, ArrowDownToLine, ScanEye, BellRing, Hand, Gauge, Wrench, Lock, MessageCircle,
  Ruler, Hammer, HeartHandshake, Sparkles, Compass, Award,
} from "lucide-react";

const map = {
  Accessibility, House, Maximize2, VolumeX, Leaf, Gem, Cpu, Waves, BatteryCharging, ShieldCheck,
  SlidersHorizontal, ArrowDownToLine, ScanEye, BellRing, Hand, Gauge, Wrench, Lock, MessageCircle,
  Ruler, Hammer, HeartHandshake, Sparkles, Compass, Award,
};

/** Renders a lucide icon by name (names are stored in data files). */
export default function Icon({ name, className = "h-5 w-5", strokeWidth = 1.25 }) {
  const Cmp = map[name] || Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
