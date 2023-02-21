const form = document.getElementById('form-action');

const EMAIL_INVALID = 'Your email should be in small letters only, e.g abc@gmail.com. Please try again';

function displayMessage(input, message, type) {
  document.querySelector('small').innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function successAlert(input) {
  return displayMessage(input, '', true);
}

function errorAlert(input, message) {
  return displayMessage(input, message, false);
}

function validateEmail(input, invalidMsg) {
  const email = input.value.trim();
  if (email !== email.toLowerCase()) {
    return errorAlert(input, invalidMsg);
  }
  successAlert(input);
  return true;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailIsValid = validateEmail(form.elements.email, EMAIL_INVALID);

  if (emailIsValid) {
    form.submit();
    localStorage.clear();
  }
});