const phoneInput = document.getElementById('email_phone');

phoneInput.addEventListener('input', () => {
  phoneInput.setCustomValidity('');
  phoneInput.checkValidity();
});

phoneInput.addEventListener('invalid', () => {
  if (phoneInput.value === '') {
    phoneInput.setCustomValidity('شماره وارد کنید');
  } else {
    phoneInput.setCustomValidity('باید شماره تلفن به این شکل باشد:09151234567');
  }
});

function validatePhoneNumber(input_str) {
  const phoneRegex = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/;

  return phoneRegex.test(input_str);
}
function CheckPassword(input_str) {
  const passwordRegax = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  return passwordRegax.test(input_str);
}

function validateForm(event) {
  const phone = document.getElementById('email_phone').value;
  const password = document.getElementById('password').value;
  if (!validatePhoneNumber(phone)) {
    document.getElementById('phone_error').classList.remove('hidden');
  } else {
    if (!CheckPassword(password)) {
      document.getElementById('password_error').classList.remove('hidden');
    } else {
      document.getElementById('password_error').classList.add('hidden');
      alert('validation password success');
    }
    document.getElementById('phone_error').classList.add('hidden');
  }
  event.preventDefault();
}

document.getElementById('myform').addEventListener('submit', validateForm);
