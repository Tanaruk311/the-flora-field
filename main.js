
i18next.init({
  lng: 'th', // ค่าเริ่มต้น
  resources: {
    th: {
      translation: {
        home: "หน้าแรก",
        about: "เกี่ยวกับเรา",
        contact: "ติดต่อเรา",
        welcome: "ยินดีต้อนรับสู่ The Flora Field",
        heroSubtitle: "คุณสามารถสร้างสรรค์ความงดงามให้กับทุกคน",
        heroBtn: "เริ่มต้นเลย",
        aboutSubtitle: "เกี่ยวกับเรา",
        aboutTitle: "The Flora Field",
        aboutDesc: "ฟลาวเวอร์ฟีลด์ คือแหล่งรวมดอกไม้นานาพรรณ...",
        aboutBtn: "ติดต่อเรา",
        whySubtitle: "ทำไมต้องเลือกเรา",
        whyTitle: "ทำไมต้องเลือก The Flora Field",
        whyDesc: "เรามีประสบการณ์และความมุ่งมั่นที่จะให้บริการที่ดีที่สุด...",
        galleryTitle: "แกลอรี่ผลงานของเรา",
        gallerySubtitle: "ตัวอย่างช่อดอกไม้และผลงานที่ลูกค้าไว้ใจเรา",
      
      }
    },
    en: {
      translation: {
        home: "Home",
        about: "About",
        contact: "Contact",
        welcome: "Welcome to The Flora Field",
        heroSubtitle: "You can create beauty for everyone",
        heroBtn: "Get Started",
        aboutSubtitle: "About Us",
        aboutTitle: "The Flora Field",
        aboutDesc: "The Flora Field is a flower farm full of passion...",
        aboutBtn: "Contact Us",
        whySubtitle: "Why choose us",
        whyTitle: "Why choose The Flora Field",
        whyDesc: "We have experience and dedication to provide the best service...",
        galleryTitle: "Our Gallery",
        gallerySubtitle: "Examples of bouquets and floral works trusted by customers",
       
      }
    }
  }
}, function() {
  updateContent();
});

function updateContent() {
  document.getElementById("nav-home").textContent = i18next.t("home");
  document.getElementById("nav-about").textContent = i18next.t("about");
  document.getElementById("nav-contact").textContent = i18next.t("contact");
  document.getElementById("hero-title").textContent = i18next.t("welcome");
  document.getElementById("hero-subtitle").textContent = i18next.t("heroSubtitle");
  document.getElementById("hero-btn").textContent = i18next.t("heroBtn");
  document.getElementById("about-title").textContent = i18next.t("aboutSubtitle");
  document.getElementById("about-title").textContent = i18next.t("aboutTitle");
  document.getElementById("about-desc").textContent = i18next.t("aboutDesc");
  document.getElementById("about-btn").textContent = i18next.t("aboutBtn");
  document.getElementById("why-subtitle").textContent = i18next.t("whySubtitle");
  document.getElementById("why-title").textContent = i18next.t("whyTitle");
  document.getElementById("why-desc").textContent = i18next.t("whyDesc");
  document.getElementById("gallery-title").textContent = i18next.t("galleryTitle");
  document.getElementById("gallery-subtitle").textContent = i18next.t("gallerySubtitle");
 
}

function changeLang(lang) {
  i18next.changeLanguage(lang, updateContent);
}
