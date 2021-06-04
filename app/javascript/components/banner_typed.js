import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["guitars", "electric guitars", "basses", "drums", "violins"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };