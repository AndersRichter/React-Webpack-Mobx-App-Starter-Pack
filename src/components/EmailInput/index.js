import React from "react";

import s from './styles.css';

const EmailInput = (props) => {
  const { value, onChange } = props;

  return (
    <div className={ s.container }>
      <input value={ value } onChange={ onChange } name="email" type="email" />
    </div>
  )
};

export default EmailInput;
