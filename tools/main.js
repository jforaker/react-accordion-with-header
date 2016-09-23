/* eslint-disable quotes */
import React from 'react';
import { render } from 'react-dom';
import { AccordionWithHeader, AccordionNode, AccordionHeader, AccordionPanel } from '../src/index';

const quotes = [
  'This maniac should be wearing a number, not a badge.',
  'So, what are you, like some special forces guy?',
  'The jury decided. I presided.',
  'Assumption is the mother of all f*ck-ups!',
  `You've got 5 seconds... and 3 are up.`
];

const alignment = [
  'centerSpaceBetween', 'centerSpaceAround', 'center', 'left', 'right'
];

render(
  <AccordionWithHeader multipleOkay={false} firstOpen className="my-accordion">
    {quotes.map((quote, i) => {
      return (
        <AccordionNode key={i} className="accordion-node">

          <AccordionHeader className="accordion-header"
                           title={null}
                           titleColor="#607D8B"
                           horizontalAlignment={alignment[i]}
                           verticalAlignment="center">
            <div>
              <img src={`http://www.stevensegallery.com/75/7${(Math.floor(Math.random() * 5) + 1)}`}/>
            </div>
            <h2><code>horizontalAlignment="{alignment[i]}"</code></h2>
            <div>
              <img src={`http://www.stevensegallery.com/75/7${(Math.floor(Math.random() * 5) + 1)}`}/>
            </div>

          </AccordionHeader>

          <AccordionPanel className="my-panel" speed={350}>
            <div style={{textAlign: 'center',height:320}}>
              <div>
                <h2>{quote}!</h2>
              </div>
              <img style={{marginBottom: 10}} src={`http://www.stevensegallery.com/200/20${(Math.floor(Math.random() * 5) + 1)}`}/>
            </div>
          </AccordionPanel>

        </AccordionNode>
      );
    })}
  </AccordionWithHeader>,
  document.getElementById('app')
);
