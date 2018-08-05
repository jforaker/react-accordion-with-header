import React from 'react';

import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel
} from '../../src';

import './styles.css';

export const HeaderTpl = () => <h3 style={{ color: '#0b5e73' }}>My Header</h3>;
export class BodyTpl extends React.Component {
  render() {
    return (
      <div>
        <h3>Praesent eget dignissim leo, at sodales dui.</h3>
        <p>
          Sed non congue mi. Ut dignissim pellentesque efficitur. Sed volutpat
          mollis risus, in pulvinar dolor dapibus at.
        </p>
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
              <HeaderTpl />
            </AccordionHeader>
            <AccordionPanel>
              <BodyTpl />
            </AccordionPanel>
          </AccordionNode>
        );
      })}
    </AccordionWithHeader>
  </div>
);
