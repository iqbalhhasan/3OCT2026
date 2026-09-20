import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as CalendarPlus, i as MapPin, n as Music, r as Music2 } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DuD4aii8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SRC = "/invitation/wedding-music.mp3";
function useMusicBox() {
	const audioRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const audio = new Audio(SRC);
		audio.loop = true;
		audio.preload = "auto";
		audio.volume = .62;
		audioRef.current = audio;
		const onPlay = () => setPlaying(true);
		const onPause = () => setPlaying(false);
		audio.addEventListener("play", onPlay);
		audio.addEventListener("pause", onPause);
		return () => {
			audio.removeEventListener("play", onPlay);
			audio.removeEventListener("pause", onPause);
			audio.pause();
			audio.src = "";
			audioRef.current = null;
		};
	}, []);
	return {
		playing,
		start: (0, import_react.useCallback)(async () => {
			const audio = audioRef.current;
			if (!audio) return;
			try {
				await audio.play();
			} catch {
				setPlaying(false);
			}
		}, []),
		stop: (0, import_react.useCallback)(() => {
			const audio = audioRef.current;
			if (!audio) return;
			audio.pause();
		}, []),
		toggle: (0, import_react.useCallback)(() => {
			const audio = audioRef.current;
			if (!audio) return;
			if (!audio.paused) audio.pause();
			else audio.play().catch(() => setPlaying(false));
		}, [])
	};
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var WEDDING = {
	title: "Reception · Iqbal & Iqra",
	bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
	bismillahEn: "In the name of Allah, the Most Gracious, the Most Merciful",
	intro: "With the blessings of Allah and with the love and support of our family and friends, we are delighted to invite you to the",
	event: "Reception",
	dateLabel: "03 October 2026",
	dateIso: "2026-10-03T18:00:00+06:00",
	weekday: "Saturday",
	venueName: "Master Bari",
	venueDetail: "Jamalpur–Madarganj Road, Hazrabari, Melandaha, Jamalpur",
	mapsEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=89.8217591%2C24.915894%2C89.8417591%2C24.935894&layer=mapnik&marker=24.925894%2C89.8317591",
	mapsLink: "https://maps.app.goo.gl/yLPo93WR119bvSK56",
	closing: "Your presence will make this joyous occasion even more special. We look forward to celebrating with you.",
	groom: {
		role: "Groom",
		name: "Md. Iqbal Hasan",
		short: "Iqbal",
		father: "Md. Kamrul Hasan",
		mother: "Zibanara Begum"
	},
	bride: {
		role: "Bride",
		name: "Sabiqunnahar Iqra",
		short: "Iqra",
		father: "Mahbubur Rahman Iqbal",
		mother: "Khaleda Parvin"
	}
};
var BUS_STAGES = [
	{
		vehicle: "bus",
		track: "bus",
		start: "Mohakhali Bus Stand",
		end: "Jamalpur Bus Stand",
		duration: 3500
	},
	{
		vehicle: "cng",
		track: "lane",
		start: "Jamalpur Bus Stand",
		end: "Pach Rastar Mor",
		duration: 2500
	},
	{
		vehicle: "walk",
		track: "lane",
		start: "Pach Rastar Mor",
		end: "Hazrabari CNG Stand",
		duration: 2e3
	},
	{
		vehicle: "cng",
		track: "lane",
		start: "Hazrabari CNG Stand",
		end: "Hazrabari (Gazi Master er Bari)",
		duration: 2500
	}
];
var TRAIN_STAGES = [
	{
		vehicle: "train",
		track: "train",
		start: "Kamalapur Rail Station",
		end: "Jamalpur Railway Station",
		duration: 4500
	},
	{
		vehicle: "cng",
		track: "bus",
		start: "Jamalpur Railway Station",
		end: "Pach Rastar Mor",
		duration: 2500
	},
	{
		vehicle: "walk",
		track: "lane",
		start: "Pach Rastar Mor",
		end: "Hazrabari CNG Stand",
		duration: 2e3
	},
	{
		vehicle: "cng",
		track: "lane",
		start: "Hazrabari CNG Stand",
		end: "Hazrabari (Gazi Master er Bari)",
		duration: 2500
	}
];
function compute() {
	const diff = new Date(WEDDING.dateIso).getTime() - Date.now();
	if (diff <= 0) return {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		past: true
	};
	return {
		days: Math.floor(diff / 864e5),
		hours: Math.floor(diff % 864e5 / 36e5),
		minutes: Math.floor(diff % 36e5 / 6e4),
		seconds: Math.floor(diff % 6e4 / 1e3),
		past: false
	};
}
function Cell({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-14 flex-col items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-2xl font-semibold tabular-nums text-maroon",
			children: String(value).padStart(2, "0")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1 text-xs font-medium uppercase tracking-widest text-muted",
			children: label
		})]
	});
}
function Countdown() {
	const [remain, setRemain] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setRemain(compute());
		const id = window.setInterval(() => setRemain(compute()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	if (!remain) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-14",
		"aria-hidden": true
	});
	if (remain.past) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-display text-lg italic text-maroon",
		children: "With love, from our reception day."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex max-w-xs items-center justify-between gap-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
				value: remain.days,
				label: "Days"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-4 text-gold",
				children: "·"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
				value: remain.hours,
				label: "Hrs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-4 text-gold",
				children: "·"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
				value: remain.minutes,
				label: "Min"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-4 text-gold",
				children: "·"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
				value: remain.seconds,
				label: "Sec"
			})
		]
	});
}
function BusIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "42",
		height: "28",
		viewBox: "0 0 42 28",
		fill: "currentColor",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2",
				y: "6",
				width: "32",
				height: "14",
				rx: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "9",
				width: "8",
				height: "6",
				rx: "1",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "15",
				y: "9",
				width: "8",
				height: "6",
				rx: "1",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "25",
				y: "9",
				width: "6",
				height: "6",
				rx: "1",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "22",
				r: "3.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "28",
				cy: "22",
				r: "3.2"
			})
		]
	});
}
function TrainIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "46",
		height: "28",
		viewBox: "0 0 46 28",
		fill: "currentColor",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4",
				y: "4",
				width: "30",
				height: "16",
				rx: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "8",
				width: "8",
				height: "6",
				rx: "1",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "18",
				y: "8",
				width: "8",
				height: "6",
				rx: "1",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M34 12h6l4 8H34z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "23",
				r: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "26",
				cy: "23",
				r: "3"
			})
		]
	});
}
function CngIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "38",
		height: "28",
		viewBox: "0 0 38 28",
		fill: "currentColor",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 16h18c3 0 6-3 6-6V8H16L8 16" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4",
				y: "16",
				width: "24",
				height: "5",
				rx: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "11",
				cy: "23",
				r: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "25",
				cy: "23",
				r: "3"
			})
		]
	});
}
function WalkIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "22",
		height: "32",
		viewBox: "0 0 22 32",
		fill: "currentColor",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "11",
			cy: "5",
			r: "3.2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 9l2 7-4 4 2 10h2l1-9 5 3 1-2-6-4 2-7z" })]
	});
}
function VehicleGlyph({ kind }) {
	if (kind === "train") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrainIcon, {});
	if (kind === "cng") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CngIcon, {});
	if (kind === "walk") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkIcon, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusIcon, {});
}
function Journey({ active }) {
	const [mode, setMode] = (0, import_react.useState)("bus");
	const [index, setIndex] = (0, import_react.useState)(0);
	const [pos, setPos] = (0, import_react.useState)("8%");
	const stages = mode === "bus" ? BUS_STAGES : TRAIN_STAGES;
	const stage = stages[index % stages.length];
	(0, import_react.useEffect)(() => {
		if (!active) return;
		setIndex(0);
	}, [active, mode]);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		const stageNow = stages[index % stages.length];
		const id = window.setTimeout(() => setIndex((i) => i + 1), stageNow.duration + 280);
		return () => window.clearTimeout(id);
	}, [
		active,
		index,
		stages
	]);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		setPos("8%");
		const id = requestAnimationFrame(() => {
			requestAnimationFrame(() => setPos("78%"));
		});
		return () => cancelAnimationFrame(id);
	}, [
		active,
		index,
		mode
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-6 pb-10 pt-2 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.28em] text-gold",
				children: "From Dhaka"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display mt-2 text-2xl text-maroon",
				children: "Journey to the venue"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeButton, {
					label: "Bus",
					on: mode === "bus",
					onClick: () => setMode("bus")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeButton, {
					label: "Train",
					on: mode === "train",
					onClick: () => setMode("train")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-center justify-between gap-3 rounded-md border border-gold/40 bg-paper-deep/50 px-4 py-3 text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "min-w-0 flex-1 text-sm leading-snug text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-xs uppercase tracking-widest text-muted",
							children: "From"
						}), stage.start]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						"aria-hidden": true,
						children: "→"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "min-w-0 flex-1 text-right text-sm leading-snug text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-xs uppercase tracking-widest text-muted",
							children: "To"
						}), stage.end]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "journey-track mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("journey-scroll", stage.track === "bus" && "is-bus", stage.track === "train" && "is-train", stage.track === "lane" && "is-lane") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "journey-vehicle",
					style: {
						left: pos,
						transition: `left ${stage.duration}ms linear`
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VehicleGlyph, { kind: stage.vehicle })
				})]
			})
		]
	});
}
function ModeButton({ label, on, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("rounded-full border px-5 py-2 text-sm font-medium tracking-wide transition-transform duration-150 ease-out active:scale-[0.96]", on ? "border-maroon bg-maroon text-paper" : "border-gold/70 bg-paper text-ink hover:border-maroon"),
		children: label
	});
}
function LetterFrame() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/invitation/art/pearl-card.webp",
		alt: "",
		draggable: false,
		className: "frame-art"
	});
}
var ICS = `BEGIN:VCALENDAR
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "ornament-line my-6",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 18 18",
			fill: "currentColor",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 2c.3 1.4 1 2.5 1.9 3.3C10 5.6 9.3 6 9 6.8 8.7 6 8 5.6 7.1 5.3 8 4.5 8.7 3.4 9 2Z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 7.2c1.8-1.1 4-.9 5.4.6-1.5 1.2-3.5 1.5-5.4.7-1.9.8-3.9.5-5.4-.7C5 6.3 7.2 6.1 9 7.2Z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "9",
					cy: "7.1",
					r: "1"
				})
			]
		})
	});
}
function InnerCard({ open }) {
	const { groom, bride } = WEDDING;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "relative min-h-full overflow-hidden bg-paper pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "frame-hero",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterFrame, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "frame-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.62rem] font-medium uppercase leading-5 tracking-[0.18em] text-[#8a7e74]",
							children: "The Reception programme of-"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script mt-3 text-[2.85rem] leading-none text-[#5c4f46]",
							children: groom.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script my-0 text-[2.35rem] leading-none text-[#8b6a78]",
							children: "&"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-[2.85rem] leading-none text-[#5c4f46]",
							children: bride.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[0.78rem] font-medium uppercase tracking-[0.28em] text-[#8a7e74]",
							children: "03 October 2026"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative px-5 pt-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-arabic text-[1.4rem] leading-relaxed text-maroon",
								lang: "ar",
								dir: "rtl",
								children: WEDDING.bismillah
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-[0.68rem] tracking-[0.14em] text-muted",
								children: WEDDING.bismillahEn
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 text-pretty font-display text-base italic leading-relaxed text-ink/80",
								children: [
									WEDDING.intro,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "not-italic text-[1.05rem] font-medium uppercase tracking-[0.22em] text-gold",
										children: "Reception of"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium uppercase tracking-[0.28em] text-gold",
									children: groom.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display mt-2 text-2xl font-semibold text-balance text-maroon",
									children: groom.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: "Son of"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm leading-relaxed text-ink",
									children: [groom.father, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-muted",
										children: ["& ", groom.mother]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium uppercase tracking-[0.28em] text-gold",
									children: bride.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display mt-2 text-2xl font-semibold text-balance text-maroon",
									children: bride.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: "Daughter of"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm leading-relaxed text-ink",
									children: [bride.father, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-muted",
										children: ["& ", bride.mother]
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.28em] text-gold",
						children: WEDDING.weekday
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display mt-2 text-3xl font-semibold text-maroon",
						children: WEDDING.dateLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: addToCalendar,
						className: "mt-6 inline-flex items-center gap-2 rounded-full border border-gold/70 bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-150 ease-out active:scale-[0.96]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
							className: "size-4 text-maroon",
							strokeWidth: 1.75
						}), "Add to calendar"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.28em] text-gold",
						children: "Place"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-2 text-2xl font-semibold text-maroon",
						children: WEDDING.venueName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-2 max-w-xs text-pretty text-sm leading-relaxed text-muted",
						children: WEDDING.venueDetail
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 overflow-hidden rounded-lg border-2 border-gold/60 shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							className: "block h-52 w-full object-cover object-center",
							autoPlay: true,
							muted: true,
							loop: true,
							playsInline: true,
							poster: "/invitation/venue.jpg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
								src: "/invitation/venue.mp4",
								type: "video/mp4"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 overflow-hidden rounded-lg border-2 border-gold/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Map of Master Bari, Jamalpur",
							src: WEDDING.mapsEmbed,
							className: "block h-48 w-full border-0",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WEDDING.mapsLink,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-4 inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2.5 text-sm font-medium text-paper transition-transform duration-150 ease-out active:scale-[0.96]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "size-4",
							strokeWidth: 1.75
						}), "View on Google Maps"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-10 max-w-sm text-pretty font-display text-base italic leading-relaxed text-muted",
						children: WEDDING.closing
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journey, { active: open }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "letter-end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-script text-3xl text-maroon",
						children: [
							groom.short,
							" & ",
							bride.short
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs uppercase tracking-[0.28em] text-gold",
						children: "03 · 10 · 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/invitation/art/foot-spray.webp",
						alt: "",
						draggable: false,
						className: "foot-blossom"
					})
				]
			})
		]
	});
}
var PETALS = [
	{
		left: "8%",
		delay: "0s",
		duration: "9s",
		size: 11
	},
	{
		left: "22%",
		delay: "1.4s",
		duration: "11s",
		size: 14
	},
	{
		left: "37%",
		delay: "2.8s",
		duration: "8.5s",
		size: 10
	},
	{
		left: "51%",
		delay: "0.6s",
		duration: "10s",
		size: 13
	},
	{
		left: "64%",
		delay: "3.2s",
		duration: "12s",
		size: 12
	},
	{
		left: "78%",
		delay: "1.8s",
		duration: "9.5s",
		size: 15
	},
	{
		left: "91%",
		delay: "4s",
		duration: "11.5s",
		size: 11
	},
	{
		left: "14%",
		delay: "5.1s",
		duration: "10.5s",
		size: 9
	}
];
function Petals({ burst = false }) {
	const list = burst ? [...PETALS, ...PETALS.map((p, i) => ({
		...p,
		delay: `${.1 * i}s`,
		left: `${6 + i * 11}%`
	}))] : PETALS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: list.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "petal",
		style: {
			left: p.left,
			animationDelay: p.delay,
			animationDuration: p.duration,
			width: p.size,
			height: p.size * 1.45
		}
	}, `${p.left}-${i}`)) });
}
function Envelope() {
	const [phase, setPhase] = (0, import_react.useState)("closed");
	const [videoOk, setVideoOk] = (0, import_react.useState)(true);
	const videoRef = (0, import_react.useRef)(null);
	const { playing, start, toggle } = useMusicBox();
	const open = (0, import_react.useCallback)(() => {
		if (phase !== "closed") return;
		start();
		setPhase("opening");
		videoRef.current?.pause();
		window.setTimeout(() => setPhase("open"), 1450);
	}, [phase, start]);
	(0, import_react.useEffect)(() => {
		const v = videoRef.current;
		if (!v) return;
		v.play().catch(() => setVideoOk(false));
	}, []);
	const opened = phase === "open";
	const opening = phase !== "closed";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
			"aria-hidden": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/invitation/cover.jpg",
				alt: "",
				className: "h-full w-full scale-110 object-cover opacity-35 blur-2xl"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-paper/50" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("invite-stage", phase === "opening" && "is-opening", phase === "open" && "is-open"),
			children: [
				opening ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none sticky top-0 z-50 flex h-0 justify-end overflow-visible",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: toggle,
						"aria-label": playing ? "Mute music" : "Play music",
						className: "pointer-events-auto mt-3 mr-3 flex size-12 items-center justify-center rounded-full border-2 border-gold bg-maroon text-paper shadow-md transition-transform duration-150 ease-out active:scale-[0.96]",
						children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, {
							className: "size-5",
							strokeWidth: 1.75
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, {
							className: "size-5",
							strokeWidth: 1.75
						})
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InnerCard, { open: opened }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gatefold",
					"aria-hidden": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gate gate-left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/invitation/cover.jpg",
							alt: ""
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gate gate-right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/invitation/cover.jpg",
							alt: ""
						})
					})]
				}),
				videoOk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					ref: videoRef,
					className: "cover-live",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					poster: "/invitation/cover.jpg",
					onError: () => setVideoOk(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: "/invitation/cover.mp4",
						type: "video/mp4"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/invitation/cover.jpg",
					alt: "",
					className: "cover-live"
				}),
				phase !== "open" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Petals, { burst: opening }) : null,
				phase === "closed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "tap-layer",
					onClick: open,
					"aria-label": "Open the invitation"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hint",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hint-label",
						children: "Touch to open"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "22",
						height: "22",
						viewBox: "0 0 24 24",
						fill: "none",
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M12 5v14M5 12l7 7 7-7",
							stroke: "currentColor",
							strokeWidth: "1.8",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})
					})]
				})
			]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Envelope, {});
}
//#endregion
export { Home as component };
