import { logout } from './helper';

export const getAPI = (url, shouldCache = false) => {
  if(shouldCache) {
    const cache = JSON.parse(localStorage.getItem('apiCache'));
    if(cache) {
      const data = cache[url];
      if(data) {
        return new Promise((resolve, reject) => resolve(data));
      }
    }
  }

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
      logout();
      return;
    }

    if(shouldCache) {
      const cache = JSON.parse(localStorage.getItem('apiCache')) || {};
      cache[url] = res;
      localStorage.setItem('apiCache', JSON.stringify(cache));
    }
    return res;
  });
}