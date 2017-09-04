const btn = document.getElementById('btnShowMenu');
const responsiveMenu = document.getElementById('menuResponsive');

btn.addEventListener('click', function start () {
  showMenu()
})

function showMenu() {
  if (responsiveMenu.classList.contains("menu-close")) {
    responsiveMenu.classList.remove("menu-close")
    responsiveMenu.classList.add("menu-open")
  } else {
    responsiveMenu.classList.add("menu-close")
  }
}


console.log("deu");