let currentLang = "en";

const translations = {
  sk: {
    language: "SK",
    title: "mojePortfólio",
    home: "DOMOV",
    aboutme: "O MNE",
    contact: "KONTAKT",
    portfolio: "PORTFÓLIO",
    download: "STIAHNUŤ CV",
    contactme: "POSLAŤ SPRÁVU",
    introduction: "Ahoj, som Bibiána Hlavatíková",
    shortAboutme:"Zameriavam sa na prácu s dátami, SQL a tvorbu prehľadných webových rozhraní. Baví ma hľadať riešenia, v ktorých má všetko svoj systém a logiku, pričom kladiem dôraz na technickú správnosť a detail.",
    sectionAboutme: "O MNE",
    sectionContact: "KONTAKT",
    cardEducation: "Vzdelanie",
    cardWork: "Pracovné skúsenosti",
    cardSkills: "Zručnosti",
    cardCourses: "Kurzy a certifikáty",
    certificate: "Certifikát",
    textEducation: "Vyštudovala som Hospodársku informatiku a Informačný manažment na Ekonomickej univerzite v Bratislave. Štúdium mi poskytlo silné základy v oblasti informačných systémov, databázových systémov, procesného myslenia a analytického prístupu k riešeniu problémov.",
    textWork:"Moje predchádzajúce pracovné pôsobenie mi pomohlo vybudovať si silné analytické a organizačné schopnosti. Skúsenosti s prácou v interných systémoch, analýzou dát a spoluprácou naprieč tímami dnes tvoria pevný základ pre môj profesijný rozvoj v IT.",
    textSkills:"HTML5, CSS3, JavaScript, Git, GitHub, SQL a Power BI. Analytické myslenie a dôraz na detail. Schopnosť efektívne riešiť problémy, dobre komunikovať a tímovo spolupracovať. Som spoľahlivá, organizovaná a rýchlo sa učím.",
    textCourses:"Absolvovala som akreditovaný kurz Front-end programátor na platforme Skillmea. Aktuálne si na tejto platforme rozširujem vzdelanie v oblasti SQL a Power BI.",
    placeholderMsg:"Napíšte správu...",
    labelName: "Meno",
    labelEmail: "Email",
    labelMessage: "Správa",
    formButton: "Odoslať správu",
    formErrorEmpty: "Prosím vyplňte všetky polia.",
    formErrorEmail: "Prosím zadajte platný email.",
    formSuccess: "Správa bola úspešne odoslaná!",
    contactText:"Ak ma chcete kontaktovať, neváhajte mi poslať email na adresu <a href='mailto:bibiana.hlavatikova@gmail.com'>bibiana.hlavatikova@gmail.com</a> alebo správu prostredníctvom formulára:",
},

  en: {
    language: "EN",
    title: "myPortfolio",
    home: "HOME",
    aboutme: "ABOUT ME",
    contact: "CONTACT",
    portfolio: "PORTFOLIO",
    download: "DOWNLOAD CV",
    contactme: "SEND MESSAGE",
    introduction: "Hi, I'm Bibiána Hlavatíková",
    shortAboutme: "Focused on data, SQL, and building clear web interfaces. I enjoy finding solutions where everything has its own system and logic, combining my technical background with a strong attention to detail.",
    sectionAboutme: "ABOUT ME",
    sectionContact: "CONTACT",
    cardEducation: "Education",
    cardWork: "Work experience",
    cardSkills: "Skills",
    cardCourses: "Courses and certifications",
    certificate: "Certificate",
    textEducation: "I graduated in Business Informatics and Information Management from the University of Economics in Bratislava. My studies provided me with a foundation in information systems, database systems, process thinking, and an analytical approach to problem-solving.",
    textWork:"My previous professional experience has helped me develop strong analytical and organizational skills. Working with internal systems, data analysis, and cross-team collaboration now provides a solid foundation for my professional growth in IT.",
    textSkills:"HTML5, CSS3, JavaScript, Git, GitHub, SQL and Power BI. Analytical thinking and strong attention to detail. Experience in data processing, reporting, and working with internal systems. A problem-solving mindset with communication and team collaboration skills. Reliable, organized, and a fast learner.",
    textCourses:"I completed an accredited course Front-end programmer at Skillmea platform. Currently, I am expanding my technical skills with SQL and Power BI courses on the same platform.",
    placeholderMsg:"Type a message...",
    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    formButton: "Send message",
    formErrorEmpty: "Please fill in all fields.",
    formErrorEmail: "Please enter a valid email address.",
    formSuccess: "Message was successfully sent!",
    contactText: "If you want to contact me, feel free to send me an email on bibiana.hlavatikova@gmail.com or message via formular:",
}
};

/*SET LANGUAGE*/
function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (key in translations[lang]) {
      if (key === "contactText") {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    el.placeholder = translations[lang][key] ?? el.placeholder;
  });

  currentLang = lang;
  localStorage.setItem("lang", lang);

  // CV download podľa jazyka 
  const cvDownload = document.getElementById("downloadCV");
  if (lang === "sk") {
    cvDownload.href = "files/Životopis.pdf";
    cvDownload.setAttribute("download", "Bibiana-Hlavatikova-Zivotopis.pdf");
  } else {
    cvDownload.href = "files/CV.pdf";
    cvDownload.setAttribute("download", "Bibiana-Hlavatikova-CV.pdf");
  }
}

/*LANGUAGE DROPDOWN*/
const languageBtn = document.getElementById("languageBtn");
const languageMenu = document.getElementById("languageMenu");
const languageItems = document.querySelectorAll("#languageMenu li");

languageBtn.addEventListener("click", () => {
  languageMenu.classList.toggle("show");
});

languageItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedLang = item.dataset.lang;
    setLanguage(selectedLang);
    languageMenu.classList.remove("show");
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".languageDropdown")) {
    languageMenu.classList.remove("show");
  }
});

const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);


/*CERTIFICATE POPUP */
const openBtn = document.getElementById("openBtn");
const popup = document.getElementById("popup");

openBtn.addEventListener("click", () => {
  popup.classList.add("show");
});

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.classList.remove("show");
  }
});


/*FORMULÁR*/
const form = document.querySelector("form");
const popupSuccess = document.getElementById("popupSuccess");
const popupText = document.getElementById("popupText");
const popupCloseBtn = document.getElementById("popupCloseBtn");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const text = document.querySelector("textarea").value.trim();

    
    if (name === "" || email === "" || text === "") {
        popupText.textContent = translations[currentLang].formErrorEmpty;
        popupSuccess.classList.add("show");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        popupText.textContent = translations[currentLang].formErrorEmail;
        popupSuccess.classList.add("show");
        return;
    }

    popupText.textContent = translations[currentLang].formSuccess;
    popupSuccess.classList.add("show");
    form.reset();
});

popupCloseBtn.addEventListener("click", function() {
    popupSuccess.classList.remove("show");
});

popupSuccess.addEventListener("click", function(e) {
    if (e.target === popupSuccess) {
        popupSuccess.classList.remove("show");
    }
});

/*BURGER MENU*/
const burger = document.querySelector('.burger');
const navBar = document.querySelector('.navBar');
const navLinks = document.querySelectorAll('.navBar a');

burger.addEventListener('click', function(e) {
    e.stopPropagation();
    navBar.classList.toggle('active');
});

document.addEventListener('click', function(e) {
    if (!navBar.contains(e.target) && !burger.contains(e.target)) {
        navBar.classList.remove('active');
    }
});

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navBar.classList.remove('active');
    });
});
