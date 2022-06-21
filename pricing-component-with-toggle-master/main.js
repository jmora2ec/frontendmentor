'use strict';
const paymentSelector = document.querySelector('.price-toggle input');
const monthlyTags = document.querySelectorAll('.plan__price .monthly');
const annualTags = document.querySelectorAll('.plan__price .annual');

paymentSelector.addEventListener('click', (e) => {
  if (e.target.checked === true) {
    monthlyTags.forEach((element) => element.classList.add('active'));
    annualTags.forEach((element) => element.classList.remove('active'));
  } else {
    monthlyTags.forEach((element) => element.classList.remove('active'));
    annualTags.forEach((element) => element.classList.add('active'));
  }
});
