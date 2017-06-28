import firebase from 'firebase';
import { getProvider as getFacebookProvider } from './facebookauth';
import { getProvider as getGoogleProvider } from './googleauth';
import { getProvider as getTwitterProvider } from './twitterauth';
import { isProviderAuthenticated } from './';

export const createUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const loginUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};

const doAuth = (email, password) => {
  const user = firebase.auth().currentUser;

  if (user) {
    const credentials = firebase.auth.EmailAuthProvider.credential(email, password);
    switch (user.providerData[0].providerId) {
      case 'facebook.com':
        user.reauthenticateWithPopup(getFacebookProvider());
        break;
      case 'google.com':
        user.reauthenticateWithPopup(getGoogleProvider());
        break;
      case 'twitter.com':
        user.reauthenticateWithPopup(getTwitterProvider());
        break;
      case 'password':
        user.reauthenticateWithCredential(credentials);
        break;
      default:
        //
    }
    user.linkWithCredential(credentials);
  } else {
    loginUser(email, password);
  }
};

export const emailRegister = (email, password) => {
  createUser(email, password);
};

export default (email, password) => {
  doAuth(email, password);
};

export const isEmailAuthenticated = () => isProviderAuthenticated('password');
