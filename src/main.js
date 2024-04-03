'use strict';

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
      entry.target.classList.add('scroll-in');
    } else {
      entry.target.classList.remove('scroll-in');
    }
  });
};
const option = {
  threshold: [0.3],
};

const observer = new IntersectionObserver(callback, option);
const scrollItmes = document.querySelectorAll('.scroll__item');
scrollItmes.forEach((scrollItem) => {
  observer.observe(scrollItem);
});
