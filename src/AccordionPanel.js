import React, {Component} from 'react';
import className from 'classnames';

export default class AccordionPanel extends Component {

	constructor(props) {
		super(props);
		this.state = {
			maxHeight: props.expanded ? 'none' : 0,
			overflow: props.expanded ? 'visible' : 'hidden',
			duration: 300
		};
	}

	getExpanded() {
		var properties = {
			className: className(
				'react-accordion-with-header-item',
				this.props.className,
				{'react-accordion-with-header-item-expanded': this.props.isExpanded},
				this.props.expandedClassName && {[this.props.expandedClassName]: this.props.isExpanded}
			),
			role: 'tabpanel',
			style: this.props.style
		};

		return className(
      'react-accordion-with-header-item',
      this.props.className,
      {'react-accordion-with-header-item-expanded': this.props.isExpanded},
      this.props.expandedClassName && {[this.props.expandedClassName]: this.props.isExpanded}
    );
	}

	render() {

		const style = {
			maxHeight: 200,
			display: this.props.isExpanded ? 'block' : 'none'
		};

		console.log('AccordionPanel this.props.isExpanded', this.props.isExpanded);


		return <div {...this.getExpanded()} className="accordion-panel" style={style}>{this.props.children}</div>;
	}
}
