import React from "react";

const BUZZWORDS: string[] = [
  "AI",
  "LLM",
  "SLM",
  "Transformers",
  "RAG",
  "Agents",
  "Quantization",
  "Fine-tuning",
  "LoRA",
  "Distillation",
  "Tokenization",
  "Inference",
  "Benchmarks",
  "Evaluation",
  "Few-shot",
  "Zero-shot",
  "Prompting",
  "Safety",
  "Alignment",
  "Latency",
  "Throughput"
];

type TextogramProps = {
  opacity?: number;
  speedMs?: number;
};

const Textogram: React.FC<TextogramProps> = ({ opacity = 0.06, speedMs = 30000 }) => {
  const rows = 8;
  const repeated = [...BUZZWORDS, ...BUZZWORDS, ...BUZZWORDS];

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      style={{ opacity }}
      aria-hidden
    >
      {Array.from({ length: rows }).map((_, rowIndex) => {
        const isReverse = rowIndex % 2 === 1;
        const delay = (rowIndex * 500) % speedMs; // small stagger
        return (
          <div
            key={rowIndex}
            className={`whitespace-nowrap text-sm md:text-base lg:text-lg tracking-wider uppercase flex gap-8 px-8`}
            style={{
              position: "absolute",
              top: `${(rowIndex * 100) / rows}%`,
              transform: "translateY(-50%)",
              animation: `textogram-marquee ${speedMs}ms linear infinite ${isReverse ? "reverse" : "normal"}`,
              animationDelay: `-${delay}ms`
            }}
          >
            {repeated.map((word, i) => (
              <span key={`${rowIndex}-${i}`} className="text-foreground/60">
                {word}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Textogram;







