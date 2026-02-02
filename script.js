import { conferenceData } from './data.js';

// =========================================
// MAIN INITIALIZATION
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
    renderRibbon();
    renderHero();
    renderAbout();
    renderThemes();
    renderSpeakers();
    renderCommittees();
    renderAdvisory();
    renderRegistration();
    renderDates();
    renderFooter();

    // Initialize interactive elements
    setupSpeakerCarousel();
    setupMobileMenu();
});


// =========================================
// NAVIGATION BAR
// =========================================
function renderNavigation() {
    // Updates the logo text based on data
    const logoEl = document.getElementById('nav-logo');
    if (logoEl) logoEl.innerText = conferenceData.conferenceName;
}

function setupMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-links');

    if (btn && nav) {
        btn.addEventListener('click', () => {
            nav.classList.toggle('active');
            btn.classList.toggle('open');
        });
    }
}

// =========================================
// SCROLLING RIBBON
// =========================================
function renderRibbon() {
    const container = document.getElementById('scrolling-ribbon');
    if (!container) return;

    // 1. Format the data string
    const dataItems = conferenceData.importantDates.map(item =>
        `<div class="ribbon-item">
            <span>${item.description}:</span> 
            <span style="color:#d32f2f">${item.date}</span>
         </div>`
    ).join('');

    // 2. Inject HTML
    // We duplicate the content twice inside the track to create the seamless loop
    container.innerHTML = `
        <div class="ribbon-track">
            ${dataItems} ${dataItems} ${dataItems} 
        </div>
    `;
    // Note: I repeated it 3 times above to ensure it fills wide screens 
    // before the animation loop takes over.
}


// =========================================
// HERO SECTION
// =========================================
function renderHero() {
    const heroSection = document.getElementById('hero-section');
    const data = conferenceData.hero;
    const date = conferenceData.conferenceDate;

    // We build the carousel HTML string based on the images array
    const carouselSlides = data.carouselImages.map((img, index) => `
        <div class="hero-slide ${index === 0 ? 'active' : ''}">
            <img src="${img}" alt="Conference Highlight ${index + 1}" loading="lazy">
        </div>
    `).join('');

    heroSection.innerHTML = `
        <div class="hero-container">
            <div class="hero-content">
                <span class="hero-conference-name">${conferenceData.conferenceName}</span>
                <div class="hero-divider"></div>
                <h1 class="hero-title">${data.title}</h1>
                <p class="hero-subtitle">${data.subtitle}</p>
                <div class="hero-info">
                    <div class="info-item">
                        <strong>Madras Institute of Technology</strong>
                        <span>${conferenceData.universityName}</span>
                    </div>
                    <div class="info-item">
                        <strong></strong>
                        <!--  <span>${date}</span> -->
                    </div>
                </div>
                <a href="#registration-section" class="cta-button">Secure Your Seat</a>
            </div>
            
            <div class="hero-carousel">
                <div class="carousel-track">
                    ${carouselSlides}
                </div>
            </div>
        </div>
    `;

    // Auto-rotate Hero Carousel (Simple Fade)
    startHeroCarousel();
}

function startHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;

    let current = 0;
    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 4000); // Change every 4 seconds
}


function renderAbout() {
    // 1. UPDATE THIS LINE: Target your new HTML ID
    const topSlot = document.getElementById('conference-display-section');

    // 2. Keep the bottom slot target (assuming you still have this in HTML for the others)
    const bottomSlot = document.getElementById('other-about-section');

    // 3. Find "About Conference" data
    const topData = conferenceData.aboutSections.find(item => item.id === 'about-conference');

    // 4. Find everything else
    const bottomData = conferenceData.aboutSections.filter(item => item.id !== 'about-conference');

    // 5. Render Top Slot (Injects the "About Conference" block)
    if (topSlot && topData) {
        topSlot.innerHTML = generateAboutHTML(topData);
    }

    // 6. Render Bottom Slot (Injects University & Department)
    if (bottomSlot && bottomData.length > 0) {
        bottomSlot.innerHTML = bottomData.map(item => generateAboutHTML(item)).join('');
    }
}

// Helper function to generate the HTML (so we don't write it twice)
function generateAboutHTML(section) {
    return `
        <div class="about-block" id="${section.id}">
            <div class="container">
                <h2 class="section-title">${section.title}</h2>
                <div class="section-divider"></div>
                <p class="section-text" style="max-width: 800px; opacity: 0.9;">
                    ${section.description}
                </p>
            </div>
        </div>
    `;
}


// =========================================
// THEMES SECTION
// =========================================
function renderThemes() {
    const themeSection = document.getElementById('themes-section');

    const cards = conferenceData.themes.map(theme => `
        <div class="theme-card">
            <h3 style="vertical-align: middle;">${theme.title}</h3>
        </div>
    `).join('');

    themeSection.innerHTML = `
        <div class="container">
            <h2 class="text-center">Conference Themes</h2>
            <div class="theme-grid">
                ${cards}
            </div>
        </div>
    `;
}


// =========================================
// SPEAKERS SECTION (Dynamic Carousel)
// =========================================
// =========================================
// SPEAKERS SECTION (STATIC GRID – NO CAROUSEL)
// =========================================
function renderSpeakers() {
    const speakerSection = document.getElementById('speakers-section');

    const cards = conferenceData.speakers.map(person => `
        <div class="speaker-card">
            <div class="speaker-img-wrapper">
                <img src="${person.image}" alt="${person.name}" loading="lazy">
            </div>
            <div class="speaker-info">
                <h3>${person.name}</h3>
                <p class="role">${person.title} ${person.institution}</p>
                <div class="topic-tag"><text class="topic-tag-text">Topic: ${person.topic}</text></div>
            </div>
        </div>
    `).join('');

    speakerSection.innerHTML = `
        <div class="container">
            <h2 class="text-center">Keynote Speakers</h2>

            <div class="speaker-grid">
                ${cards}
            </div>
        </div>
    `;
}





// =========================================
// COMMITTEE SECTION
// =========================================
function renderCommittees() {
    const section = document.getElementById('committee-section');

    // Helper to generate grid HTML
    const createGrid = (members) => members.map(m => `
        <div class="committee-card">
            <div class="committee-img-frame">
                <img src="${m.image}" alt="${m.name}" loading="lazy">
            </div>
            <h4>${m.name}</h4>
            <p class="comm-title">${m.title}</p>
            
            ${m.position ? `<p class="comm-pos">${m.position}</p>` : ''}
        </div>
    `).join('');

    section.innerHTML = `
        <div class="container">
            <h2 class="text-center">Organizing Committee</h2>
            <div class="committee-grid">
                ${createGrid(conferenceData.organizingCommittee)}
            </div>

            <h2 class="text-center" style="margin-top: 60px;">Committee Members</h2>
            <div class="committee-grid">
                ${createGrid(conferenceData.supportCommittee)}
            </div>
        </div>
    `;
}


// =========================================
// ADVISORY BOARD SECTION
// =========================================
function renderAdvisory() {
    const section = document.getElementById('advisory-section');

    const createList = (list) => list.map(m => `
        <!-- <li class="advisory-item">
            <strong>${m.name}</strong>
            <span>${m.title}</span>
        </li> -->
    `).join('');

    section.innerHTML = `
        <!-- <div class="container">
            <div class="advisory-wrapper">
            
                            <div class="advisory-col">
                    <h3>International Advisory Board</h3>
                    <ul class="advisory-list">
                    ${createList(conferenceData.internationalAdvisory)}
                        
                    </ul>
                </div>  

                <div class="advisory-col">
                    <h3>National Advisory Board</h3>
                    <ul class="advisory-list">
                        ${createList(conferenceData.nationalAdvisory)}
                    </ul>
                </div> 
            </div>
        </div>  -->
    `;
}


// =========================================
// REGISTRATION SECTION
// =========================================
function renderRegistration() {
    const section = document.getElementById('registration-section');
    const bank = conferenceData.bankDetails;

    const feesCards = conferenceData.fees.map(fee => `
        <div class="fee-card">
            <div class="fee-header">${fee.category}</div>
            <div class="fee-price">
                <span class="currency">INR</span> ${fee.priceINR}
            </div>
            <p class="fee-note">${fee.note}</p>
            <a href="#contact-section" class="btn-outline">Register Now</a>
        </div>
    `).join('');

    section.innerHTML = `
        <div class="container">
            <h2 class="text-center">Registration Fees</h2>
            <div class="fees-grid">
                ${feesCards}
            </div>

            <div class="bank-details-block">
                <h3>Account Details</h3>
                <div class="bank-grid">
                    <div class="bank-item"><span>Name:</span> ${bank.accountName}</div>
                    <div class="bank-item"><span>Acc No:</span> ${bank.accountNumber}</div>
                    <div class="bank-item"><span>Bank:</span> ${bank.bankName}</div>
                    <div class="bank-item"><span>Branch:</span> ${bank.branch}</div>
                    <div class="bank-item"><span>IFSC:</span> ${bank.ifsc}</div>
                    <div class="bank-item"><span>MICR:</span> ${bank.micr}</div>
                </div>
            </div>
            <div class="bank-grid" style="margin-top: 20px;">
                <div>
                    
                    <div class="bank-item"><h3>Publication Info</h3>All accepted and presented papers will be published in the conference proceedings with an ISBN number.</div>
                </div>
                <div>
                    
                    <div class="bank-item"><h3>Accommodation </h3>Accommodation will be provided to the participants on prior request in the hostels on a payment basis.</div>
                </div>
            </div>
        </div>
    `;
}


// =========================================
// IMPORTANT DATES & FOOTER
// =========================================
function renderDates() {
    const section = document.getElementById('dates-section');

    const datesHtml = conferenceData.importantDates.map(item => `
        <div class="date-row">
            <span class="date-desc">${item.description}</span>
            <span class="date-val">${item.date}</span>
        </div>
    `).join('');

    section.innerHTML = `
        <div class="container">
            <h2 class="text-center">Important Dates</h2>
            <div class="dates-wrapper">
                ${datesHtml}
            </div>
        </div>
    `;
}

function renderFooter() {
    const footer = document.getElementById('contact-section');
    const c = conferenceData.contact;

    footer.innerHTML = `
        <div class="container footer-grid">
            <div class="footer-col">
                <h4>Contact Us</h4>
                <p>Email: <a href="mailto:${c.email}">${c.email}</a></p>
                <p>Phone: ${c.phone}</p>                           
            </div>
            <div class="footer-col map-col">
                <h4>Location</h4>
                <p>&#128205 ${c.address}</p><a href="https://maps.app.goo.gl/5B4NDPPP551KaAFe7" style="padding: 7px 15px; background-color: white; display: inline-block; color: black; margin-top:15px; border-radius: 4px; font-size:16px;">View On Map<a>
                
        </div>
        <div class="copyrt">
            &copy;NCARMS - ${new Date().getFullYear()} . All Rights Reserved.
        </div>
    `;
}