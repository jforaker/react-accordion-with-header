/**
 * Created by jakeforaker on 9/17/16.
 */

import React, { Component, cloneElement, Children } from 'react';
import classNames from 'classnames';

const defaultStyles = {
  border: '1px solid #607D8B',
  borderRadius: 5
};

export default class AccordionNode extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      expanded: false
    };
  }

  handleSelect(key, e) {
    e.preventDefault();
    if (this.props.onSelect) {
      this.props.onSelect(key, e);
    }
  }

	renderNodeItems () {
		if (!this.props.children) {
      console.warn('AccordionNode component has no inner items!');
      return null;
		}

		return Children.map(this.props.children, (item, index) => {
      /***************************************************************
       lets render the <AccordionHeader /> and <AccordionPanel />
       ***************************************************************/
      return cloneElement(item, {
				className: classNames(`accordion-node-${ index === 0 ? 'header' : 'panel' }`, this.props.className),
        onSelect: () => this.setState({expanded: !this.state.expanded}),
				isExpanded: this.state.expanded
			});
		});
	}

	render() {
    return (
			<div className={classNames('accordion-node', this.props.className)} style={defaultStyles}>
				{this.renderNodeItems()}
			</div>
		);
	}
}
