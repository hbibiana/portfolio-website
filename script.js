let currentLang = "en";

const translations = {
  sk: {
    language: "SK",
    title: "mojePortfólio",
    home: "DOMOV",
    aboutme: "O MNE",
    contact: "KONTAKT",
    portfolio: "PORTFÓLIO",
    download: "STIAHNUŤ ŽIVOTOPIS",
    contactme: "POSLAŤ SPRÁVU",
    introduction: "Ahoj, som Bibiána Hlavatíková",
    profession: "Junior Front-end developerka",
    shortAboutme:"Tvorím webové projekty s dôrazom na prehľadnosť, funkčnosť a používateľský zážitok a zároveň sa ďalej rozvíjam vo front-end developmente.",
    sectionAboutme: "O MNE",
    sectionContact: "KONTAKT",
    cardEducation: "Vzdelanie",
    cardWork: "Pracovné skúsenosti",
    cardSkills: "Zručnosti",
    cardCourses: "Kurzy a certifikáty",
    certificate: "Certifikát",
    textEducation: "Vyštudovala som Hospodársku informatiku a Informačný manažment na Ekonomickej univerzite v Bratislave. Štúdium mi dalo základ v oblasti  informačných systémov, dát, procesného myslenia a analytického prístupu k riešeniu problémov, na ktorom dnes ďalej staviam pri rozvoji vo front-end developmente.",
    textWork:"Moje predchádzajúce pracovné skúsenosti mi pomohli vybudovať si silné analytické, organizačné a problémovo orientované myslenie vďaka práci s internými systémami, reportmi, analýzou dát a komunikáciou naprieč tímami. Tieto skúsenosti dnes ďalej podporujú môj rast v IT oblasti a vo front-end developmente.",
    textSkills:"Základné znalosti HTML, CSS, JavaScriptu, Gitu, GitHubu a SQL, analytické myslenie a dôraz na detail. Skúsenosti so spracovaním dát, tvorbou reportov a prácou s internými systémami. Schopnosť efektívne riešiť problémy, dobre komunikovať a spolupracovať s rôznymi tímami. Som spoľahlivá, organizovaná a rýchlo sa učím.",
    textCourses:"Absolvovala som akreditovaný kurz Front-end programátor na platforme Skillmea.",
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
    title: "myPorfolio",
    home: "HOME",
    aboutme: "ABOUT ME",
    contact: "CONTACT",
    portfolio: "PORTFOLIO",
    download: "DOWNLOAD CV",
    contactme: "SEND MESSAGE",
    introduction: "Hi, I'm Bibiána Hlavatíková",
    profession: "Junior Front-end developer",
    shortAboutme: "I create clean and user-friendly web projects with HTML, CSS and JavaScript while continuing to grow in front-end development.",
    sectionAboutme: "ABOUT ME",
    sectionContact: "CONTACT",
    cardEducation: "Education",
    cardWork: "Work experience",
    cardSkills: "Skills",
    cardCourses: "Courses and certifications",
    certificate: "Certificate",
    textEducation: "I graduated in Business Informatics and Information Management from the University of Economics in Bratislava. My studies provided me with a foundation in information systems, data, process thinking, and an analytical approach to problem-solving, which I continue to build on in my development in front-end development.",
    textWork:"My previous roles helped me build strong analytical, organizational, and problem-solving skills through working with internal systems, reports, data analysis, and cross-team communication.These experiences continue to support my growth in the IT field and front-end development.",
    textSkills:"Foundational knowledge of HTML, CSS, JavaScript, Git, GitHub and SQL. Analytical thinking and attention to detail. Data processing, reporting, and internal systems. Problem-solving mindset. Good communication and team collaboration skills. Reliable, organized, and quick to learn.",
    textCourses:"I attended an accreditial course Front-end programmer at Skillmea platform.",
    placeholderMsg:"Type a message...",
    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    formButton: "Sent message",
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
























/*SET LANGUAGE
function setLanguage(lang) { //funkcia na prepínanie jazyka, nastaví jazyk celej aplikácie 
  document.querySelectorAll("[data-i18n]").forEach((el) => { //vyberie všetky HTML elementy, ktoré majú atribút data-i18n v HTML
    const key = el.dataset.i18n; //z elementu si zoberie hodnotu atribútu 
    el.textContent = translations[lang][key] ?? el.textContent; //tu nastavím text elementu podľa jazyka  + nullish coalescing operator - ak ľavá strana existuje použije ju ak null alebo undefined použije pravú
  }); 

   document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { // to iste ale pre data-i18n-placeholder
    const key = el.dataset.i18nPlaceholder;
    el.placeholder = translations[lang][key] ?? el.placeholder;
  });


currentLang = lang; //uloží aktuálny jazyk do premennej
localStorage.setItem("lang", lang); // uloží zvolený jazyk do localstorage aby po reloadnuti stránky zostal zachovaný 



const languageBtn = document.getElementById("languageBtn");
const languageMenu = document.getElementById("languageMenu");
const languageItems = document.querySelectorAll("#languageMenu li");

languageBtn.addEventListener("click", () => { //po kliknutí na language button sa
  languageMenu.classList.toggle("show"); //
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
 
const savedLang = localStorage.getItem("lang") || "en"; //nacitava jazyk z localstorage - ak tam nic nie je pouzije sa sk
setLanguage(savedLang); //nastavi jazyk aplikacie hned po nacitani stranky

CV DOWNLOAD
  const cvDownload = document.getElementById("downloadCV");

  if (lang === "sk") { //ak je jazyk slovensky
    cvDownload.href = "files/Životopis.pdf"; //stahovany subor bude subory/životopis pdf
    cvDownload.setAttribute("download", "Bibiana-Hlavatikova-Zivotopis.pdf");
  } else {
    cvDownload.href = "files/CV.pdf"; //ak nie je slovensky bude to subory/CV
    cvDownload.setAttribute("download", "Bibiana-Hlavatikova-CV.pdf");
  }
}

CERTFICATE OPEN BUTTON
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

FORMULAR
const form =document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const text = document.querySelector("textarea").value;
    console.log(name,email,text);
  
  if (name.trim() === "" || email.trim() === "" || text.trim() === "") {
    alert("Formular is not complete!"); return;}
  else {
     alert ("Message was successfully sent!");
     form.reset();
  }
});
 
BURGER TOGGLE
const burger = document.querySelector('.burger');
const navBar = document.querySelector('.navBar');
const h1 = document.querySelector('h1');
const navLinks = document.querySelectorAll('.navBar a'); // všetky linky v nav

// Funkcia na otvorenie/zatvorenie menu
function toggleNav() {
  navBar.classList.toggle('active');

  const scrollTop = window.scrollY;

  if(scrollTop === 0){ // hore
    navBar.style.position = 'absolute';
    navBar.style.top = h1.offsetTop + h1.offsetHeight + 'px';
  } else { // poscrollovana
    navBar.style.position = 'fixed';
    navBar.style.top = burger.offsetTop + burger.offsetHeight + 'px';
  }
}

// Otvorenie menu po kliknutí na burger
burger.addEventListener('click', (e) => {
  e.stopPropagation(); // zabráníme šíreniu kliknutia
  toggleNav();
});

// Zatvorenie menu po kliknutí mimo burger alebo nav
document.addEventListener('click', (e) => {
  if(navBar.classList.contains('active') && !navBar.contains(e.target) && !burger.contains(e.target)) {
    navBar.classList.remove('active');
  }
});

// Zatvorenie menu po kliknutí na ktorúkoľvek linku v nav
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navBar.classList.remove('active');
  });
});

// Pri scrollovaní, ak menu je otvorené, presunie ho pod burger alebo pod H1
window.addEventListener('scroll', () => {
  if(navBar.classList.contains('active')) {
    if(window.scrollY === 0) {
      navBar.style.position = 'absolute';
      navBar.style.top = h1.offsetTop + h1.offsetHeight + 'px';
    } else {
      navBar.style.position = 'fixed';
      navBar.style.top = burger.offsetTop + burger.offsetHeight + 'px';
    }
  }
});*/