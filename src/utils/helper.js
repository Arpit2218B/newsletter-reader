import { EVENT_NAME } from "./constants";

export const logout = () => {
  localStorage.removeItem('clientId');
  localStorage.removeItem('filtersArr');
  localStorage.removeItem('apiCache');
  const event = new Event(EVENT_NAME);
  window.dispatchEvent(event);
};
