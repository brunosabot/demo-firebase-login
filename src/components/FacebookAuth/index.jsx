import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { facebookAuth, isFacebookAuthenticated } from '../../libs/auth';

const styles = StyleSheet.create({
  icon: {
    height: '48px',
    width: '48px',
  },
});

const FacebookAuth = () => {
  if (isFacebookAuthenticated()) {
    return <div>Connected with Facebook</div>;
  }

  return (
    <svg className={css(styles.icon)} onClick={facebookAuth}>
      <use xlinkHref="#icon-facebook" />
    </svg>
  );
};

FacebookAuth.propTypes = {};

export default FacebookAuth;
