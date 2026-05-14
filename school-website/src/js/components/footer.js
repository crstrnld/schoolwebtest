import { t } from '../utils/language.js';

export function renderFooter(container) {
    container.innerHTML = `
        <footer style="background:#004080; color:white; padding:2rem; text-align:center; font-family:Inter,sans-serif;">
            <div>
                <h3>${t('footer_contact')}</h3>
                <p><i class="fas fa-map-marker-alt"></i> 3WJG+FR7, Selabatu, Kec. Cikole, Kota Sukabumi, Jawa Barat 43114</p>
                <p><i class="fas fa-phone"></i> +62 823-2145-7963</p>
                <p><i class="fas fa-envelope"></i> pasmiku2024@gmail.com</p>
                <div class="footer-links" style="margin-top: 1rem;">
                    <a href="https://www.facebook.com/share/g/1bNLNAL9Dt/" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
                    <a href="https://www.instagram.com/sdsmpsmaadventsukabumi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
                    <a href="https://www.youtube.com/@sdsmpsmaadventsukabumi" target="_blank"><i class="fab fa-youtube fa-2x"></i></a>
                </div>
                <p style="margin-top: 1.5rem;">&copy; 2026 bukanalen</p>
            </div>
        </footer>
    `;
}
