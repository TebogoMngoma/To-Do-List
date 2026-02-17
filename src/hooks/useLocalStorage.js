import { useState, useEffect } from 'react';

/**
 * Custom hook to sync state with localStorage
 * @param {string} key - The key to store the value under in localStorage
 * @param {any} initialValue - The initial value to use if no value is found in localStorage
 */
export const useLocalStorage = (key, initialValue) => {
  // Get initial state from localStorage or use initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Update localStorage whenever storedValue changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
