/**
 * Created by jakeforaker on 9/17/16.
 */

import React, { Component } from 'react';
import className from 'classnames';
// import uuid from 'uuid';
import { arrayify, dedupeArr } from './utils';

export default class AccordionNode extends Component {

	constructor(props) {
		super(props);
		this.state = {
			maxHeight: props.expanded ? 'none' : 0,
			overflow: props.expanded ? 'visible' : 'hidden',
			duration: 300,
			expanded: false
		};
	}

	componentWillMount() {
		// this.uuid = uuid.v4();
	}

	renderNodeItems (props) {
		if (!this.props.children) {
			return null;
		}

		const children = arrayify(this.props.children);

		return children.map((item, index) => {
			//render the AccordionNode
			const el = React.cloneElement(item, {
				className: className('accordion-node', this.props.className),
				key: index,
				ref: `accordion-node-${ index === 0 ? 'header' : 'panel' }`,
				// identifier: this.uuid,
				handleCLickState: (item) => this.handleCLick(item),
				isExpanded: this.state.expanded
			});
			return el;
		});
	}

	handleCLick (foo) {
		console.log('foo ', foo);
		this.setState({expanded: !this.state.expanded});
		console.log('this.state ', this.state);
	}

	render() {

		console.log('this.props  NODE_____', this.props);
		return (
			<div className={className('accordion-node', this.props.className)}>
				{this.renderNodeItems()}
			</div>
		);
	}
}
