import * as functions from "./modules/functions.js";
import { BurgerMenu } from "./modules/burger-menu.js";
import { Search } from "./modules/search.js";
import { Card } from "./modules/contact-card.js";
import { InputForm } from "./modules/input-form.js";
import { init } from "./modules/yarmap.js";

functions.isWebP()

const burgerMenu = new BurgerMenu({
  btnOpen: 'burger-menu__btn-open',
  btnClose: 'burger-menu__btn-close',
  wrapList: 'burger-menu__wrap-list',
  list: 'burger-menu__list',
  item: 'menu__item',
  link: 'menu__link',
  contactPhone: 'burger-menu__contact-phone',
});

const headerSearch = new Search({
  btnOpen: 'header-search__btn-open',
  btnClose: 'header-search__btn-close',
  form: 'header-search__form',
  input: 'header-search__input',
});

const contactCard = new Card({
  btnClose: 'contact-card__btn-close',
  card: 'contact-card',
});

const contactForm = new InputForm({
  form: 'application-form',
  inputName: 'application-form__input-name',
  inputEmail: 'application-form__input-email',
  inputComment: 'application-form__input-comments',
  btnSubmit: 'application-form__submit',
})

const aboutForm = new InputForm({
  form: 'about-form',
  inputEmail: 'about-form__input-email',
})

ymaps.ready(init);

