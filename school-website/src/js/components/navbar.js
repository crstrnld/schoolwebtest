import { t, setLanguage, getCurrentLanguage } from '../utils/language.js';

export function renderNavbar(container) {
    const currentLang = getCurrentLanguage();
    container.innerHTML = `
        <nav class="navbar">
            <!-- Hamburger di kiri -->
            <button class="hamburger" id="hamburger-btn">☰</button>
            
            <!-- Logo -->
            <div class="brand">
                <img src="../../assets/images/logo.png" alt="Logo Sekolah">
                <strong>PASMI</strong>
            </div>

            <!-- Menu link -->
            <ul class="nav-links" id="nav-links">
                <li><a href="#" data-page="home">${t('nav_home')}</a></li>
                <li><a href="#" data-page="struktur">${t('nav_struktur')}</a></li>
                <li><a href="#" data-page="visimisi">${t('nav_visimisi')}</a></li>
                <li><a href="#" data-page="ekskul">${t('nav_ekskul')}</a></li>
                <li><a href="#" data-page="alumni">${t('nav_alumni')}</a></li>
                <li><a href="#" data-page="berita">${t('nav_berita')}</a></li>
                <li><a href="#" data-page="event">${t('nav_event')}</a></li>
                <li><a href="#" data-page="fasilitas">${t('nav_fasilitas')}</a></li>
                <li class="nav-extra">
                    <button class="btn-registrasi" id="registrasi-btn-extra">${t('nav_registrasi')}</button>
                    <select class="lang-selector">
                        <option value="id" ${currentLang === 'id' ? 'selected' : ''}>🇮🇩 Indonesia</option>
                        <option value="en" ${currentLang === 'en' ? 'selected' : ''}>🇬🇧 English</option>
                    </select>
                </li>
            </ul>

            <!-- Action -->
            <div class="nav-action">
                <button class="btn-registrasi" id="registrasi-btn-action">${t('nav_registrasi')}</button>
                <select class="lang-selector">
                <option value="id" ${currentLang === 'id' ? 'selected' : ''}>🇮🇩 Indonesia</option>
                <option value="en" ${currentLang === 'en' ? 'selected' : ''}>🇬🇧 English</option>
                </select>
            </div>
        </nav>
    `;

    // Event tombol registrasi
    document.querySelectorAll('.btn-registrasi').forEach(btn => {
        btn.addEventListener('click', () => {
            const popup = window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSderPT8otMUjFdb47a82ARHUKW3ZhiiYrpiMzujektDo2MPmw/viewform?pli=1",
            "Registrasi",
            "width=800,height=600,scrollbars=yes,resizable=yes"
            );
            popup?.focus();
        });
    });


    // Event selector bahasa
    container.querySelectorAll('.lang-selector').forEach(select => {
    select.addEventListener('change', (e) => setLanguage(e.target.value));
    });

    const logo = container.querySelector('.brand');
    if (logo) {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        // trigger link home supaya konsisten dengan navigasi
        const homeLink = document.querySelector('[data-page="home"]');
        if (homeLink) homeLink.click();
    });
}

    // Event toggle hamburger + auto close
    const hamburger = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    }
}

export function attachNavbarEvents(navigateCallback) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            if (page) navigateCallback(page);
        });
    });
}
