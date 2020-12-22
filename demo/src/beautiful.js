import React, { useState } from 'react';

import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel,
} from '../../src';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const data = DAYS.map((day) => ({
  day,
  low: Math.round(Math.random() * 85),
  high: Math.round(Math.random() * 120),
}));

const Beautiful = () => {
  const [active, setActive] = useState([0]);

  return (
    <div className="block beautiful">
      <h1>Beautiful</h1>
      <AccordionWithHeader
        active={active}
        onChange={(active) => setActive(active)}
        multipleOkay={false}
      >
        {data.map((item, i) => {
          const activeClass =
            !!active.length && active.includes(i) ? 'opened' : 'closed';
          return (
            <AccordionNode key={i}>
              <AccordionHeader
                horizontalAlignment="spaceBetween"
                verticalAlignment="center"
                className="header"
                style={{
                  boxShadow: 'none',
                  padding: 20,
                }}
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
                    Rain likely. High near 45F. Winds NW at 10 to 20 mph. Chance
                    of rain 90%.
                  </p>
                  <p>
                    Rain or snow showers in the morning will give way to partly
                    cloudy skies in the afternoon. High 43F. Winds W at 5 to 10
                    mph. Chance of rain 30%.
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
};

export default Beautiful;
