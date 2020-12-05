import React, { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function AccordionNode(props) {
  const {
    indexKey,
    className,
    style,
    children,
    isExpanded,
    onClickHeader,
  } = props;

  if (!children) {
    console.warn('AccordionNode component has no inner items!');
    return null;
  }

  return (
    <div className={classNames(className)} style={{ ...style }}>
      {Children.map(children, (item) => {
        return (
          // lets render the <AccordionHeader /> and <AccordionPanel />
          cloneElement(item, {
            indexKey,
            isExpanded,
            onClickHeader,
            ...item.props,
          })
        );
      })}
    </div>
  );
}

AccordionNode.propTypes = {
  children: PropTypes.node.isRequired,
  isExpanded: PropTypes.bool,
  onClickHeader: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};
