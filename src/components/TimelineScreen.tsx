import { ChevronRight, Flag, Info, Satellite, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { WORLD_COPY, type World, type Year } from "../missionData";
import { NavigationBar } from "./NavigationBar";
import { PageShell } from "./PageShell";
import { YearTimeline } from "./YearTimeline";

type TimelineScreenProps = {
  world: World;
  onBack: () => void;
  onChooseYear: (year: Year) => void;
  onAbout: () => void;
};

export function TimelineScreen({ world, onBack, onChooseYear, onAbout }: TimelineScreenProps) {
  const copy = WORLD_COPY[world];

  return (
    <PageShell className={`timeline-screen timeline-screen--${world}`}>
      <NavigationBar
        title={`${copy.label} archive`}
        onBack={onBack}
        action={
          <button className="icon-button" onClick={onAbout} aria-label="About this project">
            <Info size={19} />
          </button>
        }
      />

      <div className="world-landscape" aria-hidden="true">
        <div className="world-landscape__planet" />
        <motion.div
          className="floating-probe"
          animate={{ x: [0, 18, 0], y: [0, -10, 0], rotate: [-8, 3, -8] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <Satellite size={42} />
        </motion.div>
      </div>

      <div className="timeline-heading">
        <p className="kicker">
          <Flag size={16} /> {copy.eyebrow}
        </p>
        <h2>{copy.title}</h2>
        <p>{copy.description}</p>
      </div>

      <div className="timeline-card">
        <div className="timeline-card__top">
          <div>
            <small>MISSION TIME MACHINE</small>
            <h3>Choose a decade</h3>
          </div>
          <span className="timeline-tip">
            <Sparkles size={15} /> Every dot hides a story
          </span>
        </div>
        <YearTimeline selected={null} onSelect={onChooseYear} variant="large" />
      </div>

      <p className="timeline-instruction">
        Tap a year to open its artifact archive <ChevronRight size={16} />
      </p>
    </PageShell>
  );
}
