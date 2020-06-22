import React, { useState } from "react";

import PasswordInput from "components/PasswordInput";
import EmailInput from "components/EmailInput";

import { sentData } from '../../api/sendData';

import s from './styles.css';

const MIN_PASS_LENGTH = 3;
const MAX_PASS_LENGTH = 20;

const Form = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const onEmailChange = event => {
    setEmailValue(event.target.value);
  };

  const onPasswordChange = event => {
    setPasswordValue(event.target.value);
  };

  const validateEmail = email => {
    const isEmail = email.indexOf('@');
    return isEmail !== -1;
  };

  const validatePassword = password => {
    console.log('password', password);

    const passLength = password.length;
    const passLengths = {
      less: false,
      more: false,
    };

    if (passLength < MIN_PASS_LENGTH) {
      passLengths.less = true;
    }

    if (passLength > MAX_PASS_LENGTH) {
      passLengths.more = true;
    }

    return passLengths;
  };

  const onSubmit = event => {
    event.preventDefault();
    event.persist();
    setFormSuccess('');
    setFormError('');

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (!email || !validateEmail(email)) {
      setFormError('Error with email');
    } else if (!password) {
      setFormError('Empty password');
    } else if (validatePassword(password).less) {
      setFormError(`Password must be more then ${MIN_PASS_LENGTH}`);
    } else if (validatePassword(password).more) {
      setFormError(`Password must be less then ${MAX_PASS_LENGTH}`);
    } else {
      const data = { email, password };
      sentData(data)
        .then(message => {
          setFormSuccess(message);
        })
        .catch(error => {
          setFormError(error);
        })
    }

    console.log(event.target, event.target.elements.email.value, event.target.elements.password.value);
  };

  return (
    <div className={ s.container }>
      <div className={ s.header }>
        Форма регистрации
      </div>
      <form onSubmit={ onSubmit }>
        <EmailInput value={ emailValue } onChange={ onEmailChange } />
        <PasswordInput value={ passwordValue } onChange={ onPasswordChange } />

        {formError && (
          <div className={ s.error }>{ formError }</div>
        )}

        {formSuccess && (
          <div className={ s.success }>{ formSuccess }</div>
        )}

        <button type="submit">Отправить</button>
      </form>
    </div>
  )
};

export default Form;
