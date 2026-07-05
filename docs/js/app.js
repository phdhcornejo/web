/* =========================================================
   CORNEJO / ONE
   JavaScript v0.1
   Minimal interaction layer
   ========================================================= */

(function () {
    "use strict";

    /* =========================
       LOADER
    ========================= */

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {
        if (!loader) return;

        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.transition = "opacity 0.8s ease";

            setTimeout(() => {
                loader.style.display = "none";
            }, 800);

        }, 600);
    });

    /* =========================
       SMOOTH REVEAL ON SCROLL
    ========================= */

    const revealElements = document.querySelectorAll(".section, .hero, .manifesto");

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        },
        {
            threshold: 0.15,
        }
    );

    revealElements.forEach((el) => {
        el.classList.add("reveal");
        revealObserver.observe(el);
    });

    /* =========================
       HEADER BEHAVIOR
    ========================= */

    const header = document.querySelector(".header");

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (!header) return;

        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            // scroll down → hide header
            header.style.transform = "translateY(-100%)";
        } else {
            // scroll up → show header
            header.style.transform = "translateY(0)";
        }

        lastScrollY = window.scrollY;
    });

    /* =========================
       SMOOTH ANCHOR SCROLL
    ========================= */

    const links = document.querySelectorAll("a[href^='#']");

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    /* =========================
       PARALLAX SUAVE HERO (SUTIL)
    ========================= */

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {
        if (!hero) return;

        const offset = window.scrollY * 0.3;

        hero.style.transform = `translateY(${offset}px)`;
    });

})();