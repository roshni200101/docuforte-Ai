document.addEventListener('DOMContentLoaded', () => {
    // --- 1. SELECTORS ---
    const sBtn = document.getElementById('servicesBtn');
    const sMenu = document.getElementById('servicesMenu');
    const tBtn = document.getElementById('themeBtn');
    const tIcon = document.getElementById('themeIcon');
    const body = document.body;

    // --- 2. HEADER: SERVICES DROPDOWN ---
    if (sBtn && sMenu) {
        sBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sMenu.classList.toggle('show');
        });
    }

    // Bahar click karne par dropdown band ho jaye
    window.addEventListener('click', () => {
        if (sMenu) sMenu.classList.remove('show');
    });

    // --- 3. UNIVERSAL THEME TOGGLE (Dark/Light Mode) ---
    if (tBtn) {
        tBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            const isLight = body.classList.contains('light-mode');

            // Update Icon based on mode
            if (isLight) {
                // Moon Icon (Show for Light Mode to switch back to Dark)
                tIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
            } else {
                // Sun Icon (Show for Dark Mode to switch to Light)
                tIcon.innerHTML = `
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                `;
            }
        });
    }

    // --- 4. LIFECYCLE SECTION: TAB SWITCHING ---
    //
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentActive = document.querySelector('.tab-btn.active');
            if (currentActive) currentActive.classList.remove('active');
            btn.classList.add('active');
        });
    });

    // --- 5. CONTACT FORM SUBMISSION ---
    //
    const contactForm = document.getElementById('mainContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Dhanyawad! Aapka sandesh humein mil gaya hai. Hamari sales team jald hi aapse sampark karegi. 🚀");
            contactForm.reset();
        });
    }

    // --- 6. FOOTER: DYNAMIC YEAR & SMOOTH SCROLL ---
    // Agara aap copyright year dynamic rakhna chahte hain (Optional)
    const yearSpan = document.querySelector('.copyright-text');
    if (yearSpan) {
        // SS mein 2026 hai, isliye hum use wahi rehne de rahe hain
        // par future mein ye auto-update ke liye use ho sakta hai
        console.log("Footer loaded successfully for DocuForte® 2026.");
    }

    // Smooth Scroll for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});