import firebase from 'firebase';
import emailAuth, { emailRegister, isEmailAuthenticated } from './emailauth';
import googleAuth, { isGoogleAuthenticated } from './googleauth';
import facebookAuth, { isFacebookAuthenticated } from './facebookauth';
import twitterAuth, { isTwitterAuthenticated } from './twitterauth';

let authenticated = false;

const handleAuthError = () => {};

const handleAuthSuccess = () => {};

const getRedirectResult = () => {
  firebase.auth().getRedirectResult()
    .then(handleAuthSuccess)
    .catch(handleAuthError);
};

const checkAuthStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authenticated = user;
    }
  });
};

const getAuthMethod = (popup = 'Popup') => {
  const auth = firebase.auth();
  const user = auth.currentUser;

  return user ? user[`linkWith${popup}`].bind(user) : auth[`signInWith${popup}`].bind(auth);
};

const doAuth = (method, provider) => {
  method(provider)
    .then(handleAuthSuccess)
    .catch(handleAuthError);
};

export const doAuthPopup = (provider) => {
  doAuth(getAuthMethod('Popup'), provider);
};

export const doAuthRedirect = (provider) => {
  doAuth(getAuthMethod('Redirect'), provider);
};

export const isAuthenticated = () => !!authenticated;

export const isProviderAuthenticated = (network) => {
  const auth = firebase.auth();
  const user = auth.currentUser;

  if (user && user.providerData) {
    return user.providerData.some(e => e.providerId === network);
  }

  return false;
};

export {
  emailAuth, googleAuth, facebookAuth, twitterAuth,
  isGoogleAuthenticated, isFacebookAuthenticated, isTwitterAuthenticated, isEmailAuthenticated,
  emailRegister,
};

getRedirectResult();
checkAuthStatus();
