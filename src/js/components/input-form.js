class InputForm {
  constructor(params) {
    this.inputsValidation = []
    this.$form = document.querySelector(`#${params.form}`)
    if ('inputName' in params) {
      this.$inputName = document.querySelector(`#${params.inputName}`)
      this.inputsValidation.push(this.$inputName)
    }
    if ('inputEmail' in params) {
      this.$inputEmail = document.querySelector(`#${params.inputEmail}`)
      this.inputsValidation.push(this.$inputEmail)
    }
    if ('inputComment' in params) {
      this.$inputComment = document.querySelector(`#${params.inputComment}`)
    }
    if ('btnSubmit' in params) {
      this.$submit = document.querySelector(`#${params.btnSubmit}`)
    }
    this.widthWindow = document.documentElement.clientWidth

    // events
    window.addEventListener('resize', () => {
      this.widthWindow = document.documentElement.clientWidth
    })

    this.$form.addEventListener('submit', (e) => {
      e.preventDefault()
      this.validation()
    })

  }

  setInputL() {
    if (this.$inputComment) {
      this.$inputComment.setAttribute('rows', '6')
    }
  }
  setInputS() {
    if (this.$inputComment) {
      this.$inputComment.setAttribute('rows', '8')
    }
  }

  validation() {
    for (const input of this.inputsValidation) {
      this.validator = new Validator({
        value: input.value,
        required: true,
      })
      this.validator.empty()
      this.label = input.parentElement
      if (this.validator.valid) {
        this.label.classList.remove('invalid-empty');
        switch (input.type) {
          case 'text':
            this.validator.alphabet()
            if (this.validator.valid) {
              this.label.classList.remove('invalid-contant');
            } else {
              this.label.classList.add('invalid-contant');
            }
            break;
          case 'email':
            this.validator.email()
            if (this.validator.valid) {
              this.label.classList.remove('invalid-contant');
            } else {
              this.label.classList.add('invalid-contant');
            }
            break;
        }
      } else {
        this.label.classList.add('invalid-empty');
      }
    }
  }

  get widthWindow() {
    return this._widthWindow
  }
  set widthWindow(value) {
    this._widthWindow = value

    if (value <= 520) {
      this.setInputS()
    }
    else {
      this.setInputL()
      }
    }

}
