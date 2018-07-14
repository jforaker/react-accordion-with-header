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
  'The jury decided. I presided.',
  'Assumption is the mother of all f*ck-ups!',
  `You've got 5 seconds... and 3 are up.`
];

const createMarkup = props => {
  return {
    __html: `
  <h1><pre><code>&lt;AccordionHeader 
  title={${props.title ? props.title.toString() : null}} 
  titleColor={${props.titleColor.toString()}} 
  horizontalAlignment={${props.horizontalAlignment.toString()}} 
  verticalAlignment={${props.verticalAlignment.toString()}} &#47;&gt;</pre></code></h1>`
  };
};

export default class AccordionHeaderOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentWillMount() {
    let images = [];
    [1, 2, 3, 4, 5].forEach((item, i) => {
      images.push(`http://www.stevensegallery.com/200/20${i}`);
    });
    this.setState({ images: images });
  }

  actionCallback(panels) {
    console.log('panels', panels);
  }

  render() {
    return (
      <div>
        <div>
          <div dangerouslySetInnerHTML={createMarkup(this.props)} />
        </div>
        <AccordionWithHeader
          className="my-accordion"
          actionCallback={this.actionCallback.bind(this)}
        >
          {quotes.map((quote, i) => {
            return (
              <AccordionNode key={i} className="accordion-node">
                <AccordionHeader
                  className="accordion-header"
                  title={this.props.title}
                  titleColor={this.props.titleColor}
                  horizontalAlignment={this.props.horizontalAlignment}
                  verticalAlignment={this.props.verticalAlignment}
                >
                  <div>
                    <img src={this.state.images[i]} width="85" />
                  </div>
                  <h4>
                    <code>
                      horizontalAlignment="{this.props.horizontalAlignment}"
                    </code>
                  </h4>
                  <h4>
                    <code>
                      verticalAlignment="{this.props.verticalAlignment}"
                    </code>
                  </h4>
                </AccordionHeader>
                <AccordionPanel className="my-panel" speed={350}>
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
