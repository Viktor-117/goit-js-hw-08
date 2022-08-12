var throttle = require('lodash.throttle');

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
  console.log('Відправляємо форму ', formData);
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};

const onRefresh = evt => {
  savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    savedData.email ? (refs.email.value = savedData.email) : '';
    savedData.message ? (refs.textarea.value = savedData.message) : '';
  }
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputEvent, 500));
window.addEventListener('load', onRefresh);
