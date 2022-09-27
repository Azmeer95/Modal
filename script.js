'use strict';

// Select all elements and store them in a variable so they can be used throughout.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// Select ALL the elements with class .show-modal
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  // console.log('Button clicked!');
  // .classList can add/remove multiple classes - 'class1', 'class2',...
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Only executes the closeModal function when the button is clicked
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// 3 key events - down/press/up. When an event occurs, JS generates an object containing all the event's information
// When the event occurs, JS will call the anonymous function with the event object 'e' as an argument
document.addEventListener('keydown', function (e) {
  //   console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
