export const BASE_URL = "http://localhost:3000/";

export function checkResult(res) {
  return (res.ok ? res.json() : Promise.reject('Error!' + res.statusText));
}
