const PETALS = [
  { left: "8%", delay: "0s", duration: "9s", size: 11 },
  { left: "22%", delay: "1.4s", duration: "11s", size: 14 },
  { left: "37%", delay: "2.8s", duration: "8.5s", size: 10 },
  { left: "51%", delay: "0.6s", duration: "10s", size: 13 },
  { left: "64%", delay: "3.2s", duration: "12s", size: 12 },
  { left: "78%", delay: "1.8s", duration: "9.5s", size: 15 },
  { left: "91%", delay: "4s", duration: "11.5s", size: 11 },
  { left: "14%", delay: "5.1s", duration: "10.5s", size: 9 },
];

export function Petals({ burst = false }: { burst?: boolean }) {
  const list = burst
    ? [...PETALS, ...PETALS.map((p, i) => ({ ...p, delay: `${0.1 * i}s`, left: `${6 + i * 11}%` }))]
    : PETALS;

  return (
    <>
      {list.map((p, i) => (
        <span
          key={`${p.left}-${i}`}
          className="petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size * 1.45,
          }}
        />
      ))}
    </>
  );
}
