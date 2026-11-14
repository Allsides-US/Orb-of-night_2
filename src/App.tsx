import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { AboutDialog } from "./components/AboutDialog";
import { ExploreScreen } from "./components/ExploreScreen";
import { HomeScreen } from "./components/HomeScreen";
import { StarField } from "./components/StarField";
import { TimelineScreen } from "./components/TimelineScreen";
import type { Screen, World, Year } from "./missionData";

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [world, setWorld] = useState<World>("moon");
  const [year, setYear] = useState<Year>(1960);
  const [artifact, setArtifact] = useState(0);
  const [aboutOpen, setAboutOpen] = useState(false);

  const chooseWorld = (nextWorld: World) => {
    setWorld(nextWorld);
    setYear(1960);
    setArtifact(0);
    setScreen("timeline");
  };

  const chooseYear = (nextYear: Year) => {
    setYear(nextYear);
    setArtifact(0);
    setScreen("explore");
  };

  return (
    <main className={`app app--${world}`}>
      <StarField />
      <AnimatePresence mode="wait">
        {screen === "home" ? (
          <HomeScreen key="home" onChooseWorld={chooseWorld} onAbout={() => setAboutOpen(true)} />
        ) : null}
        {screen === "timeline" ? (
          <TimelineScreen
            key={`timeline-${world}`}
            world={world}
            onBack={() => setScreen("home")}
            onChooseYear={chooseYear}
            onAbout={() => setAboutOpen(true)}
          />
        ) : null}
        {screen === "explore" ? (
          <ExploreScreen
            key={`explore-${world}`}
            world={world}
            year={year}
            artifact={artifact}
            onArtifact={setArtifact}
            onChooseYear={chooseYear}
            onBack={() => setScreen("timeline")}
            onHome={() => setScreen("home")}
          />
        ) : null}
      </AnimatePresence>
      <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </main>
  );
}

export default App;
