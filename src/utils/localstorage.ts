const store = localStorage;

enum LOCAL_KEY {
  TOKEN = 'PACKBOX_TOKEN',
}

function set(key: string, value: string) {
  store.setItem(key, value);
}

function get(key: string) {
  return store.getItem(key);
}

function remove(key: string) {
  store.removeItem(key);
}

export function setToken(token: string) {
  set(LOCAL_KEY.TOKEN, token);
}

export function getToken() {
  return get(LOCAL_KEY.TOKEN);
}

export function removeToken() {
  remove(LOCAL_KEY.TOKEN);
}
