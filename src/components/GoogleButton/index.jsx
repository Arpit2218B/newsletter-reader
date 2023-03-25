import React, { useEffect } from 'react';
import useGoogleLogin from '../../hooks/useGoogleLogin';
import useWatchLocalStorage from '../../hooks/useLocalStorage';
import './GoogleButton.css';
import { CLIENT_ID, EVENT_NAME, SCOPES } from '../../utils/constants';

const callback = (data) => {
  const e = new Event(EVENT_NAME);
  window.dispatchEvent(e);
}

const GoogleButton = () => {
  const googleAuthClient = useGoogleLogin(CLIENT_ID, SCOPES, callback);
  
  const handleLogin = () => {
    googleAuthClient.requestAccessToken();
  }

  return (
    <div id="googleButton">
      <button type="button" className='google__button' onClick={handleLogin}>
        Sign in with Google
      </button>
    </div>
  )
}

export default GoogleButton;