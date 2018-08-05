import React from 'react';

import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel
} from '../../src';

import './styles.css';

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

const MarkUp = ({ multipleOkay, active }) => {
  let html = {
    __html: `<pre><code>&lt;AccordionWithHeader 
    multipleOkay={${multipleOkay && multipleOkay.toString()}} 
    active={[${active ? active.toString() : ''}]} 
    actionCallback={(panels, state) => console.log(panels, state)} &#47;&gt;</pre></code>`
  };
  return <div dangerouslySetInnerHTML={html} />;
};

export default class Controlled extends React.Component {
  state = {
    images: []
  };

  componentWillMount() {
    let images = [1, 2, 3].map(
      i => `http://www.stevensegallery.com/200/20${i}`
    );
    this.setState({ images });
  }

  render() {
    return (
      <div className="block">
        <h1>Controlled</h1>
        <p>
          In this exampe, the &lt;AccordionWithHeader &#47;&gt; recieves an
          array in the active prop
        </p>
        <button className="btn btn-info" onClick={() => this.props.toggle()}>
          toggle active: {`[ ${this.props.active.toString()} ]`}
        </button>
        <br />
        <br />

        <MarkUp {...this.props} />
        <AccordionWithHeader
          {...this.props}
          actionCallback={(panels, state) => {
            console.log('actionCallback panels, state: ', panels, state);
            this.props.handleActionCallback(panels, state);
          }}
        >
          {quotes.map((quote, i) => {
            return (
              <AccordionNode key={i}>
                <AccordionHeader
                  horizontalAlignment={alignment[i]}
                  verticalAlignment={verticalAlignment[i]}
                >
                  <img src={this.state.images[i]} width="70" />
                  <h6 className="box">
                    <code>horizontalAlignment="{alignment[i]}"</code>
                  </h6>
                  <h6 className="box">
                    <code>
                      verticalAlignment="{verticalAlignment[i] || 'center'}"
                    </code>
                  </h6>
                  <img src={this.state.images[i]} width="70" />
                </AccordionHeader>
                <AccordionPanel className="my-panel" speed={350}>
                  <div style={{ textAlign: 'center', padding: 20 }}>
                    <h5>{quote}</h5>
                    <img width={150} src={this.state.images[i]} />
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
