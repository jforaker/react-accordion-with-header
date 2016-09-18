import React, {Component} from 'react';

export default class AccordionHeader extends Component {

	constructor(props) {
		super(props);

		// let activeItems = arrayify(props.activeItems);
		//
		// // can't have multiple active items, just use the first one
		// if (!props.allowMultiple) activeItems = [activeItems[0]]
		//
		// this.state = {
		// 	isExpanded: this
		// };
	}

	handleClick (ev) {
		ev.preventDefault();
		this.props.handleCLickState();
	}

	render() {

		var style = {
			cursor: 'pointer',
			margin: 0,
			color: this.props.titleColor || 'red'
		};

		console.log('AccordionHeader this.props.isExpanded', this.props.isExpanded);


		return (
			<div className="accordion-header"
				 onClick={this.handleClick.bind(this)}
				 style={style}>
				{this.props.children}
			</div>
		);
	}
}

