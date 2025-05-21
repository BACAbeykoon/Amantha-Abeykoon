// Load all sections on page load
document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    { id: "home", file: "Pages/home.html" },
    { id: "about", file: "Pages/about.html" },
    { id: "services", file: "Pages/services.html" },
    { id: "skills", file: "Pages/skills.html" },
    { id: "portfolio", file: "Pages/portfolio.html" },
    { id: "contact", file: "Pages/contact.html" },
    { id: "footer-section", file: "Pages/footer.html" },
  ];

  sections.forEach(section => {
    fetch(section.file)
      .then(res => res.text())
      .then(data => {
        document.getElementById(section.id).innerHTML = data;
      })
      .catch(err => {
        console.error(`Failed to load ${section.file}`, err);
      });
  });

  // Mobile menu toggle
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("show");
  });

  // Scrollspy active nav link
  const navLinks = document.querySelectorAll(".nav-link");
  window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 200;
    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
});

// Animate skill cards on scroll
window.addEventListener("scroll", () => {
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.classList.add("slide-up");
    }
  });
});
