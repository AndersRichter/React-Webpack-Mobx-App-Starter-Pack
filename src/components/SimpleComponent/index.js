import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react'
import { useHistory } from "react-router";
import { routes } from "constants/routes";
import Cross from 'icons/cross.svg';

import { useStores } from "hooks/useStores";

import s from './styles.styl';

const SimpleComponent = (props) => {
  const { text } = props;
  const history = useHistory();

  const { store: { Simple: { number, computedNumber, plusNumber, minusNumber } } } = useStores();

  const handleClickButton = () => {
    history.push(routes.second);
  };

  return (
    <div>
      SimpleComponent { text }
      <button onClick={ handleClickButton }>Go to Second Page</button>
      <Cross className={ s.cross } />

      <div>
        { number } ---- { computedNumber }
        <button onClick={ plusNumber }>+</button>
        <button onClick={ minusNumber }>-</button>
      </div>
    </div>
  )
};

SimpleComponent.propTypes = {
  text: PropTypes.string,
};

export default observer(SimpleComponent);
