import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector(".feedback-form");
const email = document.querySelector('input');
const message = document.querySelector('textarea');


form.addEventListener('input', throttle(onInput, 1000));
form.addEventListener('submit', onSubmit);


const inputForm = {};

if (localStorage.getItem(STORAGE_KEY) !== '') {
   available =  JSON.parse(localStorage.getItem(STORAGE_KEY))
    console.log(available);
    form.elements.email.value = available.email;
    form.elements.message.value = available.message;
}

function onInput(event) {
   
    inputForm.email = form.elements.email.value;
    inputForm.message = form.elements.message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputForm));
    
}

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return console.log('Please fill in all the fields!');
  }

  console.log(`{email: ${email.value}, message: ${message.value}}`);
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}