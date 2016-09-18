/* eslint-disable */

import {AccordionWithHeader, AccordionNode, AccordionHeader, AccordionPanel} from '../src';

import React from 'react';
import {render} from 'react-dom';

let guid = 0;

render(
	<AccordionWithHeader>
		{[1, 2, 3, 4, 5].map(function (item, i) {
			guid++;
			return (
				<AccordionNode key={guid} className="custom-classname" trigger={'foo'}>

					<AccordionHeader>
						<div className="foob-by-user">AccordionHeader {item}</div>
					</AccordionHeader>

					<AccordionPanel title={'Item' + item} titleColor="blue" expanded="false">
						<div>
							{'Item ' + item + ' content'}
						</div>
					</AccordionPanel>

				</AccordionNode>
			);
		})}
	</AccordionWithHeader>,
	document.getElementById('app')
);
