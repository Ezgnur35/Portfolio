"use client";

import { useEffect, useRef, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d_kart";
import { useLang, T, t } from "../context/LangContext";

const PROJECTS = [
  {
    id: 1,
    name: "Finance Assistant API",
    emoji: "💰",
    desc: "Kişisel gelir-gider takibi için geliştirilen REST API projesi. Kullanıcı, kategori, işlem yönetimi ve finansal veri takibi mantığını içerir.",
    tags: ["Python", "FastAPI", "SQL", "REST API"],
    github: "https://github.com/Ezgnur35/Finance_asistant_API",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "RED VELVET HOTEL OTOMASYONU",
    emoji: "🏨",
    desc: "Windows Forms ile geliştirilen otel otomasyonu. Rezervasyon, oda yönetimi, misafir işlemleri, personel işlemleri ve SQL Server bağlantısı içerir.",
    tags: ["C#", "Windows Forms", "SQL Server", "Desktop"],
    github: "https://github.com/Ezgnur35/Red_Velvet_Hotel_-Automation",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "POSTURECOACH",
    emoji: "🧘‍♀️",
    desc: "Webcam üzerinden pilates/yoga duruşunu analiz eden posture coach projesi. MediaPipe Pose ile vücut noktalarını takip edip canlı geri bildirim verir.",
    tags: ["JavaScript", "MediaPipe", "Webcam", "Pose Detection"],
    github: "https://github.com/Ezgnur35/Posture_coach",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
  },
];

function ProjectCard({ project, delay, vis }) {
  return (
    <div
      className={`proj-card ${vis ? "vis" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CardContainer
        className="project-3d-container"
        containerClassName="project-3d-wrapper"
      >
        <CardBody className="project-3d-body">
          <CardItem translateZ={35} className="proj-top">
            <div className="proj-emoji">{project.emoji}</div>
            <span className="proj-year">{project.year}</span>
          </CardItem>

          <CardItem translateZ={55} className="proj-name">
            {project.name}
          </CardItem>

          <CardItem as="p" translateZ={65} className="proj-desc">
            {project.desc}
          </CardItem>

          <CardItem translateZ={95} className="proj-image-wrap">
            <img src={project.image} alt={project.name} className="proj-image" />
          </CardItem>

          <CardItem translateZ={75} className="proj-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="proj-tag">
                {tag}
              </span>
            ))}
          </CardItem>

          <div className="proj-bottom">
            <CardItem
              translateZ={50}
              as="a"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="proj-link"
              aria-label={`${project.name} GitHub reposuna git`}
            >
              GitHub →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}

export default function Projects() {
  const { lang } = useLang();
  const secRef = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.05 }
    );

    if (secRef.current) obs.observe(secRef.current);

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        .projects-s {
          min-height: 100vh;
          padding: 120px 36px 100px;
          background: #fdf6fb;
          position: relative;
          overflow: hidden;
        }

        .projects-s::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(196,118,182,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,118,182,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .projects-head {
          text-align: center;
          margin-bottom: 70px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .7s ease, transform .7s ease;
          position: relative;
          z-index: 1;
        }

        .projects-head.vis {
          opacity: 1;
          transform: none;
        }

        .proj-tag-small {
          font-family: 'DM Sans', sans-serif;
          font-size: .72rem;
          font-weight: 800;
          letter-spacing: .35em;
          text-transform: uppercase;
          color: #c85bcf;
          margin-bottom: 10px;
        }

        .proj-big-title {
          font-family: 'VT323', monospace;
          font-size: clamp(3rem, 5vw, 5rem);
          color: #302335;
          letter-spacing: 3px;
          line-height: 1;
        }

        .proj-big-title span {
          color: #ff8cff;
        }

        .proj-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: #8f5a94;
          margin-top: 12px;
          font-weight: 600;
        }

        .projects-frame {
          position: relative;
          max-width: 1320px;
          margin: 0 auto;
          padding: 34px;
          border-radius: 34px;
          overflow: visible;
          background:
            radial-gradient(circle at top left, rgba(255, 140, 255, 0.10), transparent 34%),
            linear-gradient(145deg, #fae8f7 0%, #f5dff1 100%);
          box-shadow:
            0 24px 70px rgba(190, 95, 190, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
        }

        .projects-frame-line {
          position: absolute;
          inset: 0;
          border-radius: 34px;
          pointer-events: none;
          filter: drop-shadow(0 0 14px rgba(255, 140, 255, 0.5));
          z-index: 1;
        }

        .projects-frame-line::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 34px;
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
          animation: projectsBorderFlow 3.5s linear infinite;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        @keyframes projectsBorderFlow {
          0% {
            background-position: 300% 0;
          }

          100% {
            background-position: -300% 0;
          }
        }

        .projects-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
          max-width: 1240px;
          margin: 0 auto;
          overflow: visible;
        }

        .proj-card {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity .6s ease, transform .6s ease;
          overflow: visible;
        }

        .proj-card.vis {
          opacity: 1;
          transform: none;
        }

        .project-3d-wrapper {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .project-3d-container {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .project-3d-body {
          position: relative;
          width: 100%;
          min-height: 550px;
          height: 100%;
          padding: 24px;
          border-radius: 22px;
          background: #1f1424;
          border: 1px solid rgba(255, 140, 255, 0.28);
          box-shadow:
            0 22px 55px rgba(80, 40, 90, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.07);
          overflow: visible;
          color: #ffe8fb;
          display: flex;
          flex-direction: column;
        }

        .project-3d-body::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 22px;
          background:
            radial-gradient(circle at top left, rgba(255, 140, 255, 0.15), transparent 34%),
            radial-gradient(circle at bottom right, rgba(184, 108, 255, 0.13), transparent 38%);
          pointer-events: none;
        }

        .project-3d-body::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          pointer-events: none;
        }

        .proj-top {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
          position: relative;
          z-index: 2;
        }

        .proj-emoji {
          width: 48px;
          height: 48px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.55rem;
          background: rgba(255, 140, 255, 0.13);
          border: 1px solid rgba(255, 140, 255, 0.3);
          box-shadow: 0 0 18px rgba(255, 140, 255, 0.08);
        }

        .proj-year {
          font-family: 'VT323', monospace;
          font-size: 0.95rem;
          color: #ffb3ff;
          letter-spacing: 1px;
        }

        .proj-name {
          font-family: 'VT323', monospace;
          font-size: 1.58rem;
          letter-spacing: 1.7px;
          line-height: 1.1;
          color: #ffb3ff;
          margin-bottom: 10px;
          text-shadow: 0 0 18px rgba(255, 140, 255, 0.28);
          position: relative;
          z-index: 2;
        }

        .proj-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          color: rgba(255, 235, 252, 0.86);
          line-height: 1.65;
          font-weight: 500;
          margin: 0 0 16px;
          min-height: 96px;
          position: relative;
          z-index: 2;
        }

        .proj-image-wrap {
          width: 100%;
          margin-top: 6px;
          margin-bottom: 18px;
          position: relative;
          z-index: 2;
        }

        .proj-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 18px;
          border: 1px solid rgba(255, 140, 255, 0.24);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.28);
          display: block;
        }

        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: auto;
          position: relative;
          z-index: 2;
        }

        .proj-tag {
          padding: 5px 12px;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.64rem;
          font-weight: 800;
          border: 1px solid rgba(255,140,255,0.34);
          background: rgba(255,140,255,0.13);
          color: rgba(255, 235, 252, 0.94);
          transition: all .2s;
        }

        .proj-tag:hover {
          background: rgba(255,140,255,0.24);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .proj-bottom {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-top: 22px;
          position: relative;
          z-index: 2;
        }

        .proj-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 18px;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 800;
          text-decoration: none;
          cursor: pointer;
          border: 1px solid rgba(255,140,255,0.34);
          color: #fff0fc;
          background: rgba(255,140,255,0.14);
          transition: all .2s;
        }

        .proj-link:hover {
          background: rgba(255,140,255,0.26);
          color: #ffffff;
        }

        @media (max-width: 1180px) {
          .projects-grid {
            grid-template-columns: 1fr;
            max-width: 540px;
          }

          .project-3d-body {
            min-height: auto;
          }

          .projects-frame {
            max-width: 650px;
            padding: 26px;
          }
        }

        @media (max-width: 768px) {
          .projects-s {
            padding: 100px 20px 80px;
          }

          .projects-head {
            margin-bottom: 56px;
          }

          .proj-image {
            height: 190px;
          }
        }

        @media (max-width: 480px) {
          .projects-s {
            padding: 90px 12px 70px;
          }

          .projects-frame {
            padding: 14px;
          }

          .project-3d-body {
            padding: 20px;
          }

          .proj-name {
            font-size: 1.45rem;
          }

          .proj-desc {
            font-size: 0.76rem;
            min-height: auto;
          }

          .proj-image {
            height: 160px;
          }
        }
      `}</style>

      <section id="projects" ref={secRef} className="projects-s">
        <div className={`projects-head ${vis ? "vis" : ""}`}>
          <p className="proj-tag-small">{t(T.proj_tag, lang)}</p>

          <h2 className="proj-big-title">
            {t(T.proj_title, lang)}{" "}
            <span>{t(T.proj_title2, lang)}</span>
          </h2>

          <p className="proj-subtitle">{t(T.proj_subtitle, lang)}</p>
        </div>

        <div className="projects-frame">
          <div className="projects-frame-line"></div>

          <div className="projects-grid">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 120}
                vis={vis}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}