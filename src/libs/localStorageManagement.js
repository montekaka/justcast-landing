const localStorageManagement = {};

localStorageManagement.getItem = (key) => {
  return localStorage.getItem(key);
}

localStorageManagement.setItem = (key, val) => {
  localStorage.setItem(key, val);
  return {[key]: val};
}

localStorageManagement.setItemWithDateValue = (key, val) => {
  const date = Date.now();
  localStorage.setItem(key, `${val}|${date}`);
  return {[key]: `${val}|${date}`};
}

localStorageManagement.getItemsToParams = (keys) => {
  const strings = keys.map((key) => `${key}=${localStorage.getItem(key)}`)
  return strings.join('&');
}

export default localStorageManagement;