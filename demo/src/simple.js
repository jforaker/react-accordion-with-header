import React from 'react';

import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel,
} from '../../src';

import './styles.css';

export const Header = ({ item }) => (
  <h3 style={{ color: '#0b5e73' }}>My Header #{item + 1}</h3>
);

export class Body extends React.Component {
  render() {
    return (
      <div style={{ padding: 10 }}>
        <h4>This is some interesting content</h4>
        <p>And this is an interesting description of said content.</p>
      </div>
    );
  }
}

export default () => (
  <div className="block">
    <h1>Simple (defaults)</h1>
    <AccordionWithHeader>
      {Array.from({ length: 3 }).map((item, i) => {
        return (
          <AccordionNode key={i}>
            <AccordionHeader>
              <Header item={i} />
            </AccordionHeader>
            <AccordionPanel>
              <Body />
            </AccordionPanel>
          </AccordionNode>
        );
      })}
    </AccordionWithHeader>
  </div>
);
