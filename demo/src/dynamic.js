import React from 'react';

import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel,
} from '../../src';
import { data } from './data';
import { Code } from './components';

const BodyTpl = (props) => (
  <div style={{ padding: 10, textAlign: 'center' }}>
    Look, its #{props.item}
  </div>
);

const ImgTpl = ({ src, text }) => (
  <div className="my-acc-body">
    <img src={src} />
    <p>{text}</p>
  </div>
);

const Like = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
  </svg>
);

const AddPanelsDemo = () => {
  const [panels, setPanels] = React.useState([0, 1, 2, 3]);

  const addPanel = () => {
    setPanels((prev) => [...prev, prev.length + 1]);
  };

  return (
    <div className="block dynamic">
      <h2>Adding panels dynamically</h2>
      <AccordionWithHeader className="dynamic-acc">
        {panels.map((item, i) => {
          return (
            <AccordionNode key={i}>
              <AccordionHeader
                horizontalAlignment="centerSpaceAround"
                verticalAlignment="center"
              >
                <div>This is the header {i}</div>
                <div>It has flexbox layout</div>
              </AccordionHeader>
              <AccordionPanel>
                <BodyTpl item={item} />
              </AccordionPanel>
            </AccordionNode>
          );
        })}
      </AccordionWithHeader>
      <div className="block">
        <button className="btn btn-primary" onClick={() => addPanel()}>
          Add Panel dynamically
        </button>
      </div>
      <hr className="my-1" />
    </div>
  );
};

const ContextDemo = () => {
  return (
    <div className="block real-world">
      <h2>useAccordionState</h2>
      <p>
        For advanced usage, you may subscribe to the context emitted from{' '}
        {'<AccordionWithHeader />'}
      </p>
      <Code
        code={`
  import { useAccordionState } from 'react-accordion-with-header';

  const MyComponentWithContext = () => {
    const [state] = useAccordionState();
    console.log('state: ', state);
    return <div></div>;
  }; 
`}
      />
      <p>
        Note you will receive an error if {`<MyComponentWithContext />`} is not
        used inside {'<AccordionWithHeader />'}
      </p>
      <hr className="my-1" />
    </div>
  );
};

const RealWorldDemo = () => {
  return (
    <div className="block real-world">
      <h2>Real World demo</h2>
      <p className="lead">with responsive styling</p>
      <AccordionWithHeader className="my-acc-demo">
        {data.map(({ id, title, topic, readtime, image, text, likes }) => {
          return (
            <AccordionNode key={id} className="my-acc-node">
              <AccordionHeader
                horizontalAlignment="spaceBetween"
                verticalAlignment="center"
                className="my-acc-header"
              >
                <div className="title-container" style={{ minWidth: '50%' }}>
                  <h2>{title}</h2>
                  <span>
                    {'|'} {topic}
                  </span>
                </div>

                <div className="likes-container">
                  <div>{readtime}</div>
                  <div>{likes} likes</div>
                  <Like />
                </div>
              </AccordionHeader>
              <AccordionPanel speed={400}>
                <ImgTpl src={image} text={text} />
              </AccordionPanel>
            </AccordionNode>
          );
        })}
      </AccordionWithHeader>
      <hr className="my-1" />
    </div>
  );
};

export default () => (
  <div className="block">
    <AddPanelsDemo />
    <ContextDemo />
    <RealWorldDemo />
  </div>
);
