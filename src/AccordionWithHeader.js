import React, { Component } from 'react';

const arrayify = obj => [].concat(obj);

// removes duplicate from array
const dedupeArr = arr => arr.filter((item, index, inputArray) => {
	return inputArray.indexOf(item) === index;
});

export default class AccordionWithHeader extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={this.props.className || 'accordion-with-header-container'}
				 role="tablist"
				 style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
}

