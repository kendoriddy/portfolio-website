const formData = {
  name: '',
  email: '',
  message: '',
};

function populateStorage() {
  formData.name = document.getElementById('name').value;
  formData.email = document.getElementById('email').value;
  formData.message = document.getElementById('message').value;

  localStorage.setItem('form-data', JSON.stringify(formData));
}

function getData() {
  let storageData = localStorage.getItem('form-data');
  storageData = JSON.parse(storageData);

  document.getElementById('name').value = storageData.name;
  document.getElementById('email').value = storageData.email;
  document.getElementById('message').value = storageData.message;
}