export function initTheme() {
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --primary: #004080;
      --primary-dark: #002a55;
      --secondary: #ff8c42;
      --shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    /* Navbar */
    .navbar {
      background: var(--primary);
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
      box-shadow: var(--shadow);
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
    }

    .brand {
      display: flex;
      margin-left: 0px;
      align-items: center;
      color: white;
      font-size: 1.15rem;
    }

    
    .brand img {
      width: 33px;   /* ukuran logo */
      height: auto;
      margin-left: -10;
      margin-right: 8px;
    }

    .nav-links {
      display: flex;
      flex-wrap: wrap;
      gap: 1.2rem;
      list-style: none;
    }
    .nav-links a {
      color: white;
      text-decoration: none;
      font-weight: 600;
      transition: 0.2s;
    }

    
    .nav-links a:hover { color: var(--secondary); }

    .lang-selector {
      background: white;
      border: none;
      padding: 0.4rem 1rem;
      border-radius: 30px;
      font-weight: bold;
      cursor: pointer;
    }

    .btn-registrasi {
      background: linear-gradient(135deg, #ff9800, #f44336);
      color: #fff;
      padding: 0.4rem 1.6rem;
      border: none;
      border-radius: 25px;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .btn-registrasi:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .hamburger {
      display: none;
      font-size: 1.2rem;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      margin-right: 1.6rem; /* jarak ke logo */
      margin-left: -1.5rem;
      line-height: 1;
      padding-top: 0px;
      padding-bottom: 0;
    }

    .home-preview h2 {
      display: none;
    }

    .home-preview {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* grid responsif */
      gap: 1.5rem;            /* jarak antar item */
      padding: 1rem;          /* jarak dari tepi */
    }

    .home-preview .preview-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .home-preview img {
      width: 100%;
      border-radius: 12px;     /* biar lebih elegan */
      object-fit: cover;
    }



    /* Hero */
    .hero {
      background: linear-gradient(135deg, rgba(87, 139, 191, 0.9), rgba(0,42,85,0.85)),
                  url('../../assets/images/pasmi2.jpeg') no-repeat center/cover;
      transition: background 0.8s ease-in-out;
      width: 100%;
      min-height: 70vw;          /* penuh setinggi layar */
      margin-top: 0;          /* hilangkan jarak kotak */
      border-radius: 0;       /* hilangkan sudut bulat */
      padding: 0;             /* biar benar-benar full */
      padding-top: 0rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start; /* konten di tengah vertikal */
      align-items: center;     /* konten di tengah horizontal */
      color: white;
      text-align: center;
      transition: background 0.5s ease-in-out;
      margin-top: ;
    }

    .hero.scrolled {
      background: linear-gradient(135deg, rgba(87, 139, 191, 0.9), rgba(0,42,85,0.85)),
                  url('../../assets/images/pasmi1.jpeg') no-repeat center/cover;
    }
    .hero h1 { font-size: 2.5rem; }
    .hero-title {
      font-size: 3rem;       /* judul besar */
      font-weight: 800;
      margin-bottom: 0.5rem;
      margin-top: 100px;
    }

    .hero-subtitle {
      font-size: 1.8rem;     /* subjudul sedang */
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .explore-btn {
      background: var(--secondary);
      border: none;
      padding: 0.8rem 2rem;
      font-size: 1rem;
      border-radius: 40px;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s;
      margin-top: 700px;
    }
    .explore-btn:hover { transform: scale(1.05); }

    /* Card */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin: 2rem 0;
    }
    .card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: var(--shadow);
      transition: transform 0.2s;
    }
    .card:hover { transform: translateY(-5px); }
    .card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
    .card-content { padding: 1.2rem; }
    .card-title { font-weight: 700; margin-bottom: 0.5rem; color: var(--primary); }

    /* Form */
    .form-group { margin-bottom: 1.5rem; }
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    input {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 12px;
      font-family: inherit;
    }
    .submit-btn {
      background: var(--primary);
      color: white;
      border: none;
      padding: 0.8rem 2rem;
      border-radius: 40px;
      font-weight: bold;
      width: 100%;
      cursor: pointer;
    }

    /* Footer */
    footer {
      background: #0a2a44;
      color: #ddd;
      padding: 2rem;
      text-align: center;
    }
    .footer-links a {
      color: white;
      margin: 0 0.5rem;
      display: inline-block;
      transition: 0.2s;
    }
    .footer-links a:hover { color: var(--secondary); }

    /* Section title */
    .section-title {
      text-align: center;
      font-size: 2.2rem;
      font-weight: 800;
      margin: 2rem 0 1.5rem;
      color: var(--primary);
    }

    /* Alumni gallery */
    .alumni-gallery img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      border-radius: 12px;
    }

    /* Desktop */
    .nav-action { display: flex; }
    .nav-extra { display: none; }

    /* Mobile */
    @media (max-width: 1186px) {
        .nav-action { display: none; }
        .nav-extra {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            margin-top: 1rem;
        }
    }


    /* Responsive */
    /* Mobile optimizations */
    @media (max-width: 768px) {
      .navbar {
        flex-direction: row;
        justify-content: space-between;
        padding: 0.8rem 1rem;
        align
      }

      .brand {
        font-size: 0.95rem;
        margin-left: 0;
      }

      .brand img {
        width: 28px;
        margin-left: 0;
        margin-right: 6px;
      }

      .hamburger {
        display: block;
        font-size: 1.3rem;
        margin-right: rem;
        margin-left: 50 rem;
      }

      .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        background: var(--primary-dark);
        padding: 1rem;
        border-radius: 12px;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        z-index: 999;
      }
      .nav-links.show { display: flex; }
      .nav-links a {
        font-size: 0.95rem;
        padding: 0.6rem 0;
        text-align: center;
      }

      .hero {
        min-height: 70vh; /* penuh layar */
        padding: 1rem;
        justify-content: flex-start;
      }
      .hero-title {
        font-size: 2rem;
        margin-top: 80px;
      }
      .hero-subtitle {
        font-size: 1.2rem;
      }
      .hero-desc {
        font-size: 1rem;
        line-height: 1.4;
      }
      .explore-btn {
        margin-top: 14rem; /* tombol lebih dekat */
        font-size: 0.9rem;
        padding: 0.6rem 1.4rem;
      }

      .card-grid {
        grid-template-columns: 1fr; /* satu kolom */
        gap: 1rem;
      }
      .card img {
        height: 160px;
      }

      .section-title {
        font-size: 1.6rem;
      }

      footer {
        font-size: 0.9rem;
        padding: 1.5rem;
      }
    }

  `;
  document.head.appendChild(style);
}
