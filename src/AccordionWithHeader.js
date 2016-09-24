/* eslint-disable no-lonely-if, no-nested-ternary */
import React, { Component, PropTypes, Children, cloneElement } from 'react';
import classNames from 'classnames';
const guid = require('easy-guid');

const defaultProps = {
  multipleOkay: false,
  firstOpen: false
};

export default class AccordionWithHeader extends Component {

  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
    this.panelControl = this.panelControl.bind(this);
    this.mountingProps = this.mountingProps.bind(this);

    this.state = {
      panels: [],
      active: []
    }
  }

  componentWillMount() {
    let panels = [];
    Children.forEach(this.props.children, child => {
      panels.push(+child.key);
    });
    this.setState({ panels: panels });
    this.mountingProps(this.props)
  }

  componentWillReceiveProps(nextProps) {
    //this is only for the demo. TODO - think of a better way
    this.mountingProps(nextProps)
  }

  mountingProps(props) {
    let active = [];
    if (props.firstOpen) active.push(0);
    this.setState({ active: active })
  }

  panelControl(panelIndex) {

    let activePanelArray;

    if (this.state.active.indexOf(panelIndex) !== -1) {
      activePanelArray = this.state.active.filter(item => item !== panelIndex);
    } else {
      activePanelArray = !this.props.multipleOkay ? [] : this.state.active;
      activePanelArray.push(this.state.panels[panelIndex]);
    }

    this.setState({ active: activePanelArray });
  }

  renderChildren() {
    if (!this.props.children) {
      throw new Error('AccordionWithHeader must have children!');
    }

    /***************************************************************
     lets render the <AccordionNode /> and its kids
     ***************************************************************/
    return Children.map(this.props.children, (item, index) => {
      return cloneElement(item, {
        active: this.state.active,
        indexKey: index,
        key: index,
        onSelect: this.panelControl.bind(this, index)
      });
    });
  }

  render() {
    return (
      <div
        className={classNames(this.props.className)}
        style={this.props.style}>
        {this.renderChildren()}
      </div>
    );
  }
}

AccordionWithHeader.propTypes = {
  firstOpen: PropTypes.bool,
  multipleOkay: PropTypes.bool
};
AccordionWithHeader.defaultProps = defaultProps;
