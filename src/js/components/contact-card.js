class Card {
  constructor(params) {
    this.$btnClose = document.querySelector(`#${params.btnClose}`)
    this.$card = document.querySelector(`#${params.card}`)

    this.tlCloseCard = gsap.timeline({paused: true})
      .to(this.$card, {rotationX: 90, duration: 0.3, onComplete: () => {
        this.closeCard()
      }})

      this.$btnClose.addEventListener('click', () => {
        this.tlCloseCard.play()
        this.tlCloseCard.restart()
      })

      this.cleanAttributes(this.$card)
  }

  closeCard() {
    this.$card.classList.add('display-none')
    this.$card.classList.remove('flex')
    this.cleanAttributes(this.$card)
  }

  cleanAttributes(elem) {
    if (elem.hasAttribute('style')) elem.removeAttribute('style')
  }
}
