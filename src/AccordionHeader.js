import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getHorizontalAlignment, getVerticalAlignment } from './utils';

export default class AccordionHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(index) {
    this.props.onClickHeader(index);
    //handled in props.onClickHeader() of AccordionNode > props.onSelect() of AccordionWithHeader
  }

  renderChildren() {
    if (this.props.title) {
      return (
        <div>
          <h1>{this.props.title}</h1>
        </div>
      );
    }
    if (!this.props.template && !this.props.children && !this.props.title) {
      throw new Error(
        'AccordionHeader must have a title or template or at least one child!'
      );
    }
    if (this.props.template) {
      return this.props.template;
    }
    return this.props.children;
  }

  render() {
    const {
      style,
      titleColor,
      verticalAlignment,
      horizontalAlignment,
      className,
      isExpanded
    } = this.props;

    let styles = {
      cursor: 'pointer',
      color: titleColor || 'black',
      display: '-webkit-flex',
      display: 'flex',
      flexDirection: 'row',
      alignItems: getVerticalAlignment(verticalAlignment),
      justifyContent: getHorizontalAlignment(horizontalAlignment)
    };

    return (
      <div
        className={classNames(className, { 'header-is-expanded': isExpanded })}
        onClick={this.handleHeaderClick}
        style={{ ...styles, ...style }}
      >
        {this.renderChildren()}
      </div>
    );
  }
}

AccordionHeader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  verticalAlignment: PropTypes.oneOf(['top', 'center', 'bottom']),
  horizontalAlignment: PropTypes.oneOf([
    'centerSpaceBetween',
    'centerSpaceAround',
    'center',
    'left',
    'right'
  ]),
  title: PropTypes.string,
  titleColor: PropTypes.string,
  template: PropTypes.element
};
AccordionHeader.defaultProps = {
  horizontalAlignment: 'centerSpaceAround',
  verticalAlignment: 'center',
  titleColor: 'black',
  style: {
    padding: 10,
    boxShadow: '0 0 0 1px rgba(63,63,68,.05), 1px 1px 3px 0 rgba(63,63,68,.15)',
    borderRadius: 3
  }
};
