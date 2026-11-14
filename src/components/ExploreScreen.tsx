import {
  ArrowRight,
  BookOpen,
  Box,
  ChevronRight,
  Compass,
  Database,
  Orbit,
  PanelRight,
  Satellite,
  ScanLine,
} from "lucide-react";
import { motion } from "motion/react";
import { ARTIFACT_SLOTS, WORLD_COPY, type World, type Year } from "../missionData";
import { NavigationBar } from "./NavigationBar";
import { PageShell } from "./PageShell";
import { YearTimeline } from "./YearTimeline";

type ExploreScreenProps = {
  world: World;
  year: Year;
  artifact: number;
  onArtifact: (artifact: number) => void;
  onChooseYear: (year: Year) => void;
  onBack: () => void;
  onHome: () => void;
};

export function ExploreScreen({
  world,
  year,
  artifact,
  onArtifact,
  onChooseYear,
  onBack,
  onHome,
}: ExploreScreenProps) {
  return (
    <PageShell className={`explore-screen explore-screen--${world}`}>
      <NavigationBar
        title={`${WORLD_COPY[world].label} · ${year}`}
        onBack={onBack}
        action={
          <button className="home-link" onClick={onHome}>
            <Orbit size={17} /> Start over
          </button>
        }
      />

      <div className="compact-timeline-wrap">
        <div className="compact-timeline-label">
          <span>TIME HOP</span>
          <strong>{year}</strong>
        </div>
        <YearTimeline selected={year} onSelect={onChooseYear} variant="compact" />
      </div>

      <div className="explorer-layout">
        <aside className="artifact-panel glass-panel">
          <div className="panel-heading">
            <span className="panel-heading__icon">
              <Database size={19} />
            </span>
            <div>
              <small>{year} ARCHIVE</small>
              <h2>Artifact list</h2>
            </div>
          </div>
          <p className="panel-helper">Mission content will be added here by your team.</p>
          <div className="artifact-list">
            {ARTIFACT_SLOTS.map((slot) => (
              <motion.button
                key={slot}
                className={`artifact-button ${artifact === slot ? "artifact-button--active" : ""}`}
                onClick={() => onArtifact(slot)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="artifact-button__icon">
                  <Box size={20} />
                </span>
                <span>
                  <small>CONTENT SLOT {slot + 1}</small>
                  <strong>Artifact placeholder</strong>
                </span>
                <ChevronRight size={17} />
              </motion.button>
            ))}
          </div>
          <div className="data-note">
            <ScanLine size={17} />
            <span>Ready for your team’s NASA data</span>
          </div>
        </aside>

        <section className="planet-stage glass-panel" aria-label="Reserved 3D planet area">
          <div className="planet-stage__toolbar">
            <span>
              <Orbit size={17} /> 3D WORLD VIEW
            </span>
            <span className="status-pill">
              <i /> Component slot ready
            </span>
          </div>

          <div className={`planet-placeholder planet-placeholder--${world}`}>
            <div className="planet-placeholder__orbit orbit-one">
              <span />
            </div>
            <div className="planet-placeholder__orbit orbit-two">
              <span />
            </div>
            <motion.div
              className="planet-placeholder__sphere"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
            >
              <span className="surface-mark surface-mark--one" />
              <span className="surface-mark surface-mark--two" />
              <span className="surface-mark surface-mark--three" />
            </motion.div>
            <div className="planet-placeholder__copy">
              <Box size={28} />
              <strong>3D planet component</strong>
              <span>Reserved integration area</span>
            </div>
            <motion.span
              key={`highlight-${year}-${artifact}`}
              className={`artifact-highlight artifact-highlight--${artifact + 1}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              aria-label={`Selected artifact slot ${artifact + 1} map highlight placeholder`}
            >
              <ScanLine size={22} />
            </motion.span>
            <ArtifactInfoPanel year={year} artifact={artifact} />
          </div>

          <div className="planet-stage__footer">
            <span>
              <Compass size={16} /> Drag to explore
            </span>
            <span>
              Year {year} · Slot {artifact + 1}
            </span>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function ArtifactInfoPanel({ year, artifact }: { year: Year; artifact: number }) {
  return (
    <motion.aside
      key={`info-${year}-${artifact}`}
      className="info-panel info-panel--map glass-panel"
      initial={{ opacity: 0, x: 18, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
    >
      <div className="panel-heading">
        <span className="panel-heading__icon">
          <PanelRight size={19} />
        </span>
        <div>
          <small>SELECTED ARTIFACT</small>
          <h2>Mission details</h2>
        </div>
      </div>
      <div className="info-placeholder">
        <motion.div
          className="info-placeholder__illustration"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Satellite size={42} />
          <span className="scan-ring" />
        </motion.div>
        <span className="content-badge">CONTENT PENDING</span>
        <h3>Artifact slot {artifact + 1}</h3>
        <p>
          This space will show the artifact name, story, location, science discoveries, and source
          credits.
        </p>
        <div className="skeleton-lines" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>
      <button className="story-button" disabled>
        <BookOpen size={18} /> Open full story <ArrowRight size={17} />
      </button>
    </motion.aside>
  );
}
