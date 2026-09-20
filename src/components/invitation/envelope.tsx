import { Music, Music2 } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMusicBox } from "@/hooks/use-music-box";
import { cn } from "@/lib/utils";
import { InnerCard } from "./inner-card";
import { Petals } from "./petals";

type Phase = "closed" | "opening" | "open";

export function Envelope() {
  const [phase, setPhase] = useState<Phase>("closed");
  const [videoOk, setVideoOk] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { playing, start, toggle } = useMusicBox();

  const open = useCallback(() => {
    if (phase !== "closed") return;
    void start();
    setPhase("opening");
    videoRef.current?.pause();
    window.setTimeout(() => setPhase("open"), 1450);
  }, [phase, start]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => setVideoOk(false));
  }, []);

  const opened = phase === "open";
  const opening = phase !== "closed";

  return (
    <div className="relative min-h-dvh bg-paper">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        <img
          src="/invitation/cover.jpg"
          alt=""
          className="h-full w-full scale-110 object-cover opacity-35 blur-2xl"
        />
        <div className="absolute inset-0 bg-paper/50" />
      </div>

      <div
        className={cn(
          "invite-stage",
          phase === "opening" && "is-opening",
          phase === "open" && "is-open",
        )}
      >
        {opening ? (
          <div className="pointer-events-none sticky top-0 z-50 flex h-0 justify-end overflow-visible">
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? "Mute music" : "Play music"}
              className="pointer-events-auto mt-3 mr-3 flex size-12 items-center justify-center rounded-full border-2 border-gold bg-maroon text-paper shadow-md transition-transform duration-150 ease-out active:scale-[0.96]"
            >
              {playing ? (
                <Music2 className="size-5" strokeWidth={1.75} />
              ) : (
                <Music className="size-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        ) : null}

        <InnerCard open={opened} />

        <div className="gatefold" aria-hidden>
          <div className="gate gate-left">
            <img src="/invitation/cover.jpg" alt="" />
          </div>
          <div className="gate gate-right">
            <img src="/invitation/cover.jpg" alt="" />
          </div>
        </div>

        {videoOk ? (
          <video
            ref={videoRef}
            className="cover-live"
            autoPlay
            muted
            loop
            playsInline
            poster="/invitation/cover.jpg"
            onError={() => setVideoOk(false)}
          >
            <source src="/invitation/cover.mp4" type="video/mp4" />
          </video>
        ) : (
          <img src="/invitation/cover.jpg" alt="" className="cover-live" />
        )}

        {phase !== "open" ? <Petals burst={opening} /> : null}

        {phase === "closed" ? (
          <button
            type="button"
            className="tap-layer"
            onClick={open}
            aria-label="Open the invitation"
          />
        ) : null}

        <div className="hint">
          <span className="hint-label">Touch to open</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
