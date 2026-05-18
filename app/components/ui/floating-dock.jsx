"use client";

import { useState } from "react";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`fd-mobile-wrap ${className || ""}`}>
      <style>{`
        .fd-mobile-wrap {
          position: relative;
          display: block;
        }
        @media (min-width: 768px) {
          .fd-mobile-wrap { display: none; }
        }
        .fd-mobile-menu {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 8px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
          pointer-events: none;
          opacity: 0;
          transform: translateX(-50%) translateY(8px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .fd-mobile-menu.open {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
          pointer-events: all;
        }
        .fd-mobile-icon-btn {
          width: 40px; height: 40px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(253,246,251,0.9);
          border: 1px solid rgba(254,166,252,0.2);
          text-decoration: none;
          transition: transform 0.2s, background 0.2s;
        }
        .fd-mobile-icon-btn:hover {
          background: rgba(254,166,252,0.12);
          transform: scale(1.1);
        }
        .fd-mobile-icon-btn .fd-icon-inner { width: 18px; height: 18px; }
        .fd-toggle-btn {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: none;
          background: rgba(253,246,251,0.9);
          border: 1px solid rgba(254,166,252,0.2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        .fd-toggle-btn:hover { background: rgba(254,166,252,0.12); }
      `}</style>
      <div className={`fd-mobile-menu ${open ? "open" : ""}`}>
        {items.map((item) => (
          <a key={item.title} href={item.href} className="fd-mobile-icon-btn" title={item.title}>
            <div className="fd-icon-inner">{item.icon}</div>
          </a>
        ))}
      </div>
      <button onClick={() => setOpen(!open)} className="fd-toggle-btn" aria-label="Menü">
        <IconLayoutNavbarCollapse style={{ width: 20, height: 20, color: "#9e7a8a" }} />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  return (
    <div className={`fd-desktop-wrap ${className || ""}`}>
      <style>{`
        .fd-desktop-wrap {
          display: none;
        }
        @media (min-width: 768px) {
          .fd-desktop-wrap {
            display: flex;
            align-items: flex-end;
            gap: 10px;
            height: 64px;
            padding: 0 16px 12px;
            border-radius: 20px;
            background: rgba(253,246,251,0.85);
            border: 1px solid rgba(254,166,252,0.15);
            backdrop-filter: blur(12px);
          }
        }
        .fd-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(254,166,252,0.06);
          border: 1px solid rgba(254,166,252,0.12);
          text-decoration: none;
          transition: width 0.2s ease, height 0.2s ease, background 0.2s ease, transform 0.2s ease;
          flex-shrink: 0;
        }
        .fd-item:hover {
          width: 52px;
          height: 52px;
          background: rgba(254,166,252,0.14);
          transform: translateY(-4px);
        }
        .fd-item-icon {
          width: 20px;
          height: 20px;
          transition: width 0.2s, height 0.2s;
          display: flex; align-items: center; justify-content: center;
        }
        .fd-item:hover .fd-item-icon {
          width: 26px;
          height: 26px;
        }
        .fd-tooltip {
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(42,10,42,0.9);
          border: 1px solid rgba(254,166,252,0.15);
          color: #f0d8f0;
          font-size: 0.7rem;
          padding: 3px 8px;
          border-radius: 6px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.15s ease, transform 0.15s ease;
          transform: translateX(-50%) translateY(4px);
        }
        .fd-item:hover .fd-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
      `}</style>
      {items.map((item) => (
        <a key={item.title} href={item.href} className="fd-item" title={item.title}
           target={item.href.startsWith("http") ? "_blank" : undefined}
           rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
          <div className="fd-item-icon">{item.icon}</div>
          <span className="fd-tooltip">{item.title}</span>
        </a>
      ))}
    </div>
  );
};
