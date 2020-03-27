export const ID_MESSAGE = {
  DEFAULT: `아이디를 입력해 주세요.`,
  SUCCESS: `사용 가능한 아이디 입니다.`,
  ERROR_REGEXP: `5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.`,
  ERROR_OVERLAP: `이미 사용중이거나 탈퇴한 아이디입니다.`
};

export const PASSWORD_MESSAGE = {
  DEFAULT: `비밀번호를 입력해 주세요`,
  SAFETY: `안전한 비밀번호 입니다.`,
  ERROR: {
    LENGTH: `8자 이상 16자 이하로 입력해주세요.`,
    NUMBER: `숫자를 최소 1자 이상 포함해주세요.`,
    UPPERCASE: `영문 대문자를 최소 1자 이상 포함해주세요.`,
    LOWERCASE: `영문 소문자를 최소 1자 이상 포함해주세요.`,
    SPECIAL: `특수문자를 최소 1자 이상 포함해주세요.`,
    ETC: `옳바른 비밀번호를 입력해주세요.`
  }
};

export const PASSWORD_RECONFIRM_MESSAGE = {
  SUCCESS: `비밀번호가 일치합니다`,
  ERROR: `비밀번호가 일치하지 않습니다.`
};

export const EMAIL_MESSAGE = {
  DEFAULT: `이메일을 입력해 주세요.`,
  SUCCESS: `사용 가능한 이메일 입니다.`,
  ERROR_REGEXP: `형식에 맞지 않는 이메일 입니다.`,
  ERROR_OVERLAP: `이미 사용중이거나 탈퇴한 이메일입니다.`
};

export const INTERESTS_MESSAGE = {
  DEFAULT: `관심사를 3개까지 등록 가능합니다.`,
  SUCCESS: `관심사를 최대치까지 등록하셨습니다.`
};

export const PHONE_NUMBER_MESSAGE = {
  DEFAULT: `번호를 입력해 주세요.`,
  ERROR_REGEXP: `형식에 맞지 않는 번호입니다.`,
  SUCCESS: `번호 입력이 완료 됬습니다.`
};
