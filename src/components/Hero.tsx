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
      <svg viewBox="0 0 24 24" className="h-full w-auto fill-gold drop-shadow">
        <path d="M3 2l7 19 2.6-7.4L20 11z" />
      </svg>
      <span className="ml-1 mt-[60%] rounded-md bg-gold px-[0.6em] py-[0.2em] font-semibold text-primary-foreground whitespace-nowrap" style={{ fontSize: "0.5em" }}>
        Kamran
      </span>
    </div>
  );
}

function Dial({ size, ring, inner, fontSize }: { size: string; ring: string; inner: string; fontSize: string }) {
  return (
    <div
      aria-hidden
      className="a-dial absolute rounded-full bg-gold"
      style={{ width: size, height: size, left: "100%", top: "50%" }}
    >
      <div className="absolute rounded-full bg-background" style={{ width: inner, height: inner, left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} />
      <div className="a-orbit absolute inset-0">
        {DIAL_NUMS.map((n, i) => {
          const angle = 140 + i * 20;
          return (
            <div key={n} className="absolute left-1/2 top-1/2" style={{ transform: `rotate(${angle}deg) translateX(${ring}) rotate(-${angle}deg)` }}>
              <span className="a-upright block -translate-x-1/2 -translate-y-1/2 font-extrabold text-primary-foreground" style={{ fontSize }}>
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
            style={{ left: u(24), top: u(196), width: u(332), height: u(680), objectPosition: "52% 50%" }}
          />

          <div style={{ left: u(1672), top: u(560), width: 0, height: 0 }}>
            <Dial size={u(780)} inner={u(440)} ring={u(305)} fontSize={u(56)} />
          </div>

          <h1 className="m-0 contents">
            <span className="a-rise gold-text font-extrabold uppercase leading-[0.86] tracking-[-0.03em]" style={{ left: u(392), top: u(118), fontSize: u(222) }}>
              Try
            </span>
            <span className="a-wipe gold-text font-extrabold uppercase leading-[0.86] tracking-[-0.03em]" style={{ left: u(392), top: u(352), fontSize: u(222) }}>
              Kamran
            </span>
          </h1>

          <div
            aria-hidden
            className="a-frame border-2 border-gold"
            style={{ left: u(376), top: u(342), width: u(940), height: u(212), ["--h" as string]: u(14) }}
          >
            <Handles />
          </div>

          <Cursor style={{ left: u(1300), top: u(540), height: u(40), fontSize: u(40) }} />

          <span className="a-year font-bold text-gold tracking-tight" style={{ left: u(1168), top: u(118), fontSize: u(72) }}>
            2026
          </span>

          <ul className="flex" style={{ left: u(392), top: u(640), gap: u(14) }}>
            {SKILLS.map((s, i) => (
              <li
                key={s}
                className="a-pill rounded-full border-2 border-gold font-semibold text-gold lowercase whitespace-nowrap"
                style={{ fontSize: u(22), padding: `${u(12)} ${u(26)}`, animationDelay: `${1.6 + i * 0.1}s` }}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile: recomposed */}
      <div className="relative overflow-hidden px-5 pb-14 pt-24 md:hidden">
        <div className="absolute right-0 top-28 h-0 w-0">
          <Dial size="300px" inner="170px" ring="118px" fontSize="22px" />
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
