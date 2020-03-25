import RegExp from "./constants/RegExp.js";
import { ID_MESSAGE } from "./constants/log.js";

const IDinputDOM = document.querySelector("#id");
const IDMessageDOM = document.querySelector(".ID_message");

function registerIdInputEventHandler(
  inputDOM,
  IDMessageDOM,
  ID_MESSAGE,
  RegExp
) {
  inputDOM.addEventListener("focusout", () => {});
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
    IDMmessageDOM.style.color = "EB0000";
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
  IDMessageDOM.style.color = "EB0000";
  IDMessageDOM.innerText = ERROR_REGEXP_MESSAGE;
}

function insertIDBlankDiscriminantMessage(IDMessageDOM, DEFAULT_MESSAGE) {
  IDMessageDOM.style.color = "EB0000";
  IDMessageDOM.innerText = DEFAULT_MESSAGE;
}
