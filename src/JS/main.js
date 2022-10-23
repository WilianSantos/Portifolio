import '../CSS/style.css'

class Menubar {
    constructor(mobileMenu, menuList, menuLinks, menuClose, menuLogo, cabecalho,) {
      this.mobileMenu = document.querySelector(mobileMenu)
      this.menuList = document.querySelector(menuList)
      this.menuLinks = document.querySelectorAll(menuLinks)
      this.menuClose = document.getElementById(menuClose)

      this.menuLogo = document.querySelector(menuLogo)
      this.cabecalho = document.querySelector(cabecalho)
      
      this.activeClass = "active"
      
      this.activeClose = "fa-x"
      this.activeMenu = "fa-bars"
  
      this.handleClick = this.handleClick.bind(this)
      this.handleClickLogo = this.handleClickLogo.bind(this)
    }
  
    animateLinks() {
      this.menuLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `menuLinkFade 2s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.menuList.classList.toggle(this.activeClass)
      this.mobileMenu.classList.toggle(this.activeClass) 
      this.menuClose.classList.toggle(this.activeMenu)
      this.menuClose.classList.toggle(this.activeClose)
      
      this.animateLinks()
    }
    handleClickLogo() {
      this.cabecalho.classList.toggle(this.activeClass)
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick)
      
    }
    addClickEventLogo() {
      this.menuLogo.addEventListener("click", this.handleClickLogo)
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent()
      }
      return this
    }
    initLogo() {
      if (this.menuLogo) {
        this.addClickEventLogo()
      }
      return this
    }
}

const menubar = new Menubar(".mobile-menu",".menu-list",".menu-list li","menu-close",".logo",".cabecalho")

menubar.init()
menubar.initLogo()
document.querySelector("cabecalho").addEventListener("submit", (event) => {
  event.preventDefault()
})