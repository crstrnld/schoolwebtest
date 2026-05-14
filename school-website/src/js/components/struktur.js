import { t } from '../utils/language.js';

export function renderStruktur(container) {
    const strukturItems = t('struct_items'); 
    let html = `<h2 class= "section-title">${t('struct_title')}</h2><div class="card-grid">`;

    strukturItems.forEach(item => {
        html += `
          <div class="card" style="text-align:center; background:white; padding:1rem; border-radius:15px;">
            <img src="${item.photo}" alt="${item.name}" 
                 style="width:200px; height:200px; border-radius:12px; object-fit:cover; margin-bottom:1rem;">
            <h3>${item.name}</h3>
            <p><strong>${item.role}</strong></p>
          </div>`;
    });

    html += `</div>`;
    container.innerHTML = html;
}
