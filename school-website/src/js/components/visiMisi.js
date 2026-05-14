import { t } from '../utils/language.js';

export function renderVisiMisi(container) {
    const misiItems = t('misi_list')
        .map(item => `<li style="margin-bottom: 1rem;">${item}</li>`)
        .join('');
    
    container.innerHTML = `
        <h2 class="section-title">${t('visi_misi_title')}</h2>
        <div style="background: white; padding: 2rem; border-radius: 20px; text-align: center; max-width: 800px; margin: 0 auto;">
            <h3 class="section-subtitle">${t('visi_title')}</h3>
            <p style="margin: 1rem 0 2rem;">${t('visi_text')}</p>
            <h3 class="section-subtitle">${t('misi_title')}</h3>
            <ul style="list-style: none; padding: 0; margin-top: 1rem; display: inline-block; text-align: left;">
                ${misiItems}
            </ul>
        </div>
    `;
}
