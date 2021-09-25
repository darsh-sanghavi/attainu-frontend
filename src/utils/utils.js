const checkReferenceType = (value) => {
  if (value) {
    return typeof value === "object" || typeof value === "function";
  }
  return false;
};

export const checkValidEmail = (email) => {
  if (email) {
    // Credits - https://stackoverflow.com/a/46181/7452548
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(email.toString().toLowerCase());
  }
  return false;
};

export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key.toString()));
};

export const setInLocalStorage = (key, value) => {
  if (!checkReferenceType(key) && value) {
    if (checkReferenceType(value)) {
      localStorage.setItem(key.toString(), JSON.stringify(value));
    } else {
      localStorage.setItem(key.toString(), value.toString());
    }
  }
};

export const clearLocalStorage = () => {
  localStorage.clear();
};