function revealLoginError(event) {
  event.preventDefault();
  const errorElement = document.getElementById("loginError");
  errorElement.style.display = "block";
}
