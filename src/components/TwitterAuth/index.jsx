import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { twitterAuth, isTwitterAuthenticated } from '../../libs/auth';

const styles = StyleSheet.create({
  icon: {
    height: '48px',
    width: '48px',
  },
});

const TwitterAuth = () => {
  if (isTwitterAuthenticated()) {
    return <div>Connected with Twitter</div>;
  }

  return (
    <svg className={css(styles.icon)} onClick={twitterAuth}>
      <use xlinkHref="#icon-twitter" />
    </svg>
  );
};

TwitterAuth.propTypes = {};

export default TwitterAuth;
