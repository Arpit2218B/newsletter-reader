import { formatDetailsResponse, formatLabelsResponse } from "./dataHelper";
import { getAPI } from "./fetchWrapper";

export const fetchLabels = () => {
  return getAPI(`https://gmail.googleapis.com/gmail/v1/users/me/labels`, true)
  .then(res => formatLabelsResponse(res.labels));
}

export const fetchDetails = (messageId, category) => {
  return getAPI(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}?`, true)
  .then(res => {
    const response = formatDetailsResponse(res, category);
    return response;
  });
}

export const fetchList = async (labelId, pageToken) => {
  let queryString = 'maxResults=10';
  if (labelId) {
    queryString = `${queryString}&labelIds=${labelId}`;
  }
  if (pageToken) {
    queryString = `${queryString}&pageToken=${pageToken}`;
  }
  const messageList = await getAPI(`https://gmail.googleapis.com/gmail/v1/users/me/messages?${queryString}`, true);
  const finalArr = [];
  const result = await messageList?.messages.map(async (m) => {
    const response = await fetchDetails(m?.id);
    return response;
  });
  return Promise.all(result).then(v => {
    return {
      data: v,
      nextToken: messageList.nextPageToken,
    }
  });
}

export const markAsRead = (messageId) => {
  const access_token = localStorage.getItem('clientId');
  return fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}/modify`, {
    method: 'POST',
    body: JSON.stringify({
      "removeLabelIds": [
        "UNREAD"
      ]
    }),
    headers: {
      "Authorization": `Bearer ${access_token}`,
    },
  })
  .then(() => {
    const cache = JSON.parse(localStorage.getItem('apiCache')) || {};
    const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}?`;
    delete cache[url];
    localStorage.setItem('apiCache', JSON.stringify(cache));
  })
}