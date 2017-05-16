/* eslint-disable quotes */
import React from 'react';
import { AccordionWithHeader, AccordionNode, AccordionHeader, AccordionPanel } from '../../src';

const quotes = [
  'The jury decided. I presided.',
  'Assumption is the mother of all f*ck-ups!',
  `You've got 5 seconds... and 3 are up.`
];

const rando = () => (Math.floor(Math.random() * 5) + 1);

export default class DefaultOptions extends React.Component {

  render() {
    return (
      <div>
        <AccordionWithHeader>
          {quotes.map((quote, i) => {
            return (
              <AccordionNode key={i}>
                <AccordionHeader>
                  <div>
                    <img src={`http://www.stevensegallery.com/75/7${rando()}`}/>
                  </div>
                  <h4><code>horizontalAlignment="centerSpaceAround"</code></h4>
                  <h4><code>verticalAlignment="center"</code></h4>
                </AccordionHeader>
                <AccordionPanel>
                  <div style={{ textAlign: 'center', height: 320 }}>
                    <div>
                      <h2>{quote}!</h2>
                    </div>
                    <img style={{ marginBottom: 10 }} src={`http://www.stevensegallery.com/200/20${rando()}`}/>
                  </div>
                </AccordionPanel>
              </AccordionNode>
            );
          })}
        </AccordionWithHeader>
      </div>
    )
  }
}
