"use client";
import { createContext, useContext, useState } from "react";

export const LangContext = createContext({ lang: "tr", setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState("tr");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

// ── Tüm çeviriler ──────────────────────────────────────────────
export const T = {
  // Navbar
  nav_home:     { tr: "Ana Sayfa", en: "Home" },
  nav_about:    { tr: "Hakkımda",  en: "About" },
  nav_projects: { tr: "Projeler",  en: "Projects" },
  nav_skills:   { tr: "Beceriler", en: "Skills" },
  nav_cv:       { tr: "CV",        en: "CV" },
  nav_contact:  { tr: "İletişim",  en: "Contact" },
  nav_blog:     { tr: "Blog",      en: "Blog" },

  // Hero
  hero_greeting:    { tr: "merhaba, ben",          en: "hello, I'm" },
  hero_desc:        { tr: "İzmir'de bilgisayar programcılığı okuyan,\nweb & mobil geliştirme tutkunu junior developer.", en: "A junior developer passionate about\nweb & mobile development, based in İzmir." },
  hero_see_projects:{ tr: "Projelerimi Gör ↓",     en: "See My Projects ↓" },
  hero_cv_btn:      { tr: "CV İndir ↓",            en: "Download CV ↓" },
  hero_cv_tr:       { tr: "Türkçe CV",             en: "Turkish CV" },
  hero_cv_en:       { tr: "İngilizce CV",           en: "English CV" },

  // About
  about_tag:        { tr: "// benim hakkımda",     en: "// about me" },
  about_title:      { tr: "",                      en: "About" },
  about_me:         { tr: "Hakkımda",              en: "Me" },
  card1_title:      { tr: "Özgeçmiş",              en: "Resume" },
  card1_sub:        { tr: "Junior Developer · İzmir", en: "Junior Developer · İzmir" },
  card1_body:       { tr: "Web, mobil ve masaüstü uygulama geliştirme alanlarında deneyim kazanmış bir öğrenciyim. Proje tabanlı öğrenmeyi ve gerçek dünya problemlerini çözmeyi seviyorum. Staj için aktif olarak başvurular yapıyorum.", en: "A student with experience in web, mobile and desktop app development. I love project-based learning and solving real-world problems. Actively applying for internships." },
  card2_title:      { tr: "Eğitim",                en: "Education" },
  card2_sub:        { tr: "Akademik & Kişisel",    en: "Academic & Personal" },
  card3_title:      { tr: "İlgi Alanları",         en: "Interests" },
  card3_sub:        { tr: "Kod dışında ne yapıyorum?", en: "What do I do outside code?" },

  // Projects
  proj_tag:         { tr: "// çalışmalarım",       en: "// my work" },
  proj_title:       { tr: "",                      en: "My" },
  proj_title2:      { tr: "Projelerim",            en: "Projects" },
  proj_subtitle:    { tr: "Gerçek dünya problemlerine geliştirdiğim çözümler", en: "Solutions I built for real-world problems" },
  proj_github:      { tr: "GitHub",                en: "GitHub" },
  proj_live:        { tr: "Canlı",                 en: "Live" },

  // Skills
  skills_tag:       { tr: "// neler biliyorum",    en: "// what I know" },
  skills_title:     { tr: "",                      en: "My" },
  skills_title2:    { tr: "Becerilerim",           en: "Skills" },
  skills_group1:    { tr: "Programlama Dilleri",   en: "Programming Languages" },
  skills_group2:    { tr: "Framework & Kütüphaneler", en: "Frameworks & Libraries" },
  skills_group3:    { tr: "Veritabanı & Araçlar",  en: "Database & Tools" },

  // Contact / Footer
  contact_tag:      { tr: "// benimle çalışalım",  en: "// let's work together" },
  contact_title:    { tr: "İletişime",             en: "Get In" },
  contact_title2:   { tr: "Geç",                  en: "Touch" },
  contact_desc:     { tr: "Yeni fırsatlara, iş birliklerine ve staj tekliflerine açığım. Bir projeniz varsa ya da sadece merhaba demek istiyorsanız, mesajınızı bekliyorum!", en: "I'm open to new opportunities, collaborations, and internship offers. If you have a project or just want to say hi, I'd love to hear from you!" },
  contact_btn:      { tr: "✉  Mesaj Gönder",       en: "✉  Send Message" },
  form_name:        { tr: "Adınız",                en: "Your Name" },
  form_email:       { tr: "E-posta adresiniz",     en: "Your Email" },
  form_message:     { tr: "Mesajınızı yazın...",   en: "Write your message..." },
  form_close:       { tr: "Kapat",                 en: "Close" },
  form_send:        { tr: "Gmail'de Gönder",       en: "Send via Gmail" },
  footer_tagline:   { tr: "Junior Developer · İzmir, Türkiye", en: "Junior Developer · İzmir, Turkey" },
  footer_copy:      { tr: "Built with Next.js ☕", en: "Built with Next.js ☕" },
  footer_about:     { tr: "Hakkımda",              en: "About" },
  footer_projects:  { tr: "Projeler",              en: "Projects" },
  footer_skills:    { tr: "Beceriler",             en: "Skills" },

  // Blog sayfası
  blog_tag:         { tr: "// düşünceler & notlar",  en: "// thoughts & notes" },
  blog_title:       { tr: "My",                      en: "My" },
  blog_title2:      { tr: "Blog",                    en: "Blog" },
  blog_desc:        { tr: "Teknik öğrendiklerimi, kariyer deneyimlerimi ve proje süreçlerimi paylaştığım kısa yazılar.", en: "Short posts where I share technical learnings, career experiences and project processes." },
  blog_search:      { tr: "Yazılarda ara...",         en: "Search posts..." },
  blog_back_home:   { tr: "← Ana Sayfaya Dön",       en: "← Back to Home" },
  blog_back_all:    { tr: "← Tüm Yazılar",           en: "← All Posts" },
  blog_read_time:   { tr: "okuma",                   en: "read" },
  blog_all_posts:   { tr: "← Tüm yazılara dön",      en: "← Back to all posts" },
  blog_not_found:   { tr: "// yazı bulunamadı",       en: "// post not found" },
  blog_empty:       { tr: "// sonuç bulunamadı",      en: "// no results found" },

  // Blog etiketleri
  tag_all:          { tr: "Tümü",                    en: "All" },
  tag_technical:    { tr: "Teknik",                  en: "Technical" },
  tag_career:       { tr: "Kariyer",                 en: "Career" },
  tag_gamedev:      { tr: "Oyun Geliştirme",         en: "Game Dev" },
};

// Kısa kullanım: t(T.hero_greeting, lang)
export function t(key, lang) {
  return key?.[lang] ?? key?.tr ?? "";
}
