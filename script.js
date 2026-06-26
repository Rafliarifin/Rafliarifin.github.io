/* ══════════════════════════════════════════════════
   SEMANTIC WEB PROFILE — Script
   Muhammad Rafli Arifin
   ══════════════════════════════════════════════════ */

// ── NAVBAR SCROLL EFFECT ──
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link
    updateActiveNavLink();
    lastScroll = currentScroll;
});

// ── MOBILE NAV TOGGLE ──
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animate hamburger
        const spans = navToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ── ACTIVE NAV LINK ──
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ── SCROLL REVEAL ANIMATION ──
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger animation for multiple elements
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ── SKILL BARS ANIMATION ──
const skillBars = document.querySelectorAll('.skill-bar-fill');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = width + '%';
            skillObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

skillBars.forEach(bar => skillObserver.observe(bar));

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ── QUOTE GENERATOR ──
const quotes = [
    "Hidup bukan tentang menunggu badai berlalu, tetapi tentang belajar menari di tengah hujan.",
    "Kesuksesan adalah kemampuan untuk pergi dari kegagalan ke kegagalan tanpa kehilangan antusiasme.",
    "Tidak ada yang tidak mungkin, kata itu sendiri sudah mengandung kata 'mungkin'.",
    "Jangan takut gagal, takutlah jika kamu tidak mencoba.",
    "Pikiran adalah segalanya. Apa yang kamu pikirkan, itulah yang kamu jadi.",
    "Langkah pertama menuju kesuksesan adalah berani gagal.",
    "Jika kamu ingin pergi cepat, pergilah sendiri. Jika kamu ingin pergi jauh, pergilah bersama-sama.",
    "Keberhasilan bukan kunci kebahagiaan. Kebahagiaan adalah kunci keberhasilan.",
    "Jangan menunggu kesempatan, ciptakanlah kesempatanmu sendiri.",
    "Keberanian adalah ketika kamu merasa takut tetapi tetap melangkah maju.",
    "Mimpi tidak akan menjadi kenyataan tanpa tindakan.",
    "Jangan biarkan apa yang tidak bisa kamu lakukan mengganggu apa yang bisa kamu lakukan.",
    "Belajar dari kemarin, hidup untuk hari ini, berharap untuk besok.",
    "Jadilah perubahan yang ingin kamu lihat di dunia.",
    "Kegagalan adalah kesempatan untuk memulai lagi dengan lebih cerdas.",
    "Hidup adalah 10% apa yang terjadi padamu dan 90% bagaimana kamu meresponsnya.",
    "Kita tidak bisa mengubah arah angin, tapi kita bisa menyesuaikan layar untuk mencapai tujuan kita.",
    "Ketika satu pintu tertutup, pintu lain terbuka.",
    "Usaha keras mengalahkan bakat ketika bakat tidak berusaha keras.",
    "Setiap hari adalah peluang baru untuk menjadi lebih baik.",
    "Masa depan adalah milik mereka yang percaya pada keindahan impian mereka.",
    "Kesuksesan tidak datang dari zona nyaman.",
    "Semantic Web memungkinkan mesin memahami makna data, bukan hanya menampilkannya.",
    "Data terstruktur adalah jembatan antara informasi dan pengetahuan.",
    "JSON-LD membuat data web dapat dipahami oleh manusia dan mesin secara bersamaan."
];

const indexTerpakai = new Set();
const quoteTag = document.getElementById("quoteText");

function quoteGenerator() {
    if (indexTerpakai.size >= quotes.length) {
        indexTerpakai.clear();
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);
        if (indexTerpakai.has(randomIdx)) continue;
        
        // Fade out
        quoteTag.style.opacity = '0';
        quoteTag.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            quoteTag.textContent = quotes[randomIdx];
            // Fade in
            quoteTag.style.transition = 'all 0.4s ease';
            quoteTag.style.opacity = '1';
            quoteTag.style.transform = 'translateY(0)';
        }, 200);
        
        indexTerpakai.add(randomIdx);
        break;
    }
}

// ── TYPING EFFECT for Hero (subtle) ──
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// ── COUNTER ANIMATION ──
function animateCounter(element, target, duration = 1500) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function update() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    update();
}

// ── PARALLAX EFFECT for Background Orbs ──
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelector('.bg-orbs');
    if (orbs && window.innerWidth > 768) {
        const x = (e.clientX - window.innerWidth / 2) * 0.02;
        const y = (e.clientY - window.innerHeight / 2) * 0.02;
        orbs.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// ── INITIALIZE ──
document.addEventListener('DOMContentLoaded', () => {
    // Load first quote
    quoteGenerator();
    
    // Add transition to quote text
    if (quoteTag) {
        quoteTag.style.transition = 'all 0.4s ease';
    }
});

// ── SVG GRAPH ANIMATION ──
const graphSvg = document.querySelector('.graph-svg');
if (graphSvg) {
    const graphObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate lines
                const lines = graphSvg.querySelectorAll('line');
                lines.forEach((line, i) => {
                    line.style.opacity = '0';
                    line.style.transition = `opacity 0.5s ease ${i * 0.15}s`;
                    setTimeout(() => {
                        line.style.opacity = '0.7';
                    }, 100);
                });
                
                // Animate nodes
                const nodes = graphSvg.querySelectorAll('rect, circle');
                nodes.forEach((node, i) => {
                    const originalOpacity = node.getAttribute('opacity') || '1';
                    node.style.opacity = '0';
                    node.style.transition = `opacity 0.6s ease ${0.3 + i * 0.1}s`;
                    setTimeout(() => {
                        node.style.opacity = originalOpacity;
                    }, 100);
                });
                
                graphObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    graphObserver.observe(graphSvg);
}