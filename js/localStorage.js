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
