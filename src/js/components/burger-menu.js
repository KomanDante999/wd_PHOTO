
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
      .fromTo(this.$wrapList, {opacity: 0}, {opacity: 1, duration: 0.5, onStart: () => {
        this.$wrapList.classList.remove('is-hidden')
        this.$wrapList.classList.add('flex', 'flex-column')
      }})
      // .fromTo(this.$items, {y: -100, x: 100}, {y: 0, x: 0, opacity: 1, duration: 0.5, stagger: 0.1})
      // .fromTo(this.$btnClose, {y: -100}, {y: 0, opacity: 1, duration: 0.3})
      // .fromTo(this.$contactPhone, {y: 100}, {y: 0, opacity: 1, duration: 0.3, delay: -0.3})

      this.tlCloseBurger = gsap.timeline({paused: true})
      .to(this.$wrapList, {rotationX: 90, duration: 0.3})
      .set(this.$wrapList, {rotationX: 0, onComplete: () => {
        this.$wrapList.classList.add('is-hidden')
        this.$wrapList.classList.remove('flex', 'flex-column')
      }})


    // events
    window.addEventListener('resize', () => {
      this.widthWindow = document.documentElement.clientWidth
    })


    this.$btnOpen.addEventListener('click', () => {
      this.tlOpenBurger.play()
      this.tlOpenBurger.restart()
    })
    this.$btnClose.addEventListener('click', () => {
      this.tlCloseBurger.play()
      this.tlCloseBurger.restart()
    })

    for (const link of this.$links) {
      link.addEventListener('click', () => {
        this.tlCloseBurger.play()
        this.tlCloseBurger.restart()
      })
    }

    this.$contactPhone.addEventListener('click', () => {
      this.tlCloseBurger.play()
      this.tlCloseBurger.restart()
    })
  }

  setUnwrapMenu() {
    this.$wrapList.classList.remove('is-hidden', 'flex', 'flex-column')
    this.$btnClose.classList.add('is-hidden')
    this.$contactPhone.classList.add('is-hidden')
  }
  setBurgerMenu() {
    this.$wrapList.classList.add('is-hidden')
    this.$btnClose.classList.remove('is-hidden')
    this.$contactPhone.classList.remove('is-hidden')
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
