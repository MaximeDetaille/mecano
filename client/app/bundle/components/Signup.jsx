import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { signupUser, authError } from '../actions/index';
import { Input, Button, Header } from '../common/index';
import { injectIntl } from 'react-intl';
import { defaultMessages } from '../../libs/i18n/default';

const sanitize = (field) => {
  const sanitized_field = field ? field.trim() : '';
  return sanitized_field
}
class Signup extends Component{
  componentWillMount(){
    this.props.authError({})
  }
  submit({ first_name, last_name, email, password, password_confirmation }, next_path){
    const creds = { first_name: sanitize(first_name),
                    last_name: sanitize(last_name),
                    email: sanitize(email) ,
                    password: sanitize(password),
                    password_confirmation: sanitize(password_confirmation) };
    this.props.signupUser(creds, next_path);
  }
  render(){
    const next_path = this.props.location.state ? this.props.location.state.from : null
    const { handleSubmit, errorMessages } = this.props;
    const { formatMessage } = this.props.intl;
    return (
      <div className="boxes-background">
        <Header>{formatMessage(defaultMessages.userSignup)}</Header>
        <div className="container">
          <br />
          <div className="row">
            <div className="col s12 m10 l8 offset-m1 offset-l2">
              <div className="box-shadow padded-50-except-top">
                <form onSubmit={handleSubmit(values => this.submit(values, next_path))}>
                  <div className="text-center padded-20">
                    <h5>{formatMessage(defaultMessages.userRegistration)}</h5>
                  </div>
                  <Input icon="perm_identity" name="first_name" label={formatMessage(defaultMessages.userFirstName)}  type="text" error={errorMessages["first_name"]} />
                  <Input icon="perm_identity" name="last_name" label={formatMessage(defaultMessages.userLastName)} type="text" error={errorMessages["last_name"]} />
                  <Input icon="email" name="email" label={formatMessage(defaultMessages.userEmail)} type="email" error={errorMessages["email"]} />
                  <Input icon="lock_outline" name="password" label={formatMessage(defaultMessages.userPassword)}  type="password" error={errorMessages["password"]} />
                  <Input icon="lock_outline" name="password_confirmation" label={formatMessage(defaultMessages.userPasswordConfirmation)} type="password" error={errorMessages["password_confirmation"]} />
                  <p className="red-text">{errorMessages.main}</p>
                  <Button fullWidth={true} icon="lock_open" type="submit">{formatMessage(defaultMessages.userSignup)}</Button>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center margin-bottom-20">
            <Link to={{ pathname: '/login', state: { from: next_path } }}>{formatMessage(defaultMessages.userAlreadyAccountMessage)}</Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signupUser, authError }, dispatch);
}

function mapStateToProps(state) {
  return {
    errorMessages: state.auth.errors
  }
}

Signup = reduxForm({
  form: 'signup' // a unique name for this form
})(connect(mapStateToProps, mapDispatchToProps)(Signup));

export default injectIntl(Signup) ;
