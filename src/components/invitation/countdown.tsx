import { useEffect, useState } from "react";
import { WEDDING } from "./data";

type Remain = { days: number; hours: number; minutes: number; seconds: number; past: boolean };

function compute(): Remain {
  const target = new Date(WEDDING.dateIso).getTime();
  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true };
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { days, hours, minutes, seconds, past: false };
}

function Cell({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-14 flex-col items-center">
      <span className="font-display text-2xl font-semibold tabular-nums text-maroon">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-xs font-medium uppercase tracking-widest text-muted">{label}</span>
    </div>
  );
}

export function Countdown() {
  const [remain, setRemain] = useState<Remain | null>(null);

  useEffect(() => {
    setRemain(compute());
    const id = window.setInterval(() => setRemain(compute()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!remain) {
    return <div className="h-14" aria-hidden />;
  }

  if (remain.past) {
    return (
      <p className="font-display text-lg italic text-maroon">With love, from our reception day.</p>
    );
  }

  return (
    <div className="mx-auto flex max-w-xs items-center justify-between gap-1">
      <Cell value={remain.days} label="Days" />
      <span className="mb-4 text-gold">·</span>
      <Cell value={remain.hours} label="Hrs" />
      <span className="mb-4 text-gold">·</span>
      <Cell value={remain.minutes} label="Min" />
      <span className="mb-4 text-gold">·</span>
      <Cell value={remain.seconds} label="Sec" />
    </div>
  );
}
