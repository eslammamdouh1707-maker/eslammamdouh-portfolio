import React, { useState } from "react";
import "./App.css";

/* ------- صور أونلاين (Hero + Profile) ------- */
const heroImg =
  "https://i.postimg.cc/d0JrhjNn/hero.jpg";
const meImg =
  "https://i.postimg.cc/QtwqKWTM/me.jpg";

/* ------- خدمات (٦) بصور أونلاين ------- */
const services = [
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
    title_ar: "تصميم الإعلانات والسوشيال ميديا",
    title_en: "Ad & Social Design",
    image: "https://i.postimg.cc/QdzV3kGs/service-design.jpg",
    desc_ar:
      "تصميمات احترافية تُبرز هوية البراند وتخاطب جمهورك بأسلوب عصري ومؤثر.",
    desc_en:
      "Creative designs that boost your brand identity with a modern engaging style.",
  },
  {
    title_ar: "كتابة المحتوى التسويقي",
    title_en: "Copywriting",
    image:
      "https://i.postimg.cc/CKWZjCmB/service-copy.jpg",
    desc_ar:
      "نكتب محتوى تسويقي مؤثر يعبر عن هوية البراند ويحوّل الزوار إلى عملاء.",
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

/* ------- لوجهات (سلايدر أفقي) ------- */
const partners = [
  "https://i.postimg.cc/XJ8xBFqc/bubbly.jpg",
  "https://i.postimg.cc/j2ScH5nW/djeep.jpg",
  "https://i.postimg.cc/3Nx1XR0m/easy.jpg",
  "https://i.postimg.cc/prLCfT5K/lex.jpg",
  "https://i.postimg.cc/vTZhrBxr/tatwar.jpg",
];

export default function App() {
  const [lang, setLang] = useState("ar");
  const isArabic = lang === "ar";

  return (
    <div className={`page ${isArabic ? "rtl" : "ltr"}`}>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="hero-content container">
          <div className="hero-text">
            <h1>
              {isArabic
                ? "براندك في إيد أمينة — تفكير، تنفيذ، ونتائج."
                : "Your Brand Is in Safe Hands — Strategy, Execution, Results."}
            </h1>
            <p>
              {isArabic
                ? "بنصمم وننفّذ استراتيجيات تسويق رقمية متكاملة تحقق أهدافك بطرق مبتكرة."
                : "We craft and execute full-funnel digital strategies that drive real growth."}
            </p>

            <div className="lang">
              <button
                className={isArabic ? "active" : ""}
                onClick={() => setLang("ar")}
              >
                🇪🇬 Arabic
              </button>
              <button
                className={!isArabic ? "active" : ""}
                onClick={() => setLang("en")}
              >
                🌍 English
              </button>
            </div>
          </div>

          <div className="hero-photo">
            <img src={meImg} alt="Eslam Mamdouh" />
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="services container">
        <h2>{isArabic ? "خدماتنا" : "Our Services"}</h2>

        <div className="grid">
          {services.map((s, i) => (
            <article className="card" key={i}>
              <div className="thumb">
                <img src={s.image} alt={s.title_en} />
              </div>
              <div className="body">
                <h3>{isArabic ? s.title_ar : s.title_en}</h3>
                <p>{isArabic ? s.desc_ar : s.desc_en}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ PARTNERS (Marquee) ============ */}
      <section className="partners">
        <h2>{isArabic ? "شركاء النجاح" : "Success Partners"}</h2>

        <div className="marquee">
          <div className="track">
            {[...partners, ...partners].map((logo, i) => (
              <div className="logo" key={i}>
                <img src={logo} alt={`partner-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="container">
          <p>📧 mamdouheslam913@gmail.com</p>
          <p>📱 01091837869 | 01110167731</p>
          <p className="copy">© 2025 HZ Marketing — All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}






















































































