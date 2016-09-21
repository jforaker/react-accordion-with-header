import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import {getHorizontalAlignment, getVerticalAlignment} from './utils';

const defaultStyle = {
  padding: 10
};

export default class AccordionHeader extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  handleClick(ev) {
    ev.preventDefault();
    this.props.onSelect();
  }

  renderChildren() {
    if (this.props.title) {
      return <h1>{this.props.title}</h1>;
    }
    if (!this.props.template && !this.props.children && !this.props.title) {
      throw new Error('AccordionHeader must have a title or template or at least one child!');
    }
    if (this.props.template) {
      return this.props.template;
    }
    return this.props.children;
  }

  render() {

    var style = {
      cursor: 'pointer',
      color: this.props.titleColor || 'black',
      display: '-webkit-flex',
      display: 'flex',
      flexDirection: 'row',
      alignItems: getVerticalAlignment(this.props.verticalAlignment),
      justifyContent: getHorizontalAlignment(this.props.horizontalAlignment),
    };

    return (
      <div className={classNames('accordion-header', this.props.className, {'is-expanded': this.props.isExpanded})}
           onClick={this.handleClick}
           style={{...defaultStyle, ...style}}>
        {this.renderChildren()}
      </div>
    );
  }
}

AccordionHeader.propTypes = {
  className: PropTypes.string,
  verticalAlignment: PropTypes.oneOf(['top', 'center', 'bottom']),
  horizontalAlignment: PropTypes.oneOf(['centerSpaceBetween', 'centerSpaceAround', 'center', 'left', 'right']),
  title: PropTypes.string,
  titleColor: PropTypes.string,
  template: PropTypes.element
};
AccordionHeader.defaultProps = {
  horizontalAlignment: 'centerSpaceAround',
  verticalAlignment: 'center',
  titleColor: 'black'
};
