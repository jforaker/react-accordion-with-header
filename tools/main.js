/* eslint-disable quotes */
import React from 'react';
import {render} from 'react-dom';
import {AccordionWithHeader, AccordionNode, AccordionHeader, AccordionPanel} from '../src/index';

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
  <AccordionWithHeader>
    {quotes.map((quote, i) => {
      return (
        <AccordionNode key={i} className="custom-classname">

          <AccordionHeader className="foobar-header"
                           title={null}
                           titleColor="#607D8B"
                           horizontalAlignment={alignment[i]}
                           verticalAlignment="center">
            <div>
              <img src={`http://www.stevensegallery.com/100/10${i + (Math.floor(Math.random() * 5) + 1)}`}/>
            </div>
            <h2><code>horizontalAlignment="{alignment[i]}"</code></h2>
            <div>
              <img src={`http://www.stevensegallery.com/100/10${i + (Math.floor(Math.random() * 5) + 1)}`}/>
            </div>

          </AccordionHeader>

          <AccordionPanel>
            <div style={{textAlign: 'center', height: 300}}>
              <div>
                <h2>{quote}!</h2>
              </div>
              <img style={{marginBottom: 10}} src={`http://www.stevensegallery.com/200/20${i + (Math.floor(Math.random() * 5) + 1)}`}/>
            </div>
          </AccordionPanel>

        </AccordionNode>
      );
    })}
  </AccordionWithHeader>,
  document.getElementById('app')
);
