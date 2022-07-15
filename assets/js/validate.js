var phone_input = document.getElementById("email_phone");
phone_input.addEventListener("input", () => {
  phone_input.setCustomValidity("");
  phone_input.checkValidity();
});
phone_input.addEventListener("invalid", () => {
  if (phone_input.value === "") {
    phone_input.setCustomValidity("شماره وارد کنید");
  } else {
    phone_input.setCustomValidity(
      "باید شماره تلفن به این شکل باشد:09151234567"
    );
  }
});
function validatePhoneNumber(input_str) {
  var re = /^\d{11}$/;

  return re.test(input_str);
}

function validateForm(event) {
  var phone = document.getElementById("email_phone").value;
  if (!validatePhoneNumber(phone)) {
    document.getElementById("phone_error").classList.remove("hidden");
  } else {
    document.getElementById("phone_error").classList.add("hidden");
    alert("validation success");
  }
  event.preventDefault();
}

document.getElementById("myform").addEventListener("submit", validateForm);
