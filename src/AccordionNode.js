import React, { PureComponent, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class AccordionNode extends PureComponent {
  checkExpanded = (indexKey, activePanelOrPanels) => {
    if (Array.isArray(activePanelOrPanels)) {
      //multipleOkay is true
      return activePanelOrPanels.some(panel => panel === indexKey);
    } else {
      return indexKey === activePanelOrPanels;
    }
  };

  render() {
    const {
      className,
      style,
      children,
      indexKey,
      active,
      onClickHeader
    } = this.props;

    if (!children) {
      console.warn('AccordionNode component has no inner items!');
      return null;
    }
    return (
      <div className={classNames(className)} style={{ ...style }}>
        {Children.map(children, item =>
          // lets render the <AccordionHeader /> and <AccordionPanel />
          cloneElement(item, {
            ...item.props,
            onClickHeader: () => onClickHeader(indexKey),
            isExpanded: this.checkExpanded(indexKey, active)
          })
        )}
      </div>
    );
  }
}

AccordionNode.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
