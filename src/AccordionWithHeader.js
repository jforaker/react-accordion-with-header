/* eslint-disable no-lonely-if, no-nested-ternary */
import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const defaultProps = {
  multipleOkay: false,
  firstOpen: false,
  isOpen: undefined,
  style: {
    boxShadow: '0 0 0 1px rgba(63,63,68,.05), 0 1px 3px 0 rgba(63,63,68,.15)',
    borderRadius: 3
  }
};

export default class AccordionWithHeader extends Component {
  state = {
    panels: [],
    active: []
  };

  componentWillMount() {
    let panels = [];
    Children.forEach(this.props.children, child => {
      panels.push(+child.key);
    });
    this.setState({ panels });
    this.initOrChange(this.props, true);
  }

  componentWillReceiveProps(nextProps) {
    // this.initOrChange(nextProps);
    this.panelControl(undefined, nextProps);
  }

  initOrChange = (nextProps, isMount) => {
    if (nextProps.firstOpen) {
      //  && firstOpen !== nextProps.firstOpen
      this.setState(prevState => ({
        active: [...prevState.active, 0]
      }));
    } else {
      this.setState(prevState => ({
        active: [...prevState.active.filter(panel => panel !== 0)]
      }));
    }

    if (nextProps.isOpen !== undefined) {
      // this.panelControl(nextProps.isOpen);
      this.setState(prevState => ({
        active: [
          ...prevState.active.filter(p => p !== nextProps.isOpen),
          nextProps.isOpen
        ]
      }));
    } else if (nextProps.isOpen !== undefined && this.props.isOpen) {
      //this.panelControl(this.props.isOpen);
      this.setState(prevState => ({
        active: [...prevState.active.filter(p => p !== this.props.isOpen)]
      }));
    }
  };

  panelControl = (panelIndex, props) => {
    console.log('props: ', props);
    console.log('panelIndex: ', panelIndex);

    const current = this.state;
    console.log('current: ', current);

    let active;
    let panelData;
    console.log('this.state.active: ', this.state.active);
    if (this.state.active.indexOf(panelIndex) !== -1) {
      active = this.state.active.filter(item => item !== panelIndex);
    } else {
      active = !this.props.multipleOkay ? [] : this.state.active;
      active.push(this.state.panels[panelIndex]);
    }

    this.setState({ active });

    if (this.props.actionCallback) {
      // pass array of panels back to actionCallback props function
      panelData = this.state.panels.map(panel => ({
        panel,
        open: active.includes(panel)
      }));
      this.props.actionCallback(panelData);
    }
  };

  renderChildren = () => {
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
  };

  render() {
    const { className, style } = this.props;
    return (
      <div className={classNames(className)} style={{ ...style }}>
        {this.renderChildren()}
      </div>
    );
  }
}

AccordionWithHeader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  firstOpen: PropTypes.bool,
  isOpen: PropTypes.number,
  multipleOkay: PropTypes.bool,
  actionCallback: PropTypes.func
};
AccordionWithHeader.defaultProps = defaultProps;
