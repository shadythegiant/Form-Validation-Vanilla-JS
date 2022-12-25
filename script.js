"use strict";
//  1: adding simple validation:
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// functions

//1: show input error message:

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// 2: show Success Outline

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// 3: check if email is valid :
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// 4:
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// 5 :
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// input length check:

function checkLenght(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// check password match

function checkPassMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords dont match");
  } else {
    showSuccess(input2);
  }
}
// EventListener

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   if (username.value === "") {
  //     showError(username, "Username is required");
  //   } else {
  //     showSuccess(username);
  //   }

  //   if (email.value === "") {
  //     showError(email, "email is required");
  //   } else if (!isValidEmail(email.value)) {
  //     showError(email, " Email is not valid");
  //   } else {
  //     showSuccess(email);
  //   }

  //   if (password.value === "") {
  //     showError(password, "password is required");
  //   } else {
  //     showSuccess(password);
  //   }
  //   if (password2.value === "") {
  //     showError(password2, "Please confirm your password");
  //   } else {
  //     showSuccess(password2);
  //   }

  checkRequired([username, email, password, password2]);
  checkLenght(username, 3, 14);
  checkLenght(password, 5, 15);
  checkEmail(email);
  checkPassMatch(password, password2);
});
