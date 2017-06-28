import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { emailAuth, emailRegister, isAuthenticated, isEmailAuthenticated } from '../../libs/auth';

const styles = StyleSheet.create({
  inputField: {
    height: '32px',
    width: '200px',
    padding: '6px',
  },
  buttonField: {
    border: 0,
    height: '32px',
    width: '100px',
    padding: '6px',
  },
});

class EmailAuth extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.doEmailAuth = this.doEmailAuth.bind(this);
    this.doEmailRegister = this.doEmailRegister.bind(this);
  }

  doEmailAuth() {
    emailAuth(this.state.email, this.state.password);
  }

  doEmailRegister() {
    emailRegister(this.state.email, this.state.password);
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (isEmailAuthenticated()) {
      return <div>Connected with Email</div>;
    }

    let register = null;
    if (isAuthenticated() === false) {
      register = <input className={css(styles.buttonField)} type="submit" value="Register" onClick={this.doEmailRegister} />;
    }

    return (
      <div>
        <input className={css(styles.inputField)} type="email" onChange={this.handleEmail} />
        <input className={css(styles.inputField)} type="password" onChange={this.handlePassword} />
        {register}
        <input className={css(styles.buttonField)} type="submit" value="Login" onClick={this.doEmailAuth} />
      </div>
    );
  }

}

export default EmailAuth;
