let parallaxTargets = [];
function parallax(element) {
  parallaxTargets.push(element);
}

function setupParallax() {
  function parallaxOnScroll() {
    parallaxTargets.forEach((element) => {
      const y = (window.scrollY - element.parentElement.offsetTop) * 0.5;
      element.style.transform = `translate3d(0,${y}px,0)`;
    });
  }
  window.addEventListener('scroll', parallaxOnScroll);
  parallaxOnScroll();
}

function setup() {
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

  parallax(document.querySelector('.site-title'));
  document.querySelectorAll([
      '.site-header.featured-image .site-featured-image .post-thumbnail img',
      '.wp-block-image.parallax > img',
  ].join(',')).forEach(parallax);

  setupParallax();
}
setup();
