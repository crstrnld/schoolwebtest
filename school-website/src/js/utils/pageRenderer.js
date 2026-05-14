import { renderHero } from '../components/hero.js';
import { renderStruktur } from '../components/struktur.js';
import { renderVisiMisi } from '../components/visiMisi.js';
import { renderEkstrakurikuler } from '../components/ekstrakurikuler.js';
import { renderAlumni } from '../components/alumni.js';
import { renderRegistration } from '../components/registration.js';
import { renderBerita } from '../components/berita.js';
import { renderEvent } from '../components/event.js';
import { renderFasilitas } from '../components/fasilitas.js';
import { t } from './language.js';

const pageRenderers = {
  home: async (container) => {
    // kosongkan kontainer dulu
    container.innerHTML = '';

    // Hero section
    await renderHero(container);

    // Preview berita + event
    const previewContainer = document.createElement('div');
    previewContainer.className = 'home-preview';
    container.appendChild(previewContainer);

    await renderBerita(previewContainer, true);
    await renderEvent(previewContainer, true);
  },


  struktur: (container) => {
    container.innerHTML = '';
    renderStruktur(container);
  },

  visimisi: (container) => {
    container.innerHTML = '';
    renderVisiMisi(container);
  },

  ekskul: (container) => {
    container.innerHTML = '';
    renderEkstrakurikuler(container);
  },

  alumni: (container) => {
    container.innerHTML = '';
    renderAlumni(container);
  },

  registration: (container) => {
    container.innerHTML = '';
    renderRegistration(container);
  },

  fasilitas: (container) => {
    container.innerHTML = '';
    renderFasilitas(container);
  },

  berita: (container) => {
    container.innerHTML = '';
    renderBerita(container, false);
  },

  event: (container) => {
    container.innerHTML = '';
    renderEvent(container, false);
  }
};

let currentPage = 'home';

export async function renderPage(pageId, container) {
  const renderFn = pageRenderers[pageId];
  if (renderFn) {
    container.innerHTML = '';
    await renderFn(container);
    currentPage = pageId;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    container.innerHTML = `
      <div class="error-page">
        <h2>404</h2>
        <p>${t('nav_home') || 'Page not found'}</p>
      </div>
    `;
  }
}



export function setCurrentPage(page) {
  currentPage = page;
}

export function getCurrentPage() {
  return currentPage;
}

