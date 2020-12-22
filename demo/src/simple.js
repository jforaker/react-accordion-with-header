import React from 'react';

import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel,
} from '../../src';

const Header = ({ item }) => <h5>My Header #{item + 1}</h5>;

const Body = (props) => {
  return (
    <div style={{ padding: 10 }}>
      <p>This is some interesting content</p>
      <p>And this is an interesting description of said content.</p>
    </div>
  );
};

export default () => (
  <div className="block simple">
    <h2>Simple</h2>
    <p className="lead">(uncontrolled with defaults)</p>
    <AccordionWithHeader className="simple-panel">
      {Array.from({ length: 3 }).map((_, i) => {
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
    <hr className="my-1" />
  </div>
);
