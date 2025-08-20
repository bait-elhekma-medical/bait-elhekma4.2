// ==========================
// Language Switcher
// ==========================
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        if(el.getAttribute('data-lang') === lang) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });

    // تغيير اتجاه الصفحة عند العربية
    if(lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.style.textAlign = 'right';
    } else {
        document.documentElement.dir = 'ltr';
        document.body.style.textAlign = 'left';
    }
}

// تفعيل اللغة العربية تلقائياً عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('ar');
});

// ==========================
// Smooth Scroll for Navigation
// ==========================
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// ==========================
// Optional: Form Submission
// ==========================
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('شكراً لتواصلك معنا! / Thank you for contacting us!');
    form.reset();
});
