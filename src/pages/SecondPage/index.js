import React from 'react';
import { Link } from "react-router-dom";
import Form from "components/SimpleForm";
import { routes } from "constants/routes";
import { useStores } from "hooks/useStores";
import { observer } from "mobx-react";

const SecondPage = () => {
  const { store: { Simple: { number, computedNumber } } } = useStores();

  return (
    <div>
      <h2>Second Page</h2>
      <Form />

      <div>
        { number } ---- { computedNumber }
      </div>

      <Link to={ routes.start }>Go to Start Page</Link>
    </div>
  )
};

export default observer(SecondPage);
