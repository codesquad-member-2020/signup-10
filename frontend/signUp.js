import RegExp from "./constants/RegExp.js";
import { ID_MESSAGE } from "./constants/log.js";

const IDinputDOM = document.querySelector("#id");
const IDMessageDOM = document.querySelector(".ID_message");

function registerIdInputEventHandler(inputDOM, IDLogDOM, ID_MESSAGE, RegExp) {
  inputDOM.addEventListener("focusout", () => {});
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

function insertIDRegExpDiscriminantMessage(messageDOM, ERROR_REGEXP_MESSAGE) {
  messageDOM.style.color = "red";
  messageDOM.innerText = ERROR_REGEXP_MESSAGE;
}

function insertIDBlankDiscriminantMessage(messageDOM, DEFAULT_MESSAGE) {
  messageDOM.style.color = "red";
  messageDOM.innerText = DEFAULT_MESSAGE;
}
