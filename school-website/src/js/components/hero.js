import { t } from '../utils/language.js';
import { renderPage, setCurrentPage } from '../utils/pageRenderer.js';

export async function renderHero(container) {
    container.innerHTML = `
        <div class="hero">
            <h1 class="hero-title">${t('hero_title')}</h1>
            <h2 class="hero-subtitle">${t('hero_subtilte')}</h2>
            <p style="font-size: 1.2rem; margin-top: 1rem;">${t('hero_desc')}</p>
            <button class="explore-btn">${t('hero_btn')}</button>
        </div>
    `;
    container.querySelector('.explore-btn')?.addEventListener('click', async () => {
        const pageContainer = document.getElementById('page-content');
        setCurrentPage('fasilitas');
        await renderPage('fasilitas', pageContainer);
    });
}

window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const scrollPos = window.scrollY;
  if (scrollPos > 200) {
    hero.classList.add('scrolled');
  } else {
    hero.classList.remove('scrolled');
  }
});
