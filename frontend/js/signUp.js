import RegExp from "/constants/RegExp.js";
import {
  ID_MESSAGE,
  EMAIL_MESSAGE,
  INTERESTS_MESSAGE
} from "/constants/message.js";

const IDinputDOM = document.querySelector("#id");
const IDMessageDOM = document.querySelector(".ID_message");

//--------------------ID 유효성 검사--------------------
function registerIdInputEventHandler(
  IDinputDOM,
  IDMessageDOM,
  ID_MESSAGE,
  RegExp
) {
  IDinputDOM.addEventListener("focusout", () => {
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
  } else {
    IDMmessageDOM.style.color = "#00c850";
    IDMmessageDOM.innerText = SUCCESS_MESSAGE;
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
const emailMessageDOM = document.querySelector(".email_message");

function registerEmailInputEventHandler(
  emailInputDOM,
  emailMessageDOM,
  EMAIL_MESSAGE,
  RegExp
) {
  emailInputDOM.addEventListener("focusout", () => {
    const targetEmail = event.target.value;
    if (judgeEmailBlank(targetEmail) === true) {
      insertEmailBlankDiscriminantMessage(
        emailMessageDOM,
        EMAIL_MESSAGE.DEFAULT
      );
    } else if (judgeEmailRegExp(targetEmail, RegExp.E_MAIL) !== true) {
      insertEmailRegExpDiscriminantMessage(
        emailMessageDOM,
        EMAIL_MESSAGE.ERROR_REGEXP
      );
    } else {
      judgeEmailServerData(
        targetEmail,
        emailMessageDOM,
        EMAIL_MESSAGE.SUCCESS,
        EMAIL_MESSAGE.ERROR_OVERLAP
      );
    }
  });
}

async function judgeEmailServerData(
  targetEmail,
  emailMmessageDOM,
  SUCCESS_MESSAGE,
  ERROR_OVERLAP
) {
  const url = `https://codesquad-group10.herokuapp.com/api/users/check/email/${targetEmail}`;
  const fetchData = await fetch(url);
  const dataJson = await fetchData.json();

  if (dataJson.valid === false) {
    emailMmessageDOM.style.color = "#EB0000";
    emailMmessageDOM.innerText = ERROR_OVERLAP;
  } else {
    emailMmessageDOM.style.color = "#00c850";
    emailMmessageDOM.innerText = SUCCESS_MESSAGE;
  }
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

function insertEmailRegExpDiscriminantMessage(
  emailMessageDOM,
  ERROR_REGEXP_MESSAGE
) {
  emailMessageDOM.style.color = "#EB0000";
  emailMessageDOM.innerText = ERROR_REGEXP_MESSAGE;
}

function insertEmailBlankDiscriminantMessage(emailMessageDOM, DEFAULT_MESSAGE) {
  emailMessageDOM.style.color = "#EB0000";
  emailMessageDOM.innerText = DEFAULT_MESSAGE;
}

registerEmailInputEventHandler(
  emailInputDOM,
  emailMessageDOM,
  EMAIL_MESSAGE,
  RegExp
);
//--------------------관심사--------------------

const intersetInputDOM = document.querySelector(".tag-container input");
const intersetMessageDOM = document.querySelector(".interest_message");
const tagContainer = document.querySelector(".tag-container");

let tags = [];

function registerIntersetInputEventHandler(
  intersetInputDOM,
  intersetMessageDOM,
  INTERESTS_MESSAGE
) {
  intersetInputDOM.addEventListener("keyup", e => {
    const maxinterest = 2;
    if (tags.length > maxinterest) {
      intersetMessageDOM.style.color = "#00c850";
      intersetMessageDOM.innerText = INTERESTS_MESSAGE.SUCCESS;
      intersetInputDOM.value = "";
      return;
    }
    if (e.key === ",") {
      intersetMessageDOM.style.color = "#00c850";
      intersetMessageDOM.innerText = INTERESTS_MESSAGE.DEFAULT;
      const testValue = e.target.value.split(",")[0];
      tags.push(testValue);
      addTags();
      intersetInputDOM.value = "";
    }
  });
}

function registerIntersetCloseBtnEventHandler() {
  document.addEventListener("click", e => {
    if (e.target.tagName === "I") {
      const tagLabel = e.target.getAttribute("data-item");
      const index = tags.indexOf(tagLabel);
      tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
      addTags();
    }
  });
}

function createTag(label) {
  const div = document.createElement("div");
  div.setAttribute("class", "tag");
  const span = document.createElement("span");
  span.innerHTML = label;
  const closeIcon = document.createElement("i");
  closeIcon.innerHTML = "close";
  closeIcon.setAttribute("class", "material-icons");
  closeIcon.setAttribute("data-item", label);
  div.appendChild(span);
  div.appendChild(closeIcon);

  return div;
}

function clearTags() {
  document.querySelectorAll(".tag").forEach(tag => {
    tag.parentElement.removeChild(tag);
  });
}

function addTags() {
  clearTags();
  tags
    .slice()
    .reverse()
    .forEach(tag => {
      tagContainer.prepend(createTag(tag));
    });
}

intersetInputDOM.focus();

registerIntersetInputEventHandler(
  intersetInputDOM,
  intersetMessageDOM,
  INTERESTS_MESSAGE
);
registerIntersetCloseBtnEventHandler();

//--------------------초기화 이벤트 구현--------------------

const resetBtnDOM = document.querySelector(".reset_btn");
const signUpForm = document.querySelector(".join");

function registerResetBtnEventHandler(resetBtnDOM, signUpForm) {
  resetBtnDOM.addEventListener("click", () => {
    const userClickValue = confirm(`입력값 초기화에 동의하십니까 ?`);

    if (userClickValue === true) {
      signUpForm.reset();
    } else {
      return;
    }
  });
}

registerResetBtnEventHandler(resetBtnDOM, signUpForm);
