import { formatDetailsResponse, formatLabelsResponse } from "./dataHelper";
import { getAPI } from "./fetchWrapper";

export const fetchLabels = () => {
  return getAPI(`https://gmail.googleapis.com/gmail/v1/users/me/labels`)
  .then(res => formatLabelsResponse(res.labels));
}

export const fetchDetails = (messageId, category) => {
  return getAPI(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}?`)
  .then(res => formatDetailsResponse(res, category));
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