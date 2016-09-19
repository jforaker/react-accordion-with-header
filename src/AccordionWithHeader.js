import React, {Component, Children, cloneElement} from 'react';
import classNames from 'classnames';

const propTypes = {
  allowMultiple: React.PropTypes.bool
};

const defaultProps = {
  allowMultiple: false,
};

export default class AccordionWithHeader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allowMultiple: props.allowMultiple || defaultProps.allowMultiple,
    };
  }

  render() {
    console.log('this.props  MAIN', this.props);
    return (
      <div
        className={classNames('accordion-with-header-container', this.props.className)}
        style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

AccordionWithHeader.propTypes = propTypes;
AccordionWithHeader.defaultProps = defaultProps;
