import RegExp from "../constants/RegExp.js";
import {
  PASSWORD_MESSAGE,
  PASSWORD_RECONFIRM_MESSAGE
} from "../constants/message.js";

(function() {
  const singUpForm = document.querySelector(".join");
  singUpForm.addEventListener("focusout", eventHandler.bind(event));
})();

const selector = {
  PASSWORD: "password",
  PASSWORD_RECONFIRM: "password_reconfirm",
  BIRTHDAY: { YEAR: "year", MONTH: "month", DAY: "day" }
};

const messageArea = {
  PASSWORD: ".password_message",
  PASSWORD_RECONFIRM: ".password_reconfirm_message"
};

const inputValue = {
  password: false,
  passwordReconfirm: false
};

function eventHandler({ target: { id, value } }) {
  const birthday = selector.BIRTHDAY;

  switch (id) {
    case selector.PASSWORD:
      validatePassword(value);
      break;

    case selector.PASSWORD_RECONFIRM:
      validatePasswordReconfirm(value);
    case birthday.YEAR:
    case birthday.MONTH:
    case birthday.DAY:
      break;
  }
}

function validatePassword(password) {
  const passwordMessageArea = document.querySelector(messageArea.PASSWORD);
  const safetyRegExp = RegExp.PASSWORD.SAFETY;
  const safetyMessage = PASSWORD_MESSAGE.SAFETY;

  if (isBlank(password))
    printMessage(PASSWORD_MESSAGE.DEFAULT, passwordMessageArea);
  else if (isValidValue(safetyRegExp, password)) {
    printMessage(safetyMessage, passwordMessageArea, "#00c850");
    return (inputValue.password = password);
  } else validateFailure(password, passwordMessageArea);
}

function isBlank(value) {
  return value === "";
}

function validateFailure(password, messageArea) {
  const message = PASSWORD_MESSAGE.ERROR;
  const regexp = RegExp.PASSWORD;
  const passwordLengthRange = password.length < 8 || password.length > 16;

  if (passwordLengthRange) printMessage(message.LENGTH, messageArea);
  else if (!isValidValue(regexp.NUMBER, password))
    printMessage(message.NUMBER, messageArea);
  else if (!isValidValue(regexp.UPPERCASE, password))
    printMessage(message.UPPERCASE, messageArea);
  else if (!isValidValue(regexp.SPECIAL, password))
    printMessage(message.SPECIAL, messageArea);
  else if (!isValidValue(regexp.LOWERCASE, password))
    printMessage(message.LOWERCASE, messageArea);
  else printMessage(message.ETC, messageArea);
}

function printMessage(message, messageArea, color = "#EB0000") {
  messageArea.style.color = color;
  return (messageArea.innerText = message);
}

function isValidValue(regexp, value) {
  return regexp.test(value);
}

function validatePasswordReconfirm(value) {
  const passwordMessageArea = document.querySelector(
    messageArea.PASSWORD_RECONFIRM
  );
  const successMessage = PASSWORD_RECONFIRM_MESSAGE.SUCCESS;
  const errorMessage = PASSWORD_RECONFIRM_MESSAGE.ERROR;

  if (value === inputValue.password)
    printMessage(successMessage, passwordMessageArea, "#00c850");
  else printMessage(errorMessage, passwordMessageArea);
}
