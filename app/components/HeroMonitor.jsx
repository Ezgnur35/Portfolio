"use client";
import { useState, useEffect, useRef } from "react";
import { useLang, T, t } from "../context/LangContext";

const ROLES_TR = ["bir junior developer", "bir frontend enthusiast", "bir oyun geliştiricisi", "bir problem çözücü"];
const ROLES_EN = ["a junior developer", "a frontend enthusiast", "a game developer", "a problem solver"];

export default function HeroMonitor() {
  const { lang } = useLang();
  const ROLES = lang === "en" ? ROLES_EN : ROLES_TR;

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [cvOpen, setCvOpen] = useState(false);
  const cvRef = useRef(null);

  // Dropdown dışına tıklayınca kapat
  useEffect(() => {
    function handleClick(e) {
      if (cvRef.current && !cvRef.current.contains(e.target)) setCvOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  const [blink, setBlink] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --accent: #fea6fc;
          --rose: #c476b6;
          --dark: #3d2828;
          --bg: #fdf6fb;
          --muted: #9e7a8a;
          --border: #e8c0e4;
          --screen-bg: #1a0e1a;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: var(--bg);
          font-family: 'DM Sans', sans-serif;
        }

        /* Navbar için boşluk bırak — navbar 64px yüksekliğinde olacak */
        .hero-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 120px; /* navbar yüksekliği + biraz boşluk */
          padding-bottom: 40px;
        }

        .scene {
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          width: 100%;
          padding: 0 20px; /* kenarlarda boşluk */
        }
        .scene.in { opacity: 1; transform: translateY(0); }

        .monitor-wrap {
          position: relative;
          filter: drop-shadow(0 40px 80px rgba(196,118,182,0.22));
          width: 100%;
          max-width: 1400px; /* maksimum genişlik */
        }

        .monitor-body {
          background: linear-gradient(160deg, #2a1e2a 0%, #1a1218 100%);
          border-radius: 16px 16px 6px 6px;
          padding: 12px 12px 18px;
          border: 1.5px solid #3a2a3a;
          position: relative;
        }

        .monitor-body::before {
          content: '';
          position: absolute;
          top: 0; left: 20%; right: 20%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(254,166,252,0.4), transparent);
        }

        .screen-bezel {
          background: #0d080d;
          border-radius: 8px;
          padding: 9px;
          border: 1px solid #2a1a2a;
          width: 100%; /* monitor-wrap'in genişliğine göre uzanır */
        }

        .screen {
          background: var(--screen-bg);
          border-radius: 6px;
          aspect-ratio: 16/9;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 5% 6% 5% 7%;
        }

        /* CRT tarama çizgileri */
        .screen::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent, transparent 2px,
            rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px
          );
          pointer-events: none;
          z-index: 10;
          border-radius: 6px;
        }

        /* Vignette */
        .screen::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.5) 100%);
          pointer-events: none;
          z-index: 11;
          border-radius: 6px;
        }

        .screen-glow {
          position: absolute;
          top: -20%; left: -10%;
          width: 55%; height: 70%;
          background: radial-gradient(ellipse, rgba(254,166,252,0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .screen-content {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 60%;
        }

        .greeting {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.7rem, 1.2vw, 1rem);
          font-weight: 400;
          color: var(--rose);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-bottom: 10px;
          opacity: 0;
          transform: translateY(10px);
          animation: fadeUp 0.5s ease 0.4s forwards;
        }

        .name {
          font-family: 'VT323', monospace;
          font-size: clamp(2.5rem, 6vw, 5.5rem); /* büyütüldü */
          color: #f5e6f5;
          line-height: 1.05;
          letter-spacing: 2px;
          opacity: 0;
          transform: translateY(10px);
          animation: fadeUp 0.5s ease 0.6s forwards;
        }
        .name span { color: var(--accent); }

        .role-line {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.85rem, 1.8vw, 1.4rem); /* büyütüldü */
          font-weight: 300;
          color: #c8a0c0;
          margin-top: 10px;
          height: 1.6em;
          opacity: 0;
          animation: fadeUp 0.5s ease 0.8s forwards;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background: var(--accent);
          margin-left: 3px;
          border-radius: 1px;
          transition: opacity 0.1s;
        }

        .desc {
          font-size: clamp(0.7rem, 1.2vw, 1rem); /* büyütüldü */
          color: #8a6080;
          font-weight: 300;
          line-height: 1.8;
          margin-top: 16px;
          opacity: 0;
          animation: fadeUp 0.5s ease 1s forwards;
        }

        .btns {
          display: flex;
          gap: 14px;
          margin-top: 28px;
          opacity: 0;
          animation: fadeUp 0.5s ease 1.2s forwards;
          flex-wrap: wrap; /* küçük ekranda alt alta geçer */
        }

        .btn-primary {
          padding: 10px 28px;
          border-radius: 24px;
          border: none;
          background: linear-gradient(135deg, var(--accent), var(--rose));
          color: #2a0a2a;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.65rem, 1.1vw, 0.9rem); /* büyütüldü */
          font-weight: 500;
          cursor: pointer;
          letter-spacing: 0.05em;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(254,166,252,0.35);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(254,166,252,0.5);
        }

        .btn-outline {
          padding: 10px 28px;
          border-radius: 24px;
          border: 1px solid rgba(196,118,182,0.35);
          background: transparent;
          color: #c8a0c0;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.65rem, 1.1vw, 0.9rem);
          font-weight: 400;
          cursor: pointer;
          letter-spacing: 0.05em;
          transition: all 0.2s;
        }
        .btn-outline:hover {
          border-color: var(--rose);
          color: var(--rose);
          background: rgba(196,118,182,0.08);
        }

        /* CV Dropdown wrapper */
        .cv-wrap {
          position: relative;
          display: inline-block;
        }
        .cv-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          background: rgba(26,14,26,0.97);
          border: 1px solid rgba(254,166,252,0.18);
          border-radius: 12px;
          overflow: hidden;
          backdrop-filter: blur(16px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          opacity: 0;
          transform: translateY(-6px);
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          z-index: 99;
          min-width: 160px;
        }
        .cv-dropdown.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }
        .cv-option {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.83rem;
          font-weight: 500;
          color: rgba(200,160,192,0.85);
          text-decoration: none;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
        }
        .cv-option:hover {
          background: rgba(254,166,252,0.08);
          color: #fea6fc;
        }
        .cv-option + .cv-option {
          border-top: 1px solid rgba(254,166,252,0.08);
        }
        .cv-flag { font-size: 1rem; }

        /* Güç LED */
        .power-led {
          position: absolute;
          bottom: 10px;
          right: 16px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent);
          animation: ledPulse 3s ease-in-out infinite;
        }

        /* Stand */
        .stand-neck {
          width: 70px;
          height: 24px;
          background: linear-gradient(180deg, #1e1218 0%, #271820 100%);
          margin: 0 auto;
          clip-path: polygon(20% 0%, 80% 0%, 95% 100%, 5% 100%);
        }

        .stand-base {
          width: 200px;
          height: 12px;
          background: linear-gradient(180deg, #221520 0%, #1a1018 100%);
          border-radius: 0 0 28px 28px;
          margin: 0 auto;
          border-bottom: 1.5px solid #3a2a3a;
          position: relative;
        }
        .stand-base::before {
          content: '';
          position: absolute;
          top: 0; left: 15%; right: 15%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(254,166,252,0.15), transparent);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          /* Tablet ve telefonda monitör tam genişlik */
          .monitor-wrap { max-width: 100%; }

          .screen-content { max-width: 100%; }

          .name { font-size: clamp(2rem, 8vw, 3rem); }
          .role-line { font-size: clamp(0.8rem, 3vw, 1rem); }
          .desc { font-size: clamp(0.65rem, 2.5vw, 0.85rem); }

          .btns { gap: 10px; }
          .btn-primary, .btn-outline { padding: 8px 20px; }

          .stand-base { width: 140px; }
          .stand-neck { width: 50px; }
        }

        @media (max-width: 480px) {
          /* Küçük telefon */
          .hero-wrapper { padding-top: 70px; }
          .scene { padding: 0 10px; }
          .screen { padding: 6% 5%; }
          .name { font-size: clamp(1.6rem, 9vw, 2.5rem); }
        }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes ledPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      {/* hero-wrapper: navbar boşluğu + dikeyde ortala */}
      <div className="hero-wrapper">
        <div className={`scene ${mounted ? "in" : ""}`}>
          <div className="monitor-wrap">
            <div className="monitor-body">
              <div className="screen-bezel">
                <div className="screen">
                  <div className="screen-glow" />

                  <div className="screen-content">
                    <div className="greeting">{t(T.hero_greeting, lang)}</div>
                    <div className="name">Hi I&apos;m <span>Ezginur</span></div>
                    <div className="role-line">
                      {displayed}
                      <span className="cursor" style={{ opacity: blink ? 1 : 0 }} />
                    </div>
                    <div className="desc">
                      {lang === "tr"
                        ? <>"İzmir'de bilgisayar programcılığı okuyan,<br />web &amp; oyun geliştirme tutkunu junior developer."</>
                        : <>A junior developer passionate about<br />web &amp; mobile development, based in İzmir.</>
                      }
                    </div>
                    <div className="btns">
                      <a href="#projects" className="btn-primary" style={{ textDecoration: "none" }}>
                        {t(T.hero_see_projects, lang)}
                      </a>

                      {/* CV İndir — TR/EN dropdown */}
                      <div className="cv-wrap" ref={cvRef}>
                        <button
                          className="btn-outline"
                          onClick={() => setCvOpen(o => !o)}
                          aria-haspopup="true"
                          aria-expanded={cvOpen}
                        >
                          {t(T.hero_cv_btn, lang)}
                        </button>
                   <div className={`cv-dropdown ${cvOpen ? "open" : ""}`}>
  <a
    href="/CV/cv-tr.pdf"
    download="Ezginur_Unver_TR_CV.pdf"
    className="cv-option"
    onClick={() => setCvOpen(false)}
  >
    <span className="cv-flag">🇹🇷</span>
    {t(T.hero_cv_tr, lang)}
  </a>

  <a
    href="/CV/cv-en.pdf"
    download="Ezginur_Unver_EN_CV.pdf"
    className="cv-option"
    onClick={() => setCvOpen(false)}
  >
    <span className="cv-flag">🇬🇧</span>
    {t(T.hero_cv_en, lang)}
  </a>
</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="power-led" />
            </div>
            <div className="stand-neck" />
            <div className="stand-base" />
          </div>
        </div>
      </div>
    </>
  );
}