import firebase from 'firebase';
import { doAuthPopup, doAuthRedirect, isProviderAuthenticated } from './';

let provider = false;

export const getProvider = () => {
  if (provider === false) {
    provider = new firebase.auth.TwitterAuthProvider();
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

export const isTwitterAuthenticated = () => isProviderAuthenticated('twitter.com');
