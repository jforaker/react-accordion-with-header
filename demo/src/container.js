import React from 'react';

import './styles.css';

import Simple from './simple';
import Beautiful from './beautiful';
import Controlled from './controlled';

export default class Container extends React.Component {
  render() {
    return (
      <div className="demo">
        <Controlled {...this.props} />
        <Beautiful {...this.props} />
        <Simple />
      </div>
    );
  }
}
