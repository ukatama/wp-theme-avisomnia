'use strict';

document.querySelectorAll('.parallax').forEach((element) => {
  const containerElement = document.createElement('div');
  containerElement.className = 'parallax-container';
  element.appendChild(containerElement);
});

document.querySelectorAll('.parallax-overlay').forEach((element) => {
  const prevElement = element.previousElementSibling;
  if (!prevElement.className.match(/parallax/)) return;

  const containerElement = prevElement.querySelector('.parallax-container');
  if (!containerElement) return;

  containerElement.appendChild(element);
});

function moveBreadcrumbs() {
  const element = document.querySelector('#breadcrumbs');
  const targetElement = document.querySelector('#main > article > header');
  if (!element || !targetElement) return;

  targetElement.prepend(element);
  element.style.display = null;
}
moveBreadcrumbs();

const rellaxOptions = {
  speed: -8,
  center: true,
};

new Rellax('.site-title', {
  speed: -8,
});
new Rellax('.wp-block-image.parallax > img', rellaxOptions);
