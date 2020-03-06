const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseover', () => {
  container.classList.add('hover-left');
})
left.addEventListener('mouseout', () => {
  container.classList.remove('hover-left');
})
right.addEventListener('mouseover', () => {
  container.classList.add('hover-right');
})
left.addEventListener('mouseout', () => {
  container.classList.remove('hover-right');
})