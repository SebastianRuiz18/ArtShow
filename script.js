// --- CONFIGURACIÓN DE IDIOMA ---
let currentLang = 'en'; // Default English

const translations = {
    en: {
        menu: "MENU",
        reserve: "RESERVE",
        story: "STORY",
        home: "HOME",
        contact: "CONTACT",
        back: "BACK",
        details: "DETAILS",
        close: "CLOSE",
        nextSection: "NEXT SECTION",
        codePrompt: "Please enter the guest code from your invitation.",
        codeLabel: "ACCESS CODE",
        codeError: "Incorrect code. Please try again.",
        enterBtn: "ENTER",
        guest: "GUEST",
        reservedFor: "We have reserved",
        seats: "seat(s) for you.",
        nameLabel: "FULL NAME",
        attendingLabel: "WILL YOU BE ATTENDING?",
        yes: "YES",
        no: "NO",
        emailLabel: "EMAIL",
        phoneLabel: "PHONE",
        dietLabel: "DIETARY RESTRICTIONS",
        none: "None",
        messageLabel: "MESSAGE FOR THE COUPLE",
        songLabel: "MUST-PLAY SONG REQUEST",
        writeMsg: "Write something nice...",
        artistSong: "Artist - Song",
        sendBtn: "SEND CONFIRMATION",
        sending: "SENDING...",
        errorSend: "ERROR SENDING",
        validationMsg: "Please complete the fields marked in red.",
        thankTitle: "THANK YOU!",
        thankMsg: "Your confirmation has been successfully received.",
        seeYou: "See you on August 8th."
    },
    es: {
        menu: "MENÚ",
        reserve: "RESERVAR",
        story: "HISTORIA",
        home: "HOME",
        contact: "CONTACTO",
        back: "VOLVER",
        details: "DETALLES",
        close: "CERRAR",
        nextSection: "SIGUIENTE SECCION",
        codePrompt: "Por favor ingresa el código de invitado que viene en tu invitación física.",
        codeLabel: "CÓDIGO DE ACCESO",
        codeError: "Código incorrecto. Intenta de nuevo.",
        enterBtn: "ENTRAR",
        guest: "INVITADO",
        reservedFor: "Hemos reservado",
        seats: "lugar(es) para ti.",
        nameLabel: "NOMBRE COMPLETO",
        attendingLabel: "¿NOS ACOMPAÑAS?",
        yes: "SÍ",
        no: "NO",
        emailLabel: "EMAIL",
        phoneLabel: "TELÉFONO",
        dietLabel: "RESTRICCIONES ALIMENTICIAS",
        none: "Ninguna",
        messageLabel: "MENSAJE PARA LA PAREJA",
        songLabel: "CANCIÓN QUE NO PUEDE FALTAR",
        writeMsg: "Escribe algo lindo...",
        artistSong: "Artista - Canción",
        sendBtn: "ENVIAR CONFIRMACIÓN",
        sending: "ENVIANDO...",
        errorSend: "ERROR AL ENVIAR",
        validationMsg: "Por favor completa los campos marcados en rojo.",
        thankTitle: "¡GRACIAS!",
        thankMsg: "Tu confirmación ha sido recibida con éxito.",
        seeYou: "Nos vemos el 8 de Agosto."
    }
};

// DATOS DE SECCIONES
const slidesData = [
    { 
        img: 'https://i.pinimg.com/1200x/46/f6/3f/46f63fa591dd3799dac141f9a0e9bf66.jpg', 
        subtitle: { en: 'WELCOME', es: 'BIENVENIDOS' }, 
        btnText: { en: 'OUR STORY', es: 'NUESTRA HISTORIA' }, 
        title: { en: 'ALEXIA & JAVAN', es: 'ALEXIA & JAVAN' }, 
        detailsContent: {
            en: `<p>They say the best loves come when you least expect them. Our story began on an ordinary autumn afternoon, over coffee and nervous laughter that turned into complicity.</p><br><p>Together we have learned that love is not just looking at each other, but looking together in the same direction.</p>`,
            es: `<p>Dicen que los mejores amores llegan sin avisar. Nuestra historia comenzó una tarde de otoño, entre cafés y risas que se volvieron complicidad.</p><br><p>Juntos hemos aprendido que el amor no es solo mirarse el uno al otro, sino mirar juntos en la misma dirección.</p>`
        }
    },
    { 
        img: 'https://i.pinimg.com/1200x/e2/91/fc/e291fcc73f3cdae4763cec3d76677219.jpg', 
        subtitle: { en: 'OUR UNION', es: 'NUESTRA UNIÓN' }, 
        btnText: { en: 'INVITATION', es: 'INVITACIÓN' }, 
        title: { en: 'CEREMONY & PARTY', es: 'CEREMONIA & FIESTA' }, 
        detailsContent: {
            en: `<p><strong>SATURDAY, AUGUST 8TH</strong></p><p>Brooklyn Botanical Garden, NY</p><br><p>Ceremony: 5:00 PM</p><p>Reception: 6:00 PM</p>`,
            es: `<p><strong>SÁBADO 8 DE AGOSTO</strong></p><p>Brooklyn Botanical Garden, NY</p><br><p>Ceremonia: 5:00 PM</p><p>Recepción: 6:00 PM</p>`
        }
    },
    { 
        img: 'https://i.pinimg.com/1200x/5b/84/50/5b8450369dd4b05a0aa04b9bd2dae540.jpg', 
        subtitle: { en: 'THE BIG DAY', es: 'EL GRAN DÍA' }, 
        btnText: { en: 'VIEW SCHEDULE', es: 'VER HORARIOS' }, 
        title: { en: 'ITINERARY', es: 'ITINERARIO' }, 
        detailsContent: {
            en: `<p>4:30 PM - Arrival</p><p>5:00 PM - Ceremony</p><p>7:30 PM - Dinner</p><p>9:00 PM - Party</p>`,
            es: `<p>4:30 PM - Llegada</p><p>5:00 PM - Ceremonia</p><p>7:30 PM - Cena</p><p>9:00 PM - Fiesta</p>`
        }
    },
    { 
        img: 'https://i.pinimg.com/1200x/d9/83/b0/d983b09eb2a2c2e92b43b88388d30853.jpg', 
        subtitle: { en: 'IMPORTANT DETAILS', es: 'DETALLES IMPORTANTES' }, 
        btnText: { en: 'GUEST GUIDE', es: 'GUÍA DEL INVITADO' }, 
        title: { en: 'INFORMATION', es: 'INFORMACIÓN' }, 
        detailsContent: {
            en: `<p><strong>DRESS CODE</strong></p><p>Black Tie Optional</p><br><p><strong>CHILDREN</strong></p><p>Adults only event.</p>`,
            es: `<p><strong>DRESS CODE</strong></p><p>Black Tie Optional</p><br><p><strong>NIÑOS</strong></p><p>Evento solo para adultos.</p>`
        }
    },
    { 
        img: 'https://i.pinimg.com/1200x/6b/bf/a3/6bbfa3c0577758f0f9c585ea4a712ebc.jpg', 
        subtitle: { en: 'A DETAIL', es: 'UN DETALLE' }, 
        btnText: { en: 'VIEW REGISTRY', es: 'VER MESA' }, 
        title: { en: 'REGISTRY', es: 'REGISTRO' }, 
        detailsContent: {
            en: `<p>Your presence is our present.</p><br><p><a href="#">Liverpool: 123456</a></p><p><a href="#">Amazon Registry</a></p>`,
            es: `<p>Su presencia es nuestro regalo.</p><br><p><a href="#">Liverpool: 123456</a></p><p><a href="#">Amazon Registry</a></p>`
        }
    },
    { 
        img: 'https://i.pinimg.com/736x/3e/96/2c/3e962c6eefbd3262e9b91c05887ce859.jpg', 
        subtitle: { en: 'RSVP', es: 'CONFIRMA ASISTENCIA' }, 
        btnText: { en: 'RESERVE SPOT', es: 'RESERVAR LUGAR' }, 
        title: { en: 'RSVP', es: 'RSVP' }, 
        isRSVP: true
    },
    { 
        img: 'https://i.pinimg.com/736x/8a/c2/82/8ac282e8218134d726caa5ce75fc6ee2.jpg', 
        subtitle: { en: 'QUESTIONS?', es: '¿TIENES DUDAS?' }, 
        btnText: { en: 'WRITE US', es: 'ESCRIBIRNOS' }, 
        title: { en: 'CONTACT', es: 'CONTACTO' }, 
        detailsContent: {
            en: `<p>Wedding Planner: Ana (555-123-4567)</p><p>Email: boda@alexiayjavan.com</p>`,
            es: `<p>Wedding Planner: Ana (555-123-4567)</p><p>Email: boda@alexiayjavan.com</p>`
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

    // 1. Limpiar DOM
    swiperWrapper.innerHTML = '';

    // 2. Insertar Slides con el idioma actual
    slidesData.forEach(slide => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'swiper-slide';
        slideDiv.innerHTML = `<h2 class="slide-title">${slide.title[currentLang]}</h2>`;
        swiperWrapper.appendChild(slideDiv);
    });

    // 3. Inicializar Swiper Nuevo
    swiper = new Swiper(".text-swiper", {
        loop: false, slidesPerView: "auto", centeredSlides: true, speed: 600, grabCursor: true, initialSlide: initialIndex,
        mousewheel: true, keyboard: { enabled: true },
        breakpoints: { 320: { spaceBetween: 20 }, 768: { spaceBetween: 50 } },
        on: {
            init: function () { updateContent(this.realIndex); },
            slideChange: function () { updateContent(this.realIndex); }
        }
    });
}

// *** AQUÍ ESTÁ LA SOLUCIÓN ***
// Esperamos a que cargue TODA la ventana (fuentes, imágenes, estilos)
window.addEventListener('load', () => {
    // 1. Construimos el swiper
    rebuildSwiper(0);
    // 2. Esperamos un pelín más para asegurar renderizado
    setTimeout(() => {
        // 3. Hacemos visible el contenido (Fade In)
        mainHero.classList.remove('loading-state');
        mainHero.classList.add('loaded-visible');
    }, 100);
});

// LOGICA CAMBIO DE IDIOMA
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
    
    // 1. Guardar donde estamos
    const currentIndex = swiper ? swiper.activeIndex : 0;

    // 2. Textos UI Estática
    document.getElementById('nav-menu-text').textContent = t.menu;
    document.getElementById('nav-reserve-text').textContent = t.reserve;
    document.getElementById('story-label').textContent = t.story;
    document.getElementById('menu-home-btn').textContent = t.home;
    document.getElementById('menu-contact-btn').textContent = t.contact;
    document.getElementById('back-to-home').textContent = t.back;
    
    const isExpanded = document.getElementById('details-content-box').classList.contains('expanded');
    document.getElementById('detail-toggle-text').textContent = isExpanded ? t.close : t.details;

    // 3. Clases activas
    langOpts.forEach(o => {
        if(o.getAttribute('data-lang') === currentLang) o.classList.add('active-lang');
        else o.classList.remove('active-lang');
    });

    // 4. Menu Overlay
    const menuLinks = document.querySelectorAll('.menu-items .menu-link');
    menuLinks.forEach(link => {
        const idx = link.getAttribute('data-index');
        if(slidesData[idx]) link.textContent = slidesData[idx].title[currentLang];
    });

    // 5. Reconstruir Slider (Ocultar -> Reconstruir -> Mostrar)
    const swiperContainer = document.querySelector('.text-swiper');
    swiperContainer.classList.add('opacity-zero');
    
    setTimeout(() => {
        rebuildSwiper(currentIndex);
        swiperContainer.classList.remove('opacity-zero');
    }, 200);

    // 6. Actualizar detalles si están abiertos
    if (document.body.classList.contains('details-mode')) {
        openDetailsMode(currentIndex);
    }
}

function updateContent(index) {
    const data = slidesData[index];
    if(!data) return;
    bgLayer.style.backgroundImage = `url('${data.img}')`;
    subtitleEl.style.opacity = '0';
    ctaBtn.style.opacity = '0';
    setTimeout(() => {
        subtitleEl.textContent = data.subtitle[currentLang];
        ctaBtn.textContent = data.btnText[currentLang];
        ctaBtn.setAttribute('href', data.btnLink || '#');
        subtitleEl.style.opacity = '1';
        ctaBtn.style.opacity = '1';
    }, 300);
}

// LOGICA GENERAL
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
contactBtn.addEventListener('click', () => { swiper.slideTo(6); toggleMenu(); closeDetailsMode(); });

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
                <input type="text" id="rsvp-code-input" class="rsvp-input" placeholder="Ej. BODA2">
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
                if (code === 'BODA1') guests = 1;
                else if (code === 'BODA2') guests = 2;
                else if (code === 'BODA3') guests = 3;
                else if (code === 'FAMILIA4') guests = 4;

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
            let formData = { _subject: `New RSVP (${currentLang.toUpperCase()})`, _captcha: "false" };

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
                formData[`Guest_${i}_Diet`] = document.getElementById(`diet_${i}`).value || "None";
            }

            const email1 = document.getElementById('email_1') ? document.getElementById('email_1').value : '';
            const tel1 = document.getElementById('tel_1') ? document.getElementById('tel_1').value : '';
            const message = document.getElementById('guest_message').value;
            const song = document.getElementById('guest_song').value;

            if(email1) formData["Contact_Email"] = email1;
            if(tel1) formData["Contact_Phone"] = tel1;
            if(message) formData["Message_For_Couple"] = message;
            if(song) formData["Song_Request"] = song;

            const warningMsg = document.getElementById('form-warning');
            
            if (isValid) {
                warningMsg.style.display = 'none';
                btn.textContent = t.sending;
                btn.disabled = true;

                fetch("https://formsubmit.co/ajax/madebyslivermx@gmail.com", {
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