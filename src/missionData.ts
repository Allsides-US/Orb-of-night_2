import {
  Orbit,
  Radio,
  Rocket,
  Satellite,
  Sparkles,
  Star,
  Telescope,
  type LucideIcon,
} from "lucide-react";

export type World = "moon" | "mars";
export type Screen = "home" | "timeline" | "explore";

export const YEARS = [1960, 1970, 1980, 1990, 2000, 2010, 2020] as const;
export type Year = (typeof YEARS)[number];

export const YEAR_ICONS: readonly LucideIcon[] = [
  Satellite,
  Radio,
  Rocket,
  Orbit,
  Telescope,
  Star,
  Sparkles,
];

export const ARTIFACT_SLOTS = [0, 1, 2, 3] as const;

export const WORLD_COPY = {
  moon: {
    label: "Moon",
    eyebrow: "Lunar archive",
    title: "Footprints, rovers & quiet machines",
    description:
      "Follow the hardware that helped people learn how to land, travel, and do science on another world.",
  },
  mars: {
    label: "Mars",
    eyebrow: "Martian archive",
    title: "Robots that changed a red world",
    description:
      "Trace the landers, rovers, and flying explorers that turned a distant planet into a place we can understand.",
  },
} as const;
