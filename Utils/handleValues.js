import * as SecureStore from "expo-secure-store";

function save(key, value) {
  SecureStore.setItem(key, value);
}

function getValueFor(key) {
  let result = SecureStore.getItem(key);
  if (result) {
    return result;
  } else {
    return null;
  }
}

export { save, getValueFor };
