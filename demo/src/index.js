import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from './container';

const preStyle = { background: '#e9ecef', padding: 10 };

class Demo extends Component {
  state = {
    multipleOkay: true,
    active: [0],
  };

  toggle = () => {
    this.setState({
      active: Array.from({ length: Math.round(Math.random() * 3) }).map(
        (_, i) => i
      ),
    });
  };

  render() {
    return (
      <div>
        <div id="h" className="jumbotron">
          <div className="container">
            <h1>react-accordion-with-header</h1>
            <h2>
              React accordion component with customizable flexbox based header
            </h2>
            <div>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=jforaker&repo=react-accordion-with-header&type=star&count=true"
                frameBorder="0"
                scrolling="0"
                width="100px"
                height="50px"
              />
              <iframe
                src="https://ghbtns.com/github-btn.html?user=jforaker&repo=react-accordion-with-header&type=fork&count=true"
                frameBorder="0"
                scrolling="0"
                width="100px"
                height="50px"
              />
            </div>
            <div className="steve">
              <img src="http://www.stevensegallery.com/100/100" />
              <blockquote>
                "I'm gonna to take you to the bank senator Trent, the blood
                bank."
              </blockquote>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Install</h1>
              <pre style={preStyle}>
                <code>npm install react-accordion-with-header</code>
              </pre>
              <pre style={preStyle}>
                <code>
                  {`import {
  AccordionWithHeader,
  AccordionNode, 
  AccordionHeader,
  AccordionPanel
} from 'react-accordion-with-header';
`}
                </code>
              </pre>
              <pre style={preStyle}>
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
              <Container
                {...this.state}
                toggle={this.toggle}
                handleActionCallback={(panels, state) => {
                  console.table(panels, ['panel', 'open']);
                  console.log('state: ', state);

                  this.setState({ ...state });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
