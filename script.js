// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const password = document.getElementById("password");
// const cpassword = document.getElementById("cpassword");
// let isSubmit = false;

// form.addEventListener("submit", (events) => {
//   events.preventDefault();
//   validate();
//   isSubmit = true
// });

// function isUsername(username) {
//   const nameRegex = /^[A-Za-z\s'-]+$/;
//   return nameRegex.test(username) || username.trim() === "";
// }

// function isEmail(email) {
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
//   return emailRegex.test(email);
// }

// function validate() {
//   let usernameVal = username.value.trim();
//   let emailVal = email.value.trim();
//   let phoneVal = phone.value.trim();
//   let passwordVal = password.value.trim();
//   let cpasswordVal = cpassword.value.trim();

//   // for username
//   if (!usernameVal) {
//     setErrorMsg(username, "Username cannot be blank.");
//   } else if (!isUsername(usernameVal)) {
//     setErrorMsg(username, "Please enter a valid Username");
//   } else if (usernameVal.length <= 2) {
//     setErrorMsg(username, "Name must be at least 3 characters long.");
//   } else {
//     setSuccessMsg(username);
//   }

//   //   for email
//   if (!emailVal) {
//     setErrorMsg(email, "Email cannot be blank");
//   } else if (!isEmail(emailVal)) {
//     setErrorMsg(email, "Please enter a valid email address.");
//   } else {
//     setSuccessMsg(email);
//   }

//   // for phone
//   if (!phoneVal) {
//     setErrorMsg(phone, "Please Enter the Phone Number");
//   } else if (phoneVal.length <= 9) {
//     setErrorMsg(phone, "Please Enter a valid Phone Number");
//   } else {
//     setSuccessMsg(phone);
//   }

//   // for password
//   if (!passwordVal) {
//     setErrorMsg(password, "Please enter a Strong Password");
//   } else if (passwordVal.length < 6) {
//     setErrorMsg(password, "Password must be at least 6 characters long");
//   } else {
//     setSuccessMsg(password);
//   }

//   // for confirm password
//   if (!cpasswordVal) {
//     setErrorMsg(cpassword, "Please confirm your password");
//   } else if (cpasswordVal !== passwordVal) {
//     setErrorMsg(cpassword, "Passwords do not match");
//   } else {
//     setSuccessMsg(cpassword);
//   }
// }

// function setErrorMsg(input, errormsgs) {
//   let formControl = input.parentElement;
//   let small = formControl.querySelector("small");
//   formControl.className = "form-control error";
//   small.innerText = errormsgs;
// }

// function setSuccessMsg(input) {
//   let formControl = input.parentElement;
//   formControl.className = "form-control success";
// }



// second code form validation for real time validation 

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");


// Event listeners for real-time validation
username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhone);
password.addEventListener("input", validatePassword);
cpassword.addEventListener("input", validateConfirmPassword);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

function isUsername(username) {
  const nameRegex = /^[A-Za-z\s'-]+$/;
  return nameRegex.test(username) || username.trim() === "";
}

function isEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return emailRegex.test(email);
}

function validate() {
  validateUsername();
  validateEmail();
  validatePhone();
  validatePassword();
  validateConfirmPassword();
}

function validateUsername() {
  const usernameVal = username.value.trim();

  if (!usernameVal) {
    setErrorMsg(username, "Username cannot be blank.");
  } else if (!isUsername(usernameVal)) {
    setErrorMsg(username, "Please enter a valid Username");
  } else if (usernameVal.length <= 2) {
    setErrorMsg(username, "Name must be at least 3 characters long.");
  } else {
    setSuccessMsg(username);
  }
}

function validateEmail() {
  const emailVal = email.value.trim();

  if (!emailVal) {
    setErrorMsg(email, "Email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Please enter a valid email address.");
  } else {
    setSuccessMsg(email);
  }
}

function validatePhone() {
  const phoneVal = phone.value.trim();

  if (!phoneVal) {
    setErrorMsg(phone, "Please Enter the Phone Number");
  } else if (phoneVal.length <= 9) {
    setErrorMsg(phone, "Please Enter a valid Phone Number");
  } else {
    setSuccessMsg(phone);
  }
}

function validatePassword() {
  const passwordVal = password.value.trim();

  if (!passwordVal) {
    setErrorMsg(password, "Please enter a Strong Password");
  } else if (passwordVal.length < 6) {
    setErrorMsg(password, "Password must be at least 6 characters long");
  } else {
    setSuccessMsg(password);
  }
}

function validateConfirmPassword() {
  const cpasswordVal = cpassword.value.trim();
  const passwordVal = password.value.trim();

  if (!cpasswordVal) {
    setErrorMsg(cpassword, "Please confirm your password");
  } else if (cpasswordVal !== passwordVal) {
    setErrorMsg(cpassword, "Passwords do not match");
  } else {
    setSuccessMsg(cpassword);
  }
}

function setErrorMsg(input, errormsgs) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}
