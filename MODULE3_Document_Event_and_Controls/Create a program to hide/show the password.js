// Create a program to hide/show the password

document.addEventListener('DOMContentLoaded', function() {
  const passwordInput = document.getElementById('password');
  const toggleButton = document.getElementById('toggle-password');

  toggleButton.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleButton.textContent = 'Hide';
    } else {
      passwordInput.type = 'password';
      toggleButton.textContent = 'Show';
    }
  });
});