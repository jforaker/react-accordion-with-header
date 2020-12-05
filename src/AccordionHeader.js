import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getHorizontalAlignment, getVerticalAlignment } from './utils';

export default function AccordionHeader(props) {
  const {
    style,
    titleColor,
    verticalAlignment,
    horizontalAlignment,
    className,
    isExpanded,
    onClickHeader,
    template,
    children,
    title,
  } = props;

  const renderChildren = () => {
    if (!template && !children && !title) {
      throw new Error(
        'AccordionHeader must have a title or template or at least one child!'
      );
    }
    if (title) {
      return <React.Fragment>{title}</React.Fragment>;
    }
    if (template) {
      console.warn(
        `The template prop for AccordionHeader will be deprecated in the future. 
          Prefer passing in your component directly as children: https://reactjs.org/docs/composition-vs-inheritance.html`
      );
      return template;
    }
    return children;
  };

  let styles = {
    cursor: 'pointer',
    color: titleColor || 'black',
    display: '-webkit-flex',
    display: 'flex',
    flexDirection: 'row',
    alignItems: getVerticalAlignment(verticalAlignment),
    justifyContent: getHorizontalAlignment(horizontalAlignment),
  };

  return (
    <div
      className={classNames(className, { 'header-is-expanded': isExpanded })}
      onClick={onClickHeader}
      style={{ ...style, ...styles }}
    >
      {renderChildren()}
    </div>
  );
}

AccordionHeader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  verticalAlignment: PropTypes.oneOf(['top', 'center', 'bottom']),
  horizontalAlignment: PropTypes.oneOf([
    'spaceAround',
    'spaceBetween',
    'spaceEvenly',
    'stretch',
    'centerSpaceBetween',
    'centerSpaceAround',
    'center',
    'left',
    'right',
  ]),
  title: PropTypes.string,
  titleColor: PropTypes.string,
  template: PropTypes.element,
  onClickHeader: PropTypes.func,
  children: PropTypes.node,
};

AccordionHeader.defaultProps = {
  className: 'null',
  horizontalAlignment: 'centerSpaceAround',
  verticalAlignment: 'center',
  titleColor: 'black',
  style: {
    padding: 10,
    boxShadow: '0 0 0 1px rgba(63,63,68,.05), 1px 1px 3px 0 rgba(63,63,68,.15)',
    borderRadius: 3,
  },
};
