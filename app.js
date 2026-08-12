const track = document.querySelector(".cards-track");
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");

// جدول الترجمات المستخدم لتبديل النصوص بين الإنجليزية والعربية
const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.links": "Links",
    "hero.greeting": "Hi My Name Is",
    "hero.name": "ADHAM-ELSISI",
    "hero.role": "I'am A Singer & guitar player.",
    "sections.about": "About",
    "sections.skills": "Skills",
    "sections.experience": "Experience",
    "sections.links": "Links",
    "sections.latestVideos": "Latest Videos",
    "about.paragraph1": "Adham Elsisi is a talented singer and guitarist who discovered his passion for music early in life. He kept developing his skills through practice, dedication, and performance, and he continues to grow with every new opportunity.",
    "about.paragraph2": "His journey was shaped by constant learning and a strong love for performing. Every stage he stepped onto helped him become more confident and expressive as an artist.",
    "about.paragraph3": "Music became more than a hobby for him; it became his way of sharing emotions, personality, and creativity with the world.",
    "about.paragraph4": "Through performance and practice, he built a unique voice that connects with people and leaves a lasting impression.",
    "about.paragraph5": "Every song he performs reflects growth, passion, and a deep commitment to artistic expression.",
    "about.paragraph6": "His story is still unfolding, and each new performance adds another chapter to his journey.",
    "cards.card1.title": "Waqal Eih",
    "cards.card1.text": "Adham Elsisi playing the guitar in the song Waqal Eih.",
    "cards.card2.title": "Ah Ya Einy Ya Layl",
    "cards.card2.text": "Adham Elsisi performing the song Ah Ya Einy Ya Layl on guitar.",
    "cards.card3.title": "Tahet Fi Al-Amaken",
    "cards.card3.text": "Mahmoud Elsisi on guitar and Seif Islam singing the song Tahet Fi Al-Amaken.",
    "cards.card4.title": "Guitar Duo",
    "cards.card4.text": "A guitar duo performance featuring Adham Elsisi and Nour El Din.",
    "cards.card5.title": "Habibati Shurta Mayla Fi Faragh",
    "cards.card5.text": "A live performance with Adham Elsisi singing the song Habibati Shurta Mayla Fi Faragh.",
    "cards.card6.title": "Vibe La",
    "cards.card6.text": "Vibe La — lyrics and performance by Adham Elsisi.",
    "cards.card7.title": "Environment",
    "cards.card7.text": "Environment — song lyrics and performance by Adham Elsisi.",
    "footer.follow": "Follow Adham"
  },
  ar: {
    "nav.about": "حول",
    "nav.skills": "المهارات",
    "nav.experience": "الخبرة",
    "nav.links": "الروابط",
    "hero.greeting": "مرحبًا، اسمي",
    "hero.name": "ADHAM-ELSISI",
    "hero.role": "أنا مغني وعازف جيتار.",
    "sections.about": "حول",
    "sections.skills": "المهارات",
    "sections.experience": "الخبرة",
    "sections.links": "الروابط",
    "sections.latestVideos": "أحدث الفيديوهات",
    "about.paragraph1": "أدهم السيسي مغني وموسيقي موهوب اكتشف شغفه بالموسيقى منذ صغره، وواصل تطوير مهاراته من خلال التدريب والمثابرة والأداء، وما زال ينمو مع كل فرصة جديدة.",
    "about.paragraph2": "تكوّنت رحلته من خلال التعلم المستمر وحبه الكبير للعرض. وكل مرحلة ظهر فيها ساعدته على أن يصبح أكثر ثقة وعبقرية في الفن.",
    "about.paragraph3": "أصبحت الموسيقى أكثر من هواية له؛ بل أصبحت وسيلته لنقل المشاعر والشخصية والإبداع إلى العالم.",
    "about.paragraph4": "من خلال الأداء والتدريب بنى صوتًا فريدًا يلامس الناس ويترك أثرًا lasting.",
    "about.paragraph5": "كل أغنية يؤديها تعكس النمو والشغف والتفاني في التعبير الفني.",
    "about.paragraph6": "قصته ما زالت مستمرة، وكل أداء جديد يضيف فصلًا جديدًا إلى رحلته.",
    "cards.card1.title": "وقال ايه",
    "cards.card1.text": "أدهم السيسي يعزف على الجيتار في أغنية وقال ايه.",
    "cards.card2.title": "اه يا عيني يا ليل",
    "cards.card2.text": "أدهم السيسي يؤدي أغنية اه يا عيني يا ليل على الجيتار.",
    "cards.card3.title": "تاهت في الاماكن",
    "cards.card3.text": "محمود السيسي على الجيتار وسيف الاسلام يغني أغنية تاهت في الاماكن.",
    "cards.card4.title": "ديو جيتار",
    "cards.card4.text": "أداء ديو جيتار يضم أدهم السيسي ونور الدين.",
    "cards.card5.title": "حبيبتي شرطة مايله في فراغ",
    "cards.card5.text": "أداء حي مع أدهم السيسي يغني أغنية حبيبتي شرطة مايله في فراغ.",
    "cards.card6.title": "اغنيه الفيب لا",
    "cards.card6.text": "اغننيه الفيب لا كلمات و غناء ادهم السيسي",
    "cards.card7.title": "البيئه",
    "cards.card7.text": "كلمات و غناء ادهم السيسي اغنية البيئة",
    "footer.follow": "تابع أدهم"
  }
};

// دالة لتطبيق الوضع الداكن أو الفاتح على الصفحة وتخزين الاختيار
const applyTheme = (theme) => {
  document.body.classList.toggle("light-mode", theme === "light");

  if (themeToggle) {
    themeToggle.textContent = theme === "light" ? "🌙" : "☀️";
    themeToggle.setAttribute(
      "aria-label",
      theme === "light" ? "Switch to dark mode" : "Switch to light mode"
    );
  }

  localStorage.setItem("theme", theme);
};

const savedTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches
  ? "light"
  : "dark";

applyTheme(savedTheme || systemTheme);

// دالة لتغيير اللغة الحالية وتحديث جميع العناصر التي تحتوي على data-i18n
const applyLanguage = (lang) => {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", lang === "ar");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  if (langToggle) {
    langToggle.textContent = lang === "ar" ? "EN" : "AR";
    langToggle.setAttribute(
      "aria-label",
      lang === "ar" ? "Switch to English" : "التبديل إلى العربية"
    );
    langToggle.setAttribute(
      "title",
      lang === "ar" ? "Switch to English" : "التبديل إلى العربية"
    );
  }

  localStorage.setItem("language", lang);
};

const savedLanguage = localStorage.getItem("language") || "en";
applyLanguage(savedLanguage);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLang = document.documentElement.lang === "ar" ? "en" : "ar";
    applyLanguage(nextLang);
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
    applyTheme(nextTheme);
  });
}

// عناصر الصفحة التي تتفاعل مع المؤشر أو الأزرار
const musicButton = document.getElementById("musicButton");
const musicRain = document.getElementById("musicRain");
const cardsWrapper = document.querySelector(".cards-wrapper");

// YouTube lazy loader: replace placeholder with real iframe on click or when visible
function initYouTubeLazy() {
  const items = document.querySelectorAll('.youtube-lite');
  if (!items || items.length === 0) return;

  const createIframe = (id) => {
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '180';
    iframe.src = `https://www.youtube.com/embed/${id}?rel=0&autoplay=1`;
    iframe.title = 'YouTube video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    iframe.frameBorder = '0';
    return iframe;
  };

  const load = (el) => {
    if (el.dataset.loaded) return;
    const id = el.dataset.id;
    if (!id) return;
    el.innerHTML = '';
    el.appendChild(createIframe(id));
    el.dataset.loaded = '1';
  };

  const observer = ('IntersectionObserver' in window) ? new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        load(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '200px' }) : null;

  items.forEach(el => {
    el.addEventListener('click', () => load(el));
    el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); load(el); } });
    if (observer) observer.observe(el);
  });
}

initYouTubeLazy();

// عند تحريك المؤشر فوق حاوية الفيديوهات، يتم تحريك المسار قليلاً لإعطاء تأثير حركي
if (track && cardsWrapper) {
  // Pause auto-scroll when user hovers or touches the cards wrapper,
  // and resume when they leave. On small screens the animation is
  // already disabled via CSS, so keep it paused there.
  const mm = window.matchMedia("(max-width: 650px)");

  const setAnimationState = (state) => {
    // state: 'paused' | 'running'
    track.style.animationPlayState = state;
  };

  const onEnter = () => {
    if (!mm.matches) setAnimationState("paused");
  };
  const onLeave = () => {
    if (!mm.matches) setAnimationState("running");
  };

  cardsWrapper.addEventListener("mouseenter", onEnter);
  cardsWrapper.addEventListener("mouseleave", onLeave);

  // Touch: pause on touchstart so user can scroll the wrapper; resume on touchend
  cardsWrapper.addEventListener(
    "touchstart",
    (e) => {
      setAnimationState("paused");
    },
    { passive: true }
  );
  cardsWrapper.addEventListener(
    "touchend",
    () => {
      if (!mm.matches) setAnimationState("running");
    },
    { passive: true }
  );

  // Keep animation state in sync with media query changes
  const applyInitial = () => setAnimationState(mm.matches ? "paused" : "running");
  applyInitial();
  mm.addEventListener("change", applyInitial);
}

// عند الضغط على زر الموسيقى، يتم إنشاء عدد من الرموز الموسيقية كأثر بصري مؤقت
if (musicButton && musicRain) {
  musicButton.addEventListener("click", () => {
    const notes = ["♪", "♫", "♩", "♫"];
    const count = 24;

    for (let i = 0; i < count; i++) {
      const note = document.createElement("span");
      note.className = "music-note";
      note.textContent = notes[i % notes.length];
      note.style.left = `${Math.random() * 100}%`;
      note.style.animationDuration = `${1.8 + Math.random() * 1.2}s`;
      note.style.animationDelay = `${Math.random() * 0.2}s`;
      note.style.setProperty("--drift", `${(Math.random() - 0.5) * 220}px`);
      musicRain.appendChild(note);
    }

    setTimeout(() => {
      musicRain.innerHTML = "";
    }, 2200);
  });
}


