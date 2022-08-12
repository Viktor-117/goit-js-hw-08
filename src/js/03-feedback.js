var debounce = require('debounce');

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

let formData = {};
let savedData;

const onInputEvent = evt => {
  evt.preventDefault();
  if (savedData) {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  }
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  console.log(formData);
};

const onFormSubmit = evt => {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log('Відправляємо форму');
};

const onRefresh = evt => {
  savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    savedData.email ? (refs.email.value = savedData.email) : '';
    savedData.message ? (refs.textarea.value = savedData.message) : '';
  }
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', debounce(onInputEvent, 200));
window.addEventListener('load', onRefresh);
