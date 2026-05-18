"use client";

import { useEffect, useRef, useState } from "react";
import { useLang, T, t } from "../context/LangContext";

const KEYS = [
  {
    id: 1,
    keyName: "PY",
    lang: "Python",
    emoji: "🐍",
    color: "#3572A5",
    desc: "Veri işleme, otomasyon ve temel backend mantığı.",
  },
  {
    id: 2,
    keyName: "JS",
    lang: "JavaScript",
    emoji: "⚡",
    color: "#f0db4f",
    desc: "Web arayüzleri ve etkileşimli kullanıcı deneyimleri.",
  },
  {
    id: 3,
    keyName: "JV",
    lang: "Java",
    emoji: "☕",
    color: "#b07219",
    desc: "OOP mantığı, masaüstü ve temel uygulama geliştirme.",
  },
  {
    id: 4,
    keyName: "RE",
    lang: "React",
    emoji: "⚛️",
    color: "#61dafb",
    desc: "Component tabanlı modern web arayüzleri.",
  },
  {
    id: 5,
    keyName: "C#",
    lang: "C#",
    emoji: "🟣",
    color: "#9b4de3",
    desc: "Windows Forms, otomasyon ve masaüstü uygulamaları.",
  },
  {
    id: 6,
    keyName: "PHP",
    lang: "PHP",
    emoji: "🐘",
    color: "#777BB4",
    desc: "Dinamik web sayfaları ve temel backend işlemleri.",
  },
  {
    id: 7,
    keyName: "SQL",
    lang: "SQL",
    emoji: "🗃️",
    color: "#336791",
    desc: "Veritabanı sorguları, tablo ilişkileri ve raporlama.",
  },
  {
    id: 8,
    keyName: "HTML",
    lang: "HTML",
    emoji: "🌐",
    color: "#e34c26",
    desc: "Sayfa iskeleti, semantik yapı ve erişilebilirlik.",
  },
  {
    id: 9,
    keyName: "CSS",
    lang: "CSS",
    emoji: "🎨",
    color: "#563d7c",
    desc: "Responsive tasarım, renk, düzen ve animasyon.",
  },
  {
    id: 10,
    keyName: "GIT",
    lang: "Git",
    emoji: "🔀",
    color: "#f1502f",
    desc: "Versiyon kontrolü ve proje takibi.",
  },
  {
    id: 11,
    keyName: "RN",
    lang: "React Native",
    emoji: "📱",
    color: "#61dafb",
    desc: "Mobil arayüz ve component tabanlı uygulama geliştirme.",
  },
  {
    id: 12,
    keyName: "UNI",
    lang: "Unity",
    emoji: "🎮",
    color: "#a0a0a0",
    desc: "Oyun geliştirme, sahne mantığı ve etkileşim.",
  },
];

function getSkillGroups(lang) {
  return [
    {
      title: t(T.skills_group1, lang),
      icon: "⌨️",
      items: ["Python", "JavaScript", "Java", "C#", "PHP"],
    },
    {
      title: t(T.skills_group2, lang),
      icon: "📦",
      items: ["React", "React Native", "Next.js"],
    },
    {
      title: t(T.skills_group3, lang),
      icon: "🛠️",
      items: ["SQL", "Git", "Unity", "HTML", "CSS"],
    },
  ];
}

function SkillKey({ item, index, setActiveSkill }) {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      type="button"
      className={`skill-key ${pressed ? "pressed" : ""}`}
      style={{
        "--key-color": item.color,
        animationDelay: `${index * 0.045}s`,
      }}
      onMouseEnter={() => setActiveSkill(item)}
      onMouseLeave={() => {
        setActiveSkill(null);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onTouchStart={() => {
        setActiveSkill(item);
        setPressed(true);
      }}
      onTouchEnd={() => {
        setPressed(false);
      }}
      aria-label={item.lang}
      title={item.lang}
    >
      <span className="key-top">
        <span className="key-code">{item.keyName}</span>
        <span className="key-emoji">{item.emoji}</span>
      </span>

      <span className="key-name">{item.lang}</span>
      <span className="key-led" />
    </button>
  );
}

function SkillPreview({ activeSkill }) {
  const skill = activeSkill || KEYS[0];

  return (
    <div className="skill-preview" style={{ "--preview-color": skill.color }}>
      <div className="preview-icon">{skill.emoji}</div>

      <div className="preview-text">
        <span className="preview-label">Aktif Beceri</span>
        <strong>{skill.lang}</strong>
        <p>{skill.desc}</p>
      </div>
    </div>
  );
}

export default function Skills() {
  const { lang } = useLang();
  const secRef = useRef(null);
  const [vis, setVis] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVis(true);
      },
      { threshold: 0.2 }
    );

    if (secRef.current) obs.observe(secRef.current);

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .skills-s {
          min-height: 100vh;
          padding: 120px 40px 100px;
          background:
            radial-gradient(circle at 82% 18%, rgba(254,166,252,0.17), transparent 32%),
            radial-gradient(circle at 12% 88%, rgba(196,123,123,0.12), transparent 34%),
            #fdf6fb;
          position: relative;
          overflow: hidden;
        }

        .skills-s::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(196,118,182,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,118,182,0.045) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .skills-wrap {
          max-width: 1180px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .skills-head {
          text-align: center;
          margin-bottom: 70px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .7s ease, transform .7s ease;
        }

        .skills-head.vis {
          opacity: 1;
          transform: none;
        }

        .skills-tag-small {
          font-family: 'DM Sans', sans-serif;
          font-size: .72rem;
          font-weight: 700;
          letter-spacing: .35em;
          text-transform: uppercase;
          color: #b96f74;
          margin-bottom: 10px;
        }

        .skills-big-title {
          font-family: 'VT323', monospace;
          font-size: clamp(3.4rem, 6vw, 6rem);
          color: #3d2828;
          letter-spacing: 3px;
          line-height: 1;
        }

        .skills-big-title span {
          color: #f48cf0;
          text-shadow: 0 0 18px rgba(254,166,252,0.45);
        }

        .skills-layout {
          display: grid;
          grid-template-columns: 0.86fr 1.14fr;
          gap: 56px;
          align-items: center;
        }

        .skills-info {
          opacity: 0;
          transform: translateX(-28px);
          transition: opacity .7s ease .1s, transform .7s ease .1s;
        }

        .skills-info.vis {
          opacity: 1;
          transform: none;
        }

        .skills-card {
          padding: 30px;
          border-radius: 30px;
          background: rgba(255,255,255,0.54);
          border: 1px solid rgba(254,166,252,0.18);
          box-shadow: 0 20px 60px rgba(61,40,40,0.08);
          backdrop-filter: blur(14px);
        }

        .skills-card h3 {
          margin: 0 0 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 1.35rem;
          font-weight: 600;
          color: #3d2828;
        }

        .skills-card p {
          margin: 0 0 28px;
          font-family: 'DM Sans', sans-serif;
          font-size: .95rem;
          line-height: 1.75;
          color: rgba(61,40,40,0.72);
        }

        .skill-group {
          margin-bottom: 24px;
        }

        .skill-group:last-child {
          margin-bottom: 0;
        }

        .sg-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .sg-icon {
          width: 34px;
          height: 34px;
          border-radius: 12px;
          background: rgba(254,166,252,0.13);
          border: 1px solid rgba(254,166,252,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sg-title {
          font-family: 'DM Sans', sans-serif;
          font-size: .76rem;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #b96f74;
        }

        .sg-items {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .sg-item {
          padding: 7px 14px;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          font-size: .8rem;
          font-weight: 600;
          color: #a66a9c;
          background: rgba(254,166,252,0.08);
          border: 1px solid rgba(254,166,252,0.16);
          transition: transform .2s ease, background .2s ease, color .2s ease;
        }

        .sg-item:hover {
          transform: translateY(-2px);
          background: rgba(254,166,252,0.15);
          color: #8d4f84;
        }

        .keyboard-panel {
          opacity: 0;
          transform: translateX(28px) scale(.98);
          transition: opacity .8s ease .2s, transform .8s ease .2s;
        }

        .keyboard-panel.vis {
          opacity: 1;
          transform: none;
        }

        .keyboard-shell {
          position: relative;
          padding: 22px;
          border-radius: 34px;
          background:
            linear-gradient(145deg, rgba(255,255,255,.08), transparent 28%),
            linear-gradient(160deg, #1d1018 0%, #130a11 100%);
          border: 1px solid rgba(254,166,252,0.16);
          box-shadow:
            0 30px 90px rgba(31, 16, 24, .34),
            inset 0 1px 0 rgba(255,255,255,.06);
          overflow: hidden;
        }

        .keyboard-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 78% 12%, rgba(254,166,252,.14), transparent 26%),
            radial-gradient(circle at 20% 90%, rgba(97,218,251,.08), transparent 24%);
          pointer-events: none;
        }

        .keyboard-topbar {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          margin-bottom: 18px;
          border-bottom: 1px solid rgba(254,166,252,.08);
        }

        .kb-brand {
          font-family: 'VT323', monospace;
          font-size: .95rem;
          letter-spacing: 4px;
          color: rgba(254,166,252,.38);
        }

        .kb-leds {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .kb-led-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(254,166,252,.22);
        }

        .kb-led-dot:first-child {
          background: #fea6fc;
          box-shadow: 0 0 10px #fea6fc;
        }

        .keyboard-cat {
          position: relative;
          z-index: 1;
          height: 30px;
          margin-bottom: 10px;
          overflow: hidden;
        }

        .cat-runner {
          position: absolute;
          top: 2px;
          left: 0;
          font-size: 1.45rem;
          filter: drop-shadow(0 3px 5px rgba(0,0,0,.45));
          animation: catMove 7s ease-in-out infinite;
        }

        @keyframes catMove {
          0% {
            transform: translateX(0) scaleX(1);
          }
          45% {
            transform: translateX(420px) scaleX(1);
          }
          50% {
            transform: translateX(420px) scaleX(-1);
          }
          95% {
            transform: translateX(0) scaleX(-1);
          }
          100% {
            transform: translateX(0) scaleX(1);
          }
        }

        .keyboard-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
        }

        .skill-key {
          position: relative;
          min-height: 118px;
          padding: 16px 14px 18px;
          border: none;
          border-radius: 16px;
          cursor: pointer;
          background:
            linear-gradient(160deg, rgba(58,35,58,.96), rgba(27,13,22,.98));
          border-top: 2px solid rgba(254,166,252,.18);
          border-left: 1px solid rgba(254,166,252,.12);
          border-right: 1px solid rgba(0,0,0,.45);
          border-bottom: 5px solid rgba(0,0,0,.68);
          box-shadow:
            0 8px 0 rgba(0,0,0,.34),
            0 18px 28px rgba(0,0,0,.22),
            inset 0 1px 0 rgba(255,255,255,.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transform: translateY(14px);
          opacity: 0;
          animation: keyIn .55s ease forwards;
          transition:
            transform .12s ease,
            box-shadow .12s ease,
            border-bottom-width .12s ease,
            background .2s ease;
          -webkit-tap-highlight-color: transparent;
        }

        @keyframes keyIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-key:hover {
          transform: translateY(-3px);
          background:
            radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--key-color) 18%, transparent), transparent 45%),
            linear-gradient(160deg, rgba(64,38,64,.98), rgba(27,13,22,.98));
          box-shadow:
            0 9px 0 rgba(0,0,0,.34),
            0 22px 34px rgba(0,0,0,.28),
            0 0 24px color-mix(in srgb, var(--key-color) 26%, transparent),
            inset 0 1px 0 rgba(255,255,255,.06);
        }

        .skill-key.pressed {
          transform: translateY(4px);
          border-bottom-width: 1px;
          box-shadow:
            0 2px 0 rgba(0,0,0,.45),
            0 8px 16px rgba(0,0,0,.22),
            inset 0 1px 0 rgba(255,255,255,.05);
        }

        .key-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
        }

        .key-code {
          font-family: 'VT323', monospace;
          font-size: 1.05rem;
          letter-spacing: .08em;
          color: rgba(255,255,255,.38);
        }

        .key-emoji {
          font-size: 1.5rem;
          line-height: 1;
          transition: transform .18s ease;
        }

        .skill-key:hover .key-emoji {
          transform: scale(1.18) rotate(-4deg);
        }

        .key-name {
          display: block;
          margin-top: 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: .78rem;
          font-weight: 700;
          color: rgba(232,190,226,.86);
          text-align: center;
          line-height: 1.2;
        }

        .key-led {
          position: absolute;
          left: 50%;
          bottom: 9px;
          width: 18px;
          height: 2px;
          border-radius: 999px;
          transform: translateX(-50%);
          background: var(--key-color);
          opacity: .52;
          box-shadow: 0 0 10px var(--key-color);
          transition: width .2s ease, opacity .2s ease;
        }

        .skill-key:hover .key-led {
          width: 34px;
          opacity: 1;
        }

        .skill-preview {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 18px;
          padding: 16px;
          border-radius: 20px;
          background:
            radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--preview-color) 20%, transparent), transparent 36%),
            rgba(255,255,255,.055);
          border: 1px solid rgba(254,166,252,.11);
        }

        .preview-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,.24);
          font-size: 1.65rem;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.05);
        }

        .preview-text {
          min-width: 0;
        }

        .preview-label {
          display: block;
          margin-bottom: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: .68rem;
          font-weight: 700;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: rgba(254,166,252,.48);
        }

        .preview-text strong {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: #fff;
        }

        .preview-text p {
          margin: 3px 0 0;
          font-family: 'DM Sans', sans-serif;
          font-size: .78rem;
          line-height: 1.45;
          color: rgba(255,255,255,.58);
        }

        .keyboard-glow {
          position: absolute;
          left: 50%;
          bottom: -40px;
          width: 82%;
          height: 90px;
          transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(254,166,252,.2), transparent 70%);
          pointer-events: none;
        }

        @media (max-width: 1080px) {
          .skills-layout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .keyboard-shell {
            max-width: 680px;
            margin: 0 auto;
          }

          @keyframes catMove {
            0% {
              transform: translateX(0) scaleX(1);
            }
            45% {
              transform: translateX(520px) scaleX(1);
            }
            50% {
              transform: translateX(520px) scaleX(-1);
            }
            95% {
              transform: translateX(0) scaleX(-1);
            }
            100% {
              transform: translateX(0) scaleX(1);
            }
          }
        }

        @media (max-width: 680px) {
          .skills-s {
            padding: 96px 18px 80px;
          }

          .skills-head {
            margin-bottom: 46px;
          }

          .skills-card {
            padding: 22px;
            border-radius: 24px;
          }

          .keyboard-shell {
            padding: 16px;
            border-radius: 26px;
          }

          .keyboard-grid {
            gap: 9px;
          }

          .skill-key {
            min-height: 96px;
            padding: 12px 10px 16px;
            border-radius: 13px;
          }

          .key-code {
            font-size: .9rem;
          }

          .key-emoji {
            font-size: 1.25rem;
          }

          .key-name {
            font-size: .68rem;
          }

          .skill-preview {
            align-items: flex-start;
          }

          @keyframes catMove {
            0% {
              transform: translateX(0) scaleX(1);
            }
            45% {
              transform: translateX(260px) scaleX(1);
            }
            50% {
              transform: translateX(260px) scaleX(-1);
            }
            95% {
              transform: translateX(0) scaleX(-1);
            }
            100% {
              transform: translateX(0) scaleX(1);
            }
          }
        }

        @media (max-width: 440px) {
          .keyboard-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .skill-key {
            min-height: 92px;
          }
        }
      `}</style>

      <section id="skills" ref={secRef} className="skills-s">
        <div className="skills-wrap">
          <div className={`skills-head ${vis ? "vis" : ""}`}>
            <p className="skills-tag-small">{t(T.skills_tag, lang)}</p>
            <h2 className="skills-big-title">
              {t(T.skills_title, lang)}{" "}
              <span>{t(T.skills_title2, lang)}</span>
            </h2>
          </div>

          <div className="skills-layout">
            <div className={`skills-info ${vis ? "vis" : ""}`}>
              <div className="skills-card">
                <h3>Developer Toolkit</h3>
                <p>
                  Kullandığım teknolojileri sadece listelemek yerine, interaktif
                  bir klavye deneyimiyle gösteriyorum. Tuşların üzerine gelerek
                  her beceri hakkında kısa bilgi görebilirsin.
                </p>

                {getSkillGroups(lang).map((group) => (
                  <div key={group.title} className="skill-group">
                    <div className="sg-header">
                      <div className="sg-icon">{group.icon}</div>
                      <span className="sg-title">{group.title}</span>
                    </div>

                    <div className="sg-items">
                      {group.items.map((item) => (
                        <span key={item} className="sg-item">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`keyboard-panel ${vis ? "vis" : ""}`}>
              <div className="keyboard-shell">
                <div className="keyboard-topbar">
                  <span className="kb-brand">EZG.DEV</span>

                  <div className="kb-leds" aria-hidden="true">
                    <span className="kb-led-dot" />
                    <span className="kb-led-dot" />
                    <span className="kb-led-dot" />
                  </div>
                </div>

                <div className="keyboard-cat" aria-hidden="true">
                  <span className="cat-runner">🐈</span>
                </div>

                <div className="keyboard-grid">
                  {KEYS.map((item, index) => (
                    <SkillKey
                      key={item.id}
                      item={item}
                      index={index}
                      setActiveSkill={setActiveSkill}
                    />
                  ))}
                </div>

                <SkillPreview activeSkill={activeSkill} />

                <div className="keyboard-glow" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}