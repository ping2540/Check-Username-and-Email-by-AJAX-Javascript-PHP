togglePassword.addEventListener("click", function (e) {
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#password");
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});
togglePassword1.addEventListener("click", function (e) {
  const togglePassword1 = document.querySelector("#togglePassword1");
  const password1 = document.querySelector("#checkpassword");
  // toggle the type attribute
  const type1 =
    password1.getAttribute("type") === "password" ? "text" : "password";
  password1.setAttribute("type", type1);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});
