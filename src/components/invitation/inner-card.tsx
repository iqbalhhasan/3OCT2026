import { CalendarPlus, MapPin } from "lucide-react";
import { Countdown } from "./countdown";
import { WEDDING } from "./data";
import { Journey } from "./journey";
import { LetterFrame } from "./letter-arch";

const ICS = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Iqbal and Iqra//Reception//EN
BEGIN:VEVENT
DTSTART;VALUE=DATE:20261003
DTEND;VALUE=DATE:20261004
SUMMARY:Reception of Iqbal & Iqra
LOCATION:Master Bari, Jamalpur-Madarganj Road, Hazrabari, Melandaha, Jamalpur
DESCRIPTION:Reception of Md. Iqbal Hasan and Sabiqunnahar Iqra
END:VEVENT
END:VCALENDAR`;

function addToCalendar() {
  const blob = new Blob([ICS], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "iqbal-iqra-reception.ics";
  a.click();
  URL.revokeObjectURL(url);
}

function Ornament() {
  return (
    <div className="ornament-line my-6" aria-hidden>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M9 2c.3 1.4 1 2.5 1.9 3.3C10 5.6 9.3 6 9 6.8 8.7 6 8 5.6 7.1 5.3 8 4.5 8.7 3.4 9 2Z" />
        <path d="M9 7.2c1.8-1.1 4-.9 5.4.6-1.5 1.2-3.5 1.5-5.4.7-1.9.8-3.9.5-5.4-.7C5 6.3 7.2 6.1 9 7.2Z" />
        <circle cx="9" cy="7.1" r="1" />
      </svg>
    </div>
  );
}

export function InnerCard({ open }: { open: boolean }) {
  const { groom, bride } = WEDDING;

  return (
    <article className="relative min-h-full overflow-hidden bg-paper pb-0">
      <section className="frame-hero">
        <LetterFrame />
        <div className="frame-copy">
          <p className="text-[0.62rem] font-medium uppercase leading-5 tracking-[0.18em] text-[#8a7e74]">
            The Reception programme of-
          </p>
          <p className="font-script mt-3 text-[2.85rem] leading-none text-[#5c4f46]">
            {groom.short}
          </p>
          <p className="font-script my-0 text-[2.35rem] leading-none text-[#8b6a78]">&</p>
          <p className="font-script text-[2.85rem] leading-none text-[#5c4f46]">
            {bride.short}
          </p>
          <p className="mt-4 text-[0.78rem] font-medium uppercase tracking-[0.28em] text-[#8a7e74]">
            03 October 2026
          </p>
        </div>
      </section>

      <div className="relative px-5 pt-10 text-center">
        <div className="mx-auto max-w-sm">
          <p className="font-arabic text-[1.4rem] leading-relaxed text-maroon" lang="ar" dir="rtl">
            {WEDDING.bismillah}
          </p>
          <p className="mt-1.5 text-[0.68rem] tracking-[0.14em] text-muted">
            {WEDDING.bismillahEn}
          </p>
          <p className="mt-5 text-pretty font-display text-base italic leading-relaxed text-ink/80">
            {WEDDING.intro}{" "}
            <span className="not-italic text-[1.05rem] font-medium uppercase tracking-[0.22em] text-gold">
              Reception of
            </span>
          </p>
        </div>

        <Ornament />

        <div className="grid grid-cols-1 gap-8">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">{groom.role}</p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-balance text-maroon">
              {groom.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">Son of</p>
            <p className="mt-1 text-sm leading-relaxed text-ink">
              {groom.father}
              <span className="block text-muted">& {groom.mother}</span>
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">{bride.role}</p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-balance text-maroon">
              {bride.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">Daughter of</p>
            <p className="mt-1 text-sm leading-relaxed text-ink">
              {bride.father}
              <span className="block text-muted">& {bride.mother}</span>
            </p>
          </div>
        </div>

        <Ornament />

        <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">{WEDDING.weekday}</p>
        <p className="font-display mt-2 text-3xl font-semibold text-maroon">{WEDDING.dateLabel}</p>

        <div className="mt-6">
          <Countdown />
        </div>

        <button
          type="button"
          onClick={addToCalendar}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/70 bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-150 ease-out active:scale-[0.96]"
        >
          <CalendarPlus className="size-4 text-maroon" strokeWidth={1.75} />
          Add to calendar
        </button>

        <Ornament />

        <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">Place</p>
        <h3 className="font-display mt-2 text-2xl font-semibold text-maroon">{WEDDING.venueName}</h3>
        <p className="mx-auto mt-2 max-w-xs text-pretty text-sm leading-relaxed text-muted">
          {WEDDING.venueDetail}
        </p>

        <div className="mt-5 overflow-hidden rounded-lg border-2 border-gold/60 shadow-sm">
          <video
            className="block h-52 w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            poster="/invitation/venue.jpg"
          >
            <source src="/invitation/venue.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="mt-4 overflow-hidden rounded-lg border-2 border-gold/60">
          <iframe
            title="Map of Master Bari, Jamalpur"
            src={WEDDING.mapsEmbed}
            className="block h-48 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          href={WEDDING.mapsLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2.5 text-sm font-medium text-paper transition-transform duration-150 ease-out active:scale-[0.96]"
        >
          <MapPin className="size-4" strokeWidth={1.75} />
          View on Google Maps
        </a>

        <p className="mx-auto mt-10 max-w-sm text-pretty font-display text-base italic leading-relaxed text-muted">
          {WEDDING.closing}
        </p>
      </div>

      <Journey active={open} />

      <div className="letter-end">
        <p className="font-script text-3xl text-maroon">
          {groom.short} & {bride.short}
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.28em] text-gold">03 · 10 · 2026</p>
        <img
          src="/invitation/art/foot-spray.webp"
          alt=""
          draggable={false}
          className="foot-blossom"
        />
      </div>
    </article>
  );
}
