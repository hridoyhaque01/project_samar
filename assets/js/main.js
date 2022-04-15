/*=================NAVBAR SHOW MENU ==================*/

const content = document.querySelector('.navbar-content'),
    showMenu = document.querySelector('.show_menu'),
    closeMenu = document.querySelector('.close_menu')

showMenu.addEventListener('click',()=>{
    if(content){
        content.classList.add("mobile_navbar-content")
    }
})

closeMenu.addEventListener('click',()=>{
    if(content){
        content.classList.remove("mobile_navbar-content")

    }
})


/**
   * Animation on scroll
   */
 function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });