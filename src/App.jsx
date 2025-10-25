import React, { useMemo, useState } from "react";

/* ===== صور الهيرو والبروفايل ===== */
const heroImg = "https://i.postimg.cc/d0JrhjNn/hero.jpg";
const meImg   = "https://i.postimg.cc/QtwqKWTM/me.jpg";

/* ===== الخدمات (6) ===== */
const services = [
  {
    ar: { title: "إدارة الحملات الإعلانية", desc: "ننّفذ حملات إعلانية ذكية على فيسبوك وإنستجرام لتحقيق نتائج ملموسة وتحسين الأداء." },
    en: { title: "Ads Management", desc: "We run data-driven ad campaigns on Facebook and Instagram to deliver measurable results." },
    img: "https://i.postimg.cc/wBB5Wk5p/service-ads.jpg",
  },
  {
    ar: { title: "تصميم الإعلانات والسوشيال ميديا", desc: "تصميمات احترافية تُبرز هوية البراند وتخاطب جمهورك بأسلوب عصري ومؤثر." },
    en: { title: "Ad & Social Design", desc: "Creative designs that boost your brand identity with a modern engaging style." },
    img: "https://i.postimg.cc/QdzV3kGs/service-design.jpg",
  },
  {
    ar: { title: "كتابة المحتوى التسويقي", desc: "نكتب محتوى تسويقي مؤثر يعبر عن هوية البراند ويحوّل الزوار إلى عملاء." },
    en: { title: "Copywriting", desc: "We craft powerful marketing copy that conveys your brand and converts." },
    img: "https://i.postimg.cc/CKWZjCmB/service-copy.jpg",
  },
  {
    ar: { title: "الذكاء الاصطناعي في التسويق", desc: "نستخدم أدوات الذكاء الاصطناعي لتوليد أفكار، تحسين الأداء، وتسريع الإنتاج." },
    en: { title: "AI for Marketing", desc: "We leverage AI tools to ideate, optimize, and speed up your marketing pipeline." },
    img: "https://i.postimg.cc/02qYgvGS/service-ai.jpg",
  },
  {
    ar: { title: "متاجر شوبيفاي", desc: "نصمّم ونطوّر متاجر شوبيفاي احترافية موجهة لزيادة التحويلات والمبيعات." },
    en: { title: "Shopify Stores", desc: "We design and build professional Shopify stores focused on conversions." },
    img: "https://i.postimg.cc/RhGVbwLr/service-shopify.jpg",
  },
  {
    ar: { title: "تحليلات وتقارير", desc: "تحليل بيانات متقدم واستخراج تقارير تساعدك في اتخاذ قرارات ذكية." },
    en: { title: "Analytics & Reports", desc: "Advanced analytics and reporting that power smarter decisions." },
    img: "https://i.postimg.cc/rsGtydGH/service-analytics.jpg",
  },
];

/* ===== اللوجوهات (Partners) ===== */
const partners = [
  "https://i.postimg.cc/XJ8xBFqc/bubbly.jpg",
  "https://i.postimg.cc/j2ScH5nW/djeep.jpg",
  "https://i.postimg.cc/3Nx1XR0m/easy.jpg",
  "https://i.postimg.cc/prLCfT5K/lex.jpg",
  "https://i.postimg.cc/vTZhrBxr/tatwar.jpg",
];

/* ===== مشاريع Placeholder ===== */
const projects = [
  { title: "Djeep Egypt Campaign", tag: "Paid Ads",  img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" },
  { title: "Easy Furniture Social", tag: "Social Media", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop" },
  { title: "Beauty Zone Launch", tag: "Branding", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop" }
];

export default function App() {
  const [lang, setLang] = useState("ar");
  const isAr = lang === "ar";

  const t = useMemo(() => ({
    ar: {
      nav: { about:"من نحن", services:"خدماتنا", projects:"أعمالنا", clients:"شركاء النجاح", contact:"تواصل" },
      hero: {
        title: "براندك في إيد أمينة — تفكير، تنفيذ، ونتائج.",
        sub:   "نصمم وننفّذ استراتيجيات تسويق رقمية متكاملة لتحقيق أهدافك بطرق مبتكرة وحديثة."
      },
      about: {
        title: "من نحن",
        body:  "إسلام ممدوح — Digital Marketer & Media Buyer بخبرة تتجاوز 10 سنوات. نساعد البراندات على النمو من خلال إعلانات مدفوعة، محتوى مؤثر، وتصميمات عصرية."
      },
      services: "خدماتنا",
      projects: "أعمالنا",
      clients:  "شركاء النجاح",
      contact:  "تواصل معنا",
      send:     "إرسال الرسالة"
    },
    en: {
      nav: { about:"About", services:"Services", projects:"Projects", clients:"Clients", contact:"Contact" },
      hero: {
        title: "Your Brand Is in Safe Hands — Strategy, Execution, Results.",
        sub:   "We craft and execute full-funnel digital marketing strategies designed to achieve your goals smartly."
      },
      about: {
        title: "About",
        body:  "Eslam Mamdouh — Digital Marketer & Media Buyer (10+ years). We help brands grow through performance ads, impactful content, and modern design."
      },
      services: "Our Services",
      projects: "Projects",
      clients:  "Success Partners",
      contact:  "Contact Us",
      send:     "Send Message"
    }
  }), []);

  const TT = isAr ? t.ar : t.en;

  return (
    <div className={`page ${isAr ? "rtl" : "ltr"}`}>

      {/* ======== NAV (Sticky) ======== */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand">HZ Marketing</a>
          <nav className="links">
            <a href="#about">{TT.nav.about}</a>
            <a href="#services">{TT.nav.services}</a>
            <a href="#projects">{TT.nav.projects}</a>
            <a href="#clients">{TT.nav.clients}</a>
            <a href="#contact">{TT.nav.contact}</a>
          </nav>
          <div className="lang">
            <button onClick={()=>setLang("ar")} className={isAr?"active":""}>🇪🇬 Arabic</button>
            <button onClick={()=>setLang("en")} className={!isAr?"active":""}>🌍 English</button>
          </div>
        </div>
      </header>

      {/* ======== HERO ======== */}
      <section id="top" className="hero">
        <div className="hero-bg" style={{ backgroundImage:`url(${heroImg})` }}></div>
        <div className="container hero-content" data-aos="fade-up">
          <div className="hero-text">
            <h1>{TT.hero.title}</h1>
            <p>{TT.hero.sub}</p>
          </div>
          <img className="hero-avatar" src={meImg} alt="Eslam Mamdouh" />
          <div className="scroll-indicator">↓</div>
        </div>
      </section>

      {/* ======== ABOUT ======== */}
      <section id="about" className="section container" data-aos="fade-up">
        <h2 className="section-title">{TT.about.title}</h2>
        <p className="muted">{TT.about.body}</p>
        <div className="badges">
          <span>Strategy</span><span>Media Buying</span><span>Design</span><span>Content</span>
        </div>
      </section>

      {/* ======== SERVICES ======== */}
      <section id="services" className="section container">
        <h2 className="section-title" data-aos="fade-up">{TT.services}</h2>
        <div className="grid">
          {services.map((s, i) => (
            <article className="card" key={i} data-aos="zoom-in" data-aos-delay={i*80}>
              <div className="thumb"><img src={s.img} alt="" /></div>
              <div className="body">
                <h3>{isAr ? s.ar.title : s.en.title}</h3>
                <p>{isAr ? s.ar.desc  : s.en.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ======== PROJECTS ======== */}
      <section id="projects" className="section container">
        <h2 className="section-title" data-aos="fade-up">{TT.projects}</h2>
        <div className="grid">
          {projects.map((p, i) => (
            <article className="project" key={i} data-aos="fade-up" data-aos-delay={i*100}>
              <div className="thumb"><img src={p.img} alt={p.title} /></div>
              <div className="body">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ======== PARTNERS ======== */}
      <section id="clients" className="partners">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{TT.clients}</h2>
          <div className="marquee-wrap" data-aos="zoom-in">
            <div className="marquee-track">
              {[...partners, ...partners].map((logo, i) => (
                <div className="logo" key={i}><img src={logo} alt={`partner-${i}`} /></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======== CONTACT ======== */}
      <section id="contact" className="section container" data-aos="fade-up">
        <h2 className="section-title">{TT.contact}</h2>
        <form className="contact" action="mailto:mamdouheslam913@gmail.com" method="post" encType="text/plain">
          <input type="text" name="name" placeholder={isAr ? "الاسم" : "Name"} required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder={isAr ? "رسالتك" : "Your Message"} rows="5" required></textarea>
          <button type="submit">{TT.send}</button>
        </form>
        <div className="contact-lines">
          <p>📧 mamdouheslam913@gmail.com</p>
          <p>📱 01091837869 | 01110167731</p>
        </div>
      </section>

      {/* ======== FOOTER ======== */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 HZ Marketing — All Rights Reserved.</p>
          <a href="#top" className="to-top">↑</a>
        </div>
      </footer>
    </div>
  );
}































































































