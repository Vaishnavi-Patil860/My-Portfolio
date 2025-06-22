// =================== TYPING EFFECT ===================
const typed = new Typed(".typing", {
    strings: ["Coder", "Developer", "Engineer", "Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  
  // =================== AOS INIT ===================
  AOS.init({
    duration: 1000,
    once: true,
  });
  
  // =================== PARTICLES BACKGROUND ===================
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#58a6ff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.3,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#58a6ff",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    retina_detect: true,
  });
  
  // =================== BACK TO TOP ===================
  const backToTop = document.getElementById("backToTop");
  
  window.onscroll = () => {
    if (window.scrollY > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  };
  
  backToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // =================== THEME TOGGLE ===================
  // ========== THEME TOGGLE ==========
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;
  
  toggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
   // toggle.innerHTML = body.classList.contains("dark-theme") ? "🌙" : "🌞";
  });


  
  