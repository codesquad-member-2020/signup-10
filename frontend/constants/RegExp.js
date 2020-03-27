const RegExp = {
  ID: /^[0-9a-z_-]{5,20}$/,
  E_MAIL: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  PASSWORD: {
    SAFETY: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/,
    NUMBER: /[0-9]/g,
    UPPERCASE: /[A-Z]/g,
    LOWERCASE: /[a-z]/g,
    SPECIAL: /[~!@#$%^&*()_+|<>?:{}]/gi
  }
};

export default RegExp;
