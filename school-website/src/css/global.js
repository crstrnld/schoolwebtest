export function injectGlobalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', 'Segoe UI', sans-serif;
            background: #ddeeff;
            color: #1a2a3a;
            overflow-x: hidden;
        }
        .app-wrapper {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        main {
            flex: 1;
            max-width: none;
            margin: 0 auto;
            padding: 0;
            width: 100%;
            margin-top: 50px;
        }

        .home-preview {
            display: flex;
            flex-direction: row;
            gap: 2rem;
            margin-top: 2rem;
        }

        /* Responsive untuk HP */
        @media (max-width: 768px) {
            main {
                margin-top: 30px;   /* beri jarak dari navbar */
                padding: 0rem;    /* biar konten tidak mepet */
            }
            .home-preview {
                flex-direction: column; /* jadi vertikal */
                gap: 1.5rem;
                margin-top: 1.5rem;
            }
        }
    `;
    document.head.appendChild(style);
}
