document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const sections = document.querySelectorAll('section[id]');
    const toggleBtn = document.getElementById('toggleEarlier');
    const earlierItems = document.querySelectorAll('.tl-earlier');
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    // ── Active nav via IntersectionObserver ──────────────────────
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    setActive(id);
                }
            });
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach(s => observer.observe(s));

    function setActive(id) {
        sidebarLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
    }

    // ── Smooth scroll on sidebar link click ──────────────────────
    function smoothScrollTo(targetId) {
        const target = document.getElementById(targetId);
        if (!target) return;
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            const offset = 72;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        } else {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    [...sidebarLinks, ...mobileLinks].forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('href').substring(1);
            smoothScrollTo(id);
            if (mobileNav.classList.contains('open')) {
                mobileNav.classList.remove('open');
            }
        });
    });

    // ── Mobile menu toggle ────────────────────────────────────────
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
        });
    }

    // ── Earlier roles toggle ──────────────────────────────────────
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            const showing = this.classList.contains('showing');
            earlierItems.forEach(item => item.classList.toggle('show'));
            this.textContent = showing ? 'Show Earlier Roles' : 'Hide Earlier Roles';
            this.classList.toggle('showing');
        });
    }
});
