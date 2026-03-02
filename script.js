/**
 * Indus University Kiosk Logic
 * Handles navigation state, real-time clock, and touch interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    initClock();
    initNavigation();
    initKeyboardAccessibility();
    initGlobalInteractions();
    initIdleTimer();
    initHistoryState();
});

let lastFocusedElement = null;

function resolveSectionId(targetId) {
    if (!targetId) return 'home';
    const section = document.getElementById(targetId);
    return section && section.classList.contains('view-section') ? targetId : 'home';
}

function getCurrentPageId() {
    const activeSection = document.querySelector('.view-section.active');
    return activeSection ? activeSection.id : 'home';
}

function isModalOpen() {
    const modal = document.getElementById('info-modal');
    return !!(modal && modal.classList.contains('active'));
}

// --- Navigation Handling (SPA Style) ---

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.setAttribute('role', 'button');
        item.setAttribute('tabindex', '0');

        const handleActivate = () => {
            const targetId = item.getAttribute('data-target');
            if (targetId) {
                navigateTo(targetId);
                if (window.innerWidth <= 1024) {
                    closeSidebar();
                }
            }
        };

        item.addEventListener('click', () => {
            handleActivate();
        });

        item.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleActivate();
            }
        });
    });
}

function initKeyboardAccessibility() {
    const clickables = document.querySelectorAll('.action-card, .info-card.image-card, .list-item, .event-card');

    clickables.forEach((element) => {
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');

        element.addEventListener('keydown', (event) => {
            if (event.target !== element) return;
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                element.click();
            }
        });
    });
}

function initGlobalInteractions() {
    const modalOverlay = document.getElementById('info-modal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;

        if (isModalOpen()) {
            closeModal();
            return;
        }

        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('open')) {
            closeSidebar();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            closeSidebar();
        }
    });
}

function navigateTo(targetId, pushHistory = true) {
    const resolvedTarget = resolveSectionId(targetId);

    if (isModalOpen()) {
        closeModal(true);
    }

    if (pushHistory) {
        history.pushState({ page: resolvedTarget }, "", `#${resolvedTarget}`);
    }

    switchTab(resolvedTarget);
}

function switchTab(targetId) {
    const resolvedTarget = resolveSectionId(targetId);

    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        const isActive = item.getAttribute('data-target') === resolvedTarget;
        item.classList.toggle('active', isActive);
        if (isActive) {
            item.setAttribute('aria-current', 'page');
        } else {
            item.removeAttribute('aria-current');
        }
    });

    // Update active view section
    let activeSection = null;
    document.querySelectorAll('.view-section').forEach(section => {
        const isActive = section.id === resolvedTarget;
        section.classList.toggle('active', isActive);
        if (isActive) {
            activeSection = section;
            // reset scroll position if it has a scrollable area
            const scrollArea = section.querySelector('.scrollable-y');
            if (scrollArea) scrollArea.scrollTop = 0;
            if (section.classList.contains('scrollable-y')) section.scrollTop = 0;
        }
    });

    // Update mobile header buttons
    updateMobileHeader(resolvedTarget);

    // Reset idle timer when user interacts via navigation
    resetIdleTimer();

    return activeSection ? activeSection.id : 'home';
}

function updateMobileHeader(targetId) {
    const backBtn = document.getElementById('mobile-back-btn');
    const menuBtn = document.getElementById('mobile-menu-btn');

    if (!backBtn || !menuBtn) return;

    if (targetId === 'home') {
        backBtn.style.display = 'none';
        menuBtn.style.display = 'flex';
    } else {
        backBtn.style.display = 'flex';
        menuBtn.style.display = 'none';
    }
}

function navigateBack() {
    if (isModalOpen()) {
        closeModal();
        return;
    }

    const currentPage = getCurrentPageId();
    if (currentPage !== 'home') {
        switchTab('home');
        history.replaceState({ page: 'home' }, "", '#home');
    } else {
        closeSidebar();
    }
}

function initHistoryState() {
    // Set initial state
    const hash = window.location.hash.replace('#', '');
    const safeHash = hash === 'modal' ? 'home' : hash;
    const initialPage = resolveSectionId(safeHash || 'home');
    history.replaceState({ page: initialPage }, "", `#${initialPage}`);
    switchTab(initialPage);

    // Handle back/forward browser buttons
    const handleStateChange = (event) => {
        if (isModalOpen()) {
            closeModal(true);
        }

        const hashPage = resolveSectionId(window.location.hash.replace('#', ''));
        const statePage = event && event.state && event.state.page ? resolveSectionId(event.state.page) : null;
        const nextPage = statePage || hashPage || 'home';
        switchTab(nextPage);
    };

    const handleHashChange = () => {
        if (isModalOpen()) {
            closeModal(true);
        }
        const nextPage = resolveSectionId(window.location.hash.replace('#', ''));
        history.replaceState({ page: nextPage }, "", `#${nextPage}`);
        switchTab(nextPage);
    };

    window.addEventListener('popstate', handleStateChange);
    window.addEventListener('hashchange', handleHashChange);
}

// Make functions available globally for inline onclick handlers in HTML
window.switchTab = switchTab;
window.navigateTo = navigateTo;
window.navigateBack = navigateBack;

// --- Real-time Clock Widget ---

function initClock() {
    const timeElement = document.getElementById('current-time');
    const dateElement = document.getElementById('current-date');

    if (!timeElement || !dateElement) return;

    function updateTime() {
        const now = new Date();

        // Format Time (e.g., 10:05 AM)
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        timeElement.textContent = `${hours}:${minutes} ${ampm}`;

        // Format Date (e.g., Sunday, Mar 1)
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        dateElement.textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
    }

    updateTime(); // Initial call
    setInterval(updateTime, 10000); // Update every 10 seconds to save performance
}

// --- Idle Timeout (Return to Home Screen) ---
// Essential for public kiosks

let idleTime = 0;
const MAX_IDLE_TIME = 60; // seconds before returning to home

function initIdleTimer() {
    // Increment idle time every second
    setInterval(() => {
        idleTime += 1;
        if (idleTime >= MAX_IDLE_TIME) {
            returnToHome();
            idleTime = 0;
        }
    }, 1000);

    // Reset idle timer on any interaction
    document.addEventListener('mousemove', resetIdleTimer);
    document.addEventListener('mousedown', resetIdleTimer);
    document.addEventListener('touchstart', resetIdleTimer);
    document.addEventListener('click', resetIdleTimer);
    document.addEventListener('scroll', resetIdleTimer, true);
}

function resetIdleTimer() {
    idleTime = 0;
}

function returnToHome() {
    // Only switch if we aren't already on home to prevent unnecessary animations
    const currentActiveSection = document.querySelector('.view-section.active');
    if (currentActiveSection && currentActiveSection.id !== 'home') {
        switchTab('home');
        history.replaceState({ page: 'home' }, "", '#home');
    }
}

// --- Optional: Visual Touch Feedback (Ripple effect) ---
// Adds premium feel to generic clicks on the kiosk

document.body.addEventListener('click', function (e) {
    createRipple(e.clientX, e.clientY);
});

function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.background = 'rgba(102, 81, 44, 0.2)'; // Gold tint for light mode visibility
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.pointerEvents = 'none';
    ripple.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    ripple.style.zIndex = 9999;

    document.body.appendChild(ripple);

    // Trigger animation
    requestAnimationFrame(() => {
        ripple.style.transform = 'translate(-50%, -50%) scale(10)';
        ripple.style.opacity = '0';
    });

    // Cleanup
    setTimeout(() => {
        ripple.remove();
    }, 500);
}

// --- Universal Modal System ---

function openModal(title, HTMLcontent) {
    const modal = document.getElementById('info-modal');
    if (!modal) return;

    const titleEl = document.getElementById('modal-title');
    const bodyEl = document.getElementById('modal-body');
    if (!titleEl || !bodyEl) return;

    titleEl.textContent = title;
    bodyEl.innerHTML = HTMLcontent;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    resetIdleTimer();

    lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const closeButton = modal.querySelector('.btn-close');
    if (closeButton instanceof HTMLElement) {
        closeButton.focus();
    }

    // Keep page hash stable and push only modal state.
    const currentPage = getCurrentPageId();
    if (!history.state || !history.state.modal) {
        history.pushState({ page: currentPage, modal: true }, "", `#${currentPage}`);
    }
}

function closeModal(fromHistory = false) {
    const modal = document.getElementById('info-modal');
    if (modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        resetIdleTimer();

        if (!fromHistory && history.state && history.state.modal) {
            history.back();
        }

        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
        }
        lastFocusedElement = null;
    }
}

// --- Mobile Sidebar Toggle ---

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        resetIdleTimer();
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar && overlay) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
}

window.openModal = openModal;
window.closeModal = closeModal;
window.toggleSidebar = toggleSidebar;
window.closeSidebar = closeSidebar;

// --- Native Institute Data & View Logic ---
const instituteData = {
    'IITE': {
        title: 'IITE - Indus Institute of Technology & Engineering',
        fullName: 'Indus Institute of Technology and Engineering',
        description: 'Established in 2006 with a vision to train and upgrade the technical skills of engineers as per the industry\'s requirements. We emphasize research and innovation to push the nation forward, ensuring our students are prepared for global challenges.',
        programs: [
            'B.Tech Automobile Engineering', 'B.Tech Civil Engineering', 'B.Tech Computer Engineering',
            'B.Tech Computer Science and Engineering', 'B.Tech Electrical Engineering', 'B.Tech Electronics & Comm.',
            'B.Tech Information Technology', 'B.Tech Mechanical Engineering', 'B.Tech Metallurgical Engineering',
            'B.Tech ICT', 'B.Tech Cyber Security', 'PG Diploma in Cyber Security', 'Diploma in Cyber Security',
            'M.Tech Computer-Aided Design & Manufacture', 'M.Tech Construction Project Management',
            'M.Tech Digital Communication', 'M.Tech Electric Power System', 'M.Tech Industrial Metallurgy',
            'M.Tech Structural Engineering', 'M.Tech Data Science', 'M.Tech Cyber Security'
        ],
        icon: 'solar:laptop-minimalistic-bold-duotone',
        link: 'https://iite.indusuni.ac.in'
    },
    'IAS': {
        title: 'IAS - Indus Architecture School',
        fullName: 'Institute of Architecture',
        description: 'The B.Arch course curriculum assures a vital foundation for students evolving into future architecture professionals. Emphasizing a Module-based Teaching System, Collaborative Programmes, and an exclusive Architecture Research Cell.',
        programs: ['Bachelor of Architecture (B.Arch)'],
        icon: 'solar:buildings-2-bold-duotone',
        link: 'https://ias.indusuni.ac.in'
    },
    'IDS': {
        title: 'IDS - Indus Design School',
        fullName: 'Indus Design School',
        description: 'Combining design and marketing to analyze and reinterpret brand strategies innovatively. Focusing on transversal disciplines and practical application of theoretical knowledge to prepare for leadership in the global design sector.',
        programs: ['B.Des (Bachelor of Design)', 'M.Des (Master of Design)'],
        icon: 'solar:palette-bold-duotone',
        link: 'https://ids.indusuni.ac.in'
    },
    'IIICT': {
        title: 'IIICT - Indus Institute of Info. & Comm. Technology',
        fullName: 'Institute of Information & Communication Tech',
        description: 'Committed to providing a positive, intellectually stimulating environment with cutting-edge infrastructure. Preparing students for the rapidly evolving digital landscape through intensive computing and IT research.',
        programs: [
            'BCA', 'Dual Degree (B.Sc + M.Sc) (CA & IT)', 'B.Sc Data Science',
            'B.Sc Computer Science (AI & ML)', 'B.Sc Cyber Security', 'MCA',
            'M.Sc Information Technology', 'M.Sc Cyber Security'
        ],
        icon: 'solar:monitor-smartphone-bold-duotone',
        link: 'https://iiict.indusuni.ac.in'
    },
    'IIMS': {
        title: 'IIMS - Indus Institute of Management Studies',
        fullName: 'Indus Institute of Management Studies',
        description: 'Aiming to meet the needs of businesses for committed workers who can adjust to shifting market dynamics. Founded in 2007, IIMS organizes frequent industrial trips, expert sessions, conclaves, and seminars.',
        programs: [
            'Integrated MBA (BBA + MBA)', 'BBA', 'BBA in Aviation',
            'B.Com (Hons.) ACCA UK', 'MBA', 'Ph.D. in Management'
        ],
        icon: 'solar:case-bold-duotone',
        link: 'https://iims.indusuni.ac.in'
    },
    'IISHLS': {
        title: 'IISHLS - Indus Institute of Sci. Humanities & Lib. Studies',
        fullName: 'Department of Science, Humanities & Life Science',
        description: 'Offering specialized programs across Physics, Chemistry, Mathematics, Microbiology, and Clinical Research, as well as Liberal Arts degrees like BA/MA in English Literature to ensure holistic development.',
        programs: [
            'B.Sc (Physics)', 'B.Sc (Chemistry)', 'B.Sc (Mathematics)', 'B.Sc Microbiology',
            'M.Sc (Physics)', 'M.Sc (Chemistry)', 'M.Sc (Mathematics)',
            'Master of Arts in English Literature', 'M.A English Language Teaching (ELT)',
            'MSW', 'B.Sc Clinical Research and Healthcare Management', 'M.Sc Clinical Research'
        ],
        icon: 'solar:flask-bold-duotone',
        link: 'https://iishls.indusuni.ac.in'
    },
    'IISS': {
        title: 'IISS - Indus Institute of Special Studies',
        fullName: 'Indus Institute of Special Studies',
        description: 'Focusing on seamlessly integrating Indian traditional values and ethos into modern academic excellence through the Center for Indic Studies and the Indus Yoga and Wellness Centre of Excellence.',
        programs: [
            'Fundamental Immunology Modern & Yogic Perspective', 'Foundation in Yogic Wisdom',
            'Yogic Immunogenesis', 'Navda Yoga', 'M.Sc Yoga and Wellness', 'Preventive Yogic Healthcare Expert'
        ],
        icon: 'solar:planet-bold-duotone',
        link: 'https://iiss.indusuni.ac.in'
    },
    'IIPR': {
        title: 'IIPR - Indus Institute of Pharmacy and Research',
        fullName: 'Institute of Pharmacy and Research',
        description: 'Established in 2022 to develop world-class pharmacists prepared to meet global demands. Committed to advancing high-quality academic environments and educating students to competently lead healthcare industries.',
        programs: ['Bachelor in Pharmacy (B.Pharm)'],
        icon: 'solar:pills-bold-duotone',
        link: 'https://iipr.indusuni.ac.in'
    },
    'IIATE': {
        title: 'IIATE - Indus Institute of Aviation Tech & Engineering',
        fullName: 'Institute of Aviation Technology and Engineering',
        description: 'Aimed at maintaining and fixing massive aircraft. Aeronautical and Aerospace degrees equip students with robust skills in aerodynamic motion, design chops, and problem-solving within civil and military aviation systems.',
        programs: [
            'B.Tech Aircraft Maintenance Engineering', 'B.Tech Aeronautical Engineering',
            'B.Tech Aerospace Engineering', 'B.Tech in Aerospace + AME',
            'Certification: Familiarization of Jet Engine', 'Certification: Introduction of Aero Engine'
        ],
        icon: 'solar:plain-bold-duotone',
        link: 'https://iiate.indusuni.ac.in'
    },
    'IAGNI': {
        title: 'IAGNI - Indus Advance Green Nanotechnology Institute',
        fullName: 'Indus Advance Green Nanotechnology Institute',
        description: 'A specialized cutting-edge research center dedicated to revolutionary advancements in sustainable, eco-friendly green nanotechnology for the modern world.',
        programs: ['Advanced Research Projects', 'Ph.D. in Nanotechnology'],
        icon: 'solar:leaf-bold-duotone',
        link: 'https://indusuni.ac.in'
    }
};

function openNativeInstitutePage(id) {
    const data = instituteData[id];
    if (!data) return;

    const titleEl = document.getElementById('native-inst-title');
    const fullNameEl = document.getElementById('native-inst-fullname');
    const shortDescEl = document.getElementById('native-inst-desc-short');
    const descEl = document.getElementById('native-inst-desc');
    const iconEl = document.getElementById('native-inst-icon');
    const programsList = document.getElementById('native-inst-programs');
    const visitBtn = document.getElementById('native-inst-visit-btn');

    if (!titleEl || !fullNameEl || !descEl || !iconEl || !programsList || !visitBtn) {
        return;
    }

    titleEl.textContent = data.title;
    fullNameEl.textContent = data.fullName;
    descEl.textContent = data.description;
    if (shortDescEl) {
        shortDescEl.textContent = data.description;
    }

    // Update the icon in the hero banner
    iconEl.setAttribute('data-icon', data.icon);

    // Populate Programs List
    programsList.innerHTML = '';
    data.programs.forEach(prog => {
        const li = document.createElement('li');
        li.style.background = 'var(--surface-2)';
        li.style.padding = '1rem 1.5rem';
        li.style.borderRadius = 'var(--border-radius-sm)';
        li.style.fontWeight = '600';
        li.style.color = 'var(--text-primary)';
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        li.style.gap = '0.8rem';
        li.innerHTML = '<span class="iconify" data-icon="solar:check-circle-bold-duotone" style="color: var(--brand-gold); font-size: 1.2rem;"></span> ' + prog;
        programsList.appendChild(li);
    });

    // Handle the Visit button behavior
    visitBtn.onclick = () => {
        window.open(data.link, '_blank', 'noopener,noreferrer');
    };

    navigateTo('institute-detail-native');
}

window.openNativeInstitutePage = openNativeInstitutePage;
