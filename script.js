'use strict';

const mainElement = document.querySelector('main');

const answers = Array.from(document.querySelectorAll('.answer'));

//hide all answers on start
answers.forEach((el) => {
  el.classList.add('hidden');
});

const toggleAnswer = (el) => {
  const answerEl = el.querySelector('.answer');
  const iconEl = el.querySelector('.icon img');

  //show answer
  answerEl.classList.toggle('hidden');

  //change icon
  if (iconEl.src.includes('plus')) {
    iconEl.setAttribute('src', './assets/images/icon-minus.svg');
  } else {
    iconEl.setAttribute('src', './assets/images/icon-plus.svg');
  }
};

mainElement.addEventListener('click', (e) => {
  const element = e.target.closest('.question');
  if (!element) return;

  //get current section element
  const sectionEL = element.parentElement;

  //toggle Answer;
  toggleAnswer(sectionEL);
});

// Finding the currently focused element
// https://stackoverflow.com/questions/497094/how-do-i-find-out-which-dom-element-has-the-focus

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.activeElement.tagName === 'SECTION') {
    toggleAnswer(document.activeElement);
  }
});
