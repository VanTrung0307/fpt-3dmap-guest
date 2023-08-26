// localStorageService.js

// Read an item from localStorage
export const readLocalStorage = (key) => {
    return localStorage.getItem(key);
  };
  
  // Write an item to localStorage
  export const writeLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };
  
  // Remove an item from localStorage
  export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
  };
  