"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLang, T, t } from "../context/LangContext";

function getNavItems(lang) {
  return [
    { label: t(T.nav_home, lang), icon: "⌂", href: "#home" },
    { label: t(T.nav_about, lang), icon: "◎", href: "#about" },
    { label: t(T.nav_projects, lang), icon: "◫", href: "#projects" },
    { label: t(T.nav_skills, lang), icon: "✦", href: "#skills" },
    { label: t(T.nav_contact, lang), icon: "✉", href: "#contact" },
    { label: t(T.nav_blog, lang), icon: "✐", href: "/blog" },
  ];
}

function NavItem({ item, active, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPos({
      x: x * 0.12,
      y: y * 0.12,
    });
  }

  function handleMouseLeave() {
    setHovered(false);
    setPos({ x: 0, y: 0 });
  }

  return (
    <a
      ref={ref}
      href={item.href}
      onClick={(e) => onClick(e, item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={`nav-item ${active ? "nav-active" : ""}`}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: hovered ? "transform 0.15s ease" : "transform 0.4s ease",
      }}
    >
      <span
        className="nav-icon"
        style={{
          display: "inline-block",
          transform: hovered
            ? "translateY(-4px) rotate(12deg) scale(1.25)"
            : "none",
          transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {item.icon}
      </span>

      <span className="nav-label">{item.label}</span>

      <span
        className="nav-line"
        style={{
          transform: hovered || active ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </a>
  );
}

export default function Navbar() {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const isOnBlogPage = pathname?.startsWith("/blog");
  const NAV_ITEMS = getNavItems(lang);

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(NAV_ITEMS[0].label);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(e, item) {
    // Blog linkine tıklandığında
    if (item.href === "/blog") {
      setActive(item.label);
      // Zaten blog sayfasındaysak sayfayı yenile
      if (isOnBlogPage) {
        e.preventDefault();
        window.location.href = "/blog";
      }
      return;
    }

    e.preventDefault();
    setActive(item.label);

    // Blog sayfasındaysak ana sayfaya yönlendir
    if (isOnBlogPage) {
      if (item.href === "#home") {
        window.location.href = "/";
      } else {
        window.location.href = "/" + item.href;
      }
      return;
    }

    if (item.href === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      history.replaceState(null, "", window.location.pathname);
      return;
    }

    const target = document.querySelector(item.href);

    if (target) {
      const navbarHeight = 74;
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    }
  }

  function handleMobileClick(e, item) {
    handleNavClick(e, item);
    setMenuOpen(false);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=DM+Sans:wght@500;600;700;800&display=swap');

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          background: rgba(253, 246, 251, 0.88);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(188, 92, 185, 0.35);
          opacity: 0;
          transform: translateY(-16px);
          transition:
            opacity 0.6s ease,
            transform 0.6s ease,
            background 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .navbar.mounted {
          opacity: 1;
          transform: translateY(0);
        }

        .navbar.scrolled {
          background: rgba(38, 24, 45, 0.96);
          border-bottom: 1px solid rgba(255, 140, 255, 0.35);
          box-shadow: 0 8px 34px rgba(40, 20, 48, 0.35);
        }

        .navbar::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            #ff8cff 25%,
            #b86cff 50%,
            #ff8cff 75%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: navLine 3s linear infinite;
        }

        @keyframes navLine {
          0% {
            background-position: 100% 0;
          }

          100% {
            background-position: -100% 0;
          }
        }

        .nav-logo {
          font-family: 'VT323', monospace;
          font-size: 1.85rem;
          color: #2f2434;
          text-decoration: none;
          letter-spacing: 2px;
          position: relative;
          transition: color 0.25s ease;
          flex-shrink: 0;
          font-weight: 700;
        }

        .navbar.scrolled .nav-logo {
          color: #fff0fc;
        }

        .nav-logo-dot {
          color: #d85ee4;
          animation: dotPulse 2s ease-in-out infinite;
          display: inline-block;
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.65;
            transform: scale(1.35);
          }
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 6px;
          list-style: none;
        }

        .nav-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          padding: 8px 15px;
          border-radius: 13px;
          text-decoration: none;
          cursor: pointer;
          color: #b85abf;
          transition:
            color 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }

        .navbar.scrolled .nav-item {
          color: rgba(255, 220, 252, 0.9);
        }

        .nav-item:hover {
          color: #7c2785;
          background: rgba(255, 140, 255, 0.16);
          box-shadow: 0 0 18px rgba(255, 140, 255, 0.12);
        }

        .navbar.scrolled .nav-item:hover {
          color: #ffffff;
          background: rgba(255, 140, 255, 0.18);
        }

        .nav-active {
          color: #5b2063 !important;
          background: rgba(255, 140, 255, 0.2) !important;
        }

        .navbar.scrolled .nav-active {
          color: #ffffff !important;
          background: rgba(255, 140, 255, 0.22) !important;
        }

        .nav-icon {
          font-size: 0.95rem;
          line-height: 1;
          color: currentColor;
        }

        .nav-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          line-height: 1;
          color: currentColor;
        }

        .nav-line {
          position: absolute;
          bottom: 4px;
          left: 22%;
          right: 22%;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #ff8cff, #b86cff);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          background: none;
          border: none;
          z-index: 1001;
        }

        .ham-line {
          width: 24px;
          height: 2px;
          background: #b85abf;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .navbar.scrolled .ham-line {
          background: #fff0fc;
        }

        .hamburger.open .ham-line:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open .ham-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger.open .ham-line:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          background: rgba(38, 24, 45, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,140,255,0.22);
          flex-direction: column;
          padding: 16px 20px 24px;
          gap: 5px;
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          pointer-events: none;
          z-index: 999;
        }

        .mobile-menu.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        .mobile-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 16px;
          border-radius: 12px;
          text-decoration: none;
          color: rgba(255, 220, 252, 0.9);
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          transition: all 0.2s ease;
        }

        .mobile-item:hover,
        .mobile-item.active {
          color: #ffffff;
          background: rgba(255,140,255,0.18);
        }

        .mobile-item-icon {
          font-size: 1.1rem;
          color: #ff8cff;
        }

        .lang-toggle {
          display: flex;
          align-items: center;
          gap: 0;
          border-radius: 20px;
          border: 1px solid rgba(184, 90, 191, 0.35);
          overflow: hidden;
          flex-shrink: 0;
          background: rgba(255, 140, 255, 0.08);
        }

        .navbar.scrolled .lang-toggle {
          border-color: rgba(255, 140, 255, 0.35);
          background: rgba(255, 140, 255, 0.12);
        }

        .lang-btn {
          padding: 6px 13px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          background: none;
          border: none;
          cursor: pointer;
          color: #b85abf;
          transition: background .2s, color .2s;
        }

        .navbar.scrolled .lang-btn {
          color: rgba(255, 220, 252, 0.75);
        }

        .lang-btn.active {
          background: rgba(255, 140, 255, 0.24);
          color: #7c2785;
        }

        .navbar.scrolled .lang-btn.active {
          color: #ffffff;
          background: rgba(255, 140, 255, 0.28);
        }

        .lang-btn:hover:not(.active) {
          color: #7c2785;
        }

        .navbar.scrolled .lang-btn:hover:not(.active) {
          color: #ffffff;
        }

        .lang-divider {
          width: 1px;
          height: 18px;
          background: rgba(184, 90, 191, 0.28);
        }

        .navbar.scrolled .lang-divider {
          background: rgba(255, 140, 255, 0.25);
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 0 20px;
          }

          .nav-links {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .mobile-menu {
            display: flex;
          }

          .nav-logo {
            font-size: 1.65rem;
          }
        }
      `}</style>

      <nav
        className={`navbar ${mounted ? "mounted" : ""} ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <a
          href="#home"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            setActive(NAV_ITEMS[0].label);
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.replaceState(null, "", window.location.pathname);
          }}
        >
          ezginur<span className="nav-logo-dot">.</span>dev
        </a>

        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              active={active === item.label}
              onClick={handleNavClick}
            />
          ))}
        </div>

        <div className="lang-toggle">
          <button
            className={`lang-btn ${lang === "tr" ? "active" : ""}`}
            onClick={() => setLang("tr")}
            aria-label="Türkçe"
          >
            TR
          </button>

          <span className="lang-divider" />

          <button
            className={`lang-btn ${lang === "en" ? "active" : ""}`}
            onClick={() => setLang("en")}
            aria-label="English"
          >
            EN
          </button>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((m) => !m)}
          aria-label="Menüyü aç/kapat"
        >
          <span className="ham-line" />
          <span className="ham-line" />
          <span className="ham-line" />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`mobile-item ${active === item.label ? "active" : ""}`}
            onClick={(e) => handleMobileClick(e, item)}
          >
            <span className="mobile-item-icon">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}