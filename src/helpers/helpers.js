export const setItem = (key, value) => {
  try {
    return localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    return  false
  }
}


export const removeItem = (key) => {
  try {
    return localStorage.removeItem(key);
  } catch (e) {
    return  false
  }
}

export const clearLocalStorage = () => {
  try {
    return localStorage.clear();
  } catch (e) {
    return false;
  }
}


export const getItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return  JSON.parse(item);
  } catch (e) {
    return false;
  }
}


export function* generator () {
    let id = 1;
  while (true) {
    id++;
    yield (Math.random() + id).toString(36).substring(7);
  }
}
