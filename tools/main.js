import {AccordionWithHeader, AccordionNode, AccordionHeader, AccordionPanel} from '../src';

import React from 'react';
import {render} from 'react-dom';


render(
	<AccordionWithHeader allowMultiple={false}>
		{React.Children.map([1, 2, 3, 4, 5], (item)  => {
		  //use React.Children.map so we dont have specify key on AccordionNode
			return (
				<AccordionNode className="custom-classname" trigger={'foo'}>

					<AccordionHeader className="header-foobar" title="Foo" titleAlign="right">
            {/*
            title: string
            titleAlign: String: "left, center, right"
            */}
						<div className="foob-by-user">AccordionHeader {item}</div>
            <div className="foob-by-user">AccordionHeader {item}</div>
            <div className="foob-by-user">AccordionHeader {item}</div>

          </AccordionHeader>

					<AccordionPanel>
						<div style={{height:120}}>
							{'Item ' + item + ' content'}
						</div>
					</AccordionPanel>

				</AccordionNode>
			);
		})}
	</AccordionWithHeader>,
	document.getElementById('app')
);
