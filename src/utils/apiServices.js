import { formatDetailsResponse, formatLabelsResponse } from "./dataHelper";
import { getAPI } from "./fetchWrapper";

export const fetchLabels = () => {
  return getAPI(`https://gmail.googleapis.com/gmail/v1/users/me/labels`)
  .then(res => formatLabelsResponse(res.labels));
}

export const fetchDetails = (messageId, category) => {
  return getAPI(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}?`, true)
  .then(res => {
    const response = formatDetailsResponse(res, category);
    return response;
  });
}

export const fetchList = async (labelId) => {
  let queryString = 'maxResults=10';
  if (labelId) {
    queryString = `${queryString}&labelIds=${labelId}`;
  }
  const messageList = await getAPI(`https://gmail.googleapis.com/gmail/v1/users/me/messages?${queryString}`, true);
  const finalArr = [];
  const result = await messageList?.messages.map(async (m) => {
    const response = await fetchDetails(m?.id);
    return response;
  });
  return Promise.all(result).then(v => v);
}