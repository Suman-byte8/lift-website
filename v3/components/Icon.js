import {
  Accessibility, ArrowDownToLine, BatteryCharging, BellRing, ChevronRight, Cog, Gauge, Hand, House, Leaf, MoveDown,
  PanelsTopLeft, Ruler, ScanLine, ShieldCheck, Sparkles, VolumeX, Waves, Zap, MoveUpRight, MoveRight,
  Sun, Wind, Settings2, CircleCheck, Heart, ClipboardCheck, DoorOpen, Wrench, Lightbulb, Layers3, Check
} from 'lucide-react';

const icons = {
  Accessibility, ArrowDownToLine, BatteryCharging, BellRing, ChevronRight, Cog, Gauge, Hand, House, Leaf, MoveDown,
  PanelsTopLeft, Ruler, ScanLine, ShieldCheck, Sparkles, VolumeX, Waves, Zap, MoveUpRight, MoveRight,
  Sun, Wind, Settings2, CircleCheck, Heart, ClipboardCheck, DoorOpen, Wrench, Lightbulb, Layers3, Check
};

export default function Icon({ name, ...props }) {
  const Component = icons[name] || Sparkles;
  return <Component aria-hidden="true" {...props} />;
}
