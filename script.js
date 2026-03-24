document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ANIMAZIONE FADE-IN ALLO SCROLL (Come prima) ---
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // --- 2. NUOVO EFFETTO VIDEO PARALLAX ---
    // Selezioniamo il video che sta in background
    const bgVideo = document.getElementById('bg-video');

    // Ascoltiamo l'evento "scroll" (quando l'utente usa la rotellina del mouse)
    window.addEventListener('scroll', () => {
        // Otteniamo di quanti pixel l'utente è sceso dall'alto della pagina
        let scrollPosition = window.scrollY;

        // Selezioniamo un moltiplicatore. 
        // 0.4 significa che il video si sposterà del 40% rispetto alla velocità di scroll.
        // Se fosse 1, scenderebbe insieme alla pagina. Se fosse 0, starebbe fermo.
        let parallaxSpeed = 0.4;

        // Applichiamo la trasformazione. Spostiamo il video in basso (Y) moltiplicando lo scroll per la velocità.
        // Richiede che nel CSS il video sia un po' più alto (120%) così non scopriamo i bordi neri.
        if (bgVideo) {
            bgVideo.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
        }
    });
});