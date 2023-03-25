import { formatDetailsResponse, formatLabelsResponse } from "./dataHelper";
import { getAPI } from "./fetchWrapper";

export const fetchLabels = () => {
  return getAPI(`https://gmail.googleapis.com/gmail/v1/users/me/labels`)
  .then(res => formatLabelsResponse(res.labels));
}

export const fetchDetails = (messageId, category) => {
  const cache = JSON.parse(localStorage.getItem('detailsCache'));
  if(cache) {
    const data = cache[`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}?`];
    if(data) {
      return data;
    }
  }

  return getAPI(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}?`)
  .then(res => {
    const response = formatDetailsResponse(res, category);
    const cache = JSON.parse(localStorage.getItem('detailsCache')) || {};
    cache[`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}?`] = response;
    localStorage.setItem('detailsCache', JSON.stringify(cache));
    return response;
  });
}

export const fetchList = async (labelId) => {
  let queryString = 'maxResults=10';
  if (labelId) {
    queryString = `${queryString}&labelIds=${labelId}`;
  }
  const messageList = await getAPI(`https://gmail.googleapis.com/gmail/v1/users/me/messages?${queryString}`);
  const finalArr = [];
  const result = await messageList?.messages.map(async (m) => {
    const response = await fetchDetails(m?.id);
    return response;
  });
  return Promise.all(result).then(v => v);
}