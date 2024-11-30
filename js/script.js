import initMenuMobile from './modules/menu-mobile.js';
import initSlide from './modules/slide.js';
import initWppMessage from './modules/wpp-message.js';

initMenuMobile();
initSlide();
initWppMessage();

// ANIMAÇÃO SCROLL

// function animacaoScroll() {
//     const sections = document.querySelectorAll(".js-scroll");
//     const metadeTela = window.innerHeight * 0.5;

//     if (sections.length) {
//         function animarSections(event) {
//             sections.forEach((section) => {
//                 const distanciaTopo =
//                     section.getBoundingClientRect().top - metadeTela;
//                 if (distanciaTopo < 0) {
//                     section.classList.add("animar");
//                 }
//             });
//         }
//     }
//     animarSections();
//     window.addEventListener("scroll", animarSections);
// }

// animacaoScroll();
