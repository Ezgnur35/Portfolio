"use client";

import React, { useState } from "react";
import { useLang, T, t } from "../context/LangContext";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconBriefcase,
  IconUser,
  IconMail,
} from "@tabler/icons-react";

const EMAIL = "ezgnurunver@gmail.com";

export function Footer() {
  const { lang } = useLang();
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const gmailBaseLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

  function goTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
  }

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio mesajı - ${form.name || "Yeni mesaj"}`
    );

    const body = encodeURIComponent(
      `İsim: ${form.name}\nE-posta: ${form.email}\n\nMesaj:\n${form.message}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`,
      "_blank"
    );
  }

  const dockLinks = [
    {
      title: "Home",
      icon: <IconHome />,
      href: "#home",
      onClick: goTop,
    },
    {
      title: "About",
      icon: <IconUser />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <IconBriefcase />,
      href: "#projects",
    },
    {
      title: "Contact",
      icon: <IconMail />,
      href: gmailBaseLink,
      external: true,
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub />,
      href: "https://github.com/Ezgnur35",
      external: true,
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin />,
      href: "https://linkedin.com/in/ezginur-%C3%BCnver-603980403/",
      external: true,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .contact-section {
          background: #fdf6fb;
          padding: 90px 40px 0;
          position: relative;
          overflow: hidden;
        }

        .contact-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(196,118,182,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,118,182,0.05) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .contact-inner {
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .contact-action-card {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 34px 38px;
          border-radius: 28px;
          background:
            radial-gradient(circle at top left, rgba(255, 140, 255, 0.18), transparent 36%),
            linear-gradient(145deg, #fff2fb, #f8dff4);
          border: 1px solid rgba(200, 95, 200, 0.22);
          box-shadow:
            0 22px 55px rgba(190, 95, 190, 0.16),
            inset 0 1px 0 rgba(255,255,255,0.75);
        }

        .contact-mini-title {
          font-family: 'VT323', monospace;
          font-size: clamp(2.4rem, 4vw, 3.7rem);
          color: #3d283f;
          letter-spacing: 3px;
          line-height: 1;
          margin: 0;
        }

        .contact-mini-title span {
          color: #d94bdd;
        }

        .contact-mini-desc {
          max-width: 560px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          line-height: 1.7;
          font-weight: 600;
          color: #8a557f;
          margin: 0;
        }

        .contact-email-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 34px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ff8cff, #c767c9);
          color: #2a0a2a;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 800;
          cursor: pointer;
          text-decoration: none;
          transition: transform .2s ease, box-shadow .2s ease;
          box-shadow: 0 10px 26px rgba(216, 86, 216, 0.3);
          letter-spacing: 0.04em;
        }

        .contact-email-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 34px rgba(216, 86, 216, 0.42);
        }

        .contact-form {
          width: min(100%, 560px);
          margin: 8px auto 0;
          padding: 22px;
          border-radius: 24px;
          background: #241529;
          border: 1px solid rgba(255, 140, 255, 0.26);
          box-shadow: 0 18px 44px rgba(60, 25, 70, 0.24);
          text-align: left;
          animation: formIn .28s ease both;
        }

        @keyframes formIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: none;
          }
        }

        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 12px;
        }

        .contact-input,
        .contact-textarea {
          width: 100%;
          border: 1px solid rgba(255, 140, 255, 0.28);
          background: rgba(255, 255, 255, 0.06);
          color: #fff0fc;
          border-radius: 14px;
          padding: 12px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          outline: none;
          transition: border-color .2s ease, box-shadow .2s ease;
        }

        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: rgba(255, 235, 252, 0.52);
        }

        .contact-input:focus,
        .contact-textarea:focus {
          border-color: rgba(255, 140, 255, 0.72);
          box-shadow: 0 0 0 3px rgba(255, 140, 255, 0.12);
        }

        .contact-textarea {
          min-height: 118px;
          resize: vertical;
          margin-bottom: 14px;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        .form-secondary,
        .form-submit {
          border: none;
          border-radius: 999px;
          padding: 10px 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 800;
          cursor: pointer;
          transition: transform .2s ease, background .2s ease;
        }

        .form-secondary {
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 235, 252, 0.82);
        }

        .form-submit {
          background: linear-gradient(135deg, #ff8cff, #c767c9);
          color: #2a0a2a;
        }

        .form-secondary:hover,
        .form-submit:hover {
          transform: translateY(-2px);
        }

        .contact-socials {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 28px;
        }

        .contact-social-link {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 140, 255, 0.12);
          border: 1px solid rgba(200, 95, 200, 0.24);
          color: #9b3fa4;
          text-decoration: none;
          transition: all .2s ease;
        }

        .contact-social-link:hover {
          background: rgba(255, 140, 255, 0.22);
          border-color: rgba(200, 95, 200, 0.45);
          color: #6e2477;
          transform: translateY(-3px);
        }

        .footer-root {
          position: relative;
          margin-top: 78px;
          background: #f4e5f4;
          padding: 0 40px 42px;
          overflow: hidden;
        }

        .footer-glow-line {
          position: absolute;
          top: 0;
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
          animation: footerLine 3s linear infinite;
        }

        @keyframes footerLine {
          0% {
            background-position: 200% 0;
          }

          100% {
            background-position: -200% 0;
          }
        }

        .footer-glow-line::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 9px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 140, 255, 0.28) 25%,
            rgba(184, 108, 255, 0.38) 50%,
            rgba(255, 140, 255, 0.28) 75%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: footerLine 3s linear infinite;
          filter: blur(5px);
        }

        .footer-content {
          padding-top: 54px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 32px;
          max-width: 1120px;
          margin: 0 auto;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-logo {
          font-family: 'VT323', monospace;
          font-size: 1.75rem;
          color: #3d283f;
          letter-spacing: 2px;
        }

        .footer-logo span {
          color: #d94bdd;
        }

        .footer-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: #905d88;
          font-weight: 600;
        }

        .footer-dock {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.42);
          border: 1px solid rgba(200, 95, 200, 0.14);
          box-shadow:
            0 16px 40px rgba(190, 95, 190, 0.12),
            inset 0 1px 0 rgba(255,255,255,0.7);
        }

        .dock-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a444aa;
          background: rgba(255, 140, 255, 0.12);
          border: 1px solid rgba(200, 95, 200, 0.18);
          text-decoration: none;
          transition: all .2s ease;
        }

        .dock-btn svg {
          width: 20px;
          height: 20px;
          stroke-width: 1.8;
        }

        .dock-btn:hover {
          color: #ffffff;
          background: #b85abf;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 24px rgba(184, 90, 191, 0.28);
        }

        .footer-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 9px;
        }

        .footer-links-row {
          display: flex;
          gap: 20px;
        }

        .footer-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: #895180;
          font-weight: 700;
          text-decoration: none;
          transition: color .2s ease;
        }

        .footer-link:hover {
          color: #b85abf;
        }

        .footer-copy {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.76rem;
          color: #9a657f;
          font-weight: 600;
          text-align: right;
        }

        .footer-copy span {
          color: #d94bdd;
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 80px 20px 0;
          }

          .contact-action-card {
            padding: 28px 20px;
          }

          .contact-form-grid {
            grid-template-columns: 1fr;
          }

          .footer-root {
            padding: 0 20px 34px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 26px;
          }

          .footer-left,
          .footer-right {
            align-items: center;
          }

          .footer-copy {
            text-align: center;
          }

          .footer-dock {
            flex-wrap: wrap;
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="contact-action-card">
            <h2 className="contact-mini-title">
              {t(T.contact_title, lang)} <span>{t(T.contact_title2, lang)}</span>
            </h2>

            <p className="contact-mini-desc">
              {t(T.contact_desc, lang)}
            </p>

            <button
              type="button"
              className="contact-email-btn"
              onClick={() => setFormOpen((prev) => !prev)}
            >
              {t(T.contact_btn, lang)}
            </button>

            {formOpen && (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <input
                    className="contact-input"
                    type="text"
                    name="name"
                    placeholder={t(T.form_name, lang)}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    className="contact-input"
                    type="email"
                    name="email"
                    placeholder={t(T.form_email, lang)}
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <textarea
                  className="contact-textarea"
                  name="message"
                  placeholder={t(T.form_message, lang)}
                  value={form.message}
                  onChange={handleChange}
                  required
                />

                <div className="form-actions">
                  <button
                    type="button"
                    className="form-secondary"
                    onClick={() => setFormOpen(false)}
                  >
                    {t(T.form_close, lang)}
                  </button>

                  <button type="submit" className="form-submit">
                    {t(T.form_send, lang)}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/Ezgnur35"
              target="_blank"
              rel="noreferrer"
              className="contact-social-link"
              title="GitHub"
            >
              <IconBrandGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/ezginur-%C3%BCnver-603980403/"
              target="_blank"
              rel="noreferrer"
              className="contact-social-link"
              title="LinkedIn"
            >
              <IconBrandLinkedin size={20} />
            </a>

            <a
              href={gmailBaseLink}
              target="_blank"
              rel="noreferrer"
              className="contact-social-link"
              title="Gmail ile e-posta gönder"
            >
              <IconMail size={20} />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer-root">
        <div className="footer-glow-line" />

        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              ezginur<span>.</span>dev
            </div>
            <div className="footer-tagline">{t(T.footer_tagline, lang)}</div>
          </div>

          <div className="footer-dock">
            {dockLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={item.onClick}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="dock-btn"
                title={item.title}
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="footer-right">
            <div className="footer-links-row">
              <a href="#about" className="footer-link">
                {t(T.footer_about, lang)}
              </a>

              <a href="#projects" className="footer-link">
                {t(T.footer_projects, lang)}
              </a>

              <a href="#skills" className="footer-link">
                {t(T.footer_skills, lang)}
              </a>
            </div>

            <div className="footer-copy">
              © {new Date().getFullYear()} <span>Ezginur Ünver</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}