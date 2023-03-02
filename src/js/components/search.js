class Search {
  constructor(params) {
    this.$btnOpen = document.querySelector(`#${params.btnOpen}`)
    this.$btnClose = document.querySelector(`#${params.btnClose}`)
    this.$form = document.querySelector(`#${params.form}`)
    this.$input = document.querySelector(`#${params.input}`)

    this.tlOpenForm = gsap.timeline({paused: true})
      .set(this.$btnOpen, {visibility: hidden})

    this.$btnOpen.addEventListener('click', () => {
      this.openForm()
      this.tlOpenForm.play()
    })
    this.$btnClose.addEventListener('click', () => {
      this.closeForm()
    })

  }

  openForm() {
    this.$form.classList.remove('is-hidden')
    this.$form.classList.add('flex')
    this.$btnOpen.setAttribute('style', 'visibility: hidden;opacity:0')
  }
  closeForm() {
    this.$form.classList.add('is-hidden')
    this.$form.classList.remove('flex')
    this.cleanAttributes(this.$btnOpen)
  }

  cleanAttributes(elem) {
    if (elem.hasAttribute('style')) elem.removeAttribute('style')
  }

}


