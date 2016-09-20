### (work in progress)

# [DEMO](https://jforaker.github.io/react-accordion-with-header/dist)

React accordion component with flexbox header 

## Usage

Install via NPM:

```
npm install react-accordion-with-header-test-foo-bar
```

Then:

```javascript
import { AccordionWithHeader, AccordionNode, AccordionHeader, AccordionPanel } from 'react-accordion-with-header-test-foo-bar';

…

	render: function () {
		return (
			<AccordionWithHeader>
				{[1, 2, 3, 4].map((item, i) => {
					return (
						<AccordionNode key={i} className="custom-classname">
							<AccordionHeader className="foobar-header"
											 title={null}
											 titleColor="#607D8B"
											 horizontalAlignment="centerSpaceAround"
											 verticalAlignment="center">
								<h5>Some title</h5>
								<div>
									<div>Something else</div>
								</div>
								<h5>A third item</h5>
							</AccordionHeader>
							<AccordionPanel>
								<div>
									<div style={{outline: '10px solid yellow', height: 75, textAlign: 'center'}}>
										<h2>Important information!</h2>
									</div>
								</div>
							</AccordionPanel>
						</AccordionNode>
					);
				})}
			</AccordionWithHeader>
		);
	}

…

```
