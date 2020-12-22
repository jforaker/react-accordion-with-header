import React from 'react';

import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel,
} from '../../src';

import { Code } from './components';

const quotes = [
  'This maniac should be wearing a number, not a badge.',
  'So, what are you, like some special forces guy?',
  'The jury decided. I presided.',
];

const alignment = [
  'centerSpaceBetween',
  'centerSpaceAround',
  'center',
  'left',
  'right',
];

const verticalAlignment = ['top', 'center', 'bottom'];

const MarkUp = ({ active }) => (
  <Code
    code={`
  <AccordionWithHeader 
    multipleOkay={true} 
    active={[${active ? active.toString() : ''}]} 
    onChange={(panels) => console.log(panels)}
  >
    //... panels etc
  </AccordionWithHeader>
`}
  />
);

const images = [1, 2, 3].map(
  (i) => `http://www.stevensegallery.com/200/20${i}`
);

export default function Controlled(props) {
  return (
    <div className="block controlled">
      <h3>
        <em>Controlled</em>
      </h3>
      <p>
        In this exampe, the &lt;AccordionWithHeader &#47;&gt; recieves a dynamic
        array as the active prop
      </p>

      <div className="block">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <MarkUp {...props} />
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="btn-container">
              <button
                className="btn btn-outline-primary"
                onClick={() => props.toggleRandom()}
              >
                toggle random
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => props.toggle(0)}
              >
                toggle first
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => props.toggle(1)}
              >
                toggle second
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => props.toggle(2)}
              >
                toggle third
              </button>
            </div>
          </div>
        </div>

        <AccordionWithHeader
          className="steves-panel"
          active={props.active}
          multipleOkay={true}
          onChange={props.handleOnChange}
        >
          {quotes.map((quote, i) => {
            return (
              <AccordionNode key={i}>
                <AccordionHeader
                  horizontalAlignment={alignment[i]}
                  verticalAlignment={verticalAlignment[i]}
                >
                  <img src={images[i]} width="70" />
                  <div className="box only-large">
                    <code>horizontalAlignment="{alignment[i]}"</code>
                  </div>
                  <div className="box only-large">
                    <code>verticalAlignment="{verticalAlignment[i]}"</code>
                  </div>
                  <div className="only-small">
                    <code>
                      horizontalAlignment="{alignment[i]}"
                      <br />
                      verticalAlignment="{verticalAlignment[i]}"
                    </code>
                  </div>
                </AccordionHeader>
                <AccordionPanel speed={250}>
                  <div className="my-panel">
                    <h5>{quote}</h5>
                    <img width={150} src={images[i]} alt="steve" />
                  </div>
                </AccordionPanel>
              </AccordionNode>
            );
          })}
        </AccordionWithHeader>
      </div>

      <hr className="my-4" />
    </div>
  );
}
