import { encode, decode } from 'js-base64';

export const formatLabelsResponse = (data) => {
  const filteredData = data.map(d => {
    if(d?.name?.includes('Newsletters/')) {
      return d?.name?.split('Newsletters/')?.[1];
    }
  });
  const finalData = filteredData.filter(f => f);
  return finalData;
}

export const formatDetailsResponse = (data) => {
  const finalData = {};
  console.log(data);
  finalData['date'] = getDate(data.internalDate);
  finalData['heading'] = getSubject(data?.payload?.headers);
  finalData['label'] = 'Kevin Powell';
  finalData['rawHTML'] = getBody(data?.payload?.parts);
  console.log(finalData);
  return finalData;
}

const getDate = (epoch) => {
  const d = new Date(0);
  d.setUTCSeconds(epoch/1000);
  return d.toDateString('dd MM YYYY');
}

const getSubject = (headers) => {
  const header = headers.filter(h => h.name === 'Subject');
  return header?.[0].value;
}

const getBody = (parts) => {
  const HTMLPart = parts.filter(p => p.mimeType === 'text/html');
  return decode(HTMLPart?.[0]?.body?.data);
}