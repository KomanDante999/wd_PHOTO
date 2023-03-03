class Search {
  constructor(params) {
    this.$btnOpen = document.querySelector(`#${params.btnOpen}`)
    this.$btnClose = document.querySelector(`#${params.btnClose}`)
    this.$form = document.querySelector(`#${params.form}`)
    this.$input = document.querySelector(`#${params.input}`)

    this.tlOpenForm = gsap.timeline({paused: true})
      .set(this.$form, {opacity: 0})
      .fromTo(this.$form, {x: 100}, {x: 0, opacity: 1, duration: 0.5, onStart: () => {
        this.openForm()
      }})

    this.tlCloseForm = gsap.timeline({paused: true})
      .to(this.$form, {x: 100, opacity: 0, duration: 0.5, onComplete: () => {
        this.closeForm()
      }})

      this.$btnOpen.addEventListener('click', () => {
        this.tlOpenForm.play()
        this.tlOpenForm.restart()
      })
      this.$btnClose.addEventListener('click', () => {
        this.tlCloseForm.play()
        this.tlCloseForm.restart()
      })

      this.cleanAttributes(this.$btnOpen)
      this.cleanAttributes(this.$form)
  }

  openForm() {
    this.$form.classList.remove('display-none')
    this.$form.classList.add('flex')
    this.$btnOpen.classList.add('is-hidden', 'is-disable')
  }

  closeForm() {
    this.$form.classList.add('display-none')
    this.$form.classList.remove('flex')
    this.$btnOpen.classList.remove('is-hidden', 'is-disable')
    this.cleanAttributes(this.$btnOpen)
    this.cleanAttributes(this.$form)
  }

  cleanAttributes(elem) {
    if (elem.hasAttribute('style')) elem.removeAttribute('style')
  }

}


