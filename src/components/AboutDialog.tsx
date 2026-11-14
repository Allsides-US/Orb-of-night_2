import { useEffect, useRef } from "react";
import { BookOpen, Moon, Orbit, Rocket, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type AboutDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function AboutDialog({ open, onClose }: AboutDialogProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="dialog-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.section
            className="about-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-title"
            initial={{ opacity: 0, scale: 0.9, y: 22 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              className="dialog-close"
              onClick={onClose}
              aria-label="Close about dialog"
            >
              <X size={20} />
            </button>
            <div className="about-dialog__planet">
              <Orbit size={38} />
            </div>
            <p className="kicker">
              <Sparkles size={15} /> About the mission
            </p>
            <h2 id="about-title">Every quiet machine has a story.</h2>
            <p>
              This learning experience introduces young explorers to the hardware left on the Moon
              and Mars—and the science those machines made possible.
            </p>
            <div className="about-dialog__cards">
              <div>
                <Moon size={22} />
                <strong>Explore worlds</strong>
                <span>Choose the Moon or Mars.</span>
              </div>
              <div>
                <Rocket size={22} />
                <strong>Travel through time</strong>
                <span>Open an archive by decade.</span>
              </div>
              <div>
                <BookOpen size={22} />
                <strong>Discover stories</strong>
                <span>Meet real mission artifacts.</span>
              </div>
            </div>
            <p className="about-dialog__note">
              2026 NASA Space Apps Challenge UI prototype · Team content and scientific sources will
              be added during integration.
            </p>
          </motion.section>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
