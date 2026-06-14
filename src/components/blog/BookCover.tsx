import type { BookCollection } from "@/lib/collections";

type Props = {
  collection: BookCollection;
  size?: "sm" | "md" | "lg";
  upright?: boolean;
};

const SIZE_MAP = {
  sm: { w: 200, h: 280 },
  md: { w: 260, h: 360 },
  lg: { w: 340, h: 470 },
} as const;

function CoverArt({ collection }: { collection: BookCollection }) {
  const { palette, shapeSeed } = collection;
  const variants = [
    {
      bg: `linear-gradient(160deg, ${palette.light} 0%, ${palette.mid} 60%, ${palette.dark} 100%)`,
      shapes: (
        <>
          <div
            className="absolute -top-10 -right-10 w-2/3 h-2/3 rounded-full opacity-60 blur-2xl"
            style={{ background: palette.accent ?? palette.light }}
          />
          <div
            className="absolute -bottom-16 -left-10 w-3/4 h-2/3 rounded-full opacity-50 blur-3xl"
            style={{ background: palette.mid }}
          />
        </>
      ),
    },
    {
      bg: `radial-gradient(120% 110% at 20% 30%, ${palette.light} 0%, ${palette.mid} 45%, ${palette.dark} 100%)`,
      shapes: (
        <>
          <div
            className="absolute top-1/3 left-1/4 w-2/3 h-1/2 rounded-[50%] opacity-70 blur-2xl mix-blend-soft-light"
            style={{ background: palette.accent ?? palette.light }}
          />
          <div
            className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full opacity-60 blur-3xl"
            style={{ background: palette.dark }}
          />
        </>
      ),
    },
    {
      bg: `conic-gradient(from 200deg at 60% 40%, ${palette.dark}, ${palette.mid}, ${palette.light}, ${palette.mid}, ${palette.dark})`,
      shapes: (
        <>
          <div
            className="absolute inset-0 opacity-50 blur-2xl"
            style={{
              background: `radial-gradient(60% 60% at 30% 70%, ${palette.accent ?? palette.light} 0%, transparent 70%)`,
            }}
          />
        </>
      ),
    },
    {
      bg: `linear-gradient(200deg, ${palette.dark} 0%, ${palette.mid} 45%, ${palette.light} 100%)`,
      shapes: (
        <>
          <div
            className="absolute -top-12 left-1/4 w-1/2 h-1/2 rounded-[50%] opacity-70 blur-3xl"
            style={{ background: palette.accent ?? palette.light }}
          />
          <div
            className="absolute bottom-0 right-0 w-3/4 h-2/3 rounded-[50%] opacity-50 blur-2xl mix-blend-multiply"
            style={{ background: palette.dark }}
          />
        </>
      ),
    },
    {
      bg: `linear-gradient(135deg, ${palette.mid} 0%, ${palette.light} 50%, ${palette.dark} 100%)`,
      shapes: (
        <>
          <div
            className="absolute top-1/4 right-0 w-2/3 h-3/4 rounded-[50%] opacity-60 blur-3xl"
            style={{ background: palette.dark }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-1/2 h-1/3 rounded-full opacity-70 blur-2xl"
            style={{ background: palette.accent ?? palette.light }}
          />
        </>
      ),
    },
    {
      bg: `radial-gradient(circle at 70% 30%, ${palette.light} 0%, ${palette.mid} 50%, ${palette.dark} 100%)`,
      shapes: (
        <>
          <div
            className="absolute top-1/3 left-0 w-1/2 h-1/2 rounded-full opacity-60 blur-3xl mix-blend-overlay"
            style={{ background: palette.accent ?? palette.light }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-full opacity-70 blur-2xl"
            style={{ background: palette.dark }}
          />
        </>
      ),
    },
    {
      bg: `linear-gradient(180deg, ${palette.light} 0%, ${palette.mid} 35%, ${palette.dark} 100%)`,
      shapes: (
        <>
          <div
            className="absolute top-0 left-1/3 w-2/3 h-1/2 rounded-[50%] opacity-50 blur-3xl"
            style={{ background: palette.accent ?? palette.light }}
          />
          <div
            className="absolute bottom-0 left-0 w-full h-1/3 rounded-[50%] opacity-70 blur-3xl mix-blend-multiply"
            style={{ background: palette.dark }}
          />
        </>
      ),
    },
  ];
  const variant = variants[(shapeSeed - 1) % variants.length];
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ background: variant.bg }}
      aria-hidden="true"
    >
      {variant.shapes}
      {/* paper grain */}
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

export default function BookCover({ collection, size = "md", upright = false }: Props) {
  const { w, h } = SIZE_MAP[size];

  return (
    <div
      className="book-perspective relative inline-block"
      style={{ width: w, height: h, perspective: "2200px" }}
    >
      <div
        className={`book relative w-full h-full transition-transform duration-700 ease-out ${
          upright ? "" : "group-hover/book:[transform:rotateY(-8deg)_rotateX(2deg)]"
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: upright
            ? "rotateY(-4deg) rotateX(0deg)"
            : "rotateY(-18deg) rotateX(2deg)",
        }}
      >
        {/* Pages (right edge thickness with horizontal stripes) */}
        <div
          aria-hidden="true"
          className="absolute top-1 bottom-1 right-0 w-[14px] origin-left"
          style={{
            transform: "rotateY(90deg) translateZ(7px)",
            background:
              "repeating-linear-gradient(180deg, #FEFCF8 0px, #FEFCF8 2px, #E8E1D5 2px, #E8E1D5 3px)",
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.15)",
          }}
        />

        {/* Bottom edge */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 bottom-0 h-[10px] origin-top"
          style={{
            transform: "rotateX(-90deg) translateZ(5px)",
            background:
              "repeating-linear-gradient(90deg, #FEFCF8 0px, #FEFCF8 1.5px, #E8E1D5 1.5px, #E8E1D5 2.5px)",
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.15)",
          }}
        />

        {/* Front cover */}
        <div
          className="absolute inset-0 overflow-hidden rounded-r-[3px] rounded-l-[8px]"
          style={{
            transform: "translateZ(7px)",
            boxShadow:
              "0 30px 60px -20px rgba(0,0,0,0.6), 0 18px 36px -18px rgba(0,0,0,0.4), -2px 0 0 0 rgba(0,0,0,0.25)",
          }}
        >
          <CoverArt collection={collection} />

          {/* Inner border to mimic embossed plate */}
          <div
            aria-hidden="true"
            className="absolute inset-3 border border-white/10 rounded-sm pointer-events-none"
          />

          {/* Header label */}
          <span className="absolute top-5 left-5 right-5 text-[10px] tracking-widest text-white/85 font-serif italic">
            The Join Médicis Manual
          </span>

          {/* Title */}
          <h3
            className="absolute left-5 right-6 bottom-5 font-sans font-bold uppercase text-white leading-[1.05] tracking-tight"
            style={{
              fontSize: size === "lg" ? "1.6rem" : size === "md" ? "1.2rem" : "1rem",
              textShadow: "0 2px 12px rgba(0,0,0,0.35)",
            }}
          >
            {collection.label}
          </h3>

          {/* Spine highlight */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 bottom-0 w-[6px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
