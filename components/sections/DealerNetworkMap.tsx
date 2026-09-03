"use client";
import { DEALERS } from "@/data/dealers";
import { motion } from "framer-motion";

type Props = {
  activeState: string;
  onSelectState: (state: string) => void;
};

export default function DealerNetworkMap({ activeState, onSelectState }: Props) {
  const counts = new Map<string, number>();
  DEALERS.forEach((d) => counts.set(d.state, (counts.get(d.state) ?? 0) + 1));
  const states = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);

  const cx = 300;
  const cy = 240;
  const radius = 190;
  const maxCount = Math.max(...states.map(([, c]) => c));

  const nodes = states.map(([name, count], i) => {
    const angle = (i / states.length) * Math.PI * 2 - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle) * 0.82;
    const r = 5 + (count / maxCount) * 7;
    return { name, count, x, y, r, angle };
  });

  return (
    <div className="relative overflow-hidden rounded-3xl bg-brand-black py-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(179,16,26,0.18),transparent_65%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:24px_24px]" />

      <svg viewBox="0 0 600 480" className="relative w-full h-auto max-h-[420px]">
        {nodes.map((n, i) => (
          <motion.line
            key={`line-${n.name}`}
            x1={cx}
            y1={cy}
            x2={n.x}
            y2={n.y}
            stroke={activeState === n.name ? "#B3101A" : "rgba(255,255,255,0.18)"}
            strokeWidth={activeState === n.name ? 1.5 : 1}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.06, ease: "easeOut" }}
          />
        ))}

        <motion.circle
          cx={cx}
          cy={cy}
          r={14}
          fill="#B3101A"
          initial={{ scale: 0 }}
          whileInView={{ scale: [0, 1.2, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.circle
          cx={cx}
          cy={cy}
          r={14}
          fill="none"
          stroke="#B3101A"
          strokeWidth={1.5}
          animate={{ r: [14, 26, 14], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        />
        <text x={cx} y={cy + 34} textAnchor="middle" className="fill-white text-[11px] font-semibold uppercase tracking-wide">
          HQ · Agra
        </text>

        {nodes.map((n, i) => {
          const isActive = activeState === n.name;
          const labelBelow = n.y > cy;
          return (
            <g key={n.name} className="cursor-pointer" onClick={() => onSelectState(isActive ? "All States" : n.name)}>
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill={isActive ? "#B3101A" : "#ffffff"}
                fillOpacity={isActive ? 1 : 0.85}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
              />
              <text
                x={n.x}
                y={labelBelow ? n.y + n.r + 14 : n.y - n.r - 8}
                textAnchor="middle"
                className={`text-[10px] font-medium transition-colors ${isActive ? "fill-brand-red" : "fill-white/70"}`}
              >
                {n.name}
              </text>
              <text
                x={n.x}
                y={labelBelow ? n.y + n.r + 26 : n.y - n.r - 20}
                textAnchor="middle"
                className="fill-white/40 text-[9px]"
              >
                {n.count} partner{n.count > 1 ? "s" : ""}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="relative text-center text-xs text-white/40 mt-2">
        Click any state to filter the list below — {states.length} states, {DEALERS.length}+ active partners.
      </p>
    </div>
  );
}