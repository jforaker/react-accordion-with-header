import React from 'react';

import Simple from './simple';
import Beautiful from './beautiful';
import Controlled from './controlled';
import Dynamic from './dynamic';

const Container = (props) => {
  return (
    <div className="demo">
      <Controlled {...props} />
      <Beautiful />
      <Simple />
      <Dynamic />
    </div>
  );
};

export default Container;
