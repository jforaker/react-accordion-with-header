/* eslint-disable quotes */
import React from 'react';
import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel
} from '../../src';

const quotes = [
  'This maniac should be wearing a number, not a badge.',
  'So, what are you, like some special forces guy?',
  'The jury decided. I presided.'
];

const alignment = [
  'centerSpaceBetween',
  'centerSpaceAround',
  'center',
  'left',
  'right'
];

const createMarkup = props => {
  return {
    __html: `<h1><pre><code>&lt;AccordionWithHeader 
    multipleOkay={${props.multipleOkay.toString()}} 
    firstOpen={${props.firstOpen.toString()}} 
    isOpen={${props.isOpen ? props.isOpen.toString() : 'undefined'}} 
    actionCallback={myFunction} &#47;&gt;</pre></code></h1>`
  };
};

export default class AccordionWithHeaderOptions extends React.Component {
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

  actionCallback = panels => {
    console.log('panels: ', panels);
  };

  render() {
    return (
      <div>
        <div>
          <div dangerouslySetInnerHTML={createMarkup(this.props)} />
        </div>
        <AccordionWithHeader
          multipleOkay={this.props.multipleOkay}
          firstOpen={this.props.firstOpen}
          isOpen={this.props.isOpen}
          actionCallback={this.actionCallback}
          className="my-accordion"
        >
          {quotes.map((quote, i) => {
            return (
              <AccordionNode key={i} className="accordion-node">
                <AccordionHeader
                  className="accordion-header"
                  title={null}
                  titleColor="#607D8B"
                  horizontalAlignment={alignment[i]}
                  verticalAlignment="center"
                >
                  <div>
                    <img src={this.state.images[i]} width="85" />
                  </div>
                  <h4>
                    <code>horizontalAlignment="{alignment[i]}"</code>
                  </h4>
                  <div>
                    <img src={this.state.images[i]} width="85" />
                  </div>
                </AccordionHeader>
                <AccordionPanel className="my-panel" speed={350}>
                  <div style={{ textAlign: 'center', padding: 20 }}>
                    <h2>{quote}</h2>
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
