import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { googleAuth, isGoogleAuthenticated } from '../../libs/auth';

const styles = StyleSheet.create({
  icon: {
    height: '48px',
    width: '48px',
  },
});

const GoogleAuth = () => {
  if (isGoogleAuthenticated()) {
    return <div>Connected with Google</div>;
  }

  return (
    <svg className={css(styles.icon)} onClick={googleAuth}>
      <use xlinkHref="#icon-google" />
    </svg>
  );
};

GoogleAuth.propTypes = {};

export default GoogleAuth;
