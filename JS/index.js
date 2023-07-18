import { DateTime } from './modules/luxon.js';
import {
  addBook, contact, listpage,
} from './modules/navbar.js';

const links = document.querySelectorAll('.link');
links.forEach((link) => {
  link.addEventListener('click', function handleClick() {
    if (this.id === 'listBtn') {
      listpage();
    }
    if (this.id === 'addNewBook') {
      addBook();
    }
    if (this.id === 'contactBtn') {
      contact();
    }
    return link;
  });
});

const now = DateTime.now();
const date = document.querySelector('.dayDate');
date.textContent = now.toLocaleString(DateTime.DATETIME_MED);