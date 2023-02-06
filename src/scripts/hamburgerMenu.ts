  // Navigation / Hamburger menu - control
  const nav = document.querySelector<HTMLUListElement>('#primary-nav')
  const navToggle = document.querySelector<HTMLLabelElement>('#nav-toggle')
  const navToggleInput = document.querySelector<HTMLInputElement>('#nav-toggle input')

  navToggle.addEventListener('change', () => {
    if (nav.getAttribute('data-visible') === 'false') {
      nav.setAttribute('data-visible', "true");
      nav.setAttribute("aria-expanded", "true");
    } else if (nav.getAttribute('data-visible') === 'true') {
      nav.setAttribute('data-visible', "false");
      nav.setAttribute("aria-expanded", "false");
    }
  });

  document.querySelector('main').addEventListener('click', () => {
    if (nav.getAttribute('data-visible') === 'true') {
      nav.setAttribute('data-visible', "false");
      nav.setAttribute("aria-expanded", "false");
      navToggleInput.checked = !navToggleInput.checked;
    }
  });


  // Scroll To Top button - control
  const scrollButton = document.querySelector<SVGElement>('#scrollButton')
  scrollButton.addEventListener('click', () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > (window.innerHeight / 4)) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });


  // Theme stuff
  import { themeChange } from "theme-change";
  themeChange();
  if (localStorage['theme'] === "cmyk" || document.querySelector('html').getAttribute('data-theme') === 'cmyk') {
    document.querySelector<HTMLInputElement>('#themeSetting > input').checked = true;
  }