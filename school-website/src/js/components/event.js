import { t } from '../utils/language.js';

export async function renderEvent(container, isPreview = false) {
    let items = t('event_items');
    if (isPreview) items = items.slice(0, 2);
    let html = `<h2  class= "section-title">${t('event_title')}</h2><div class="card-grid">`;
    items.forEach(ev => {
        html += `<div class="card"><img src="${ev.img}" alt="event"><div class="card-content"><h3 class="card-title">${ev.title}</h3><p>${ev.desc}</p></div></div>`;
    });
    html += `</div>`;
    container.insertAdjacentHTML('beforeend', html);
}