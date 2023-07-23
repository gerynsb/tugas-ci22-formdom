const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setSuccess = (element) => {
  const inputBox = element.parentElement;
  const errorDisplay = inputBox.querySelector(".error");

  errorDisplay.innerText = "";
  inputBox.classList.add("success");
  inputBox.classList.remove("error");
};

function passwordStrength(password) {
  const strengthPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return strengthPass.test(password);
}

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const setError = (element, message) => {
  const inputBox = element.parentElement;
  const errorDisplay = inputBox.querySelector(".error");
  errorDisplay.innerText = message;
  inputBox.classList.add("error");
  inputBox.classList.remove("success");
};

const validateInputs = () => {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (nameValue === "") {
    setError(name, "Name is required");
  } else {
    setSuccess(name);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters.");
  } else if (!passwordStrength(passwordValue)) {
    setError(
      password,
      "Password must contain at least one uppercase letter, one lowercase letter, and one digit"
    );
  } else {
    setSuccess(password);
    displayAlert();
  }
};

function displayAlert() {
  const nameValue = name.value.trim();
  if (nameValue !== "" && email.value !== "") {
    Swal.fire({
      title: `Hello, ${nameValue}`,
      text: "Welcome! This is not Paradise 3:)",
      icon: "success",
      timer: 3000,               
      showConfirmButton: false  
    }); /* Sorry sensei banyak copy paste :(. */
  }
};