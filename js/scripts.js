const showMenu = (toggleId, navId) => {
  console.log("algo")
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}

showMenu('main-menu-toggle', 'main-nav')
