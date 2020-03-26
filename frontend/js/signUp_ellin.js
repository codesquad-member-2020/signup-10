import RegExp from "/constants/RegExp.js";
import { PASSWORD_MESSAGE } from "/constants/message.js";

// init 으로 모든 이벤트 핸들러를 설치해준다.
function init() {}

const singUpForm = document.querySelector(".join");
singUpForm.addEventListener("focusout", eventHandler.bind(event));

const selector = {
  PASSWORD: "password",
  PASSWORD_RECONFIRM: "password_reconfirm",
  BIRTHDAY: { YEAR: "year", MONTH: "month", DAY: "day" }
};

const message = {
  PASSWORD: ".password_message"
};

function eventHandler({ target: { id, value } }) {
  const birthday = selector.BIRTHDAY;

  switch (id) {
    case selector.PASSWORD:
    case selector.PASSWORD_RECONFIRM:
      validatePassword(value);
      break;

    case birthday.YEAR:
    case birthday.MONTH:
    case birthday.DAY:
      break;
  }
}

function validatePassword(password) {
  const messageArea = document.querySelector(message.PASSWORD);
  const successRegExp = RegExp.PASSWORD.SUCCESS;
  const successMessage = PASSWORD_MESSAGE.SUCCESS;

  if (isBlank(password)) printMessage(PASSWORD_MESSAGE.DEFAULT, messageArea);
  else if (isValidValue(successRegExp, password))
    printMessage(successMessage, messageArea, "#00c850");
  else validateFailure(password, messageArea);
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

//1. 1번 비밀번호 값을 가져온다
//2. 비밀번호가 조건에 부합하는지 확인한다
//8~16자의 영문 대, 소문자, 숫자, 특수문자의 조합이어야 한다.
// 2-1 비밀번호가 부합하지 않으면?
// 2-1-1 갯수가 안맞을때 오류메세지 띄운다
// 2-1-2 대문자 없을때 오류메세지
// 2-1-3 특수문자 없을때 오류메세지
// 2-2 비밀번호가 부합하면?
//  2-2-1 안전 메세지 출력

// 예) 8자 이상 16자 이하로 입력해주세요. (빨강)
//      영문 대문자를 최소 1자 이상 포함해주세요. (빨강)
//      숫자를 최소 1자 이상 포함해주세요. (빨강)
//      특수문자를 최소 1자 이상 포함해주세요. (빨강

//3. 2.번 비밀번호 값을 가져온다.
// 3-1 1번 비밀번호 값과 일치하지 않을 때 다음과 같은 메세지가 출력된다.
// 3-2 1번 비밀번호 값과 일치할때는 합격 메세지 출력
