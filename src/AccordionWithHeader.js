import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const defaultProps = {
  multipleOkay: false,
  firstOpen: false,
  active: [],
  style: {
    boxShadow: '0 0 0 1px rgba(63,63,68,.05), 0 1px 3px 0 rgba(63,63,68,.15)',
    borderRadius: 3
  }
};

export default class AccordionWithHeader extends Component {
  state = {
    panels: [],
    ...this.props
  };

  componentWillMount() {
    const panels = Children.map(this.props.children, child => +child.key);
    this.setState({ panels });
    if (this.props.firstOpen) {
      console.warn(
        `firstOpen prop will be deprecated in the future. 
            Prefer using the "active" prop like active={[0]}`
      );
      this.setState({
        active: [0]
      });
    }
    if (this.props.active) {
      this.setState(prevState => ({
        active: Array.from(new Set([...prevState.active, ...this.props.active]))
      }));
    }
  }

  onClickHeader = panelIndex => {
    let active;
    if (this.state.active.includes(panelIndex)) {
      active = this.state.active.filter(item => item !== panelIndex);
    } else {
      active = !this.props.multipleOkay ? [] : this.state.active;
      active.push(this.state.panels[panelIndex]);
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

  render() {
    const { className, style, children } = this.props;
    if (!children) {
      throw new Error('AccordionWithHeader must have children!');
    }
    return (
      <div className={classNames(className)} style={{ ...style }}>
        {Children.map(children, (item, index) =>
          // lets render the <AccordionNode /> and its kids
          cloneElement(item, {
            active: this.state.active,
            indexKey: index,
            key: index,
            onClickHeader: this.onClickHeader.bind(this, index)
          })
        )}
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
