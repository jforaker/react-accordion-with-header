import React from 'react';
import Skycons from 'react-skycons';

import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel
} from '../../src';

import './styles.css';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const SKYCONS = [
  'WIND',
  'CLEAR_DAY',
  'PARTLY_CLOUDY_DAY',
  'RAIN',
  'SLEET',
  'SNOW'
];

const data = DAYS.map((day, i) => ({
  day,
  low: Math.round(Math.random() * 85),
  high: Math.round(Math.random() * 120),
  skycon: SKYCONS[i]
}));

export default class Beautiful extends React.Component {
  state = {
    active: [0]
  };
  render() {
    return (
      <div className="block">
        <h1>Beautiful</h1>

        <AccordionWithHeader
          actionCallback={(panels, state) => this.setState({ ...state })}
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
                  <Skycons
                    color={'#de947f'}
                    icon={item.skycon}
                    autoplay={true}
                    style={{ width: 90 }}
                  />
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                    <p>
                      Aliquam feugiat ex lobortis tincidunt venenatis. Mauris in
                      neque diam. Mauris sodales pulvinar leo at molestie.
                      Maecenas quis elit libero. Nulla in erat leo.
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
