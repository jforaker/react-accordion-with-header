import React from 'react';

import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel,
} from '../../src';

import './styles.css';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const data = DAYS.map((day, i) => ({
  day,
  low: Math.round(Math.random() * 85),
  high: Math.round(Math.random() * 120),
}));

export default class Beautiful extends React.Component {
  state = {
    active: [0],
  };
  render() {
    return (
      <div className="block">
        <h1>Beautiful</h1>

        <AccordionWithHeader
          active={this.state.active}
          actionCallback={(panels, state) => {
            this.setState({ ...state });
          }}
        >
          {data.map((item, i) => {
            const activeClass =
              !!this.state.active.length && this.state.active.includes(i)
                ? 'opened'
                : 'closed';
            return (
              <AccordionNode key={i}>
                <AccordionHeader
                  horizontalAlignment="spaceEvenly"
                  verticalAlignment="center"
                  className="accordion"
                  style={{ boxShadow: 'none', padding: 20 }}
                >
                  <div className="item day">{item.day}</div>
                  <div className="item low">low: {item.low}</div>
                  <div className="item low">high: {item.high}</div>
                  <div className={`item circle-plus ${activeClass}`}>
                    <div className="circle">
                      <div className="horizontal" />
                      <div className="vertical" />
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionPanel speed={400}>
                  <div className="content">
                    <p>
                      Rain likely. High near 45F. Winds NW at 10 to 20 mph.
                      Chance of rain 90%.
                    </p>
                    <p>
                      Rain or snow showers in the morning will give way to
                      partly cloudy skies in the afternoon. High 43F. Winds W at
                      5 to 10 mph. Chance of rain 30%.
                    </p>
                  </div>
                </AccordionPanel>
              </AccordionNode>
            );
          })}
        </AccordionWithHeader>
        <br />
      </div>
    );
  }
}
