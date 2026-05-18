"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const POSTS = [
  {
    slug: "yazilimla-tanisma-hikayem",
    title: "Yazılımla Tanışma Hikayem",
    date: "2 Haziran 2025",
    tag: "Kariyer",
    tagColor: "#c476b6",
    emoji: "💡",
    excerpt: "İzmir'de büyüyen biri olarak teknolojiye olan ilgimin nasıl yazılıma dönüştüğünü anlatmak istiyorum. Programlamayı neden seçtim, nasıl sevdim?",
    readTime: "4 dk",
  },
  {
    slug: "frontend-ogrenme-yolculugum",
    title: "Frontend Öğrenme Yolculuğum",
    date: "12 Mayıs 2025",
    tag: "Kariyer",
    tagColor: "#c476b6",
    emoji: "🚀",
    excerpt: "Sıfırdan React öğrenirken aldığım notlar, yaptığım hatalar ve neler öğrendiğim. Başlamak isteyenler için dürüst bir rehber.",
    readTime: "5 dk",
  },
  {
    slug: "python-web-scraping-ipuclari",
    title: "Python Web Scraping: 5 İpucu",
    date: "28 Nisan 2025",
    tag: "Teknik",
    tagColor: "#7b9cc4",
    emoji: "🐍",
    excerpt: "BeautifulSoup ile web scraping yaparken öğrendiğim 5 pratik ipucu. Rate limiting, User-Agent yönetimi ve veri temizleme.",
    readTime: "7 dk",
  },
  {
    slug: "unity-ile-oyun-gelistirme",
    title: "Unity ile İlk Oyunumu Yaparken",
    date: "10 Nisan 2025",
    tag: "Oyun Geliştirme",
    tagColor: "#9c7bc4",
    emoji: "🎮",
    excerpt: "Unity ile ilk oyunumu yaparken C# öğrendim. Prosedürel harita üretiminden enemy AI'a kadar nelerle karşılaştım? Dürüst bir değerlendirme.",
    readTime: "8 dk",
  },
  {
    slug: "react-native-vs-flutter",
    title: "React Native mi, Flutter mı?",
    date: "22 Mart 2025",
    tag: "Teknik",
    tagColor: "#7b9cc4",
    emoji: "📱",
    excerpt: "Mobil geliştirmeye başlamadan önce aylarca araştırdım. React Native'i tercih etmemin nedenleri, Flutter ile karşılaştırma ve 2025'te hangisini öğrenmeli?",
    readTime: "6 dk",
  },
  {
    slug: "c-sharp-otel-projesi",
    title: "C# ile 3 Aylık Proje Maceram",
    date: "12 Mart 2025",
    tag: "Teknik",
    tagColor: "#7b9cc4",
    emoji: "🏨",
    excerpt: "Red Velvet Hotel Otomasyonu'nu C# ve Windows Forms ile geliştirirken öğrendiklerimi paylaşıyorum. SQL Server, formlar ve beklenmedik hatalar.",
    readTime: "5 dk",
  },
  {
    slug: "staj-basvuru-sureci",
    title: "Staj Başvurusu: Ne Öğrendim?",
    date: "5 Mart 2025",
    tag: "Kariyer",
    tagColor: "#c476b6",
    emoji: "💼",
    excerpt: "İlk staj başvurularımda yaptığım hatalar, CV'mi nasıl düzelttim ve teknik mülakatlara nasıl hazırlandım.",
    readTime: "9 dk",
  },
  {
    slug: "sql-veritabani-temelleri",
    title: "SQL'i Projede Öğrenmek",
    date: "18 Şubat 2025",
    tag: "Teknik",
    tagColor: "#7b9cc4",
    emoji: "🗃️",
    excerpt: "Personal Finance API'yi yazarken SQL'i derinlemesine öğrendim. JOIN'ler, indeksler ve sorgu optimizasyonu hakkında notlarım.",
    readTime: "6 dk",
  },
];

const ALL_TAGS = ["Tümü", "Teknik", "Kariyer", "Oyun Geliştirme"];


export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("Tümü");
  const [search, setSearch] = useState("");

  const filtered = POSTS.filter(p => {
    const matchTag = activeTag === "Tümü" || p.tag === activeTag;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchTag && matchSearch;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --accent: #fea6fc;
          --rose: #c476b6;
          --dark: #3d2828;
          --bg: #fdf6fb;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: var(--bg); font-family: 'DM Sans', sans-serif; }

        .blog-page {
          min-height: 100vh;
          background: #fdf6fb;
          padding-top: 88px;
          position: relative;
          overflow: hidden;
        }

        /* Grid arka plan */
        .blog-page::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(196,118,182,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,118,182,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* Dekoratif ışık */
        .blog-page::after {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(254,166,252,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .blog-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 40px 100px;
          position: relative; z-index: 1;
        }

        /* BAŞLIK */
        .blog-header {
          margin-bottom: 56px;
        }
        .blog-tag-small {
          font-family: 'DM Sans', sans-serif;
          font-size: .72rem; font-weight: 600;
          letter-spacing: .35em; text-transform: uppercase;
          color: #c47b7b; margin-bottom: 10px;
        }
        .blog-big-title {
          font-family: 'VT323', monospace;
          font-size: clamp(3rem, 6vw, 5rem);
          color: #3d2828; letter-spacing: 3px; line-height: 1;
          margin-bottom: 16px;
        }
        .blog-big-title span { color: #fea6fc; }
        .blog-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; color: #9e7a8a; font-weight: 300;
          max-width: 500px;
        }

        /* KONTROLLER */
        .blog-controls {
          display: flex; align-items: center; gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .blog-search {
          flex: 1; min-width: 200px; max-width: 320px;
          padding: 10px 16px; border-radius: 20px;
          background: rgba(254,166,252,0.05);
          border: 1px solid rgba(254,166,252,0.15);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.84rem; color: #3d2828;
          outline: none;
          transition: border-color .2s, background .2s;
        }
        .blog-search::placeholder { color: rgba(158,122,138,0.5); }
        .blog-search:focus {
          border-color: rgba(254,166,252,0.35);
          background: rgba(254,166,252,0.08);
        }

        .blog-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .blog-tag-btn {
          padding: 6px 16px; border-radius: 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem; font-weight: 500;
          border: 1px solid rgba(254,166,252,0.15);
          background: transparent; color: #9e7a8a;
          cursor: pointer; transition: all .2s;
        }
        .blog-tag-btn:hover {
          border-color: rgba(254,166,252,0.3);
          color: #c476b6;
        }
        .blog-tag-btn.active {
          background: linear-gradient(135deg, #fea6fc22, #c476b622);
          border-color: rgba(254,166,252,0.4);
          color: #c476b6;
        }

        /* POST IZGARASI */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        /* POST KARTI */
        .post-card {
          position: relative;
          border-radius: 20px;
          padding: 1.5px;
          overflow: hidden;
          text-decoration: none;
          display: block;
          transition: transform .25s ease;
        }
        .post-card:hover { transform: translateY(-5px); }

        .post-card::before {
          content: '';
          position: absolute; inset: 0;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            rgba(254,166,252,0.0) 0%,
            rgba(196,118,182,0.3) 50%,
            rgba(254,166,252,0.0) 100%
          );
          opacity: 0; transition: opacity .3s;
        }
        .post-card:hover::before { opacity: 1; }

        .post-card-inner {
          position: relative; z-index: 1;
          border-radius: 18.5px;
          background: linear-gradient(145deg, #231520, #180e16);
          border: 1px solid rgba(254,166,252,0.07);
          padding: 28px 26px;
          height: 100%;
          transition: border-color .3s;
        }
        .post-card:hover .post-card-inner {
          border-color: rgba(254,166,252,0.18);
        }

        .post-meta {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 14px;
        }
        .post-emoji {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(254,166,252,0.07);
          border: 1px solid rgba(254,166,252,0.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem;
        }
        .post-badge {
          padding: 3px 10px; border-radius: 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.67rem; font-weight: 600;
          border: 1px solid currentColor;
          opacity: 0.7;
        }
        .post-read-time {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem; color: rgba(200,160,192,0.4);
          margin-left: auto;
        }

        .post-title {
          font-family: 'VT323', monospace;
          font-size: 1.6rem; color: #f0d8f0;
          letter-spacing: 1.5px; line-height: 1.1;
          margin-bottom: 10px;
          transition: color .2s;
        }
        .post-card:hover .post-title { color: #fea6fc; }

        .post-excerpt {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem; color: rgba(200,160,192,0.6);
          line-height: 1.75; font-weight: 300;
          margin-bottom: 16px;
        }

        .post-footer {
          display: flex; align-items: center; justify-content: space-between;
          border-top: 1px solid rgba(254,166,252,0.06);
          padding-top: 12px;
        }
        .post-date {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.73rem; color: rgba(200,160,192,0.4);
        }
        .post-arrow {
          font-size: 0.9rem; color: rgba(254,166,252,0.4);
          transition: color .2s, transform .2s;
        }
        .post-card:hover .post-arrow {
          color: #fea6fc;
          transform: translateX(4px);
        }

        /* Boş durum */
        .blog-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          color: rgba(158,122,138,0.5);
          font-family: 'VT323', monospace;
          font-size: 1.4rem;
          letter-spacing: 2px;
        }

        /* Geri butonu */
        .blog-back {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem; color: #9e7a8a;
          text-decoration: none; margin-bottom: 40px;
          transition: color .2s;
        }
        .blog-back:hover { color: #c476b6; }

        @media (max-width: 768px) {
          .blog-inner { padding: 40px 20px 80px; }
          .blog-grid { grid-template-columns: 1fr; }
          .blog-controls { flex-direction: column; align-items: flex-start; }
          .blog-search { max-width: 100%; width: 100%; }
        }
      `}</style>

      <Navbar />

      <div className="blog-page">
        <div className="blog-inner">
          <Link href="/" className="blog-back">← Ana Sayfaya Dön</Link>

          <div className="blog-header">
            <p className="blog-tag-small">// düşünceler & notlar</p>
            <h1 className="blog-big-title">My <span>Blog</span></h1>
            <p className="blog-desc">
              Teknik öğrendiklerimi, kariyer deneyimlerimi ve proje süreçlerimi paylaştığım kısa yazılar.
            </p>
          </div>

          <div className="blog-controls">
            <input
              className="blog-search"
              type="text"
              placeholder="Yazılarda ara..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className="blog-tags">
              {ALL_TAGS.map(tag => (
                <button
                  key={tag}
                  className={`blog-tag-btn ${activeTag === tag ? "active" : ""}`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-grid">
            {filtered.length === 0 ? (
              <div className="blog-empty">// sonuç bulunamadı</div>
            ) : filtered.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
                <div className="post-card-inner">
                  <div className="post-meta">
                    <div className="post-emoji">{post.emoji}</div>
                    <span className="post-badge" style={{ color: post.tagColor, borderColor: post.tagColor }}>
                      {post.tag}
                    </span>
                    <span className="post-read-time">{post.readTime} okuma</span>
                  </div>
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-footer">
                    <span className="post-date">{post.date}</span>
                    <span className="post-arrow">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
