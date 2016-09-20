import React from 'react';
import {render} from 'react-dom';
import {AccordionWithHeader, AccordionNode, AccordionHeader, AccordionPanel} from '../src/index';

render(
  <AccordionWithHeader allowMultiple={false}>
    {React.Children.map([1, 2, 3, 4], (item, i) => {
      //use React.Children.map so we dont have specify key on AccordionNode
      return (
        <AccordionNode className="custom-classname" trigger={'foo'}>

          <AccordionHeader className="foobar-header"
                           title={null}
                           titleColor="#607D8B"
                           horizontalAlignment="centerSpaceAround"
                           verticalAlignment="center">
            {/*
             title: string,
             titleColor: String: some valid CSS color or rgb or hex #607D8B
             horizontalAlignment: String: "left, center, right, centerSpaceAround, centerSpaceBetween"
             verticalAlignment: String: "top, center, bottom"
             */}

            <div>Some Header for item #{item}</div>
            <div>
              <img src={`http://www.stevensegallery.com/100/10${i + (Math.floor(Math.random() * 5) + 1)}`}/>
            </div>
            <div>Another heading item</div>
            <div>
              <img src={`http://www.stevensegallery.com/100/10${i + (Math.floor(Math.random() * 5) + 1)}`} />
            </div>

          </AccordionHeader>

          <AccordionPanel>
            <div>
              <div style={{outline:'10px solid yellow', height: 75, textAlign:'center'}}>
                <h2>Some important stuff for #{item}!</h2>
              </div>
              <img src={`http://www.stevensegallery.com/500/50${i + (Math.floor(Math.random() * 5) + 1)}`}/>
            </div>
          </AccordionPanel>

        </AccordionNode>
      );
    })}
  </AccordionWithHeader>,
  document.getElementById('app')
);
