"use client";

import { useEffect, useState } from "react";

export default function Lanyard() {
  const [swinging, setSwinging] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSwinging(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=DM+Sans:wght@500;600;700;800&display=swap');

        .lanyard-section {
          position: absolute;
          top: 88px;
          right: 72px;
          width: 210px;
          height: 430px;
          z-index: 20;
          pointer-events: none;
        }

        .lanyard-unit {
          position: relative;
          width: 190px;
          margin: 0 auto;
          transform-origin: top center;
          pointer-events: auto;
          user-select: none;
          will-change: transform;
        }

        .lanyard-unit.swinging {
          animation: lanyardSwing 1.45s ease-in-out 3;
        }

        @keyframes lanyardSwing {
          0% {
            transform: rotate(0deg);
          }

          18% {
            transform: rotate(7deg);
          }

          42% {
            transform: rotate(-5deg);
          }

          68% {
            transform: rotate(3deg);
          }

          100% {
            transform: rotate(0deg);
          }
        }

        .lanyard-strap {
          position: relative;
          width: 74px;
          height: 150px;
          margin: 0 auto;
        }

        .strap-left,
        .strap-right {
          position: absolute;
          top: 0;
          width: 18px;
          height: 142px;
          border-radius: 999px;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.18), transparent 28%, rgba(0,0,0,0.18)),
            linear-gradient(180deg, #ff9cff, #b86cff);
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.18),
            0 0 20px rgba(255, 140, 255, 0.24);
        }

        .strap-left {
          left: 12px;
          transform: rotate(10deg);
          transform-origin: top center;
        }

        .strap-right {
          right: 12px;
          transform: rotate(-10deg);
          transform-origin: top center;
        }

        .strap-print {
          position: absolute;
          top: 34px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.5rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.56);
          white-space: nowrap;
        }

        .strap-connector {
          position: absolute;
          left: 50%;
          bottom: -2px;
          width: 36px;
          height: 26px;
          transform: translateX(-50%);
          border-radius: 8px;
          background: linear-gradient(145deg, #f4f4f6, #9d9daa);
          border: 1px solid rgba(80, 80, 90, 0.3);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.86),
            0 5px 12px rgba(0,0,0,0.2);
        }

        .metal-ring {
          position: relative;
          width: 34px;
          height: 34px;
          margin: -3px auto 0;
          border-radius: 50%;
          border: 5px solid #cfcfd6;
          background: transparent;
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.6),
            0 4px 10px rgba(0,0,0,0.22);
          z-index: 2;
        }

        .metal-hook {
          position: relative;
          width: 22px;
          height: 34px;
          margin: -5px auto -2px;
          border-radius: 10px 10px 12px 12px;
          border: 4px solid #d6d6dc;
          border-top-color: transparent;
          box-shadow: 0 4px 9px rgba(0,0,0,0.18);
          z-index: 1;
        }

        .badge-holder {
          position: relative;
          width: 190px;
          padding: 9px;
          border-radius: 22px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.72), rgba(255,255,255,0.28)),
            rgba(255,255,255,0.38);
          border: 1px solid rgba(255,255,255,0.72);
          box-shadow:
            0 20px 38px rgba(40, 18, 48, 0.28),
            inset 0 1px 0 rgba(255,255,255,0.9),
            inset 0 -1px 0 rgba(170, 120, 180, 0.18);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .badge-holder::before {
          content: "";
          position: absolute;
          top: 10px;
          left: 50%;
          width: 52px;
          height: 10px;
          transform: translateX(-50%);
          border-radius: 0 0 14px 14px;
          background: rgba(255,255,255,0.82);
          box-shadow: inset 0 -1px 0 rgba(180, 150, 190, 0.28);
          z-index: 2;
        }

        .badge-card {
          position: relative;
          overflow: hidden;
          border-radius: 17px;
          background: #1f1424;
          border: 1px solid rgba(255, 140, 255, 0.26);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 10px 22px rgba(0,0,0,0.18);
        }

        .badge-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, rgba(255,255,255,0.16), transparent 34%),
            radial-gradient(circle at bottom right, rgba(255, 140, 255, 0.16), transparent 42%);
          pointer-events: none;
        }

        .badge-head {
          padding: 16px 12px 10px;
          text-align: center;
          border-bottom: 1px solid rgba(255, 140, 255, 0.14);
        }

        .badge-brand {
          font-family: 'VT323', monospace;
          font-size: 1.05rem;
          letter-spacing: 2px;
          color: #ffb3ff;
          text-shadow: 0 0 16px rgba(255, 140, 255, 0.24);
        }

        .photo-box {
          padding: 14px 12px 9px;
          display: flex;
          justify-content: center;
        }

        .photo-ring {
          width: 112px;
          height: 112px;
          border-radius: 50%;
          padding: 4px;
          background: linear-gradient(135deg, #ff9cff, #b86cff);
          box-shadow:
            0 0 20px rgba(255, 140, 255, 0.28),
            0 10px 20px rgba(0, 0, 0, 0.18);
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: center 38%;
          display: block;
          background: #ffffff;
        }

        .badge-info {
          padding: 9px 12px 16px;
          text-align: center;
        }

        .badge-name {
          font-family: 'VT323', monospace;
          font-size: 1.55rem;
          line-height: 1;
          color: #fff0fc;
          letter-spacing: 1.4px;
        }

        .badge-role {
          margin-top: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 235, 252, 0.72);
        }

        .badge-code {
          margin-top: 11px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 5px 10px;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.56rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #fff0fc;
          background: rgba(255, 140, 255, 0.13);
          border: 1px solid rgba(255, 140, 255, 0.28);
        }

        .badge-bottom {
          height: 6px;
          background: linear-gradient(90deg, #ff8cff, #b86cff, #ff8cff);
        }

        @media (max-width: 1100px) {
          .lanyard-section {
            right: 36px;
            transform: scale(0.88);
            transform-origin: top right;
          }
        }

        @media (max-width: 900px) {
          .lanyard-section {
            display: none;
          }
        }
      `}</style>

      <div className="lanyard-section">
        <div className={`lanyard-unit ${swinging ? "swinging" : ""}`}>
          <div className="lanyard-strap">
            <div className="strap-left">
              <span className="strap-print">EZGINUR.DEV</span>
            </div>

            <div className="strap-right">
              <span className="strap-print">PORTFOLIO</span>
            </div>

            <div className="strap-connector" />
          </div>

          <div className="metal-ring" />
          <div className="metal-hook" />

          <div className="badge-holder">
            <div className="badge-card">
              <div className="badge-head">
                <span className="badge-brand">PORTFOLIO ID</span>
              </div>

              <div className="photo-box">
                <div className="photo-ring">
               <img
  src="/profile.png"
  alt="Ezginur profile"
  className="profile-photo"
  draggable="false"
/>
                </div>
              </div>

              <div className="badge-info">
                <div className="badge-name">Ezginur</div>
                <div className="badge-role">Frontend Developer</div>
                <div className="badge-code">WEB · UI · GAME</div>
              </div>

              <div className="badge-bottom" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}