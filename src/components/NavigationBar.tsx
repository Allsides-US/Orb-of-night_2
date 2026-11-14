import type { ReactNode } from "react";
import { ArrowLeft, Orbit } from "lucide-react";

type NavigationBarProps = {
  title: string;
  onBack: () => void;
  action?: ReactNode;
};

export function NavigationBar({ title, onBack, action }: NavigationBarProps) {
  return (
    <header className="navigation-bar">
      <button className="back-button" onClick={onBack}><ArrowLeft size={18} /> Back</button>
      <div className="navigation-bar__title"><Orbit size={18} /><span>{title}</span></div>
      <div className="navigation-bar__action">{action}</div>
    </header>
  );
}
