import { useEffect, useState } from "react";
import { BUS_STAGES, TRAIN_STAGES, type JourneyStage, type TravelMode } from "./data";
import { VehicleGlyph } from "./vehicles";
import { cn } from "@/lib/utils";

const VIA: Record<JourneyStage["vehicle"], string> = {
  bus: "Bus",
  train: "Train",
  cng: "CNG",
  walk: "Walk",
};

export function Journey({ active }: { active: boolean }) {
  const [mode, setMode] = useState<TravelMode>("bus");
  const [index, setIndex] = useState(0);
  const [pos, setPos] = useState("8%");
  const stages = mode === "bus" ? BUS_STAGES : TRAIN_STAGES;
  const stage = stages[index % stages.length];

  useEffect(() => {
    if (!active) return;
    setIndex(0);
  }, [active, mode]);

  useEffect(() => {
    if (!active) return;
    const stageNow = stages[index % stages.length];
    const id = window.setTimeout(() => setIndex((i) => i + 1), stageNow.duration + 280);
    return () => window.clearTimeout(id);
  }, [active, index, stages]);

  useEffect(() => {
    if (!active) return;
    setPos("8%");
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setPos("78%"));
    });
    return () => cancelAnimationFrame(id);
  }, [active, index, mode]);

  return (
    <section className="px-5 pb-10 pt-2 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">From Dhaka</p>
      <h3 className="font-display mt-2 text-2xl text-maroon">Journey to the venue</h3>

      <div className="mt-5 flex justify-center gap-3">
        <ModeButton label="Bus" on={mode === "bus"} onClick={() => setMode("bus")} />
        <ModeButton label="Train" on={mode === "train"} onClick={() => setMode("train")} />
      </div>

      <div className="journey-stops mt-5">
        <p className="journey-stop">
          <span className="journey-stop-label">From</span>
          <span className="journey-stop-name">{stage.start}</span>
        </p>
        <p className="journey-stop journey-stop-via">
          <span className="journey-stop-label">Transportation</span>
          <span className="journey-stop-name journey-via">{VIA[stage.vehicle]}</span>
        </p>
        <p className="journey-stop journey-stop-to">
          <span className="journey-stop-label">To</span>
          <span className="journey-stop-name">{stage.end}</span>
        </p>
      </div>

      <div className="journey-track mt-4">
        <div
          className={cn(
            "journey-scroll",
            stage.track === "bus" && "is-bus",
            stage.track === "train" && "is-train",
            stage.track === "lane" && "is-lane",
          )}
        />
        <div
          className="journey-vehicle"
          style={{
            left: pos,
            transition: `left ${stage.duration}ms linear`,
          }}
        >
          <VehicleGlyph kind={stage.vehicle} />
        </div>
      </div>
    </section>
  );
}

function ModeButton({
  label,
  on,
  onClick,
}: {
  label: string;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-5 py-2 text-sm font-medium tracking-wide transition-transform duration-150 ease-out active:scale-[0.96]",
        on
          ? "border-maroon bg-maroon text-paper"
          : "border-gold/70 bg-paper text-ink hover:border-maroon",
      )}
    >
      {label}
    </button>
  );
}
