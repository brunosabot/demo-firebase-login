import firebase from 'firebase';
import { doAuthPopup, doAuthRedirect, isProviderAuthenticated } from './';

let provider = false;

export const getProvider = () => {
  if (provider === false) {
    provider = new firebase.auth.FacebookAuthProvider();
  }

  return provider;
};

export default (popup = false) => {
  if (popup) {
    doAuthPopup(getProvider());
  } else {
    doAuthRedirect(getProvider());
  }
};

export const isFacebookAuthenticated = () => isProviderAuthenticated('facebook.com');
