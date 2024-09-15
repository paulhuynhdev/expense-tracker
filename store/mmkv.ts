import { StateStorage } from 'zustand/middleware';
const storage: Record<string, string> = {};

export const zustandStorage: StateStorage = {
  setItem: (name: string, value: string) => {
    storage[name] = value;
  },
  getItem: (name: string) => {
    return storage[name] ?? null;
  },
  removeItem: (name: string) => {
    delete storage[name];
  },
};
