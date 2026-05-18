"use client";

import { useEffect, useRef, useState } from "react";
import { CometCard } from "./ui/comet-card";
import { useLang, T, t } from "../context/LangContext";

export default function About() {
  const { lang } = useLang();
  const secRef = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.08 }
    );

    if (secRef.current) obs.observe(secRef.current);

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .about-s {
          min-height: 100vh;
          padding: 120px 40px 100px;
          position: relative;
          background: #fdf6fb;
          overflow: hidden;
        }

        .about-s::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(196,118,182,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,118,182,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .about-head {
          text-align: center;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity .6s ease, transform .6s ease;
          position: relative;
          z-index: 1;
        }

        .about-head.vis {
          opacity: 1;
          transform: none;
        }

        .about-tag-small {
          font-family: 'DM Sans', sans-serif;
          font-size: .72rem;
          font-weight: 700;
          letter-spacing: .35em;
          text-transform: uppercase;
          color: #c85bcf;
          margin-bottom: 10px;
        }

        .about-big-title {
          font-family: 'VT323', monospace;
          font-size: clamp(3rem, 5vw, 5rem);
          color: #302335;
          letter-spacing: 3px;
          line-height: 1;
        }

        .about-big-title span {
          color: #ff8cff;
        }

        .about-frame {
          position: relative;
          max-width: 1180px;
          margin: 0 auto;
          padding: 26px;
          border-radius: 30px;
          overflow: hidden;
        }

        .about-frame-line {
          position: absolute;
          inset: 0;
          border-radius: 30px;
          padding: 2px;
          background:
            linear-gradient(90deg, transparent, #ff8cff, #b86cff, #ff8cff, transparent) border-box;
          background-size: 300% 300%;
          animation: aboutBorderFlow 4s linear infinite;
          pointer-events: none;
          filter: drop-shadow(0 0 14px rgba(255, 140, 255, 0.5));
        }

        .about-frame-line::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 30px;
          padding: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 140, 255, 0.2) 20%,
            #ff8cff 40%,
            #b86cff 55%,
            #ff8cff 70%,
            rgba(255, 140, 255, 0.2) 85%,
            transparent 100%
          );
          background-size: 300% 100%;
          animation: aboutBorderFlow 3.5s linear infinite;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .about-frame-line::after {
          content: "";
          position: absolute;
          inset: 2px;
          border-radius: 28px;
          background: #fdf6fb;
        }

        @keyframes aboutBorderFlow {
          0% {
            background-position: 300% 0;
          }

          100% {
            background-position: -300% 0;
          }
        }

        .about-grid {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .about-card-wrap {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .5s ease, transform .5s ease;
        }

        .about-card-wrap.vis {
          opacity: 1;
          transform: none;
        }

        .about-card-wrap:nth-child(1) {
          transition-delay: 0.1s;
        }

        .about-card-wrap:nth-child(2) {
          transition-delay: 0.2s;
        }

        .about-card-wrap:nth-child(3) {
          transition-delay: 0.3s;
        }

        .card-pad {
          padding: 36px 32px;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          background: #1f1424;
          border: 1px solid rgba(255, 140, 255, 0.24);
          box-shadow:
            0 22px 55px rgba(80, 40, 90, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          overflow: hidden;
          position: relative;
          color: #ffe8fb;
        }

        .card-pad::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(255, 140, 255, 0.14), transparent 34%),
            radial-gradient(circle at bottom right, rgba(184, 108, 255, 0.12), transparent 38%);
          pointer-events: none;
        }

        .card-pad > * {
          position: relative;
          z-index: 1;
        }

        .c-title {
          font-family: 'VT323', monospace;
          font-size: 1.85rem;
          color: #ffb3ff;
          letter-spacing: 2px;
          line-height: 1;
          margin-bottom: 4px;
          text-shadow: 0 0 18px rgba(255, 140, 255, 0.25);
        }

        .c-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: .74rem;
          color: rgba(255, 225, 250, 0.68);
          font-weight: 600;
          letter-spacing: .04em;
          margin-bottom: 16px;
        }

        .c-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(255,140,255,0.38), transparent);
          margin-bottom: 16px;
        }

        .c-body {
          font-family: 'DM Sans', sans-serif;
          font-size: .86rem;
          color: rgba(255, 235, 252, 0.84);
          line-height: 1.85;
          font-weight: 400;
          flex: 1;
        }

        .c-body strong {
          color: #ffffff;
          font-weight: 700;
        }

        .tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 16px;
        }

        .c-tag {
          padding: 4px 12px;
          border-radius: 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: .68rem;
          font-weight: 700;
          border: 1px solid rgba(255,140,255,0.32);
          background: rgba(255,140,255,0.12);
          color: rgba(255, 235, 252, 0.9);
          transition: all .2s;
          cursor: default;
        }

        .c-tag:hover {
          background: rgba(255,140,255,0.22);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .edu-item {
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,140,255,0.14);
        }

        .edu-item:first-child {
          padding-top: 0;
        }

        .edu-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .edu-school {
          font-family: 'DM Sans', sans-serif;
          font-size: .86rem;
          font-weight: 700;
          color: #ffffff;
        }

        .edu-dept {
          font-family: 'DM Sans', sans-serif;
          font-size: .75rem;
          color: rgba(255, 235, 252, 0.68);
          margin-top: 2px;
        }

        .edu-year {
          font-family: 'VT323', monospace;
          font-size: .98rem;
          color: #ffb3ff;
          margin-top: 3px;
          letter-spacing: 1px;
        }

        .hobbies-wrap {
          display: flex;
          flex-wrap: wrap;
          margin-top: 4px;
          flex: 1;
          align-content: flex-start;
        }

        .hobby-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          border-radius: 20px;
          background: rgba(255,140,255,0.12);
          border: 1px solid rgba(255,140,255,0.28);
          font-family: 'DM Sans', sans-serif;
          font-size: .74rem;
          font-weight: 700;
          color: rgba(255, 235, 252, 0.9);
          margin: 0 6px 7px 0;
          transition: all .2s;
          cursor: default;
        }

        .hobby-chip:hover {
          background: rgba(255,140,255,0.22);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .lang-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 18px;
        }

        .lang-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 11px;
          border-radius: 999px;
          background: rgba(255, 140, 255, 0.13);
          border: 1px solid rgba(255, 140, 255, 0.3);
          color: #fff0fc;
          font-family: 'DM Sans', sans-serif;
          font-size: .72rem;
          font-weight: 700;
          box-shadow: 0 0 16px rgba(255, 140, 255, 0.08);
        }

        .lang-level {
          color: #ffb3ff;
          font-family: 'VT323', monospace;
          font-size: .9rem;
          letter-spacing: 1px;
        }

        @media (max-width: 900px) {
          .about-frame {
            padding: 18px;
          }

          .about-grid {
            grid-template-columns: 1fr;
          }

          .about-s {
            padding: 100px 20px 80px;
          }

          .card-pad {
            min-height: auto;
          }
        }

        @media (max-width: 480px) {
          .about-s {
            padding: 90px 12px 70px;
          }

          .about-frame {
            padding: 12px;
          }
        }
      `}</style>

      <section id="about" ref={secRef} className="about-s">
        <div className={`about-head ${vis ? "vis" : ""}`}>
          <p className="about-tag-small">{t(T.about_tag, lang)}</p>

          <h2 className="about-big-title">
            {t(T.about_title, lang)}{" "}
            <span>{t(T.about_me, lang)}</span>
          </h2>
        </div>

        <div className="about-frame">
          <div className="about-frame-line"></div>

          <div className="about-grid">
            <div className={`about-card-wrap ${vis ? "vis" : ""}`}>
              <CometCard>
                <div className="card-pad">
                  <p className="c-title">{t(T.card1_title, lang)}</p>
                  <p className="c-sub">{t(T.card1_sub, lang)}</p>
                  <div className="c-divider" />

                  <p className="c-body">
                    {lang === "tr" ? (
                      <>
                        Bilgisayar Programcılığı öğrencisiyim. Web arayüzleri,
                        frontend geliştirme ve kullanıcı deneyimi üzerine
                        kendimi geliştiriyorum. Tasarımı kodla birleştirmeyi,
                        sade ama dikkat çekici arayüzler oluşturmayı seviyorum.
                        Öğrendiklerimi küçük projelere dönüştürerek ilerliyorum.{" "}
                        <strong>Proje tabanlı öğrenmeyi</strong> ve gerçek dünya
                        problemlerini çözmeyi seviyorum.
                      </>
                    ) : (
                      <>
                        I am a Computer Programming student focused on web
                        interfaces, frontend development and user experience. I
                        enjoy combining design with code and creating clean,
                        visually engaging interfaces. I improve myself by turning
                        what I learn into small projects. I enjoy{" "}
                        <strong>project-based learning</strong> and solving
                        real-world problems.
                      </>
                    )}
                  </p>

                  <div className="tags-wrap">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "React",
                      "Next.js",
                      "Tailwind",
                      "C#",
                      "SQL",
                    ].map((item) => (
                      <span key={item} className="c-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </CometCard>
            </div>

            <div className={`about-card-wrap ${vis ? "vis" : ""}`}>
              <CometCard>
                <div className="card-pad">
                  <p className="c-title">Eğitim</p>
                  <p className="c-sub">Akademik &amp; Kişisel</p>
                  <div className="c-divider" />

                  <div style={{ flex: 1 }}>
                    <div className="edu-item">
                      <p className="edu-school">İzmir Ekonomi Üniversitesi</p>
                      <p className="edu-dept">
                        Bilgisayar Programcılığı — Önlisans
                      </p>
                      <p className="edu-year">2023 → Devam ediyor</p>
                    </div>

                    <div className="edu-item">
                      <p className="edu-school">Udemy</p>
                      <p className="edu-dept">
                        Python Web Scraping · BeautifulSoup · Selenium · Scrapy
                      </p>
                      <p className="edu-year">2025</p>
                    </div>

                    <div className="edu-item">
                      <p className="edu-school">Kişisel Projeler</p>
                      <p className="edu-dept">
                        CodeDungeon · Mobil Mouse · MentalMap · Personal Finance
                        API
                      </p>
                      <p className="edu-year">2024 → 2025</p>
                    </div>
                  </div>
                </div>
              </CometCard>
            </div>

            <div className={`about-card-wrap ${vis ? "vis" : ""}`}>
              <CometCard>
                <div className="card-pad">
                  <p className="c-title">İlgi Alanları</p>
                  <p className="c-sub">Kod dışında ne yapıyorum?</p>
                  <div className="c-divider" />

                  <div className="hobbies-wrap">
                    {[
                      { icon: "🎮", label: "Oyun Geliştirme" },
                      { icon: "🌐", label: "Web Tasarım" },
                      { icon: "✨", label: "UI Animasyonları" },
                      { icon: "🖼️", label: "Pixel Art" },
                      { icon: "🎨", label: "Çizim" },
                      { icon: "♟️", label: "Satranç" },
                      { icon: "🧱", label: "Lego" },
                    ].map((hobby) => (
                      <span key={hobby.label} className="hobby-chip">
                        {hobby.icon} {hobby.label}
                      </span>
                    ))}
                  </div>

                  <div className="lang-list">
                    <span className="lang-chip">
                      🇹🇷 Türkçe <span className="lang-level">Ana Dil</span>
                    </span>

                    <span className="lang-chip">
                      🇬🇧 İngilizce <span className="lang-level">B1</span>
                    </span>

                    <span className="lang-chip">
                      🇩🇪 Almanca <span className="lang-level">A2</span>
                    </span>
                  </div>
                </div>
              </CometCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}