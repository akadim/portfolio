class MobileMenu {
  constructor () {
    this.menuBtn = document.querySelector('.site-nav__hamburger-btn')
    this.menuContent = document.querySelector('.site-nav__menu-content')
    this.menu = document.querySelector('.site-nav__menu')
    this.events()
  }

  events () {
    this.menuBtn.addEventListener('click', () => this.toggleTheMenu())
  }

  toggleTheMenu () {
    if (this.menuContent.classList.toggle('site-nav__menu-content--visible')) {
      const menuHeight = Array.from(this.menu.children)
        .map(item => item.clientHeight)
        .reduce((a, b) => a + b, 0)
      this.menuContent.style.height = menuHeight + 15 + 'px'
      this.menu.style.visibility = 'visible'
    } else {
      this.menuContent.style.height = 0
      setTimeout(() => (this.menu.style.visibility = 'hidden'), 300)
    }
  }
}

export default MobileMenu
