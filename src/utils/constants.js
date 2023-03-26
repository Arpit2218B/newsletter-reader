export const EVENT_NAME = 'loggedIn';
export const SCOPES = [
  'https://www.googleapis.com/auth/gmail.labels',
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/gmail.modify',
  'https://mail.google.com/',
];

export const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;