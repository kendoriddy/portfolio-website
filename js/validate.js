const form = document.getElementById('form-action');

const EMAIL_INVALID = 'Your email should be in small letters only, e.g abc@gmail.com. Please try again';

function displayMessage(input, message, type) {
  document.querySelector('small').innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

