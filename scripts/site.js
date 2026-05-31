const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.querySelector('#theme-toggle');
const themeToggleText = document.querySelector('#theme-toggle-text');
const languageSelect = document.querySelector('#language-select');

const languageMap = {
  en: {
    navHome: 'Home',
    navAbout: 'Vision & PhD',
    navLab: 'The Lab',
    navInsights: 'Insights',
    navBlog: 'Blog',
    contactBtn: 'Contact Me',
    themeLabel: 'Dark Mode',
  },
  ur: {
    navHome: 'ہوم',
    navAbout: 'ویژن اور پی ایچ ڈی',
    navLab: 'لیب',
    navInsights: 'اندرونی بصیرت',
    navBlog: 'بلاگ',
    contactBtn: 'رابطہ کریں',
    themeLabel: 'ڈارک موڈ',
  },
  hi: {
    navHome: 'होम',
    navAbout: 'दृष्टि और पीएचडी',
    navLab: 'द लैब',
    navInsights: 'इनसाइट्स',
    navBlog: 'ब्लॉग',
    contactBtn: 'मुझसे संपर्क करें',
    themeLabel: 'डार्क मोड',
  },
  ar: {
    navHome: 'الرئيسية',
    navAbout: 'الرؤية والدكتوراه',
    navLab: 'المختبر',
    navInsights: 'الأفكار',
    navBlog: 'المدونة',
    contactBtn: 'اتصل بي',
    themeLabel: 'الوضع الداكن',
  },
  de: {
    navHome: 'Startseite',
    navAbout: 'Vision & PhD',
    navLab: 'Labor',
    navInsights: 'Einblicke',
    navBlog: 'Blog',
    contactBtn: 'Kontaktieren',
    themeLabel: 'Dunkler Modus',
  },
  fr: {
    navHome: 'Accueil',
    navAbout: 'Vision & PhD',
    navLab: 'Laboratoire',
    navInsights: 'Aperçus',
    navBlog: 'Blog',
    contactBtn: 'Me contacter',
    themeLabel: 'Mode sombre',
  },
};

const updateLanguage = (lang) => {
  const strings = languageMap[lang] || languageMap.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (strings[key]) node.textContent = strings[key];
  });
  if (themeToggleText) themeToggleText.textContent = strings.themeLabel;
};

const applyTheme = (mode) => {
  const isLight = mode === 'light';
  document.body.classList.toggle('light-theme', isLight);
  document.body.classList.toggle('dark-theme', !isLight);
  localStorage.setItem('siteTheme', mode);
};

const initTheme = () => {
  const savedTheme = localStorage.getItem('siteTheme');
  const theme = savedTheme || 'dark';
  applyTheme(theme);
};

const initLanguage = () => {
  const savedLang = localStorage.getItem('siteLanguage') || 'en';
  if (languageSelect) {
    languageSelect.value = savedLang;
  }
  updateLanguage(savedLang);
};

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentlyLight = document.body.classList.contains('light-theme');
    const nextTheme = currentlyLight ? 'dark' : 'light';
    applyTheme(nextTheme);
  });
}

if (languageSelect) {
  languageSelect.addEventListener('change', (event) => {
    const nextLang = event.target.value;
    localStorage.setItem('siteLanguage', nextLang);
    updateLanguage(nextLang);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
});
