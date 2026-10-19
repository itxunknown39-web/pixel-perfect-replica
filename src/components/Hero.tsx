import character from "@/assets/character.png.asset.json";

const u = (n: number) => `calc(var(--u) * ${n})`;
const SKILLS = ["ai automation", "video editing", "web dev", "python", "prompt engineering"];
const DIAL_NUMS = [5, 6, 7, 8, 9];

function Handles() {
  const pos = [
    { left: 0, top: 0 },
    { right: 0, top: 0 },
    { left: 0, bottom: 0 },
    { right: 0, bottom: 0 },
  ];
  return (
    <>
      {pos.map((p, i) => (
        <span
          key={i}
          className="a-pop absolute block bg-background border-2 border-gold"
          style={{
            width: "var(--h)",
            height: "var(--h)",
            margin: "calc(var(--h) / -2)",
            animationDelay: `${2.1 + i * 0.08}s`,
            ...Object.fromEntries(Object.entries(p).map(([k]) => [k, 0])),
          }}
        />
      ))}
    </>
  );
}

function Cursor({ style }: { style: React.CSSProperties }) {
  return (
    <div aria-hidden className="a-cursor pointer-events-none flex items-start" style={style}>
      <svg viewBox="0 0 24 24" className="h-full w-auto fill-gold">
        <path d="M2 2l20 13-9 1-5 7z" />
      </svg>
    </div>
  );
}

function Dial({ size, ring, thickness, fontSize }: { size: string; ring: string; thickness: string; fontSize: string }) {
  return (
    <div
      aria-hidden
      className="a-dial absolute rounded-full border-gold"
      style={{ width: size, height: size, left: "100%", top: "50%", borderWidth: thickness, borderStyle: "solid" }}
    >
      <div className="a-orbit absolute inset-0">
        {DIAL_NUMS.map((n, i) => {
          const angle = 147 + i * 16.5;
          return (
            <div key={n} className="absolute left-1/2 top-1/2" style={{ transform: `rotate(${angle}deg) translateX(${ring}) rotate(-${angle}deg)` }}>
              <span className="a-upright block font-extrabold leading-none text-background" style={{ fontSize, transform: "translate(-50%,-50%)" }}>
                {n}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative bg-background">
      {/* Desktop / tablet: reference artboard */}
      <div className="hero-stage hidden md:block">
        <div className="hero-art font-display">
          <img
            src={character.url}
            alt="Kamran — illustrated character in a black cap, mask and bomber jacket"
            className="a-char object-cover"
            style={{ left: u(24), top: u(190), width: u(332), height: u(680), objectPosition: "50% 50%" }}
          />

          <div style={{ left: u(1800), top: u(540), width: 0, height: 0 }}>
            <Dial size={u(520)} thickness={u(52)} ring={u(234)} fontSize={u(40)} />
          </div>

          <h1 className="m-0 contents">
            <span className="a-rise absolute gold-text font-black uppercase leading-none tracking-[-0.02em]" style={{ left: u(366), top: u(206), fontSize: u(250) }}>
              Try
            </span>
            <span className="a-wipe absolute gold-text font-black uppercase leading-none tracking-[-0.02em]" style={{ left: u(398), top: u(444), fontSize: u(206), letterSpacing: "-0.03em" }}>
              Kamran
            </span>
          </h1>

          <div
            aria-hidden
            className="a-frame border-gold"
            style={{ left: u(383), top: u(455), width: u(921), height: u(204), borderWidth: u(2), borderStyle: "solid", ["--h" as string]: u(11) }}
          >
            <Handles />
          </div>

          <Cursor style={{ left: u(1308), top: u(668), height: u(62) }} />

          <span className="a-year font-extrabold text-foreground tracking-tight leading-none" style={{ left: u(1425), top: u(510), fontSize: u(42) }}>
            2026
          </span>

          <ul className="flex" style={{ left: u(375), top: u(700), gap: u(14) }}>
            {SKILLS.map((s, i) => (
              <li
                key={s}
                className="a-pill rounded-full border-gold font-medium text-foreground lowercase whitespace-nowrap leading-none"
                style={{ fontSize: u(21), padding: `${u(10)} ${u(19)}`, borderWidth: u(1.5), borderStyle: "solid", animationDelay: `${1.6 + i * 0.1}s` }}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile: recomposed */}
      <div className="relative overflow-hidden px-5 pb-14 pt-24 md:hidden">
        <div className="absolute right-[-40px] top-48 h-0 w-0">
          <Dial size="260px" thickness="26px" ring="117px" fontSize="22px" />
        </div>
        <span className="a-year relative block text-3xl font-bold text-gold">2026</span>
        <h1 className="relative mt-2 font-display font-extrabold uppercase leading-[0.86] tracking-[-0.03em]">
          <span className="a-rise gold-text block text-[25vw]">Try</span>
          <span className="relative mt-2 inline-block px-1" style={{ ["--h" as string]: "9px" }}>
            <span className="a-wipe gold-text block text-[19vw]">Kamran</span>
            <span aria-hidden className="a-frame absolute inset-0 border-2 border-gold">
              <Handles />
            </span>
          </span>
        </h1>
        <img src={character.url} alt="Kamran — illustrated character" className="a-char relative mx-auto mt-6 aspect-square w-full max-w-sm object-contain" />
        <ul className="relative mt-4 flex flex-wrap gap-2">
          {SKILLS.map((s, i) => (
            <li key={s} className="a-pill rounded-full border-2 border-gold px-4 py-2 text-sm font-semibold text-gold" style={{ animationDelay: `${1.6 + i * 0.1}s` }}>
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
