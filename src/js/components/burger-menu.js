
class BurgerMenu {

  constructor(params) {

    this.$btnOpen = document.querySelector(`#${params.btnOpen}`)
    this.$btnClose = document.querySelector(`#${params.btnClose}`)
    this.$wrapList = document.querySelector(`#${params.wrapList}`)
    this.$list = document.querySelector(`#${params.list}`)
    this.$items = document.querySelectorAll(`.${params.item}`)
    this.$links = document.querySelectorAll(`.${params.link}`)
    this.$contactPhone = document.querySelector(`#${params.contactPhone}`)

    this.tlOpenBurger = gsap.timeline({paused: true})
      .set([this.$btnClose, this.$contactPhone], {display: 'block', opacity: 0})
      .set(this.$wrapList, {display: 'flex'})
      .set(this.$items, { opacity: 0})
      .to(this.$wrapList, {opacity: 1, duration: 0.3})
      .fromTo(this.$items, {y: -100, x: 100}, {y: 0, x: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "elastic.out(1, 0.3)"})
      .fromTo(this.$btnClose, {y: -100}, {y: 0, opacity: 1, duration: 0.3})
      .fromTo(this.$contactPhone, {y: 100}, {y: 0, opacity: 1, duration: 0.3})

    // events
    this.$btnOpen.addEventListener('click', () => {
      this.tlOpenBurger.play()
    })
    this.$btnClose.addEventListener('click', () => {
      this.tlOpenBurger.reverse()
    })

    for (const link of this.$links) {
      link.addEventListener('click', () => {
        this.tlOpenBurger.reverse()
      })
    }

    this.$contactPhone.addEventListener('click', () => {
      this.tlOpenBurger.reverse()
    })

  }
}
