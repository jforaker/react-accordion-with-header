import React, { Fragment, useState } from 'react';
import { render, hydrate } from 'react-dom';
import 'bootswatch/dist/solar/bootstrap.min.css';
import './styles.css';

import Container from './container';
import { Code } from './components';

const Jumbotron = () => (
  <div className="jumbotron">
    <div className="container page-header">
      <div className="row">
        <div className="col-sm-12">
          <h1>react-accordion-with-header</h1>
          <p className="lead">
            React accordion component with customizable flexbox based header
          </p>
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
        </div>
      </div>
    </div>
  </div>
);

const Install = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2>Install</h2>
        <Code
          language="bash"
          code={`
  yarn add react-accordion-with-header
`}
        />
        <h5>Import</h5>
        <Code
          code={`
  import {
    AccordionWithHeader,
    AccordionNode, 
    AccordionHeader,
    AccordionPanel
  } from 'react-accordion-with-header';
`}
        />
        <h5>Use</h5>
        <Code
          code={`
  return (
    <AccordionWithHeader>
      {[1, 2, 3, 4].map((item, i) => {
        return (
          <AccordionNode key={i}>
            <AccordionHeader>
              <span>🚀</span>
              <span>🔥</span>
            </AccordionHeader>
            <AccordionPanel>
              <p>Interesting things</p>
            </AccordionPanel>
          </AccordionNode>
        );
      })}
    </AccordionWithHeader>
  );
`}
        />
      </div>
      <hr className="my-2" />
    </div>
  </div>
);

const Demo = () => {
  const [active, setActive] = useState([0]);

  const toggle = (value) => {
    if (active.includes(value)) {
      // panel was open, just filter it out of the active array
      setActive(active.filter((item) => item !== value).sort());
    } else {
      // panel was not open, add it to active array along with previously open panels
      setActive([...active.filter((item) => item !== value), value].sort());
    }
  };

  const toggleRandom = () => {
    const rand = Array.from({ length: Math.round(Math.random() * 3) }).map(
      (_, i) => i
    );
    setActive(rand);
  };

  return (
    <Fragment>
      <Jumbotron />
      <Install />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Example usages:</h1>
            <Container
              active={active}
              toggle={toggle}
              toggleRandom={toggleRandom}
              handleOnChange={(panels) => {
                console.log('active panels from onChange: ', panels);
                setActive(panels);
              }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const rootElement = document.querySelector('#demo');

if (rootElement.hasChildNodes()) {
  hydrate(<Demo />, rootElement);
} else {
  render(<Demo />, rootElement);
}
