/* 
  Main JavaScript for Dayanand Inter College 
*/

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- ADMIN SECTION: Edit Notices Here ---
    // Add new notices to the top of this array.
    const notices = [
        {
            title: "Admission Open 2026-27",
            date: "28-04-2026",
            category: "Admission",
            description: "Addmission are open for the session 2026-27.",
            link: "#"
        },
        {
            title: "---",
            date: "---",
            category: "---",
            description: "---",
            link: "#"
        },
        {
            title: "---",
            date: "---",
            category: "---",
            description: "---",
            link: "#"
        }
    ];

    // Render Notice Board on the Notice Board Page
    const noticeContainer = document.getElementById('notice-container');
    if (noticeContainer) {
        notices.forEach(notice => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1rem;">
                    <span style="background:var(--accent-orange); color:white; padding:4px 8px; border-radius:4px; font-size:0.8rem; font-weight:600;">${notice.category}</span>
                    <span style="color:var(--text-body); font-size:0.9rem;">${notice.date}</span>
                </div>
                <h3>${notice.title}</h3>
                <p>${notice.description}</p>
                ${notice.link !== "#" ? `<a href="${notice.link}" class="btn btn-primary" style="margin-top:1rem; padding: 0.5rem 1rem; font-size:0.9rem;">Download PDF</a>` : ''}
            `;
            noticeContainer.appendChild(card);
        });
    }

    // Ticker Logic (if dynamic items are needed in the future, currently handled by CSS animation)
});
