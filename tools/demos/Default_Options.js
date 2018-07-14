/* eslint-disable quotes */
import React from 'react';
import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel
} from '../../src';

const quotes = [
  'The jury decided. I presided.',
  'Assumption is the mother of all f*ck-ups!',
  `You've got 5 seconds... and 3 are up.`
];

export default class DefaultOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentWillMount() {
    let images = [];
    [1, 2, 3].forEach((item, i) => {
      images.push(`http://www.stevensegallery.com/200/20${i}`);
    });
    this.setState({ images: images });
  }

  render() {
    return (
      <div>
        <AccordionWithHeader>
          {quotes.map((quote, i) => {
            return (
              <AccordionNode key={i}>
                <AccordionHeader>
                  <div>
                    <img width={80} src={this.state.images[i]} />
                  </div>
                  <h4>
                    <code>horizontalAlignment="centerSpaceAround"</code>
                  </h4>
                  <h4>
                    <code>verticalAlignment="center"</code>
                  </h4>
                </AccordionHeader>
                <AccordionPanel>
                  <div style={{ textAlign: 'center', height: 320 }}>
                    <div>
                      <h2>{quote}!</h2>
                    </div>
                    <img width={200} src={this.state.images[i]} />
                  </div>
                </AccordionPanel>
              </AccordionNode>
            );
          })}
        </AccordionWithHeader>
      </div>
    );
  }
}
