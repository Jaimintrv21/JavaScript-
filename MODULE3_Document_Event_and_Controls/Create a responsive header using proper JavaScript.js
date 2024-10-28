// Create a responsive header using proper JavaScript

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
      header.style.height = '100px';
    } else {
      header.style.height = '150px';
    }
  });
});