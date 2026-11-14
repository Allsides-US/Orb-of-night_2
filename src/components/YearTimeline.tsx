import { motion } from "motion/react";
import { YEARS, YEAR_ICONS, type Year } from "../missionData";

type YearTimelineProps = {
  selected: number | null;
  onSelect: (year: Year) => void;
  variant: "large" | "compact";
};

export function YearTimeline({ selected, onSelect, variant }: YearTimelineProps) {
  return (
    <nav className={`year-timeline year-timeline--${variant}`} aria-label="Mission timeline">
      <div className="year-timeline__line" aria-hidden="true" />
      {YEARS.map((item, index) => {
        const Icon = YEAR_ICONS[index];
        const active = selected === item;

        return (
          <motion.button
            key={item}
            className={`year-node ${active ? "year-node--active" : ""}`}
            onClick={() => onSelect(item)}
            whileHover={{ y: variant === "large" ? -7 : -3, scale: 1.04 }}
            whileTap={{ scale: 0.93 }}
            aria-current={active ? "step" : undefined}
          >
            <span className="year-node__icon"><Icon size={variant === "large" ? 25 : 18} /></span>
            <strong>{item}</strong>
          </motion.button>
        );
      })}
    </nav>
  );
}
