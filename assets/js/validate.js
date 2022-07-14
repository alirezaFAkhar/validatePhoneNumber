var phone_input = document.getElementById("email-phone");
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
