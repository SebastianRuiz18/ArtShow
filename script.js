// --- CONFIGURACIÓN DE IDIOMA ---
let currentLang = 'en'; // Default English

const translations = {
    en: {
        menu: "MENU",
        reserve: "RSVP",
        bio: "BIOGRAPHY",
        home: "HOME",
        contact: "CONTACT",
        back: "BACK",
        details: "DETAILS",
        close: "CLOSE",
        nextSection: "NEXT SECTION",
        codePrompt: "Please enter your private invitation code.",
        codeLabel: "ACCESS CODE",
        codeError: "Invalid code. Please try again.",
        enterBtn: "ENTER",
        guest: "GUEST",
        reservedFor: "Invitation valid for",
        seats: "guest(s).",
        nameLabel: "FULL NAME",
        attendingLabel: "WILL YOU ATTEND?",
        yes: "YES",
        no: "NO",
        emailLabel: "EMAIL",
        phoneLabel: "PHONE",
        dietLabel: "ORGANIZATION / NOTES",
        none: "None",
        messageLabel: "MESSAGE TO ARTIST",
        songLabel: "HOW DID YOU HEAR ABOUT US?", // Cambiado de canción a pregunta relevante
        writeMsg: "Write a message...",
        artistSong: "Gallery, Friend, Social Media...",
        sendBtn: "CONFIRM ATTENDANCE",
        sending: "SENDING...",
        errorSend: "ERROR SENDING",
        validationMsg: "Please complete the required fields.",
        thankTitle: "CONFIRMED",
        thankMsg: "Your name has been added to the guest list.",
        seeYou: "We look forward to seeing you."
    },
    es: {
        menu: "MENÚ",
        reserve: "RSVP",
        bio: "BIOGRAFÍA",
        home: "INICIO",
        contact: "CONTACTO",
        back: "VOLVER",
        details: "DETALLES",
        close: "CERRAR",
        nextSection: "SIGUIENTE SECCIÓN",
        codePrompt: "Por favor ingresa tu código de invitación privado.",
        codeLabel: "CÓDIGO DE ACCESO",
        codeError: "Código inválido. Intenta de nuevo.",
        enterBtn: "ENTRAR",
        guest: "INVITADO",
        reservedFor: "Invitación válida para",
        seats: "persona(s).",
        nameLabel: "NOMBRE COMPLETO",
        attendingLabel: "¿ASISTIRÁS?",
        yes: "SÍ",
        no: "NO",
        emailLabel: "EMAIL",
        phoneLabel: "TELÉFONO",
        dietLabel: "ORGANIZACIÓN / NOTAS",
        none: "Ninguna",
        messageLabel: "MENSAJE AL ARTISTA",
        songLabel: "¿CÓMO TE ENTERASTE?",
        writeMsg: "Escribe un mensaje...",
        artistSong: "Galería, Amigo, Redes...",
        sendBtn: "CONFIRMAR ASISTENCIA",
        sending: "ENVIANDO...",
        errorSend: "ERROR AL ENVIAR",
        validationMsg: "Por favor completa los campos requeridos.",
        thankTitle: "CONFIRMADO",
        thankMsg: "Tu nombre ha sido añadido a la lista de invitados.",
        seeYou: "Esperamos verte pronto."
    }
};

// DATOS DE SECCIONES (Adaptado para Art Show)
const slidesData = [
    { 
        // 0. BIOGRAPHY
        img: 'https://i.pinimg.com/736x/8c/08/64/8c086456a5bd740cffff127f52b3f5b7.jpg', 
        subtitle: { en: 'THE ARTIST', es: 'EL ARTISTA' }, 
        btnText: { en: 'READ BIO', es: 'LEER BIO' }, 
        title: { en: 'BIOGRAPHY', es: 'BIOGRAFÍA' }, 
        detailsContent: {
            en: `<p>Art is not what you see, but what you make others see.</p><br><p>Born in the chaos of the city and raised by the silence of the mountains, [Artist Name] explores the delicate balance between structure and fluidity. This collection represents a decade of introspection.</p>`,
            es: `<p>El arte no es lo que ves, sino lo que haces que otros vean.</p><br><p>Nacido en el caos de la ciudad y criado por el silencio de las montañas, [Nombre del Artista] explora el delicado equilibrio entre la estructura y la fluidez. Esta colección representa una década de introspección.</p>`
        }
    },
    { 
        // 1. OPENING NIGHT (Antes Wedding Day)
        img: 'https://i.pinimg.com/736x/bb/f0/cb/bbf0cb03246cfd8397d81b3b691af22b.jpg', 
        subtitle: { en: 'THE EVENT', es: 'EL EVENTO' }, 
        btnText: { en: 'VIEW DETAILS', es: 'VER DETALLES' }, 
        title: { en: 'OPENING NIGHT', es: 'INAUGURACIÓN' }, 
        detailsContent: {
            en: `<p><strong>FRIDAY, OCTOBER 24, 2026</strong></p><p>Private View & Vernissage</p><br><p><strong>LOCATION</strong></p><p>Modern Art Space</p><p>Downtown District</p><br><p>Doors Open: 7:00 PM</p>`,
            es: `<p><strong>VIERNES 24 DE OCTUBRE, 2026</strong></p><p>Vista Privada y Vernissage</p><br><p><strong>UBICACIÓN</strong></p><p>Espacio de Arte Moderno</p><p>Distrito Centro</p><br><p>Puertas abren: 7:00 PM</p>`
        }
    },
    { 
        // 2. PROGRAM (Antes Itinerary)
        img: 'https://i.pinimg.com/1200x/68/25/a7/6825a730e084e7c53b54c12cd4c99d98.jpg', 
        subtitle: { en: 'SCHEDULE', es: 'HORARIO' }, 
        btnText: { en: 'VIEW PROGRAM', es: 'VER PROGRAMA' }, 
        title: { en: 'PROGRAM', es: 'PROGRAMA' }, 
        detailsContent: {
            en: `<p><strong>7:00 PM</strong></p><p>Welcome Cocktail</p><br><p><strong>8:00 PM</strong></p><p>Artist Talk & Presentation</p><br><p><strong>9:00 PM</strong></p><p>Gallery Walkthrough</p>`,
            es: `<p><strong>7:00 PM</strong></p><p>Cóctel de Bienvenida</p><br><p><strong>8:00 PM</strong></p><p>Charla del Artista</p><br><p><strong>9:00 PM</strong></p><p>Recorrido de Galería</p>`
        }
    },
    {
        // 3. THE SPACE (Antes Culinary)
        img: 'https://i.pinimg.com/736x/74/df/6d/74df6d5e4ec7cb88ef7a6098c6440d5f.jpg', 
        subtitle: { en: 'ATMOSPHERE', es: 'ATMÓSFERA' }, 
        btnText: { en: 'THE SPACE', es: 'EL ESPACIO' }, 
        title: { en: 'THE SPACE', es: 'EL ESPACIO' }, 
        detailsContent: {
            en: `
            <div class="chef-container">
                <img src="https://i.pinimg.com/1200x/47/67/da/4767daefa134ab8eda5b16144aeccd3f.jpg" class="chef-photo" alt="Gallery Interior">
                <br><br>
                <h3>ARCHITECTURAL DIALOGUE</h3>
                <br>
                <p>The exhibition takes place in a renovated industrial warehouse, allowing the raw concrete walls to contrast with the delicate nature of the artwork.</p>
                <br>
                <p>Curated lighting design emphasizes the texture and depth of each piece.</p>
            </div>`,
            es: `
            <div class="chef-container">
                <img src="https://i.pinimg.com/1200x/47/67/da/4767daefa134ab8eda5b16144aeccd3f.jpg" class="chef-photo" alt="Gallery Interior">
                <br><br>
                <h3>DIÁLOGO ARQUITECTÓNICO</h3>
                <br>
                <p>La exhibición toma lugar en un almacén industrial renovado, permitiendo que las paredes de concreto crudo contrasten con la naturaleza delicada de la obra.</p>
                <br>
                <p>Un diseño de iluminación curado enfatiza la textura y profundidad de cada pieza.</p>
            </div>`
        }
    },
    { 
        // 4. VISITOR INFO (Antes Information)
        img: 'https://i.pinimg.com/1200x/85/7f/10/857f10e54449db8e69b8d985e858d4a6.jpg', 
        subtitle: { en: 'ESSENTIALS', es: 'ESENCIALES' }, 
        btnText: { en: 'GUEST GUIDE', es: 'GUÍA VISITA' }, 
        title: { en: 'VISITOR INFO', es: 'INFO VISITA' }, 
        detailsContent: {
            en: `<p><strong>DRESS CODE</strong></p><p>Creative Cocktail / Avant-Garde</p><br><p><strong>PHOTOGRAPHY</strong></p><p>Allowed without flash.</p>`,
            es: `<p><strong>CÓDIGO DE VESTIMENTA</strong></p><p>Cóctel Creativo / Avant-Garde</p><br><p><strong>FOTOGRAFÍA</strong></p><p>Permitida sin flash.</p>`
        }
    },
    { 
        // 5. GALLERY PREVIEW (Antes Registry)
        img: 'https://i.pinimg.com/1200x/01/63/67/016367a3b12d33247d26a9274b72d158.jpg', 
        subtitle: { en: 'PREVIEW', es: 'PREVISUALIZACIÓN' }, 
        btnText: { en: 'VIEW GALLERY', es: 'VER GALERÍA' }, 
        title: { en: 'GALLERY', es: 'GALERÍA' }, 
        detailsContent: {
            en: `
            <p style="margin-bottom:30px;">A selection of works available at the show.</p>
            
            <div class="art-preview-item">
                <img src="https://i.pinimg.com/736x/7e/45/82/7e458294342182d2b3886a488dfd271a.jpg" class="art-img">
                <div class="art-meta">
                    <h4 class="art-title">"Silence No. 1"</h4>
                    <p class="art-info">Oil on Canvas, 2025. 120x80cm</p>
                </div>
            </div>

            <div class="art-preview-item">
                <img src="https://i.pinimg.com/736x/ad/cd/74/adcd745bd9aaf60b3bce8e90c1c4ca4a.jpg" class="art-img">
                <div class="art-meta">
                    <h4 class="art-title">"Urban Decay"</h4>
                    <p class="art-info">Mixed Media, 2024. 100x100cm</p>
                </div>
            </div>
            
             <div class="art-preview-item">
                <img src="https://i.pinimg.com/736x/8e/f3/13/8ef3133baca6fbee7c34159b830a4096.jpg" class="art-img">
                <div class="art-meta">
                    <h4 class="art-title">"The Void"</h4>
                    <p class="art-info">Acrylic & Charcoal, 2025. 50x70cm</p>
                </div>
            </div>`,
            es: `
            <p style="margin-bottom:30px;">Una selección de obras disponibles.</p>
            
            <div class="art-preview-item">
                <img src="https://i.pinimg.com/736x/7e/45/82/7e458294342182d2b3886a488dfd271a.jpg" class="art-img">
                <div class="art-meta">
                    <h4 class="art-title">"Silencio No. 1"</h4>
                    <p class="art-info">Óleo sobre lienzo, 2025. 120x80cm</p>
                </div>
            </div>

            <div class="art-preview-item">
                <img src="https://i.pinimg.com/736x/ad/cd/74/adcd745bd9aaf60b3bce8e90c1c4ca4a.jpg" class="art-img">
                <div class="art-meta">
                    <h4 class="art-title">"Decadencia Urbana"</h4>
                    <p class="art-info">Técnica Mixta, 2024. 100x100cm</p>
                </div>
            </div>

             <div class="art-preview-item">
                <img src="https://i.pinimg.com/736x/8e/f3/13/8ef3133baca6fbee7c34159b830a4096.jpg" class="art-img">
                <div class="art-meta">
                    <h4 class="art-title">"El Vacío"</h4>
                    <p class="art-info">Acrílico y Carbón, 2025. 50x70cm</p>
                </div>
            </div>`
        }
    },
    { 
        // 6. RSVP
        img: 'https://i.pinimg.com/1200x/60/d5/c8/60d5c86cd090dcb7b0001d05961e6fa0.jpg', 
        subtitle: { en: 'GUEST LIST', es: 'LISTA DE INVITADOS' }, 
        btnText: { en: 'CONFIRM ATTENDANCE', es: 'CONFIRMAR ASISTENCIA' }, 
        title: { en: 'RSVP', es: 'RSVP' }, 
        isRSVP: true
    },
    { 
        // 7. CONTACT
        img: 'https://i.pinimg.com/736x/a3/4d/44/a34d4412a8f8b8aee5005ef94a52ae80.jpg', 
        subtitle: { en: 'INQUIRIES', es: 'CONSULTAS' }, 
        btnText: { en: 'CONTACT US', es: 'CONTACTAR' }, 
        title: { en: 'CONTACT', es: 'CONTACTO' }, 
        detailsContent: {
            en: `<p>Gallery Management: (555-000-0000)</p><p>Email: art@gallery.com</p>`,
            es: `<p>Manejo de Galería: (555-000-0000)</p><p>Email: art@gallery.com</p>`
        }
    }
];

// DOM & SWIPER
const bgLayer = document.getElementById('bg-layer');
const subtitleEl = document.getElementById('subtitle');
const ctaBtn = document.getElementById('cta-btn');
const langOpts = document.querySelectorAll('.lang-opt');
const swiperWrapper = document.getElementById('dynamic-swiper-wrapper');
const mainHero = document.getElementById('main-hero');
let swiper = null;

// FUNCION RE-CONSTRUIR SWIPER
function rebuildSwiper(initialIndex = 0) {
    if (swiper !== null) {
        swiper.destroy(true, true);
    }

    swiperWrapper.innerHTML = '';

    slidesData.forEach(slide => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'swiper-slide';
        slideDiv.innerHTML = `<div class="slide-inner"><h2 class="slide-title">${slide.title[currentLang]}</h2></div>`;
        swiperWrapper.appendChild(slideDiv);
    });

    swiper = new Swiper(".text-swiper", {
        loop: false, 
        slidesPerView: "auto", 
        centeredSlides: true, 
        speed: 600, 
        grabCursor: true, 
        initialSlide: initialIndex,
        mousewheel: true, 
        keyboard: { enabled: true },
        roundLengths: true, 
        observer: true, 
        observeParents: true,

        breakpoints: { 320: { spaceBetween: 20 }, 768: { spaceBetween: 50 } },
        on: {
            init: function () { updateContent(this.realIndex); },
            slideChange: function () { updateContent(this.realIndex); }
        }
    });
}

// CARGA INICIAL
window.addEventListener('load', () => {
    document.fonts.ready.then(() => {
        rebuildSwiper(0);
        setTimeout(() => {
            mainHero.classList.remove('loading-state');
            mainHero.classList.add('loaded-visible');
            if(swiper) swiper.update();
        }, 100);
    });
});

// CAMBIO DE IDIOMA
langOpts.forEach(opt => {
    opt.addEventListener('click', () => {
        const selectedLang = opt.getAttribute('data-lang');
        if(selectedLang !== currentLang) {
            currentLang = selectedLang;
            updateLanguage();
        }
    });
});

function updateLanguage() {
    const t = translations[currentLang];
    const currentIndex = swiper ? swiper.activeIndex : 0;

    document.getElementById('nav-menu-text').textContent = t.menu;
    document.getElementById('nav-reserve-text').textContent = t.reserve;
    document.getElementById('menu-home-btn').textContent = t.home;
    document.getElementById('menu-contact-btn').textContent = t.contact;
    document.getElementById('back-to-home').textContent = t.back;
    
    const isExpanded = document.getElementById('details-content-box').classList.contains('expanded');
    document.getElementById('detail-toggle-text').textContent = isExpanded ? t.close : t.details;

    langOpts.forEach(o => {
        if(o.getAttribute('data-lang') === currentLang) o.classList.add('active-lang');
        else o.classList.remove('active-lang');
    });

    const menuLinks = document.querySelectorAll('.menu-items .menu-link');
    menuLinks.forEach(link => {
        const idx = link.getAttribute('data-index');
        if(slidesData[idx]) link.textContent = slidesData[idx].title[currentLang];
    });

    const swiperContainer = document.querySelector('.text-swiper');
    swiperContainer.classList.add('opacity-zero');
    
    setTimeout(() => {
        rebuildSwiper(currentIndex);
        swiperContainer.classList.remove('opacity-zero');
    }, 200);

    if (document.body.classList.contains('details-mode')) {
        openDetailsMode(currentIndex);
    }
}

// UPDATE CONTENT
function updateContent(index) {
    const data = slidesData[index];
    if(!data) return;
    
    bgLayer.style.opacity = '0';
    subtitleEl.style.opacity = '0';
    ctaBtn.style.opacity = '0';
    
    setTimeout(() => {
        bgLayer.style.setProperty('--bg-img', `url('${data.img}')`);
        bgLayer.style.opacity = '1';
        
        subtitleEl.textContent = data.subtitle[currentLang];
        ctaBtn.textContent = data.btnText[currentLang];
        ctaBtn.setAttribute('href', data.btnLink || '#');
        subtitleEl.style.opacity = '1';
        ctaBtn.style.opacity = '1';
    }, 400); 
}

// BOTON RESERVE (HEADER)
const reserveBtn = document.getElementById('nav-reserve-text');
if(reserveBtn) {
    reserveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        swiper.slideTo(6); 
        openDetailsMode(6);
    });
}

// MENU LOGIC
const mainLogo = document.getElementById('main-logo');
mainLogo.addEventListener('click', () => {
    swiper.slideTo(0);
    closeDetailsMode();
    const menuOverlay = document.getElementById('menu-overlay');
    const menuBtn = document.getElementById('menu-btn-trigger');
    if (menuOverlay.classList.contains('active')) {
        menuOverlay.classList.remove('active');
        menuBtn.classList.remove('menu-text-active');
    }
});

const menuBtn = document.getElementById('menu-btn-trigger');
const menuOverlay = document.getElementById('menu-overlay');
const menuLinks = document.querySelectorAll('.menu-link');
const homeBtn = document.getElementById('menu-home-btn');
const contactBtn = document.getElementById('menu-contact-btn');

function toggleMenu() {
    const isActive = menuOverlay.classList.contains('active');
    if (isActive) {
        menuOverlay.classList.remove('active');
        menuBtn.classList.remove('menu-text-active');
    } else {
        menuOverlay.classList.add('active');
        menuBtn.classList.add('menu-text-active');
    }
}
menuBtn.addEventListener('click', toggleMenu);
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const index = parseInt(link.getAttribute('data-index'));
        swiper.slideTo(index);
        toggleMenu();
        closeDetailsMode();
    });
});
menuOverlay.addEventListener('click', (e) => { if (e.target === menuOverlay) toggleMenu(); });
homeBtn.addEventListener('click', () => { swiper.slideTo(0); toggleMenu(); closeDetailsMode(); });
contactBtn.addEventListener('click', () => { swiper.slideTo(7); toggleMenu(); closeDetailsMode(); });

// DETAILS LOGIC
const detailsBar = document.getElementById('details-bar');
const detailsContentBox = document.getElementById('details-content-box');
const detailBarTitle = document.getElementById('detail-bar-title');
const detailFullTitle = document.getElementById('detail-full-title');
const detailBodyText = document.getElementById('detail-body-text');
const detailIcon = document.getElementById('detail-icon');
const detailToggleText = document.getElementById('detail-toggle-text');
const closeDetailsBtn = document.getElementById('close-details-btn');
const backToHomeBtn = document.getElementById('back-to-home');
const nextSectionBar = document.getElementById('next-section-bar');
const nextSectionTitle = document.getElementById('next-section-title');

ctaBtn.addEventListener('click', (e) => { e.preventDefault(); openDetailsMode(swiper.activeIndex); });

function openDetailsMode(index) {
    const data = slidesData[index];
    const t = translations[currentLang];
    
    let nextIndex = index + 1;
    if (nextIndex >= slidesData.length) nextIndex = 0;
    const nextData = slidesData[nextIndex];

    detailBarTitle.textContent = data.title[currentLang];
    detailFullTitle.textContent = data.title[currentLang];
    nextSectionTitle.textContent = t.nextSection + ": " + nextData.title[currentLang];
    nextSectionBar.setAttribute('data-next-index', nextIndex);

    if (data.isRSVP) {
        detailBodyText.innerHTML = `
            <div id="rsvp-login-view" class="rsvp-step-container">
                <p>${t.codePrompt}</p>
                <label class="rsvp-label">${t.codeLabel}</label>
                <input type="text" id="rsvp-code-input" class="rsvp-input" placeholder="Ej. ART1">
                <div id="rsvp-error-msg" class="rsvp-error">${t.codeError}</div>
                <button id="rsvp-check-btn" class="rsvp-btn">${t.enterBtn}</button>
            </div>
        `;
        initRSVPLogin();
    } else {
        detailBodyText.innerHTML = data.detailsContent[currentLang];
    }

    document.body.classList.add('details-mode');
    detailsContentBox.classList.remove('expanded');
    detailIcon.classList.remove('fa-minus');
    detailIcon.classList.add('fa-plus');
    detailToggleText.textContent = t.details;
    
    swiper.keyboard.disable();
    swiper.mousewheel.disable();
}

function initRSVPLogin() {
    setTimeout(() => {
        const checkBtn = document.getElementById('rsvp-check-btn');
        const codeInput = document.getElementById('rsvp-code-input');
        const errorMsg = document.getElementById('rsvp-error-msg');
        
        if(checkBtn) {
            checkBtn.addEventListener('click', () => {
                const code = codeInput.value.toUpperCase().trim();
                let guests = 0;
                // CÓDIGOS ACTUALIZADOS PARA ARTE
                if (code === 'GUEST1' || code === 'ART1') guests = 1;
                else if (code === 'GUEST2' || code === 'ART2' || code === 'VIP2') guests = 2;
                else if (code === 'VIP4') guests = 4;

                if (guests > 0) {
                    generateRSVPForm(guests);
                } else {
                    errorMsg.style.display = 'block';
                    codeInput.style.borderBottom = '1px solid rgb(133, 39, 34)';
                }
            });
        }
    }, 100);
}

function generateRSVPForm(count) {
    const t = translations[currentLang];
    let formHTML = `<div class="rsvp-step-container"><p>${t.reservedFor} <strong>${count} ${t.seats}</strong></p><br>`;
    
    for (let i = 1; i <= count; i++) {
        formHTML += `
            <div class="guest-block">
                <div class="guest-number">${t.guest} ${i}</div>
                <label class="rsvp-label">${t.nameLabel}</label>
                <input type="text" id="name_${i}" class="rsvp-input required-field" placeholder="">
                <label class="rsvp-label">${t.attendingLabel}</label>
                <div class="radio-group" id="attendance_group_${i}">
                    <label class="radio-label"><input type="radio" name="asistencia_${i}" value="si"> ${t.yes}</label>
                    <label class="radio-label"><input type="radio" name="asistencia_${i}" value="no"> ${t.no}</label>
                </div>
                ${ i === 1 ? `
                <label class="rsvp-label">${t.emailLabel}</label>
                <input type="email" id="email_1" class="rsvp-input" placeholder="">
                <label class="rsvp-label">${t.phoneLabel}</label>
                <input type="tel" id="tel_1" class="rsvp-input" placeholder="">
                ` : '' }
                <label class="rsvp-label">${t.dietLabel}</label>
                <input type="text" id="diet_${i}" class="rsvp-input" placeholder="${t.none}">
            </div>
        `;
    }
    
    formHTML += `
        <div class="guest-block" style="border:none;">
            <label class="rsvp-label">${t.messageLabel}</label>
            <textarea id="guest_message" class="rsvp-textarea" placeholder="${t.writeMsg}"></textarea>
            <label class="rsvp-label">${t.songLabel}</label>
            <input type="text" id="guest_song" class="rsvp-input" placeholder="${t.artistSong}">
        </div>
        <div id="form-warning" class="rsvp-error" style="text-align:center; margin-bottom:15px;">${t.validationMsg}</div>
        <button id="rsvp-submit-final" class="rsvp-btn">${t.sendBtn}</button>
    </div>`;
    
    detailBodyText.innerHTML = formHTML;

    setTimeout(() => {
        document.getElementById('rsvp-submit-final').addEventListener('click', (e) => {
            const btn = e.target;
            let isValid = true;
            let formData = { _subject: `Art Show RSVP (${currentLang.toUpperCase()})`, _captcha: "false" };

            for (let i = 1; i <= count; i++) {
                const nameInput = document.getElementById(`name_${i}`);
                if (!nameInput.value.trim()) {
                    nameInput.classList.add('input-error');
                    isValid = false;
                } else {
                    nameInput.classList.remove('input-error');
                }

                const radios = document.getElementsByName(`asistencia_${i}`);
                let radioChecked = false;
                let asistenciaVal = "Pending";
                for (const r of radios) { 
                    if (r.checked) { 
                        radioChecked = true; 
                        asistenciaVal = r.value === 'si' ? 'YES (SI)' : 'NO';
                    } 
                }
                const radioContainer = document.getElementById(`attendance_group_${i}`).previousElementSibling;
                if (!radioChecked) {
                    radioContainer.style.color = "rgb(133, 39, 34)";
                    isValid = false;
                } else {
                    radioContainer.style.color = "#000";
                }

                formData[`Guest_${i}_Name`] = nameInput.value;
                formData[`Guest_${i}_Attending`] = asistenciaVal;
                formData[`Guest_${i}_Notes`] = document.getElementById(`diet_${i}`).value || "None";
            }

            const email1 = document.getElementById('email_1') ? document.getElementById('email_1').value : '';
            const tel1 = document.getElementById('tel_1') ? document.getElementById('tel_1').value : '';
            const message = document.getElementById('guest_message').value;
            const song = document.getElementById('guest_song').value;

            if(email1) formData["Contact_Email"] = email1;
            if(tel1) formData["Contact_Phone"] = tel1;
            if(message) formData["Message"] = message;
            if(song) formData["Reference"] = song;

            const warningMsg = document.getElementById('form-warning');
            
            if (isValid) {
                warningMsg.style.display = 'none';
                btn.textContent = t.sending;
                btn.disabled = true;

                // CAMBIA EL CORREO AQUI
                fetch("https://formsubmit.co/ajax/TU_CORREO@GMAIL.COM", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
                    detailBodyText.innerHTML = `
                        <div style="text-align:center; padding: 40px 0;">
                            <h3 class="story-heading">${t.thankTitle}</h3>
                            <p>${t.thankMsg}</p>
                            <br><p>${t.seeYou}</p>
                        </div>
                    `;
                })
                .catch(error => {
                    console.error('Error:', error);
                    btn.textContent = t.errorSend;
                    btn.disabled = false;
                    alert("Network error. Please try again.");
                });
            } else {
                warningMsg.style.display = 'block';
            }
        });
    }, 100);
}

function closeDetailsMode() {
    document.body.classList.remove('details-mode');
    detailsContentBox.classList.remove('expanded');
    swiper.keyboard.enable();
    swiper.mousewheel.enable();
}

nextSectionBar.addEventListener('click', () => {
    const nextIndex = parseInt(nextSectionBar.getAttribute('data-next-index'));
    swiper.slideTo(nextIndex);
    openDetailsMode(nextIndex);
});

detailsBar.addEventListener('click', toggleDetailsBox);
closeDetailsBtn.addEventListener('click', toggleDetailsBox);
backToHomeBtn.addEventListener('click', closeDetailsMode);

function toggleDetailsBox() {
    const t = translations[currentLang];
    const isExpanded = detailsContentBox.classList.contains('expanded');
    if (isExpanded) {
        detailsContentBox.classList.remove('expanded');
        detailIcon.classList.remove('fa-minus');
        detailIcon.classList.add('fa-plus');
        detailToggleText.textContent = t.details;
    } else {
        detailsContentBox.classList.add('expanded');
        detailIcon.classList.remove('fa-plus');
        detailIcon.classList.add('fa-minus');
        detailToggleText.textContent = t.close;
    }
}

const leftZone = document.getElementById('nav-left');
const rightZone = document.getElementById('nav-right');
if (leftZone && rightZone) {
    leftZone.addEventListener('click', () => { if(!document.body.classList.contains('details-mode')) swiper.slidePrev(); });
    rightZone.addEventListener('click', () => { if(!document.body.classList.contains('details-mode')) swiper.slideNext(); });
}

const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
const icon = musicBtn.querySelector('i');
let isPlaying = false;
musicBtn.addEventListener('click', () => {
    if (isPlaying) { bgMusic.pause(); icon.classList.replace('fa-pause', 'fa-play'); isPlaying = false; }
    else { bgMusic.play(); icon.classList.replace('fa-play', 'fa-pause'); isPlaying = true; }
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) { bgMusic.pause(); } 
    else { if (isPlaying) { bgMusic.play(); } }
});