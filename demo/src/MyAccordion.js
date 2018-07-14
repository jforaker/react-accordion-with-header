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

const verticalAlignment = ['top', 'center', 'bottom'];

const boxStyle = {
  border: '1px solid #ddd',
  margin: '0 2px 0 2px',
  padding: 5
};

const MarkUp = ({ multipleOkay, active }) => {
  let obj = {
    __html: `<pre><code>&lt;AccordionWithHeader 
    multipleOkay={${multipleOkay && multipleOkay.toString()}} 
    active={[${active ? active.toString() : ''}]} 
    actionCallback={myFunction} &#47;&gt;</pre></code>`
  };
  return <div dangerouslySetInnerHTML={obj} />;
};

export default class MyAccordion extends React.Component {
  state = {
    images: []
  };
  componentWillMount() {
    let images = [1, 2, 3].map(
      i => `http://www.stevensegallery.com/200/20${i}`
    );
    this.setState({ images });
  }

  actionCallback = (panels, state) => {
    console.log('actionCallback: panels, state: ', panels, state);
    this.props.setActionCallback(state);
  };

  render() {
    return (
      <div>
        <MarkUp {...this.props} />
        <AccordionWithHeader
          {...this.props}
          actionCallback={this.actionCallback}
        >
          {quotes.map((quote, i) => {
            return (
              <AccordionNode key={i}>
                <AccordionHeader
                  horizontalAlignment={alignment[i]}
                  verticalAlignment={verticalAlignment[i]}
                >
                  <img src={this.state.images[i]} width="85" />
                  <h6 style={{ ...boxStyle }}>
                    <code>horizontalAlignment="{alignment[i]}"</code>
                  </h6>
                  <h6 style={{ ...boxStyle }}>
                    <code>
                      verticalAlignment="{verticalAlignment[i] || 'center'}"
                    </code>
                  </h6>
                  <img src={this.state.images[i]} width="85" />
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
