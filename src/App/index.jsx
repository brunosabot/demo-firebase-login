import React from 'react';
import firebase from 'firebase';

import EmailAuth from '../components/EmailAuth';
import GoogleAuth from '../components/GoogleAuth';
import FacebookAuth from '../components/FacebookAuth';
import TwitterAuth from '../components/TwitterAuth';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  render() {
    return (
      <div className="App">
        <EmailAuth />
        <GoogleAuth />
        <FacebookAuth />
        <TwitterAuth />
      </div>
    );
  }

}

export default App;
