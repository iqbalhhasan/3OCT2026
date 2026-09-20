import type { JourneyStage } from "./data";

function BusIcon() {
  return (
    <svg width="42" height="28" viewBox="0 0 42 28" fill="currentColor" aria-hidden>
      <rect x="2" y="6" width="32" height="14" rx="3" />
      <rect x="5" y="9" width="8" height="6" rx="1" fill="var(--color-paper)" />
      <rect x="15" y="9" width="8" height="6" rx="1" fill="var(--color-paper)" />
      <rect x="25" y="9" width="6" height="6" rx="1" fill="var(--color-paper)" />
      <circle cx="10" cy="22" r="3.2" />
      <circle cx="28" cy="22" r="3.2" />
    </svg>
  );
}

function TrainIcon() {
  return (
    <svg width="46" height="28" viewBox="0 0 46 28" fill="currentColor" aria-hidden>
      <rect x="4" y="4" width="30" height="16" rx="4" />
      <rect x="8" y="8" width="8" height="6" rx="1" fill="var(--color-paper)" />
      <rect x="18" y="8" width="8" height="6" rx="1" fill="var(--color-paper)" />
      <path d="M34 12h6l4 8H34z" />
      <circle cx="12" cy="23" r="3" />
      <circle cx="26" cy="23" r="3" />
    </svg>
  );
}

function CngIcon() {
  return (
    <svg width="38" height="28" viewBox="0 0 38 28" fill="currentColor" aria-hidden>
      <path d="M6 16h18c3 0 6-3 6-6V8H16L8 16" />
      <rect x="4" y="16" width="24" height="5" rx="1.5" />
      <circle cx="11" cy="23" r="3" />
      <circle cx="25" cy="23" r="3" />
    </svg>
  );
}

function WalkIcon() {
  return (
    <svg width="22" height="32" viewBox="0 0 22 32" fill="currentColor" aria-hidden>
      <circle cx="11" cy="5" r="3.2" />
      <path d="M10 9l2 7-4 4 2 10h2l1-9 5 3 1-2-6-4 2-7z" />
    </svg>
  );
}

export function VehicleGlyph({ kind }: { kind: JourneyStage["vehicle"] }) {
  if (kind === "train") return <TrainIcon />;
  if (kind === "cng") return <CngIcon />;
  if (kind === "walk") return <WalkIcon />;
  return <BusIcon />;
}
