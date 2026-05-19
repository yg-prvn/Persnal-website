let menuBtn = document.querySelector("#menu-btn");
let navBar = document.querySelector(".mob-nav");

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}

let navLinks = document.querySelectorAll("nav ul li a");

navLinks.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}

let see_more_btn_exp = document.querySelector(".see-more-btn-exp");
let see_more_exp = document.querySelector(".see-more-experiences");
let see_more_btn_pro = document.querySelector(".see-more-btn-pro");
let see_more_pro = document.querySelector(".see-more-projects");
let see_more_btn_skills = document.querySelector(".see-more-btn-skills");
let see_more_skills = document.querySelector(".see-more-skills");
let see_more_btn_edu = document.querySelector(".see-more-btn-edu");
let see_more_edu = document.querySelector(".see-more-edu");
let see_more_btn_cert = document.querySelector(".see-more-btn-cert");
let see_more_cert = document.querySelector(".see-more-cert");

see_more_btn_exp.addEventListener("click", () => {
  see_more_exp.classList.toggle("active");

  if (see_more_exp.classList.contains("active")) {
    see_more_btn_exp.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Show Less';
  } else {
    see_more_btn_exp.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Show More';
  }
});

see_more_btn_pro.addEventListener("click", () => {
  see_more_pro.classList.toggle("active");

  if (see_more_pro.classList.contains("active")) {
    see_more_btn_pro.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Show Less';
  } else {
    see_more_btn_pro.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Show More';
  }
});


see_more_btn_skills.addEventListener("click", () => {
  see_more_skills.classList.toggle("active");

  if (see_more_skills.classList.contains("active")) {
    see_more_btn_skills.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Show Less';
  } else {
    see_more_btn_skills.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Show More';
  }
});

see_more_btn_edu.addEventListener("click", () => {
  see_more_edu.classList.toggle("active");

  if (see_more_edu.classList.contains("active")) {
    see_more_btn_edu.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Show Less';
  } else {
    see_more_btn_edu.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Show More';
  }
});

see_more_btn_cert.addEventListener("click", () => {
  see_more_cert.classList.toggle("active");

  if (see_more_cert.classList.contains("active")) {
    see_more_btn_cert.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Show Less';
  } else {
    see_more_btn_cert.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Show More';
  }
});


// Sticky -> Fixed navbar toggle: when the nav reaches the top it becomes fixed
// Disabled on mobile view to avoid mobile layout issues
document.addEventListener('DOMContentLoaded', () => {
  const fixedNav = document.querySelector('.fixed-nav');
  if (!fixedNav) return;

  // create a spacer right after the nav to preserve layout when nav is removed from flow
  const spacer = document.createElement('div');
  spacer.className = 'nav-spacer';
  fixedNav.parentNode.insertBefore(spacer, fixedNav.nextSibling);

  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
  let navTop = fixedNav.getBoundingClientRect().top + window.scrollY;

  const resetNav = () => {
    if (fixedNav.classList.contains('is-fixed')) {
      fixedNav.classList.remove('is-fixed');
    }
    spacer.style.height = '0px';
  };

  function update() {
    if (isMobile()) {
      resetNav();
      return;
    }

    if (window.scrollY >= navTop) {
      if (!fixedNav.classList.contains('is-fixed')) {
        const h = Math.round(fixedNav.getBoundingClientRect().height);
        spacer.style.height = h + 'px';
        fixedNav.classList.add('is-fixed');
      }
    } else {
      if (fixedNav.classList.contains('is-fixed')) {
        fixedNav.classList.remove('is-fixed');
        spacer.style.height = '0px';
      }
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', () => {
    navTop = fixedNav.getBoundingClientRect().top + window.scrollY - (fixedNav.classList.contains('is-fixed') ? fixedNav.getBoundingClientRect().height : 0);
    if (isMobile()) {
      resetNav();
      return;
    }
    if (fixedNav.classList.contains('is-fixed')) {
      spacer.style.height = Math.round(fixedNav.getBoundingClientRect().height) + 'px';
    }
  });

  update();
});