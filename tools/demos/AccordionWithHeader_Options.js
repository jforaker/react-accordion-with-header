/* eslint-disable quotes */
import React from 'react';
import {render} from 'react-dom';
import {AccordionWithHeader, AccordionNode, AccordionHeader, AccordionPanel} from '../../src';

const quotes = [
  'This maniac should be wearing a number, not a badge.',
  'So, what are you, like some special forces guy?',
  'The jury decided. I presided.',
  // 'Assumption is the mother of all f*ck-ups!',
  // `You've got 5 seconds... and 3 are up.`
];

const alignment = [
  'centerSpaceBetween', 'centerSpaceAround', 'center', 'left', 'right'
];

const createMarkup = (props) => {
  return {__html: `<h1><pre><code>&lt;AccordionWithHeader multipleOkay={${props.multipleOkay.toString()}} firstOpen={${props.firstOpen.toString()}} &#47;&gt;</pre></code></h1>`};
};

const rando = () => (Math.floor(Math.random() * 5) + 1);

export default class AccordionWithHeaderOptions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentWillMount() {
    let images = [];
    [1,2,3,4,5].forEach((item, i) => {
      images.push(`http://www.stevensegallery.com/200/20${rando()}`)
    });
    this.setState({images: images})
  }


  render() {

    return (
      <div>
        <div>
          <div dangerouslySetInnerHTML={createMarkup(this.props)}/>
        </div>
        <AccordionWithHeader multipleOkay={this.props.multipleOkay} firstOpen={this.props.firstOpen} className="my-accordion">
          {quotes.map((quote, i) => {
            return (
              <AccordionNode key={i} className="accordion-node">

                <AccordionHeader className="accordion-header"
                                 title={null}
                                 titleColor="#607D8B"
                                 horizontalAlignment={alignment[i]}
                                 verticalAlignment="center">
                  <div>
                    <img src={this.state.images[i]}/>
                  </div>
                  <h3>horizontalAlignment="{alignment[i]}"</h3>
                  <div>
                    <img src={this.state.images[i]}/>
                  </div>

                </AccordionHeader>

                <AccordionPanel className="my-panel" speed={350}>
                  <div style={{textAlign: 'center', height: 320}}>
                    <div>
                      <h2>{quote}!</h2>
                    </div>
                    <img style={{marginBottom: 10}} src={this.state.images[i]}/>
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
