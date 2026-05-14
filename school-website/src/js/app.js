// Perbaikan semua path import
import { injectGlobalStyles } from '../css/global.js';
import { initTheme } from '../css/theme.js';
import { renderNavbar, attachNavbarEvents } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderPage, setCurrentPage, getCurrentPage } from './utils/pageRenderer.js';
import { setLanguage, addLanguageListener } from './utils/language.js';
import { renderFasilitas } from './components/fasilitas.js';

// Inisialisasi aplikasi
async function initApp() {
    // Inject CSS
    injectGlobalStyles();
    initTheme();
    
    const app = document.getElementById('app');
    if (!app) {
        console.error('Element #app tidak ditemukan');
        return;
    }
    
    app.innerHTML = `
        <div class="app-wrapper">
            <header id="navbar-container"></header>
            <main id="page-content"></main>
            <footer id="footer-container"></footer>
        </div>
    `;
    
    // Render komponen
    const navbarContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');
    const pageContainer = document.getElementById('page-content');
    
    if (!navbarContainer || !footerContainer || !pageContainer) {
        console.error('Container tidak ditemukan');
        return;
    }
    
    renderNavbar(navbarContainer);
    renderFooter(footerContainer);
    
    // Render halaman awal
    await renderPage('home', pageContainer);
    setCurrentPage('home');
    
    // Event navigasi
    attachNavbarEvents(async (pageId) => {
        setCurrentPage(pageId);
        await renderPage(pageId, pageContainer);
    });
    
    // Listener perubahan bahasa
    addLanguageListener(async () => {
        const currentPage = getCurrentPage();
        renderNavbar(navbarContainer);
        renderFooter(footerContainer);
        attachNavbarEvents(async (pageId) => {
            setCurrentPage(pageId);
            await renderPage(pageId, pageContainer);
        });
        await renderPage(currentPage, pageContainer);
    });
}

// Jalankan saat DOM siap
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();

}