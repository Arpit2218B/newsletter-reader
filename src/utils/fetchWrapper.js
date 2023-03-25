import { EVENT_NAME } from './constants';

export const getAPI = (url) => {
  const access_token = localStorage.getItem('clientId');
  return fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${access_token}`,
    },
  })
  .then(res => res.json())
  .then(res => {
    if(res.error && res.error.code === 401) {
      localStorage.removeItem('clientId');
      localStorage.removeItem('filtersArr');
      const event = new Event(EVENT_NAME);
      window.dispatchEvent(event);
    }
    return res;
  });
}