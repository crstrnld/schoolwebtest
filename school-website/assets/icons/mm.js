import { t } from '../utils/language.js';

export function renderRegistration(container) {
    container.innerHTML = `
        <h2>${t('reg_title')}</h2>
        <form id="registrationForm" style="background: white; padding: 2rem; border-radius: 20px; margin-top: 1rem;">
            <div class="form-group"><label>${t('reg_name')}</label><input type="text" id="regName" required placeholder="..."></div>
            <div class="form-group"><label>${t('reg_email')}</label><input type="email" id="regEmail" required placeholder="email@example.com"></div>
            <div class="form-group"><label>${t('reg_phone')}</label><input type="tel" id="regPhone" required placeholder="0812-3456-7890"></div>
            <button type="submit" class="submit-btn">${t('reg_submit')}</button>
        </form>
        <div id="formMessage" style="margin-top: 1rem;"></div>
    `;
    
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        if (name) {
            document.getElementById('formMessage').innerHTML = `<div style="background: #d4edda; padding: 1rem; border-radius: 12px; color: #155724;">${t('reg_success')}</div>`;
            form.reset();
        }
    });
}