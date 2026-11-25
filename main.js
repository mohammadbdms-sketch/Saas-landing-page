// FAQ accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    function toggleGroup(groupHeader) {
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');
        const willOpen = !groupBody.classList.contains('open');

        // Close all groups
        faqContainer.querySelectorAll('.faq-group').forEach((g) => {
            g.querySelector('.faq-group-body').classList.remove('open');
            const i = g.querySelector('.faq-group-header i');
            i.classList.remove('fa-minus');
            i.classList.add('fa-plus');
        });

        // Open the clicked one
        if (willOpen) {
            groupBody.classList.add('open');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    }

    // Make sure the icon matches the default open item
    faqContainer.querySelectorAll('.faq-group-body.open').forEach((body) => {
        const i = body.parentElement.querySelector('.faq-group-header i');
        i.classList.remove('fa-plus');
        i.classList.add('fa-minus');
    });

    faqContainer.addEventListener('click', (e) => {
        const header = e.target.closest('.faq-group-header');
        if (header) toggleGroup(header);
    });

    faqContainer.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const header = e.target.closest('.faq-group-header');
        if (!header) return;
        e.preventDefault();
        toggleGroup(header);
    });

    // FAQ tabs filter
    const tabs = document.querySelectorAll('.faq-menu li');
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t) => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.dataset.filter;
            faqContainer.querySelectorAll('.faq-group').forEach((g) => {
                g.classList.toggle('hidden', filter !== 'all' && g.dataset.category !== filter);
            });
        });
    });
});

// Mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    function setMenu(open) {
        mobileMenu.classList.toggle('active', open);
        hamburgerButton.setAttribute('aria-expanded', String(open));
        hamburgerButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    hamburgerButton.addEventListener('click', () => {
        setMenu(!mobileMenu.classList.contains('active'));
    });

    // Close when a link is tapped
    mobileMenu.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => setMenu(false));
    });

    // Close when tapping outside the menu
    document.addEventListener('click', (e) => {
        if (!mobileMenu.classList.contains('active')) return;
        if (!mobileMenu.contains(e.target) && !hamburgerButton.contains(e.target)) setMenu(false);
    });
});
