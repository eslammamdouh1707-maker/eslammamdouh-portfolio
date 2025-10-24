import React from "react";

export default function PartnersSection() {
  // ✅ روابط الصور الخارجية
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
        backgroundColor: "#f7f9fb",
        padding: "80px 20px",
        textAlign: "center",
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
        شركاء النجاح
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "35px",
        }}
      >
        {partners.map((logo, i) => (
          <div
            key={i}
            style={{
              width: "130px",
              height: "130px",
              borderRadius: "16px",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={logo}
              alt={`partner-${i}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "16px",
              }}
            />
          </div>
        ))}
      </div>

      {/* ✅ Responsive */}
      <style>
        {`
          @media (max-width: 768px) {
            section {
              padding: 50px 15px !important;
            }
            h2 {
              font-size: 1.6rem !important;
            }
            div {
              gap: 25px !important;
            }
          }
        `}
      </style>
    </section>
  );
}





