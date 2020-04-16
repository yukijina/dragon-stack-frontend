import React, {  Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import AuthForm from './AuthForm';

class Root extends Component {
  render() {
    return (
      //logged in after signup
      this.props.account.loggedIn ? <Home /> : <AuthForm />
    )
  }
}

//account from store
export default connect(({ account }) => ({ account}), null)(Root);