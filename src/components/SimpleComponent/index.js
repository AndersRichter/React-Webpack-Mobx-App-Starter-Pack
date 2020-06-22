import React from 'react';

const SimpleComponent = (props) => {
  const { text } = props;

  return (
    <div>
      SimpleComponent { text }
    </div>
  )
};

export default SimpleComponent;
