
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





/*================= FIXED BUTTON ======================== */
const fixed_btn = document.querySelector('.fixed_btn')

function ActiveButton(){
  let scrollTop = window.scrollY
  if(scrollTop >= 140){
    fixed_btn.style.display = 'block'
  }else{
    fixed_btn.style.display = 'none'
  }  
}

fixed_btn.addEventListener('click',()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})


window.addEventListener('scroll', ActiveButton)
window.addEventListener('load', ActiveButton)

/*================= BLOG SECTION GRID AND LIST MENU ==================*/

/* VERIABLE DELIARTION */

  const grid = document.getElementById('grid'),
  list = document.getElementById('list'),
  contentView = document.getElementById('Blogview')

  function gridActive(){

    if(contentView && contentView.classList.contains('list')){
      grid.classList.add('active')
      list.classList.remove('active')
      contentView.className = 'blogs_content blogH';
    }

  }

  function listActive(){
    if(contentView && contentView.classList.contains('blogH')){
      grid.classList.remove('active')
      list.classList.add('active')
      contentView.className = 'blogs_content list';
    }
  }

  if(grid){
    grid.addEventListener('click' , gridActive)
  }
  if(list){
    list.addEventListener('click' , listActive)
  }

/*=================DATA AOS / SCROLL ANIMATION======================== */
 
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


