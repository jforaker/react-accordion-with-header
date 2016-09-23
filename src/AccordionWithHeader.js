/* eslint-disable no-lonely-if */
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

    let active = null;
    if (props.multipleOkay) {
      active = [];
      if (props.firstOpen) active.push(0);
    } else {
      active = props.firstOpen ? 0 : null
    }

    this.state = {
      panels: [],
      active: active
    }
  }

  componentWillMount() {
    Children.forEach(this.props.children, child => {
      this.state.panels.push(+child.key)
    });
  }

  panelControl(panelIndex) {

    let { active, panels } = this.state;
    let s = {};
    s.active = null;

    if (this.props.multipleOkay) {
      let panelsArr = active;
      if (panelsArr.indexOf(panelIndex) !== -1) {
        //panel exists, remove it
        panelsArr = panelsArr.filter(item => item !== panelIndex);
      } else {
        //otherwise push it in
        panelsArr.push(panelIndex);
      }
      s.active = panelsArr;

    } else {
      //panelIndex = active, then it should close. leave it null and close it
      if (panelIndex !== active) {
        //open it
        s.active = panels[panelIndex];
      }
    }

    this.setState(s);
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
