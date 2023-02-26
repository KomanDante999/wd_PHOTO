class BurgerMenu {

  constructor(params) {

    this.widthWindow = document.documentElement.clientWidth
    this.$menu = document.querySelector(`#${params.menu}`)
    this.$btnOpen = document.querySelector(`#${params.btnOpen}`)
    this.$btnClose = document.querySelector(`#${params.btnClose}`)
    this.$wrapList = document.querySelector(`#${params.wrapList}`)
    this.$list = document.querySelector(`#${params.list}`)
    this.$links = document.querySelectorAll(`.${params.link}`)
    this.$contactPhone = document.querySelector(`#${params.contactPhone}`)

    this.setAttributes()

    // events
    window.addEventListener('resize', () => {
      this.widthWindow = document.documentElement.clientWidth
      this.setAttributes()
    })

    this.$btnOpen.addEventListener('click', () => {
      this.menuOpen()
    })
    this.$btnClose.addEventListener('click', () => {
      this.menuClose()
    })

    for (const link of this.$links) {
      link.addEventListener('click', () => {
        this.menuClose()
      })
    }

    this.$contactPhone.addEventListener('click', () => {
      this.menuClose()
    })

  }

  menuOpen() {
    this.$btnOpen.classList.add('is-hidden')
    this.$wrapList.classList.remove('is-hidden')
    this.$wrapList.classList.add('flex', 'flex-column')
    this.$btnClose.classList.remove('is-hidden')
  }

  menuClose() {
    this.$btnOpen.classList.remove('is-hidden')
    this.$wrapList.classList.remove('flex', 'flex-column')
    this.$wrapList.classList.add('is-hidden')
    this.$btnClose.classList.add('is-hidden')
  }

  setUnwrapMenu() {
    this.$wrapList.classList.remove('is-hidden', 'flex', 'flex-column')
    this.$list.classList.add('grid', 'grid-menu')
    this.$list.classList.remove('flex', 'flex-column')
    this.$btnOpen.classList.add('is-hidden')
    this.$btnClose.classList.add('is-hidden')
    this.$contactPhone.classList.add('is-hidden')
  }

  setBurgerMenu() {
    this.$wrapList.classList.add('is-hidden')
    this.$list.classList.remove('grid', 'grid-menu')
    this.$list.classList.add('flex', 'flex-column')
    this.$btnOpen.classList.remove('is-hidden')
    this.$btnClose.classList.add('is-hidden')
    this.$contactPhone.classList.remove('is-hidden')
  }

  setAttributes() {
    if (this.widthWindow > 520) {
      this.setUnwrapMenu()
    } else {
      this.menuClose()
      this.setBurgerMenu()
    }
  }
}
