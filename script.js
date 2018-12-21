'use strict';

document.body.className = document.body.className.replace('image-filters-enabled', '');

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
  const targetElement = document.querySelector('#main > article > header') || document.querySelector('#masthead .entry-header');
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

const rellaxElements = document.querySelectorAll([
  '.site-header.featured-image .site-featured-image .post-thumbnail img',
  '.wp-block-image.parallax > img',
].join(','));
rellaxElements.forEach((element) => {
  new Rellax(element, rellaxOptions);
});
