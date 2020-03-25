import RegExp from "./constants/RegExp.js";
import { ID_MESSAGE, EMAIL_MESSAGE } from "./constants/message.js";

const IDinputDOM = document.querySelector("#id");
const IDMessageDOM = document.querySelector(".ID_message");

//--------------------ID 유효성 검사--------------------
function registerIdInputEventHandler(
  inputDOM,
  IDMessageDOM,
  ID_MESSAGE,
  RegExp
) {
  inputDOM.addEventListener("focusout", () => {
    const targetID = event.target.value;
    if (judgeIDBlank(targetID) === true) {
      insertIDBlankDiscriminantMessage(IDMessageDOM, ID_MESSAGE.DEFAULT);
      return;
    } else if (judgeIDRegExp(targetID, RegExp.ID) !== true) {
      insertIDRegExpDiscriminantMessage(IDMessageDOM, ID_MESSAGE.ERROR_REGEXP);
      return;
    } else {
      judgeIDServerData(
        targetID,
        IDMessageDOM,
        ID_MESSAGE.SUCCESS,
        ID_MESSAGE.ERROR_OVERLAP
      );
    }
  });
}

async function judgeIDServerData(
  targetID,
  IDMmessageDOM,
  SUCCESS_MESSAGE,
  ERROR_OVERLAP
) {
  const url = `https://signup10.herokuapp.com/api/users/check/${targetID}`;
  const fetchData = await fetch(url);
  const dataJson = await fetchData.json();

  if (dataJson.valid === false) {
    IDMmessageDOM.style.color = "#EB0000";
    IDMmessageDOM.innerText = ERROR_OVERLAP;
    return;
  } else {
    IDMmessageDOM.style.color = "#00c850";
    IDMmessageDOM.innerText = SUCCESS_MESSAGE;
    return;
  }
}

function judgeIDRegExp(targetID, RegExp) {
  return RegExp.test(targetID);
}

function judgeIDBlank(targetID) {
  if (targetID === "") {
    return true;
  } else {
    return false;
  }
}

function insertIDRegExpDiscriminantMessage(IDMessageDOM, ERROR_REGEXP_MESSAGE) {
  IDMessageDOM.style.color = "#EB0000";
  IDMessageDOM.innerText = ERROR_REGEXP_MESSAGE;
}

function insertIDBlankDiscriminantMessage(IDMessageDOM, DEFAULT_MESSAGE) {
  IDMessageDOM.style.color = "#EB0000";
  IDMessageDOM.innerText = DEFAULT_MESSAGE;
}

registerIdInputEventHandler(IDinputDOM, IDMessageDOM, ID_MESSAGE, RegExp);

//--------------------e_mail 유효성 검사--------------------

const emailInputDOM = document.querySelector("#email");
const emailMessageDOM = document.querySelector("email_message");

function registerEmailInputEventHandler(
  emailInputDOM,
  emailMessageDOM,
  EMAIL_MESSAGE,
  RegExp
) {
  emailInputDOM.addEventListener("focusout", () => {});
}

function judgeEmailRegExp(targetEmail, RegExp) {
  return RegExp.test(targetEmail);
}

function judgeEmailBlank(targetEmail) {
  if (targetEmail === "") {
    return true;
  } else {
    return false;
  }
}

async function judgeEmailServerData(
  targetEmail,
  emailMmessageDOM,
  SUCCESS_MESSAGE,
  ERROR_OVERLAP
) {}

function insertEmailRegExpDiscriminantMessage(
  emailMessageDOM,
  ERROR_REGEXP_MESSAGE
) {}

function insertEmailBlankDiscriminantMessage(
  emailMessageDOM,
  DEFAULT_MESSAGE
) {}
