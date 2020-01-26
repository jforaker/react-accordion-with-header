import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const defaultProps = {
  className: 'react-accordion-with-header',
  multipleOkay: false,
  firstOpen: false,
  style: {
    boxShadow: '0 0 0 1px rgba(63,63,68,.05), 0 1px 3px 0 rgba(63,63,68,.15)',
    borderRadius: 3
  }
};

export default class AccordionWithHeader extends Component {
  state = {
    panels: [],
    active: [],
    ...this.props
  };

  componentDidMount() {
    let panels;
    const { children, active, firstOpen } = this.props;

    if (!children) {
      throw new Error('AccordionWithHeader must have children!');
    }

    panels = Children.map(children, child => +child.key);

    // define the number of AccordionNode "panels" to control
    this.setState({ panels });

    // allow firstOpen prop, but prefer an "active" array
    if (firstOpen) {
      this.setState({ active: [0] });
    }

    // if this.props.active is defined, validate it is an array
    // and that it is a valid instance of the panels array
    if (typeof active !== 'undefined') {
      const validateActive = () => {
        if (typeof active === 'number' || !Array.isArray(active)) {
          throw new Error('this.props.active must be an array');
        }
        active.forEach(active => {
          if (!panels.includes(active)) {
            throw new Error(
              `Items in this.props.active array are not included in panel array!
                Check that one or more array indexes are properly passed in.`
            );
          }
        });
      };
      validateActive();
      this.setState(prevState => ({
        active: Array.from(new Set([...prevState.active, ...active]))
      }));
    }
  }

  componentDidUpdate() {
    const hasNewChildren =  this.props.children.length > this.state.children.length;
    if (hasNewChildren) {
      // redefine the number of AccordionNode "panels" to control
      let panels;
      const { children } = this.props;
      panels = Children.map(children, child => +child.key);
      this.setState({ ...this.props, panels });
    }
  }

  onClickHeader = panelIndex => {
    let active;
    if (this.state.active.includes(panelIndex)) {
      active = this.state.active.filter(item => item !== panelIndex);
    } else {
      active = !this.props.multipleOkay ? [] : this.state.active;
      active.push(this.state.panels[panelIndex]);
      active.sort();
    }

    this.setState(
      prevState => ({
        active,
        multipleOkay:
          prevState.multipleOkay !== this.props.multipleOkay
            ? this.props.multipleOkay
            : prevState.multipleOkay
      }),
      () => {
        if (this.props.actionCallback) {
          // pass array of panels and accordion state back to actionCallback props function
          let panelData = this.state.panels.map(panel => ({
            panel,
            open: active.includes(panel)
          }));
          this.props.actionCallback(panelData, ...this.state);
        }
      }
    );
  };

  checkExpanded = (indexKey, activePanelOrPanelsProps) => {
    if (Array.isArray(activePanelOrPanelsProps)) {
      //multipleOkay is true
      return activePanelOrPanelsProps.some(panel => panel === indexKey);
    } else {
      return indexKey === activePanelOrPanelsProps;
    }
  };

  render() {
    const { className, style, children, active } = this.props;
    const internalControl = !active;
    const panelsToCheck = internalControl ? this.state.active : active;

    return (
      <div className={classNames(className)} style={{ ...style }}>
        {Children.map(children, (item, index) => {
          // lets render the <AccordionNode /> and its kids
          return cloneElement(item, {
            indexKey: index, // needed for child ref if template prop is used
            key: index,
            onClickHeader: () => this.onClickHeader(index),
            isExpanded: this.checkExpanded(index, panelsToCheck)
          });
        })}
      </div>
    );
  }
}

AccordionWithHeader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  firstOpen: PropTypes.bool,
  multipleOkay: PropTypes.bool,
  active: PropTypes.array,
  actionCallback: PropTypes.func
};
AccordionWithHeader.defaultProps = defaultProps;
