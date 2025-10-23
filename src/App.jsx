import React, { useState } from "react";
import "./App.css";
import meImg from "./assets/me.jpg";
import heroImg from "./assets/hero.jpg";

// ✅ خدماتنا
const services = [
  {
    title_ar: "إدارة الحملات الإعلانية",
    title_en: "Ads Management",
    image: new URL("./assets/services/service-ads.jpg", import.meta.url).href,
    desc_ar:
      "ننفذ استراتيجيات إعلانية مدروسة على فيسبوك، إنستجرام، وتيك توك لتحقيق أفضل النتائج وتحسين الأداء الإعلاني.",
    desc_en:
      "We execute data-driven ad strategies on Facebook, Instagram, and TikTok to achieve optimal results and performance.",
  },
  {
    title_ar: "تصميم الإعلانات",
    title_en: "Ad Design",
    image: new URL("./assets/services/service-design.jpg", import.meta.url).href,
    desc_ar:
      "تصميمات عصرية تُبرز هوية البراند بأسلوب جذاب وتحقق أعلى معدلات التفاعل.",
    desc_en:
      "Modern, creative ad designs that highlight your brand identity and drive engagement.",
  },
  {
    title_ar: "كتابة المحتوى",
    title_en: "Copywriting",
    image: new URL("./assets/services/service-copy.jpg", import.meta.url).href,
    desc_ar: "محتوى مؤثر يحكي قصة البراند ويحوّل الزوار إلى عملاء فعليين.",
    desc_en:
      "Impactful copy that tells your brand story and converts visitors into loyal customers.",
  },
  {
    title_ar: "تحليل البيانات",
    title_en: "Analytics",
    image: new URL("./assets/services/service-analytics.jpg", import.meta.url)
      .href,
    desc_ar:
      "تحليل متقدم للأداء واستخراج تقارير دقيقة تساعد على اتخاذ قرارات ذكية.",
    desc_en:
      "Advanced analytics and insights that help make smart marketing decisions.",
  },
  {
    title_ar: "متاجر شوبيفاي",
    title_en: "Shopify Stores",
    image: new URL("./assets/services/service-shopify.jpg", import.meta.url)
      .href,
    desc_ar: "تصميم وتطوير متاجر شوبيفاي احترافية موجهة للتحويل.",
    desc_en:
      "Professional Shopify store design and development focused on conversion.",
  },
  {
    title_ar: "الذكاء الاصطناعي في التسويق",
    title_en: "AI Marketing",
    image: new URL("./assets/services/service-ai.jpg", import.meta.url).href,
    desc_ar:
      "استخدام أدوات الذكاء الاصطناعي لتوليد أفكار دعائية مبتكرة وتحسين الأداء العام.",
    desc_en:
      "Using AI tools to create innovative ad ideas and improve overall performance.",
  },
];

// ✅ شركاء النجاح (صور داخل public/partners/)
const partners = [
  "brand1.png",
  "brand2.png",
  "brand3.png",
  "brand4.png",
  "brand5.png",
];

export default function App() {
  const [lang, setLang] = useState("ar");
  const isArabic = lang === "ar";

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f7f8fa",
        color: "#222",
        margin: 0,
        padding: 0,
      }}
    >
      {/* ---------- HERO ---------- */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          direction: isArabic ? "rtl" : "ltr",
          textAlign: isArabic ? "right" : "left",
          overflow: "hidden",
          padding: "0 40px 80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(135deg, rgba(0,180,180,0.3), rgba(255,255,255,0.7)), url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "40px",
            left: isArabic ? "unset" : "50%",
            right: isArabic ? "50%" : "unset",
            transform: "translateX(-50%)",
            zIndex: 3,
          }}
        >
          <img
            src={meImg}
            alt="Eslam Mamdouh"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #00a89b",
              boxShadow: "0 0 25px rgba(0,168,155,0.5)",
              animation: "fadeZoom 1.5s ease-out",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            maxWidth: "1200px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
              fontWeight: "700",
              color: "#0e4658",
              marginTop: "250px",
            }}
          >
            {isArabic
              ? "براندك في إيد أمينة... تفكير، تنفيذ، ونتائج."
              : "Your Brand Is in Safe Hands — Strategy, Action, Results."}
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#333",
              marginTop: "20px",
              lineHeight: "1.8",
              maxWidth: "800px",
            }}
          >
            {isArabic
              ? "بنصمم استراتيجيات تسويق ذكية مبنية على تحليل السوق وتحقيق أهدافك التجارية بطرق مبتكرة وحديثة."
              : "We create smart marketing strategies based on market analysis and innovative methods that drive real results."}
          </p>

          <div style={{ marginTop: "30px" }}>
            <button
              onClick={() => setLang("ar")}
              style={{
                background: lang === "ar" ? "#00a89b" : "#e0e0e0",
                color: lang === "ar" ? "#fff" : "#222",
                padding: "12px 25px",
                borderRadius: "25px",
                border: "none",
                marginRight: "10px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              🇪🇬 Arabic
            </button>
            <button
              onClick={() => setLang("en")}
              style={{
                background: lang === "en" ? "#00a89b" : "#e0e0e0",
                color: lang === "en" ? "#fff" : "#222",
                padding: "12px 25px",
                borderRadius: "25px",
                border: "none",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              🌍 English
            </button>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section
        style={{
          padding: "70px 20px",
          textAlign: "center",
          backgroundColor: "#f9fbfc",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#00a89b",
            marginBottom: "40px",
            fontWeight: "700",
          }}
        >
          {isArabic ? "خدماتنا" : "Our Services"}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#fff",
                borderRadius: "18px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                overflow: "hidden",
                transition: "transform 0.35s ease",
              }}
            >
              <img
                src={s.image}
                alt={isArabic ? s.title_ar : s.title_en}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    color: "#00796b",
                    marginBottom: "10px",
                    fontWeight: "700",
                    fontSize: "1.1rem",
                  }}
                >
                  {isArabic ? s.title_ar : s.title_en}
                </h3>
                <p
                  style={{
                    color: "#333",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                  }}
                >
                  {isArabic ? s.desc_ar : s.desc_en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- SUCCESS PARTNERS ---------- */}
      <section
        style={{
          backgroundColor: "#fff",
          padding: "90px 20px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#00a89b",
            fontWeight: "700",
            marginBottom: "40px",
          }}
        >
          {isArabic ? "شركاء النجاح" : "Success Partners"}
        </h2>

        <div
          style={{
            display: "flex",
            gap: "50px",
            animation: "scroll 6s linear infinite",
            width: "max-content",
            margin: "0 auto",
          }}
        >
          {partners.map((img, i) => (
            <div
              key={i}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "12px",
                backgroundColor: "#f4f7f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}partners/${img}`}
                alt={`partner-${i}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "12px",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer
        style={{
          background: "linear-gradient(135deg, #00a89b, #00e0c6)",
          color: "#fff",
          textAlign: "center",
          padding: "35px 10px",
          fontSize: "1rem",
        }}
      >
        <p>📧 mamdouheslam913@gmail.com</p>
        <p>📱 01091837869 | 01110167731</p>
        <p style={{ marginTop: "15px", fontSize: "0.9rem", color: "#f0f0f0" }}>
          © 2025 HZ Marketing — All Rights Reserved.
        </p>
      </footer>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (max-width: 768px) {
            h1 { font-size: 1.7rem !important; }
            h2 { font-size: 1.4rem !important; }
            p { font-size: 0.95rem !important; }
            .partners { gap: 20px !important; }
            section { padding: 50px 15px !important; }
          }

          @media (max-width: 480px) {
            h1 { font-size: 1.4rem !important; }
            p { font-size: 0.85rem !important; }
          }
        `}
      </style>
    </div>
  );
}











































