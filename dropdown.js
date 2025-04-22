// Basic Dropdown JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('#dropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdown.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show');
  });
});

// Close dropdown when clicking outside
window.addEventListener('click', function(e) {
  if (!e.target.matches('.dropdown') && !e.target.matches('.dropdown *')) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.remove('show');
  }
});
