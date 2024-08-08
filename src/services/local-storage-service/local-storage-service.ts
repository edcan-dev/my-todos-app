export function getFromLocalStorage(key: string) {
  if(window) {
    return localStorage.getItem(key) != null
    ? localStorage.getItem(key)
    : null
  }
  return null;
}
export function deleteAndSetItemInLocalStorage(key: string, value: string) {
  if(window) {
    localStorage.removeItem(key);
    localStorage.setItem(key, value);  
  }
}
export function deleteItemInLocalStorage(key: string) {
  if(window) {
    localStorage.removeItem(key);
  }
}