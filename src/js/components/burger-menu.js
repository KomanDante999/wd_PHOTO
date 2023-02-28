
class BurgerMenu {

  constructor(params) {

    this.$btnOpen = document.querySelector(`#${params.btnOpen}`)
    this.$btnClose = document.querySelector(`#${params.btnClose}`)
    this.$wrapList = document.querySelector(`#${params.wrapList}`)
    this.$list = document.querySelector(`#${params.list}`)
    this.$items = document.querySelectorAll(`.${params.item}`)
    this.$links = document.querySelectorAll(`.${params.link}`)
    this.$contactPhone = document.querySelector(`#${params.contactPhone}`)
    this.widthWindow = document.documentElement.clientWidth

    this.tlOpenBurger = gsap.timeline({paused: true})
      // .set([this.$btnClose, this.$contactPhone], {display: 'block', opacity: 0})
      // .set(this.$wrapList, {display: 'flex'})
      // .set(this.$items, { opacity: 0})
      // .to(this.$wrapList, {opacity: 1, duration: 0.3})
      // .fromTo(this.$items, {y: -100, x: 100}, {y: 0, x: 0, opacity: 1, duration: 0.5, stagger: 0.1})
      // .fromTo(this.$btnClose, {y: -100}, {y: 0, opacity: 1, duration: 0.3})
      // .fromTo(this.$contactPhone, {y: 100}, {y: 0, opacity: 1, duration: 0.3, delay: -0.3})

      this.tlCloseBurger = gsap.timeline({paused: true})
      // .to(this.$wrapList, {opacity: 0, duration: 0.5})
      // .set([this.$btnClose, this.$contactPhone], {display: 'none'})
      // .set(this.$wrapList, {display: 'none'})
      // .set(this.$wrapList, {opacity: 1})
      // .set(this.$items, {y: 0, x: 0})


    // events
    window.addEventListener('resize', () => {
      this.widthWindow = document.documentElement.clientWidth
    })


    this.$btnOpen.addEventListener('click', () => {
      this.openBurger()
    })
    this.$btnClose.addEventListener('click', () => {
      this.closeBurger()
    })

    for (const link of this.$links) {
      link.addEventListener('click', () => {
      })
    }

    this.$contactPhone.addEventListener('click', () => {
    })

  }

  setUnwrapMenu() {
    this.$wrapList.classList.remove('is-hidden', 'flex', 'flex-column')
    this.$btnClose.classList.add('is-hidden')
    this.$contactPhone.classList.add('is-hidden')
  }
  setBurgerMenu() {
    this.$wrapList.classList.add('is-hidden', 'flex', 'flex-column')
    this.$btnClose.classList.remove('is-hidden')
    this.$contactPhone.classList.remove('is-hidden')
  }

  openBurger() {
    this.$wrapList.classList.remove('is-hidden')

  }

  closeBurger() {
    this.$wrapList.classList.add('is-hidden')

  }

  get widthWindow() {
    return this._widthWindow
  }
  set widthWindow(value) {
    this._widthWindow = value

    if (value <= 520) {
      this.setBurgerMenu()
      }
    else {
      this.setUnwrapMenu()
      }
    }

}
