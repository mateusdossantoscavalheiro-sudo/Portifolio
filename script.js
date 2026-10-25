const projectsData = [
    {
        id: "engine_monitoring",
        date: "Fev. 2026",
        statusKey: "statusComplete",
        icon: "fa-microchip",
        github: "https://github.com/mateusscavalheiro-afk/PROVA2_MONITORAMENTO_DE_MOTOR",
        demo: "https://wokwi.com/projects/456836244021857281",

        docs: {
            default: "./assets/engine_monitoring/Engine_Monitoring_Project.pdf"
        },
        images: [
            "./assets/engine_monitoring/miniature_p1.png",
            "./assets/engine_monitoring/miniature_p2.png",
            "./assets/engine_monitoring/miniature_p3.png",
            "./assets/engine_monitoring/miniature_p4.png",
            "./assets/engine_monitoring/miniature_p5.png"
        ],
        pt: {
            title: "Monitoramento de Motor",
            subtitle: "IoT & Integração Industrial",
            platform: "VSCode (C++) & IntelliJ (Java)",
            desc: "Desenvolvimento de um cibersistema para monitoramento de motor industrial, integrando hardware (ESP32) e software (Java) através do protocolo MQTT para recolha de telemetria em tempo real."
        },
        en: {
            title: "Engine Monitoring",
            subtitle: "IoT & Industrial Integration",
            platform: "VSCode (C++) & IntelliJ (Java)",
            desc: "Development of a cyber-physical system for industrial motor monitoring, integrating hardware (ESP32) and software (Java) via MQTT protocol for real-time telemetry."
        },
        es: {
            title: "Monitoreo de Motor",
            subtitle: "IoT e Integración Industrial",
            platform: "VSCode (C++) & IntelliJ (Java)",
            desc: "Desarrollo de un cibersistema para el monitoreo de un motor industrial, integrando hardware (ESP32) y software (Java) mediante protocolo MQTT para la recolección de telemetría en tiempo real."
        },
        de: {
            title: "Motorüberwachung",
            subtitle: "IoT & Industrielle Integration",
            platform: "VSCode (C++) & IntelliJ (Java)",
            desc: "Entwicklung eines cyber-physischen Systems zur industriellen Motorüberwachung. Integration von Hardware (ESP32) und Software (Java) über das MQTT-Protokoll zur Erfassung von Telemetriedaten in Echtzeit."
        }
    }
];

let currentLang = localStorage.getItem('portfolio_lang') || 'pt';
let translations = {};

// Carregamento dinâmico do ficheiro JSON correspondente
async function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    try {
        const res = await fetch(`./locales/${lang}.json`);
        translations = await res.json();
        applyTranslations();
        renderProjects();
    } catch (err) {
        console.error("Falha ao carregar idioma:", err);
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) el.textContent = translations[key];
    });
}

function renderProjects() {
    const list = document.getElementById('project-list');
    if (!list) return;
    list.innerHTML = "";
    projectsData.forEach(p => {
        const data = p[currentLang] || p['pt'];
        list.innerHTML += `
            <div class="project-card" onclick="openProject('${p.id}')">
                <div class="project-thumb-mini"><i class="fa-solid ${p.icon}"></i></div>
                <div>
                    <strong style="font-size: 0.9rem;">${data.title}</strong>
                    <div style="font-size: 0.75rem; opacity: 0.6;">${data.subtitle}</div>
                </div>
            </div>`;
    });
}

function openProject(id) {
    const p = projectsData.find(item => item.id === id);
    if (!p) return;
    const data = p[currentLang] || p['pt'];

    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;
    document.getElementById('modal-date').innerText = p.date;
    document.getElementById('modal-platform').innerText = data.platform;
    document.getElementById('modal-status').innerText = translations[p.statusKey] || p.statusKey;

    document.getElementById('modal-github').href = p.github;
    
    const docUrl = (p.docs && p.docs[currentLang]) ? p.docs[currentLang] : p.docs.default;
    document.getElementById('modal-pdf').href = docUrl;

    openModal('project-modal');
}

let currentLang = localStorage.getItem('portfolio_lang') || 'pt';
let translations = {};

// Carrega as traduções dinamicamente sem recarregar a página
async function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    try {
        const res = await fetch(`./locales/${lang}.json`);
        translations = await res.json();
        applyTranslations();
        renderProjects();
    } catch (err) {
        console.error("Falha ao carregar idioma:", err);
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) el.textContent = translations[key];
    });
}

function renderProjects() {
    const list = document.getElementById('project-list');
    if (!list) return;
    list.innerHTML = "";
    projectsData.forEach(p => {
        const data = p[currentLang] || p['pt'];
        list.innerHTML += `
            <div class="project-card" onclick="openProject('${p.id}')">
                <div class="project-thumb-mini"><i class="fa-solid ${p.icon}"></i></div>
                <div>
                    <strong style="font-size: 0.9rem;">${data.title}</strong>
                    <div style="font-size: 0.75rem; opacity: 0.6;">${data.subtitle}</div>
                </div>
            </div>`;
    });
}

const uiStrings = {
    pt: { 
        menu: "Menu", 
        headerTitle: "Mateus | Product Designer & Dev", 
        sidebarProjects: "PROJETOS", 
        welcomeMsg: "Olá! Como posso te ajudar a conhecer melhor o trabalho do Mateus?", 
        btnSkills: "Habilidades", 
        btnProjects: "Projetos", 
        btnContact: "Contato", 
        langTitle: "Selecione o idioma", 
        contactTitle: "Vamos conversar?", 
        dateLabel: "Criado em:", 
        statusLabel: "Status:", 
        platformLabel: "Plataforma:", 
        statusComplete: "Completo", 
        statusIncomplete: "Em desenvolvimento", 
        actionLabel: "Acesse o projeto:", 
        skillAnswer: "O Mateus foca em UI/UX Design e Desenvolvimento Frontend (React, HTML, CSS).",
        btnDemo: "TESTAR"
    },
    en: { 
        menu: "Menu", 
        headerTitle: "Mateus | Designer & Dev", 
        sidebarProjects: "PROJECTS", 
        welcomeMsg: "Hi! How can I help you know more about Mateus' work?", 
        btnSkills: "Skills", 
        btnProjects: "Projects", 
        btnContact: "Contact", 
        langTitle: "Select language", 
        contactTitle: "Let's talk?", 
        dateLabel: "Created on:", 
        statusLabel: "Status:", 
        platformLabel: "Platform:", 
        statusComplete: "Complete", 
        statusIncomplete: "Under Development", 
        actionLabel: "Access the project:", 
        skillAnswer: "Mateus focuses on UI/UX Design and Frontend Development (React, HTML, CSS).",
        btnDemo: "DEMO"
    },
    es: { 
        menu: "Menú", 
        headerTitle: "Mateus | Designer & Dev", 
        sidebarProjects: "PROYECTOS", 
        welcomeMsg: "¡Hola! ¿Cómo puedo ayudarte a conocer el trabajo de Mateus?", 
        btnSkills: "Habilidades", 
        btnProjects: "Proyectos", 
        btnContact: "Contacto", 
        langTitle: "Seleccionar idioma", 
        contactTitle: "¿Hablamos?", 
        dateLabel: "Creado en:", 
        statusLabel: "Estado:", 
        platformLabel: "Plataforma:", 
        statusComplete: "Completo", 
        statusIncomplete: "En desarrollo", 
        actionLabel: "Acceder al proyecto:", 
        skillAnswer: "Mateus se enfoca en el diseño UI/UX y el desarrollo Frontend.",
        btnDemo: "PROBAR"
    },
    de: { 
        menu: "Menü", 
        headerTitle: "Mateus | Designer & Dev", 
        sidebarProjects: "PROJEKTE", 
        welcomeMsg: "Hallo! Wie kann ich Ihnen helfen, Mateus' Arbeit kennenzulernen?", 
        btnSkills: "Fähigkeiten", 
        btnProjects: "Projekte", 
        btnContact: "Kontakt", 
        langTitle: "Sprache auswählen", 
        contactTitle: "Reden wir?", 
        dateLabel: "Erstellt am:", 
        statusLabel: "Status:", 
        platformLabel: "Plattform:", 
        statusComplete: "Vollständig", 
        statusIncomplete: "In Entwicklung", 
        actionLabel: "Projekt aufrufen:", 
        skillAnswer: "Mateus konzentriert sich auf UI/UX-Design und Frontend-Entwicklung.",
        btnDemo: "TESTEN"
    }
};

let currentLang = 'pt';
let carouselInterval;

function saveState() {
    localStorage.setItem('portfolio_lang', currentLang);
    localStorage.setItem('portfolio_theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

function loadState() {
    const savedLang = localStorage.getItem('portfolio_lang');
    const savedTheme = localStorage.getItem('portfolio_theme');
    if (savedLang) currentLang = savedLang;
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        document.getElementById('theme-icon').className = "fa-solid fa-moon";
    } else {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-icon').className = "fa-solid fa-sun";
    }
    updateUI();
    renderCards();
    const box = document.getElementById("chat-box");
    box.innerHTML = `<div class="message bot-msg">${uiStrings[currentLang].welcomeMsg}</div>`;
}

function updateUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = uiStrings[currentLang][key];
    });
}

function renderCards() {
    const list = document.getElementById('project-list');
    list.innerHTML = "";
    projectsData.forEach(p => {
        list.innerHTML += `<div class="project-card" onclick="openProject('${p.id}')">
            <div class="project-thumb-mini"><i class="fa-solid ${p.icon}"></i></div>
            <div><strong style="font-size: 0.9rem;">${p[currentLang].title}</strong><div style="font-size: 0.75rem; opacity: 0.6;">${p[currentLang].subtitle}</div></div>
        </div>`;
    });
}

function openProject(id) {
    const p = projectsData.find(item => item.id === id);
    if (!p) return;

    const lang = p[currentLang];
    const ui = uiStrings[currentLang];
    clearInterval(carouselInterval);

    // Preenchimento de textos e metadados
    document.getElementById('modal-title').innerText = lang.title;
    document.getElementById('modal-desc').innerText = lang.desc;
    document.getElementById('modal-date').innerText = p.date;
    document.getElementById('modal-platform').innerText = lang.platform;
    document.getElementById('modal-status').innerText = ui[p.statusKey] || p.statusKey;
    document.getElementById('label-date').innerText = ui.dateLabel;
    document.getElementById('label-status').innerText = ui.statusLabel;
    document.getElementById('label-platform').innerText = ui.platformLabel;
    document.getElementById('label-action').innerText = ui.actionLabel;

    // Carrossel de imagens e mídias
    const mediaBox = document.getElementById('modal-media');
    if (p.media && p.media.type === "image" && Array.isArray(p.media.src)) {
        let currentIndex = 0;
        const fadeTime = 1200;
        const stayTime = 4000;
        const totalCycle = stayTime + (fadeTime * 2);
        const updateImage = (index) => {
            mediaBox.innerHTML = `<img src="${p.media.src[index]}" id="carousel-img" style="opacity: 1; transition: opacity ${fadeTime}ms ease-in-out; width: 100%; height: 100%; object-fit: cover;">`;
        };
        updateImage(currentIndex);
        carouselInterval = setInterval(() => {
            const img = document.getElementById('carousel-img');
            if (img) {
                img.style.opacity = '0';
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % p.media.src.length;
                    img.src = p.media.src[currentIndex];
                    setTimeout(() => { img.style.opacity = '1'; }, 100);
                }, fadeTime);
            }
        }, totalCycle);
    } else if (p.media) {
        mediaBox.innerHTML = p.media.type === "video" 
            ? `<video autoplay muted loop playsinline style="width:100%; height:100%; object-fit:cover;"><source src="${p.media.src}" type="video/mp4"></video>` 
            : `<img src="${p.media.src}" style="width:100%; height:100%; object-fit:cover;">`;
    }

    // Links de ação
    document.getElementById('modal-github').href = p.github;
    document.getElementById('modal-pdf').href = p.pdf || "#";

    // Configuração do botão de Teste / Demo
    const demoBtn = document.getElementById('modal-demo');
    const demoLabel = document.getElementById('label-demo');
    if (demoLabel && ui.btnDemo) {
        demoLabel.innerText = ui.btnDemo;
    }

    if (p.demo) {
        demoBtn.href = p.demo;
        demoBtn.style.display = "inline-flex";
    } else {
        demoBtn.style.display = "none";
    }

    openModal('project-modal');
}

function changeLanguage(lang) {
    currentLang = lang;
    const flagMap = { pt: 'br', en: 'us', es: 'es', de: 'de' };
    document.getElementById('animated-flag').className = `fi fi-${flagMap[lang]} big-flag`;
    updateUI(); renderCards();
    const box = document.getElementById("chat-box");
    box.innerHTML = `<div class="message bot-msg">${uiStrings[lang].welcomeMsg}</div>`;
    saveState(); closeAllModals();
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('theme-icon').className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    saveState();
}

function openModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeAllModals() { clearInterval(carouselInterval); document.querySelectorAll('.modal-overlay').forEach(m => m.style.display='none'); }
function toggleSidebar() { document.getElementById('sidebar').classList.toggle('collapsed'); }

window.onload = loadState;
window.onclick = e => { if(e.target.classList.contains('modal-overlay')) closeAllModals(); }