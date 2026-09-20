export const WEDDING = {
  title: "Reception · Iqbal & Iqra",
  bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahEn: "In the name of Allah, the Most Gracious, the Most Merciful",
  intro:
    "With the blessings of Allah and with the love and support of our family and friends, we are delighted to invite you to the",
  event: "Reception",
  dateLabel: "03 October 2026",
  dateIso: "2026-10-03T18:00:00+06:00",
  weekday: "Saturday",
  venueName: "Master Bari",
  venueDetail: "Jamalpur–Madarganj Road, Hazrabari, Melandaha, Jamalpur",
  mapsEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=89.8217591%2C24.915894%2C89.8417591%2C24.935894&layer=mapnik&marker=24.925894%2C89.8317591",
  mapsLink: "https://maps.app.goo.gl/yLPo93WR119bvSK56",
  closing:
    "Your presence will make this joyous occasion even more special. We look forward to celebrating with you.",
  groom: {
    role: "Groom",
    name: "Md. Iqbal Hasan",
    short: "Iqbal",
    father: "Md. Kamrul Hasan",
    mother: "Zibanara Begum",
  },
  bride: {
    role: "Bride",
    name: "Sabiqunnahar Iqra",
    short: "Iqra",
    father: "Mahbubur Rahman Iqbal",
    mother: "Khaleda Parvin",
  },
} as const;

export type TravelMode = "bus" | "train";
export type JourneyStage = {
  vehicle: "bus" | "train" | "cng" | "walk";
  track: "bus" | "train" | "lane";
  start: string;
  end: string;
  duration: number;
};

export const BUS_STAGES: JourneyStage[] = [
  {
    vehicle: "bus",
    track: "bus",
    start: "Mohakhali Bus Stand",
    end: "Jamalpur Bus Stand",
    duration: 3500,
  },
  {
    vehicle: "cng",
    track: "lane",
    start: "Jamalpur Bus Stand",
    end: "Pach Rastar Mor",
    duration: 2500,
  },
  {
    vehicle: "walk",
    track: "lane",
    start: "Pach Rastar Mor",
    end: "Hazrabari CNG Stand",
    duration: 2000,
  },
  {
    vehicle: "cng",
    track: "lane",
    start: "Hazrabari CNG Stand",
    end: "Hazrabari (Gazi Master er Bari)",
    duration: 2500,
  },
];

export const TRAIN_STAGES: JourneyStage[] = [
  {
    vehicle: "train",
    track: "train",
    start: "Kamalapur Rail Station",
    end: "Jamalpur Railway Station",
    duration: 4500,
  },
  {
    vehicle: "cng",
    track: "bus",
    start: "Jamalpur Railway Station",
    end: "Pach Rastar Mor",
    duration: 2500,
  },
  {
    vehicle: "walk",
    track: "lane",
    start: "Pach Rastar Mor",
    end: "Hazrabari CNG Stand",
    duration: 2000,
  },
  {
    vehicle: "cng",
    track: "lane",
    start: "Hazrabari CNG Stand",
    end: "Hazrabari (Gazi Master er Bari)",
    duration: 2500,
  },
];
