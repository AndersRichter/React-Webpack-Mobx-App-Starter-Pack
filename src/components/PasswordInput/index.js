import React from "react";

import s from "./styles.css";

const PasswordInput = (props) => {
  const { value, onChange } = props;

  return (
    <div className={ s.container }>
      <input value={ value } onChange={ onChange } name="password" type="password" />
    </div>
  )
};

export default PasswordInput;
