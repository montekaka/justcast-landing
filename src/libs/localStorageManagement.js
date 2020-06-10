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

localStorageManagement.getURLwithParams = (url, keys) => {
  const strings = [];
  for(let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = localStorage.getItem(key);

    if(val) {
      strings.push(`${key}=${val}`);
    }
  }
  const params = strings.join('&');

  if(strings.length > 0) {
    return `${url}?${params}`
  }
  return url;
}

export default localStorageManagement;