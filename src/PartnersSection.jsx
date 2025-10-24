import React from "react";

export default function PartnersSection({ lang }) {
  const isArabic = lang === "ar";

  // ✅ روابط اللوجهات من Postimg
  const partners = [
    "https://i.postimg.cc/XJ8xBFqc/bubbly.jpg",
    "https://i.postimg.cc/j2ScH5nW/djeep.jpg",
    "https://i.postimg.cc/3Nx1XR0m/easy.jpg",
    "https://i.postimg.cc/prLCfT5K/lex.jpg",
    "https://i.postimg.cc/vTZhrBxr/tatwar.jpg",
  ];

  return (
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

      {/* ✅ صف اللوجوهات */}
      <div className="partners-track">
        {[...partners, ...partners].map((logo, i) => (
          <div key={i} className="partner-logo">
            <img src={logo} alt={`Partner ${i}`} />
          </div>
        ))}
      </div>

      <style>
        {`
          .partners-track {
            display: flex;
            width: max-content;
            animation: slideLeft 8s linear infinite;
          }

          .partner-logo {
            flex: 0 0 auto;
            width: 140px;
            height: 140px;
            margin: 0 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
          }

          .partner-logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: grayscale(0);
            transition: all 0.4s ease;
          }

          .partner-logo:hover img {
            transform: scale(1.1);
            filter: brightness(1.1);
          }

          @keyframes slideLeft {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          /* ✅ للموبايل */
          @media (max-width: 768px) {
            .partner-logo {
              width: 90px;
              height: 90px;
              margin: 0 15px;
            }
            h2 {
              font-size: 1.5rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}







