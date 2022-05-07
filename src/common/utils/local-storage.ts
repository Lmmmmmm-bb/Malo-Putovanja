import { StorageKeyEnum } from '../models/storage-key';

export const setLocalItem = (key: StorageKeyEnum, value: string) =>
  localStorage.setItem(key, value);

export const getLocalItem = (key: StorageKeyEnum) => {
  return localStorage.getItem(key) ?? '';
};

export const removeLocalItem = (key: StorageKeyEnum) => {
  const value = getLocalItem(key);
  localStorage.removeItem(key);
  return value;
};

export const clearLocalStorage = () => localStorage.clear();
