import { formatDetailsResponse, formatLabelsResponse } from "./dataHelper";
import { getAPI } from "./fetchWrapper";

export const fetchLabels = () => {
  return getAPI(`https://gmail.googleapis.com/gmail/v1/users/me/labels`)
  .then(res => formatLabelsResponse(res.labels));
}

export const fetchDetails = () => {
  return getAPI(`https://gmail.googleapis.com/gmail/v1/users/me/messages/18669c51073a3593?`)
  .then(res => formatDetailsResponse(res));
}