"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const POSTS = {
  "yazilimla-tanisma-hikayem": {
    title: "Yazılımla Tanışma Hikayem",
    date: "2 Haziran 2025",
    tag: "Kariyer",
    tagColor: "#c476b6",
    emoji: "💡",
    readTime: "4 dk",
    content: `
Herkes bir "ah ha!" anı anlatır. Benimki lise son sınıftayken, yanlışlıkla çalışan bir kodun ekranda bir şey göstermesiyle oldu.

## İlk Adım

İzmir'de büyüdüm. Teknoloji hep ilgimi çekiyordu ama "yazılım yapılır" diye düşünmemiştim. Bilgisayar Programcılığını seçmemin büyük sebebi aslında oldukça pragmatikti: bir şeyler inşa etmek istiyordum, sadece kullanmak değil.

**Bence en büyük hata şu:** "Daha hazır değilim" diyerek başlamamak. Hazır hissetmeden başlamak gerek.

## İlk Kodlarım

HTML ile bir web sayfası yaptım — yapabilmek için değil, nasıl çalıştığını anlamak için. Sonra CSS, sonra JavaScript. Her yeni kavram bir öncekini daha anlamlı kıldı.

O günden sonra her gün bir şeyler öğrenmeye çalıştım. Bazen 20 dakika, bazen 3 saat. Önemli olan sürekliliği kaybetmemek.

## Neden Devam Ediyorum

Kod yazmak sabır isteyen bir şey. Saatlerce bir bug'ın peşinde koşarsın, sonra çözünce tüm yorgunluk gidiyor. Bu döngüyü seviyorum.

İzmir'de genç bir developer olmak bazen yalnız hissettiriyor — etrafımda aynı yolda yürüyen çok insan yok. Ama her proje bitirildiğinde, "ben bunu yaptım" demek her şeye değiyor.

## Şu An

Staj başvuruları, projeler ve öğrenme maratonları devam ediyor. Yol uzun ama başlangıç noktam çok geride kaldı.

Eğer siz de başlamayı düşünüyorsanız: başlayın. Mükemmel an diye bir şey yok.
    `,
  },
  "frontend-ogrenme-yolculugum": {
    title: "Frontend Öğrenme Yolculuğum",
    date: "12 Mayıs 2025",
    tag: "Kariyer",
    tagColor: "#c476b6",
    emoji: "🚀",
    readTime: "5 dk",
    content: `
Bir yıl önce HTML ve CSS dışında hiçbir şey bilmiyordum. Bugün React ile projeler geliştiriyorum. Bu yazıda bu yolculuğu anlatmak istiyorum.

## Neden Frontend?

Bir şeyin ekranda anında görünmesi büyüleyici. Kod yazıyorsunuz, kaydet'e basıyorsunuz ve — işte orada! Bu anlık geri bildirim beni bağımlı etti.

## Öğrenme Süreci

İlk birkaç ay sadece YouTube videoları izledim. Sonra fark ettim ki pasif izlemek hiçbir şey öğretmiyor. Asıl öğrenme projeler yaparken geliyor.

**Benim için çalışan yaklaşım:**

1. Bir şey öğren (30 dk)
2. Hemen küçük bir şey yap (1 saat)
3. Neyi anlamadığını bul
4. Tekrar öğren (hedefli olarak)

## Yapılan Hatalar

- Her şeyi mükemmel anlamadan ilerlemek için kendimi zorlamak
- Tutorial cehennemine düşmek — 20 farklı kaynak, 0 tamamlanmış proje
- Stack Overflow'u körü körüne kopyalamak

## Şu An Neredeyim?

React ile birkaç proje geliştirdim, Next.js ile bu portfolyo sitesini yaptım. Daha çok gidilecek yol var ama başlangıç noktam çok uzakta kaldı.

Öğrenmek bitmiyor — bu hem güzel hem de bazen yorucu. Ama bunu seçiyorum.
    `,
  },
  "python-web-scraping-ipuclari": {
    title: "Python Web Scraping: 5 İpucu",
    date: "28 Nisan 2025",
    tag: "Teknik",
    tagColor: "#7b9cc4",
    emoji: "🐍",
    readTime: "7 dk",
    content: `
Udemy kursunu bitirdikten sonra gerçek projeler üzerinde çalışmaya başladığımda, teoride öğrendiğim şeylerin yüzde yirmisinin işe yaradığını gördüm. Geri kalanını bu süreçte öğrendim.

## 1. Rate Limiting'e Saygı Göster

Sunucuya saniyede 10 istek atmak hem etik değil hem de IP ban'ı yemenin en hızlı yolu. Her istek arasına \`time.sleep()\` koy, random gecikme ekle.

\`\`\`python
import time
import random

time.sleep(random.uniform(1, 3))
\`\`\`

## 2. Session Kullan, Her Seferinde Bağlantı Kurma

Requests kütüphanesinde Session nesnesi cookie'leri ve header'ları otomatik yönetir. Performans farkı ciddi.

## 3. User-Agent Döndür

Basit bir User-Agent header'ı çoğu temel engeli aşar. Bir liste tut, rastgele seç.

## 4. BeautifulSoup vs. lxml

BeautifulSoup anlaşılır ama yavaş. Büyük sayfalar için lxml parser kullan: \`BeautifulSoup(html, 'lxml')\`

## 5. Hata Yönetimi Zorunlu

Ağ hataları, 404'ler, timeout'lar — bunlar için her zaman try/except yaz. Scraper'ın bir saatte çökmesinden daha sinir bozucu bir şey yok.

Bu 5 ipucu benim için oyun değiştirici oldu. Başka sorunuz varsa iletişime geçin!
    `,
  },
  "unity-ile-oyun-gelistirme": {
    title: "Unity ile İlk Oyunumu Yaparken",
    date: "10 Nisan 2025",
    tag: "Oyun Geliştirme",
    tagColor: "#9c7bc4",
    emoji: "🎮",
    readTime: "8 dk",
    content: `
İlk Unity oyunuma başlamadan önce Unity'ye hiç dokunmamıştım. C# biliyordum ama oyun geliştirme farklı bir dünya.

## Prosedürel Harita

En çok zaman harcadığım yer burası. Basit bir ızgara tabanlı BSP (Binary Space Partitioning) algoritması kullandım. Odaları rastgele böl, koridorlarla birleştir.

İlk implementasyonumda harita her zaman köşelere sıkışıyordu. Sorun odaların minimum boyutunu kontrol etmemekti. Küçük bir kontrol, saatlik bir hata ayıklama seansının önüne geçebilirdi.

## Enemy AI

Basit bir state machine: Patrol → Chase → Attack → Death. NavMesh kullandım.

**Öğrendiğim şey:** NavMesh baking süreci dikkatli yapılmazsa düşmanlar duvara yürüyor.

## Inventory Sistemi

ScriptableObject mimarisi burada hayat kurtardı. Her item bir asset dosyası — Unity'nin en güçlü özelliklerinden biri. Başta her şeyi MonoBehaviour ile yazmaya çalışıyordum; bu yaklaşımı keşfetmek gerçek bir dönüm noktası oldu.

## Sonuç

Oyun "oynanabilir" ama "bitmiş" değil. Oyun geliştirmenin acımasız gerçeği: her özellik 3 yeni bug getiriyor.

Ama bu süreci seviyorum. Bir sonraki projem daha küçük scope'lu olacak.
    `,
  },
  "react-native-vs-flutter": {
    title: "React Native mi, Flutter mı?",
    date: "22 Mart 2025",
    tag: "Teknik",
    tagColor: "#7b9cc4",
    emoji: "📱",
    readTime: "6 dk",
    content: `
Mobil uygulama geliştirmeye başlamadan önce aylarca araştırdım. İşte bulduklarım.

## Neden React Native?

JavaScript/React biliyordum. Sıfırdan Dart öğrenmek yerine bildiklerimi kullanmak mantıklı geldi. Kod paylaşımı, büyük ekosistem, Expo'nun kolaylığı — bunlar beni React Native'e yöneltti.

## Flutter'ın Avantajları

Dürüst olmak gerekirse Flutter UI tutarlılığında kazanıyor. Özellikle animasyonlar için Dart gerçekten güçlü. Performance da biraz daha iyi. Eğer UI kalitesi önceliğinizse Flutter ciddi bir rakip.

## React Native'in Gerçekleri

- Expo ile başlamak süper kolay ama bir noktada sınırlıyor
- Native modüller gerektiğinde işler karmaşıklaşıyor
- Büyük app'lerde performans sorunları yaşanabiliyor

## 2025'te Hangisini Öğrenmeli?

İki cevap var:
- **JavaScript/React biliyorsan:** React Native
- **Hiçbiri yoksa:** Flutter (daha tutarlı deneyim)

İkisini de öğrenmeye çalışma. Birini iyi öğren, üzerine proje yap. Teori değil, pratik öğretir.
    `,
  },
  "c-sharp-otel-projesi": {
    title: "C# ile 3 Aylık Proje Maceram",
    date: "12 Mart 2025",
    tag: "Teknik",
    tagColor: "#7b9cc4",
    emoji: "🏨",
    readTime: "5 dk",
    content: `
Red Velvet Hotel Otomasyonu, benim için "oyuncak proje" olmaktan çıkıp gerçek bir yazılım mühendisliği dersine dönüştü.

## Ne Yaptım?

C# ve Windows Forms kullanarak bir otel rezervasyon sistemi geliştirdim. Oda yönetimi, misafir işlemleri, rezervasyon takibi ve personel modülü içeriyor. Veritabanı olarak SQL Server kullandım.

Kağıt üzerinde basit görünüyor. Ama pratikte her modül yeni bir problem getirdi.

## En Büyük Sürpriz: Formlar

Windows Forms ile arayüz yapmak React'tan çok farklı. Drag-and-drop kolaylığı var ama CSS alışkanlıklarım işe yaramadı. "Piksel mühendisliği" yapmak zorunda kaldım. Özellikle form validasyonunu kurarken kendimi çok yavaş hissettim.

## SQL Olmadan Olmaz

Bu proje sayesinde SQL'i gerçekten öğrendim. JOIN olmadan ilişkisel veri yönetmek imkansız.

\`\`\`sql
SELECT r.id, g.name, r.check_in, r.check_out
FROM reservations r
JOIN guests g ON r.guest_id = g.id
WHERE r.check_in >= GETDATE()
ORDER BY r.check_in;
\`\`\`

Bu sorguyu ilk kez çalıştırdığımda çok mutlu olmuştum.

## 3 Ay Sonra Düşüncelerim

- Desktop uygulama geliştirmek web'den farklı bir dünya.
- C# object-oriented programlamayı düzgün öğretti bana.
- SQL Server'da stored procedure yazmak planımda yoktu — ama öğrenmek zorunda kaldım.

Proje "bitmiş" değil ama beni bitirmedi. Bir sonraki sürümde raporlama modülü eklemek istiyorum.
    `,
  },
  "staj-basvuru-sureci": {
    title: "Staj Başvurusu: Ne Öğrendim?",
    date: "5 Mart 2025",
    tag: "Kariyer",
    tagColor: "#c476b6",
    emoji: "💼",
    readTime: "9 dk",
    content: `
İlk staj başvurularımda çok hata yaptım. Bu hatalar pahalıya patladı — zaman, motivasyon ve bazen de utanç olarak.

## CV'deki Büyük Hatalar

Önceki CV'm şöyle başlıyordu: "Bilgisayar programcılığı öğrencisiyim, motive ve öğrenmeye açığım..."

**Kimse bunu okumak istemiyor.** İşe alım yapan insan 200 CV'ye bakıyor. Direkt ne yaptığına bak.

Düzeltilmiş yaklaşım:
- Projeler ÖNCE
- Her proje için somut çıktı: "X teknolojisi ile Y sonucu elde ettim"
- Linkler çalışıyor mu? GitHub, portfolyo?

## Teknik Mülakata Hazırlık

İlk mülakatta "Polimorfizm nedir?" sorusuna takıldım. Biliyordum aslında — ama soğukkanlılıkla anlatamadım.

Çözüm: Sesli düşün pratiği. Kendinize sorular sor, yüksek sesle cevapla.

## Reddedilmek Normal

10 başvuru yaptım, 2'si geri döndü, 0 teklif aldım. Düzelttim, tekrar deniyorum.

Süreç bu. Kimse ilk seferinde stajı kazanmıyor.
    `,
  },
  "sql-veritabani-temelleri": {
    title: "SQL'i Projede Öğrenmek",
    date: "18 Şubat 2025",
    tag: "Teknik",
    tagColor: "#7b9cc4",
    emoji: "🗃️",
    readTime: "6 dk",
    content: `
Personal Finance API'yi yazarken SQL öğrenmek zorunda kaldım. Kursla değil, projeyle öğrenmek bambaşka bir deneyim.

## Neden SQL Önemli?

Herkes NoSQL kullanıyor diye düşündüm başta. Sonra finansal veri ile çalışmak JOIN olmadan imkansız olduğunu anladım.

## En Çok Kullandığım Şeyler

**GROUP BY ve Aggregate Fonksiyonlar**

\`\`\`sql
SELECT category, SUM(amount) as total
FROM transactions
WHERE user_id = ?
GROUP BY category
ORDER BY total DESC;
\`\`\`

Bu basit query, harcama kategorilerini özetliyor. Magic.

## İndeksler

İlk başta indeks kurmadan çalıştırdım. 10.000 satır sonra sorgular yavaşladı. \`user_id\` ve \`date\` kolonlarına indeks ekleyince 10x hız artışı.

**Lesson:** İndeks olmayan filtreleme = tam tablo taraması.

## Sonuç

SQL öğrenmek istiyorsanız hemen bir proje bulun. Sadece SELECT öğrenmeye çalışmayın — gerçek problem gerçek öğretir.
    `,
  },
};

function renderContent(content) {
  const lines = content.trim().split("\n");
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      result.push(<h2 key={i} className="post-h2">{line.slice(3)}</h2>);
    } else if (line.startsWith("**") && line.endsWith("**")) {
      result.push(<p key={i} className="post-bold">{line.slice(2, -2)}</p>);
    } else if (line.startsWith("```")) {
      // Kod bloğu
      const lang = line.slice(3);
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      result.push(
        <pre key={i} className="post-code">
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
    } else if (line.match(/^\d+\. /)) {
      result.push(<p key={i} className="post-li-num">{line}</p>);
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      result.push(<p key={i} className="post-li">{line.slice(2)}</p>);
    } else if (line.trim() === "") {
      result.push(<div key={i} className="post-spacer" />);
    } else {
      // Normal paragraf — **bold** işleme
      const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={j}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      result.push(<p key={i} className="post-p">{parts}</p>);
    }
    i++;
  }
  return result;
}

export default function BlogPost() {
  const params = useParams();
  const post = POSTS[params.slug];

  if (!post) {
    return (
      <>
        <Navbar />
        <div style={{
          minHeight: "100vh", background: "#fdf6fb",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: "16px",
          fontFamily: "'VT323', monospace", color: "#3d2828",
        }}>
          <div style={{ fontSize: "3rem" }}>404</div>
          <div style={{ fontSize: "1.2rem", color: "#9e7a8a" }}>// yazı bulunamadı</div>
          <Link href="/blog" style={{ color: "#c476b6", textDecoration: "none" }}>← Blog'a dön</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fdf6fb; font-family: 'DM Sans', sans-serif; }

        .post-page {
          min-height: 100vh;
          background: #fdf6fb;
          padding-top: 88px;
          position: relative;
        }
        .post-page::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(196,118,182,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,118,182,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .post-inner {
          max-width: 740px;
          margin: 0 auto;
          padding: 60px 40px 100px;
          position: relative; z-index: 1;
        }

        .post-back {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem; color: #9e7a8a;
          text-decoration: none; margin-bottom: 40px;
          transition: color .2s;
        }
        .post-back:hover { color: #c476b6; }

        /* Header */
        .post-hero {
          margin-bottom: 48px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(254,166,252,0.1);
        }
        .post-hero-meta {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 20px;
        }
        .post-hero-emoji {
          font-size: 2rem;
        }
        .post-hero-badge {
          padding: 4px 12px; border-radius: 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem; font-weight: 600;
          border: 1px solid currentColor; opacity: 0.8;
        }
        .post-hero-info {
          display: flex; gap: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem; color: rgba(158,122,138,0.6);
          margin-left: auto;
        }

        .post-hero-title {
          font-family: 'VT323', monospace;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          color: #3d2828; letter-spacing: 2px; line-height: 1.1;
        }

        /* İçerik */
        .post-content { color: #4a3040; }
        .post-p {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem; line-height: 1.9; font-weight: 300;
          color: #5a3848; margin-bottom: 2px;
        }
        .post-h2 {
          font-family: 'VT323', monospace;
          font-size: 1.8rem; color: #3d2828;
          letter-spacing: 1.5px; margin: 28px 0 8px;
        }
        .post-bold {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; font-weight: 600;
          color: #3d2828; margin: 12px 0 4px;
        }
        .post-code {
          background: linear-gradient(145deg, #1e1018, #150c12);
          border: 1px solid rgba(254,166,252,0.1);
          border-radius: 10px;
          padding: 18px 20px;
          overflow-x: auto;
          margin: 12px 0;
        }
        .post-code code {
          font-family: 'Courier New', monospace;
          font-size: 0.84rem; color: #c8a0c0; line-height: 1.7;
        }
        .post-li {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; color: #5a3848;
          line-height: 1.7; font-weight: 300;
          padding-left: 16px;
          position: relative;
        }
        .post-li::before { content: '·'; position: absolute; left: 4px; color: #c476b6; }
        .post-li-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; color: #5a3848;
          line-height: 1.7; font-weight: 300;
          padding-left: 8px;
        }
        .post-spacer { height: 10px; }

        /* Alt gezinim */
        .post-nav-footer {
          margin-top: 64px;
          padding-top: 32px;
          border-top: 1px solid rgba(254,166,252,0.1);
          display: flex; justify-content: center;
        }
        .post-all-link {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 24px; border-radius: 24px;
          background: rgba(254,166,252,0.06);
          border: 1px solid rgba(254,166,252,0.15);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.84rem; color: #c8a0c0;
          text-decoration: none; transition: all .2s;
        }
        .post-all-link:hover {
          background: rgba(254,166,252,0.12);
          border-color: rgba(254,166,252,0.3);
          color: #fea6fc;
        }

        @media (max-width: 768px) {
          .post-inner { padding: 40px 20px 80px; }
        }
      `}</style>

      <Navbar />

      <div className="post-page">
        <div className="post-inner">
          <Link href="/blog" className="post-back">← Tüm Yazılar</Link>

          <div className="post-hero">
            <div className="post-hero-meta">
              <span className="post-hero-emoji">{post.emoji}</span>
              <span className="post-hero-badge" style={{ color: post.tagColor, borderColor: post.tagColor }}>
                {post.tag}
              </span>
              <div className="post-hero-info">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} okuma</span>
              </div>
            </div>
            <h1 className="post-hero-title">{post.title}</h1>
          </div>

          <div className="post-content">
            {renderContent(post.content)}
          </div>

          <div className="post-nav-footer">
            <Link href="/blog" className="post-all-link">
              ← Tüm yazılara dön
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
