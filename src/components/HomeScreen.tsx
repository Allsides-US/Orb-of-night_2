import { ArrowRight, CircleHelp, Moon, Orbit } from "lucide-react";
import { motion } from "motion/react";
import type { World } from "../missionData";
import { PageShell } from "./PageShell";

type HomeScreenProps = {
  onChooseWorld: (world: World) => void;
  onAbout: () => void;
};

export function HomeScreen({ onChooseWorld, onAbout }: HomeScreenProps) {
  return (
    <PageShell className="home-screen">
      <header className="home-topbar">
        <div className="mini-brand" aria-label="Team logo placeholder">
          <span className="mini-brand__mark"><Orbit size={25} /></span>
        </div>
        <motion.button className="about-button" onClick={onAbout} whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
          <CircleHelp size={18} />
          About
        </motion.button>
      </header>

      <div className="home-copy">
        <h1>ORB Of Night</h1>
      </div>

      <div className="world-choices">
        <WorldChoice world="moon" onClick={() => onChooseWorld("moon")} />
        <WorldChoice world="mars" onClick={() => onChooseWorld("mars")} />
      </div>
    </PageShell>
  );
}

function WorldChoice({ world, onClick }: { world: World; onClick: () => void }) {
  const isMoon = world === "moon";

  return (
    <motion.button
      className={`world-choice world-choice--${world}`}
      onClick={onClick}
      whileHover={{ y: -8, rotate: isMoon ? -1 : 1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 330, damping: 22 }}
    >
      <span className="world-choice__planet" aria-hidden="true">
        {isMoon ? <Moon size={64} strokeWidth={1.5} /> : <span className="mars-glyph"><span /><span /><span /></span>}
      </span>
      <span className="world-choice__copy">
        <small>{isMoon ? "Crater trail" : "Red planet trail"}</small>
        <strong>Explore {isMoon ? "Moon" : "Mars"}</strong>
      </span>
      <span className="world-choice__arrow"><ArrowRight size={21} /></span>
    </motion.button>
  );
}
