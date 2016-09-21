import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class AccordionWithHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={classNames('accordion-with-header-container', this.props.className)}
        style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

//todo - update these
AccordionWithHeader.propTypes = {
  allowMultiple: PropTypes.bool
};
AccordionWithHeader.defaultProps = {
  allowMultiple: false
};
