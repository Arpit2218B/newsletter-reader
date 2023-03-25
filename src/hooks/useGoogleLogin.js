/*
  PARAMS: 
    - clientId: google client id to initialize google client
    - scopes: defines the scpes required by the application
    - callback: the function called with the response from google login
  DESCRIPTION:
    - initializes google client and returns that which can be used to `request token`,
      `revoke_token` etc.

*/

import { useEffect, useState } from "react";

const useGoogleLogin = (clientId, scopes, callback) => {
  const [googleAuthClient, setGoogleAuthClient] = useState();
  const handleCallback = (data) => {
    localStorage.setItem('clientId', data.access_token);
    callback && typeof callback === 'function' && callback(data);
  }

  useEffect(() => {
    if(window.google) {
      const client = window?.google?.accounts?.oauth2?.initTokenClient({
        client_id: clientId,
        scope: scopes.join(' '),
        callback: (tokenResponse) => {
          handleCallback(tokenResponse);
        },
      });
      setGoogleAuthClient(client);
    }
    else {
      console.error('Error loading google client.');
    }
  }, []);
  return googleAuthClient;
}

export default useGoogleLogin;
