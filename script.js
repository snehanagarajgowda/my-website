/* =========================================================
   SNEHAAISHWARYA MAKEOVER
   HOMEPAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ================= MOBILE MENU ================= */

  const menuButton =
    document.querySelector(".mobile-menu-button");

  const navigation =
    document.querySelector(".main-navigation");

  if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

      navigation.classList.toggle("mobile-active");

    });

  }


  /* ================= CLOSE MOBILE MENU ================= */

  const navigationLinks =
    document.querySelectorAll(".main-navigation a");

  navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      navigation.classList.remove("mobile-active");

    });

  });


  /* ================= HEADER SCROLL ================= */

  const header =
    document.querySelector(".site-header");

  function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  }

  window.addEventListener("scroll", updateHeader);

  updateHeader();


  /* ================= ACTIVE MENU ================= */

  const sections =
    document.querySelectorAll("section[id]");

  const menuLinks =
    document.querySelectorAll(".main-navigation a");

  const sectionObserver =
    new IntersectionObserver(
      function (entries) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            menuLinks.forEach(function (link) {

              link.classList.remove("active");

              if (
                link.getAttribute("href") ===
                "#" + entry.target.id
              ) {

                link.classList.add("active");

              }

            });

          }

        });

      },
      {
        rootMargin: "-40% 0px -55% 0px"
      }
    );

  sections.forEach(function (section) {

    sectionObserver.observe(section);

  });


  /* ================= SMOOTH SCROLL ================= */

  const anchorLinks =
    document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId =
        link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* ================= YEAR ================= */

  const year =
    document.querySelector("#copyright-year");

  if (year) {

    year.textContent =
      new Date().getFullYear();

  }

});