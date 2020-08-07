'use strict';

document.querySelector('.form')
  .addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const sum = await fetch('./php/sum.php', {
      method: 'POST',
      body: new FormData(form)
    });
    const result = await sum.json();
    form.res.value = result;
  });

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('.form');
//   form.addEventListener('submit', submit);

//   async function submit(e) {
//     e.preventDefault();
//     let sum = await fetch('./php/sum.php', {
//       method: 'POST',
//       body: new FormData(this)
//     });
//     let result = await sum.json();
//     this.res.value = result;
//   }
// });
