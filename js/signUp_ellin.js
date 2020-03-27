import RegExp from "../frontend/constants/RegExp.js";

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
  PASSWORD: "password_message"
};

function eventHandler({ target: { id, value } }) {
  const birthday = selector.BIRTHDAY;

  switch (id) {
    case selector.PASSWORD:
    case selector.PASSWORD_RECONFIRM:
      onPasswordEvent(value);
      break;

    case birthday.YEAR:
    case birthday.MONTH:
    case birthday.DAY:
      break;
  }
}

function validateValue(regExp, value) {
  return regExp.test(value);
}

function onPasswordEvent(value) {
  if (validateValue(RegExp.PASSWORD, value)) {
    //안전메세지
  } else {
    //오류메세지
  }
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

//3. 2.번 비밀번호 값을 가져온다.
// 3-1 1번 비밀번호 값과 일치하지 않을 때 다음과 같은 메세지가 출력된다.
// 3-2 1번 비밀번호 값과 일치할때는 합격 메세지 출력
