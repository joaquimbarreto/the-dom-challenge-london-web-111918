const numberEl = document.querySelector('#counter');
const buttonPlusEl = document.querySelector('#plus');
const buttonMinusEl = document.querySelector('#minus');
const buttonHeartEl = document.querySelector('#heart');
const buttonPauseEl = document.querySelector('#pause');
const likesEl = document.querySelector('.likes');
const commentFormEl = document.querySelector('#comment-form');
const inputEl = document.querySelector('[name="new-comment-desc"]')
let counterText = numberEl.innerText;

let timer;
numberEl.innerText = 0;

function numberPlusCounter() {
  numberEl.innerText++
}
buttonPlusEl.addEventListener('click', numberPlusCounter);

function numberMinusCounter() {
  --numberEl.innerText
}
buttonMinusEl.addEventListener('click', numberMinusCounter);

function numberHeart() {
  const numberLikeEl = document.createElement('li');
  numberLikeEl.innerText = numberEl.innerText
  likesEl.appendChild(numberLikeEl);
}
buttonHeartEl.addEventListener('click', numberHeart);

function pauseCounter() {
  if (buttonPauseEl.innerText === 'pause') {
    clearInterval(timer);
    buttonPauseEl.innerText = ' resume ';
  } else {
    countTimer();
    buttonPauseEl.innerText = ' pause ';
  }
}
buttonPauseEl.addEventListener('click', pauseCounter);

function countTimer() {
  timer = setInterval(() => {
     numberEl.innerText++;
  }, 1000)
}

function commentSubmit(event){
  event.preventDefault();
  const newCommentText = inputEl.value;
  const newCommentEl = document.createElement('li');
  newCommentEl.innerText = newCommentText;
  commentFormEl.appendChild(newCommentEl);
  commentFormEl.reset();
}

commentFormEl.addEventListener('submit', commentSubmit);



document.addEventListener('DOMContentLoaded', countTimer);
