/**
 * Created by jakeforaker on 9/17/16.
 */

/* eslint-disable quotes */
import React, { Component, PropTypes, cloneElement, Children } from 'react';
import classNames from 'classnames';
import csjs from 'csjs';
import insertCss from 'insert-css';

const defaultClass = csjs`
  .accordionNode {
    border: 1px solid #607D8B;
  }
`;

insertCss(csjs.getCss(defaultClass));

export default class AccordionNode extends Component {

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.checkExpanded = this.checkExpanded.bind(this);
  }

  handleSelect(key) {
    if (this.props.onSelect) {
      this.props.onSelect(key);
    }
  }

  checkExpanded(indexKey, activePanelOrPanels) {
    if (Array.isArray(activePanelOrPanels)) {
      //multipleOkay is true
      return activePanelOrPanels.some(panel => panel === indexKey)
    } else {
      return indexKey === activePanelOrPanels
    }
  }

	renderNodeItems () {

    const { indexKey, active, children } = this.props;

    if (!children) {
      console.warn('AccordionNode component has no inner items!');
      return null;
		}

    return Children.map(children, (item) => {
      /***************************************************************
       lets render the <AccordionHeader /> and <AccordionPanel />
       ***************************************************************/
      return cloneElement(item, {
        ...item.props,
        onClickHeader: () => this.handleSelect(indexKey),
        isExpanded: this.checkExpanded(indexKey, active)
			});
		});
	}

	render() {

	  const {
      className,
    } = this.props;

    return (
			<div className={classNames(className, [defaultClass.accordionNode].join(' '))}>
				{this.renderNodeItems()}
			</div>
		);
	}
}

AccordionNode.propTypes = {
  className: PropTypes.string
};
