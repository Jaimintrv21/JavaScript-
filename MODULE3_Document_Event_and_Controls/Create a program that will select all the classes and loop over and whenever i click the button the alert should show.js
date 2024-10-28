// Create a program that will select all the classes and loop over and whenever i click the button the alert should show

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.button-class'); // Assuming the class name is 'button-class'
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Button clicked!');
    });
  });
});