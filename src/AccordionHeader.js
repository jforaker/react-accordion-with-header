import React from 'react';
import PropTypes from 'prop-types';
import { getHorizontalAlignment, getVerticalAlignment } from './utils';
import { useAccordionState } from './accordion-with-header-context';

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

  // const [active] = useAccordionState();

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
    color: titleColor,
    display: '-webkit-flex',
    display: 'flex',
    flexDirection: 'row',
    alignItems: getVerticalAlignment(verticalAlignment),
    justifyContent: getHorizontalAlignment(horizontalAlignment),
  };

  const cx = `${className} accordion-header ${
    isExpanded ? 'is-open' : ''
  }`.trim();

  return (
    <div className={cx} onClick={onClickHeader} style={{ ...style, ...styles }}>
      {renderChildren()}
    </div>
  );
}

AccordionHeader.propTypes /* remove-proptypes */ = {
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
  className: '',
  horizontalAlignment: 'centerSpaceAround',
  verticalAlignment: 'center',
  titleColor: 'inherit',
  style: {
    padding: 10,
    boxShadow:
      'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 1px 1px 0px 0px',
    borderRadius: 3,
  },
};
