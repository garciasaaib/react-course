type User = {
  key: string;
  value: string;
}
type Key = {key:string}

export const storage = {
  save: ({ key, value }: User) => {
    return localStorage.setItem(key, value);
  },
  get: ({ key }: Key) => {
    return localStorage.getItem(key);
  },
}