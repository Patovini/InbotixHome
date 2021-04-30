const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");
// const Logo = document.querySelector("#inbotix_logo");

// botao de hamburger -------------

const mobileMenu = ( ) => {
    // is-active metodo para ativar o botao
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// -------------------



