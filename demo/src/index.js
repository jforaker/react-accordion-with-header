import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyAccordion from './MyAccordion';

class Demo extends Component {
  state = {
    multipleOkay: false,
    active: [0, 2]
  };

  render() {
    return (
      <div className="container">
        <div id="h" className="jumbotron">
          <h1>react-accordion-with-header</h1>
          <h3>
            React accordion component with customizable flexbox based header
          </h3>
          <div>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=jforaker&repo=react-accordion-with-header&type=star&count=true"
              frameBorder="0"
              scrolling="0"
              width="170px"
              height="20px"
            />
            <iframe
              src="https://ghbtns.com/github-btn.html?user=jforaker&repo=react-accordion-with-header&type=fork&count=true"
              frameBorder="0"
              scrolling="0"
              width="170px"
              height="20px"
            />
          </div>
          <img src="http://www.stevensegallery.com/100/100" />
          <blockquote>
            "I'm gunna to take you to the bank senator Trent, the blood bank."
          </blockquote>
        </div>
        <div className="row">
          <div className="col-md-12">
            <pre>
              <code>npm install react-accordion-with-header</code>
            </pre>
            <pre>
              <code>
                import {'{'}
                AccordionWithHeader, AccordionNode, AccordionHeader,
                AccordionPanel
                {'}'} from 'react-accordion-with-header';
              </code>
            </pre>
            <pre>
              <code>
                {`render() {
  return (
    <AccordionWithHeader>
      {[1, 2, 3, 4].map((item, i) => {
        return (
          <AccordionNode key={i}>
            <AccordionHeader>
              <h2>Some title!</h2>
            </AccordionHeader>
            <AccordionPanel>
              <div>Interesting things</div>
            </AccordionPanel>
          </AccordionNode>
        );
      })}
    </AccordionWithHeader>
  );
                  `}
              </code>
            </pre>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              className="btn btn-info"
              onClick={() =>
                this.setState({ multipleOkay: !this.state.multipleOkay })
              }
            >
              multipleOkay: {this.state.multipleOkay.toString()}
            </button>
            <MyAccordion
              {...this.state}
              setActionCallback={state => {
                this.setState({ ...state });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
