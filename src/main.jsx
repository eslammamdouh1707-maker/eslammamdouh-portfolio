import React, { useState, useEffect } from "react";
import "./App.css";

/* ===== صور أونلاين (Hero + Profile) ===== */
const HERO =
  "https://i.postimg.cc/d0JrhjNn/hero.jpg";
const ME =
  "https://i.postimg.cc/QtwqKWTM/me.jpg";

/* ===== خدمات (٦) بصور أونلاين ===== */
const SERVICES = [
  {
    title_ar: "إدارة الحملات الإعلانية",
    title_en: "Ads Management",
    image: "https://i.postimg.cc/wBB5Wk5p/service-ads.jpg",
    desc_ar:
      "ننّفذ حملات إعلانية ذكية على فيسبوك وإنستجرام لتحقيق نتائج ملموسة وتحسين الأداء.",
    desc_en:
      "We run data-driven ad campaigns on Facebook and Instagram to deliver measurable results.",
  },
  {
    title_ar: "تصميم الإعلانات والسوشيال",
    title_en: "Ad & Social Design",
    image: "https://i.postimg.cc/QdzV3kGs/service-design.jpg",
    desc_ar:
      "تصميمات احترافية تُبرز هوية البراند وتخاطب جمهورك بأسلوب عصري ومؤثر.",
    desc_en:
      "Creative social designs that boost your brand identity in a modern, engaging style.",
  },
  {
    title_ar: "كتابة المحتوى التسويقي",
    title_en: "Copywriting",
    image: "https://i.postimg.cc/CKWZjCmB/service-copy.jpg",
    desc_ar:
      "نكتب محتوى مؤثر يعبر عن هوية البراند ويحوّل الزوار إلى عملاء.",
    desc_en:
      "We craft powerful marketing copy that conveys your brand and converts.",
  },
  {
    title_ar: "الذكاء الاصطناعي في التسويق",
    title_en: "AI for Marketing",
    image: "https://i.postimg.cc/02qYgvGS/service-ai.jpg",
    desc_ar:
      "نستخدم أدوات الذكاء الاصطناعي لتوليد أفكار، تحسين الأداء، وتسريع الإنتاج.",
    desc_en:
      "We leverage AI tools to ideate, optimize, and speed up your marketing pipeline.",
  },
  {
    title_ar: "متاجر شوبيفاي",
    title_en: "Shopify Stores",
    image: "https://i.postimg.cc/RhGVbwLr/service-shopify.jpg",
    desc_ar:
      "نصمّم ونطوّر متاجر شوبيفاي احترافية موجهة لزيادة التحويلات والمبيعات.",
    desc_en:
      "We design and build professional Shopify stores focused on conversions.",
  },
  {
    title_ar: "تحليلات وتقارير",
    title_en: "Analytics & Reports",
    image: "https://i.postimg.cc/rsGtydGH/service-analytics.jpg",
    desc_ar:
      "تحليل بيانات متقدم واستخراج تقارير تساعدك في اتخاذ قرارات ذكية.",
    desc_en:
      "Advanced analytics and reporting that power smarter decisions.",
  },
];

/* ===== لوجوهات شركاء النجاح (سلايدر أفقي) ===== */
const PARTNERS = [
  "https://i.postimg.cc/XJ8xBFqc/bubbly.jpg",
  "https://i.postimg.cc/j2ScH5nW/djeep.jpg",
  "https://i.postimg.cc/3Nx1XR0m/easy.jpg",
  "https://i.postimg.cc/prLCfT5K/lex.jpg",
  "https://i.postimg.cc/vTZhrBxr/tatwar.jpg",
];

export default function App() {
  const [lang, setLang] = useState("ar");
  const isArabic = lang === "ar";

  // لضمان اتجاه RTL في العربي
  useEffect(() => {
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = isArabic ? "ar" : "en";
  }, [isArabic]);

  return (
    <div className={`page ${isArabic ? "rtl" : "ltr"}`}>
      {/* ====== شريط تنقل بسيط ====== */}
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">HZ Marketing</div>
          <nav>
            <a href="#services">{isArabic ? "الخدمات" : "Services"}</a>
            <a href="#partners">{isArabic ? "الشركاء" : "Partners"}</a>
            <a href="#contact">{isArabic ? "تواصل" : "Contact"}</a>
          </nav>
          <div className="lang-toggle">
            <button
              className={isArabic ? "active" : ""}
              onClick={() => setLang("ar")}
              aria-label="Arabic"
              title="Arabic"
            >
              🇪🇬
            </button>
            <button
              className={!isArabic ? "active" : ""}
              onClick={() => setLang("en")}
              aria-label="English"
              title="English"
            >
              🌍
            </button>
          </div>
        </div>
      </header>

      {/* ====== HERO (ستايل معبد فرعوني ناعم) ====== */}
      <section className="hero" id="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${HERO})` }}
          aria-hidden="true"
        />
        <div className="hero-overlay" aria-hidden="true" />

        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="reveal-down">
              {isArabic
                ? "براندك في إيد أمينة — تفكير، تنفيذ، ونتائج."
                : "Your Brand Is in Safe Hands — Strategy, Execution, Results."}
            </h1>
            <p className="reveal-up">
              {isArabic
                ? "نصمّم وننفّذ استراتيجيات تسويق رقمية متكاملة — مستوحاة من الحكمة المصرية القديمة لكن بروح عصرية عملية، لتحقيق نمو فعلي."
                : "We craft and execute holistic digital strategies — inspired by timeless Egyptian elegance, built for real growth today."}
            </p>

            <div className="cta reveal-up">
              <a href="#services" className="btn primary">
                {isArabic ? "شوف الخدمات" : "View Services"}
              </a>
              <a href="#contact" className="btn ghost">
                {isArabic ? "تواصل الآن" : "Contact"}
              </a>
            </div>
          </div>

          <div className="hero-photo reveal-left">
            <img src={ME} alt="Profile" />
            <div className="turquoise-glow" aria-hidden="true" />
          </div>
        </div>

        {/* زخرفة هيروغليفية خفيفة */}
        <div className="glyphs" aria-hidden="true">
          <span>𓀀</span><span>𓆑</span><span>𓁹</span><span>𓂀</span><span>𓅓</span>
        </div>
      </section>

      {/* ====== SERVICES ====== */}
      <section className="services container" id="services">
        <h2 className="section-title">
          {isArabic ? "خدماتنا" : "Our Services"}
        </h2>

        <div className="grid">
          {SERVICES.map((s, i) => (
            <article className="card reveal-up" key={i}>
              <div className="thumb">
                <img src={s.image} alt={s.title_en} />
                <div className="thumb-shine" />
              </div>
              <div className="body">
                <h3>{isArabic ? s.title_ar : s.title_en}</h3>
                <p>{isArabic ? s.desc_ar : s.desc_en}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ====== PARTNERS (سلايدر أفقي) ====== */}
      <section className="partners" id="partners">
        <div className="container">
          <h2 className="section-title">
            {isArabic ? "شركاء النجاح" : "Success Partners"}
          </h2>

          <div className="marquee">
            <div className="track">
              {[...PARTNERS, ...PARTNERS].map((logo, i) => (
                <div className="logo" key={i}>
                  <img src={logo} alt={`partner-${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="glyph-line" aria-hidden="true">𓁹 𓂀 𓆑 𓅓</div>
          <p>📧 mamdouheslam913@gmail.com</p>
          <p>📱 01091837869 | 01110167731</p>
          <p className="copy">© 2025 HZ Marketing — All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}


