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
  password: document.querySelector(".password_message"),
  passwordReconfirm: document.querySelector(".password_reconfirm_message"),
  birthday: document.querySelector(".birthday_message")
};

function eventHandler({ target: { id, value } }) {
  const birthday = selector.BIRTHDAY;

  switch (id) {
    case selector.PASSWORD:
      validatePassword(value);
      break;

    case selector.PASSWORD_RECONFIRM:
      validatePasswordReconfirm(value);
      break;

    case birthday.YEAR:

    case birthday.MONTH:
    case birthday.DAY:
      validateBirthday(id, value, birthday);
      break;
  }
}

function validatePassword(password) {
  const safetyRegExp = RegExp.PASSWORD.SAFETY;
  const safetyMessage = PASSWORD_MESSAGE.SAFETY;

  if (isBlank(password))
    return printMessage(PASSWORD_MESSAGE.DEFAULT, messageArea.password);

  if (isValidValue(safetyRegExp, password)) {
    printMessage(safetyMessage, messageArea.password, "#00c850");
    return (validationState.password = password);
  }

  return validateFailure(password, messageArea.password);
}

function isBlank(value) {
  return value === "";
}

function validateFailure(password, messageArea) {
  const message = PASSWORD_MESSAGE.ERROR;
  const regexp = RegExp.PASSWORD;
  const passwordLengthRange = password.length < 8 || password.length > 16;

  if (passwordLengthRange) return printMessage(message.LENGTH, messageArea);

  if (!isValidValue(regexp.UPPERCASE, password))
    return printMessage(message.UPPERCASE, messageArea);

  if (!isValidValue(regexp.NUMBER, password))
    return printMessage(message.NUMBER, messageArea);

  if (!isValidValue(regexp.SPECIAL, password))
    return printMessage(message.SPECIAL, messageArea);

  if (!isValidValue(regexp.LOWERCASE, password))
    return printMessage(message.LOWERCASE, messageArea);

  return printMessage(message.ETC, messageArea);
}

function printMessage(message, messageArea, color = "#EB0000") {
  messageArea.style.color = color;
  return (messageArea.innerText = message);
}

function isValidValue(regexp, value) {
  return regexp.test(value);
}

function validatePasswordReconfirm(value) {
  const successMessage = PASSWORD_RECONFIRM_MESSAGE.SUCCESS;
  const errorMessage = PASSWORD_RECONFIRM_MESSAGE.ERROR;

  if (value === validationState.password)
    return printMessage(
      successMessage,
      messageArea.passwordReconfirm,
      "#00c850"
    );

  return printMessage(errorMessage, messageArea.passwordReconfirm);
}

function validateBirthday(id, value, birthday) {
  const birthdayValue = parseInt(value);
  const yearMessage = BIRTHDAY_MESSAGE.YEAR.DEFAULT;
  const monthMessage = BIRTHDAY_MESSAGE.MONTH.DEFAULT;
  const dayMessage = BIRTHDAY_MESSAGE.DAY.DEFAULT;
  const numberMessage = BIRTHDAY_MESSAGE.NUMBER;

  switch (id) {
    case birthday.YEAR:
      if (isBlank(value))
        return printMessage(yearMessage, messageArea.birthday);
      if (isNaN(birthdayValue))
        return printMessage(numberMessage, messageArea.birthday);
      validateBirthdayYear(birthdayValue);
      break;

    case birthday.MONTH:
      if (isBlank(value))
        return printMessage(monthMessage, messageArea.birthday);
      validationState.birthdayMonth = birthdayValue;
      break;

    case birthday.DAY:
      if (isBlank(value)) return printMessage(dayMessage, messageArea.birthday);
      if (isNaN(birthdayValue))
        return printMessage(numberMessage, messageArea.birthday);
      validateBirthdayDay(birthdayValue);
      break;
  }
}

function validateBirthdayYear(year) {
  const yearLength = year.toString().length === 4;
  const yearMessage = BIRTHDAY_MESSAGE.YEAR.DEFAULT;
  const yearErrorMessage = BIRTHDAY_MESSAGE.YEAR.ERROR;
  if (!yearLength) return printMessage(yearMessage, messageArea.birthday);

  if (!isYaerRange(year))
    return printMessage(yearErrorMessage, messageArea.birthday);

  removeMessage();
  validationState.birthdayYear = year;
}

function isYaerRange(year) {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 15 + 1;
  const lastYear = currentYear - 99 + 1;

  if (startYear >= year && lastYear <= year) return true;

  return false;
}

function validateBirthdayDay(day) {
  const dayLength = day.toString().length === 2;
  const dayMessage = BIRTHDAY_MESSAGE.DAY.DEFAULT;
  const dayErrorMessage = BIRTHDAY_MESSAGE.DAY.ERROR;

  if (!dayLength) return printMessage(dayMessage, messageArea.birthday);

  if (!isDayRange(day))
    return printMessage(dayErrorMessage, messageArea.birthday);

  removeMessage();
  validationState.birthdayDay = day;
}

function isDayRange(day) {
  const correctDay = new Date(
    validationState.birthdayYear,
    validationState.birthdayMonth,
    0
  ).getDate();

  if (day > 0 && day <= correctDay) return true;
  return false;
}

function removeMessage() {
  return (messageArea.birthday.innerText = "");
}
