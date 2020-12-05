import React, { PureComponent, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const defaultProps = {
  speed: 250,
};

const defaultStyle = {
  overflow: 'hidden',
  padding: 0,
};

export default class AccordionPanel extends PureComponent {
  state = {
    panelHeight: 0,
  };

  componentDidMount() {
    const bodyNode = this.accordionPanelRef;
    if (!bodyNode) return; // tests only?
    const images = bodyNode.querySelectorAll('img');

    if (images.length > 0) {
      this.preloadImages(images);
    } else {
      this.calcHeight();
    }
  }

  // Wait for images to load before calculating height of element
  preloadImages = (images = []) => {
    let imagesLoaded = 0;
    const imgLoaded = (data) => {
      imagesLoaded++;
      if (imagesLoaded === images.length) this.calcHeight();
    };
    images.forEach((element) => {
      let img = new Image();
      img.src = element.src;
      img.onload = img.onerror = imgLoaded;
    });
  };

  calcHeight = () => {
    if (this.componentRef) {
      const { clientHeight: panelHeight } = this.componentRef.current;
      this.setState({ panelHeight });
      return;
    }

    let panelHeight = Children.map(
      this.props.children,
      (child, i) => this.refs[`item-${child.props.key}`]
    ).reduce(
      (previousValue, child) => previousValue + child.clientHeight,
      this.state.panelHeight
    );

    this.setState({ panelHeight });
  };

  renderChildren = () => {
    if (!this.props.template && !this.props.children) {
      throw new Error('AccordionPanel must have at least one child!');
    }

    /***************************************************************
     create a ref so we calculate its height on componentDidMount()
     this way we know how high to expand the panel
     ***************************************************************/

    const wrapComponent = (components) => {
      return Children.map(components, (child, index) => {
        const WrappedComponent = React.forwardRef((props, ref) => {
          this.componentRef = ref;
          return <div ref={ref}>{child}</div>;
        });
        const ref = React.createRef();
        return <WrappedComponent ref={ref} />;
      });
    };

    if (this.props.template) {
      // for template prop that contains a class component
      console.warn(
        `The template prop will be deprecated in the future. 
          Prefer passing in your component directly as children: https://reactjs.org/docs/composition-vs-inheritance.html`
      );
      return wrapComponent(cloneElement(this.props.template));
    }

    if (typeof this.props.children.type === 'function') {
      // for children that are class components
      return wrapComponent(this.props.children);
    }

    return Children.map(this.props.children, (child) => {
      return cloneElement(child, {
        ref: `item-${child.props.key}`,
      });
    });
  };

  render() {
    const { className, isExpanded, style, speed } = this.props;

    const styles = {
      transition: `all ${speed || defaultProps.speed}ms ease-in-out`,
      maxHeight: isExpanded ? this.state.panelHeight : 0,
      opacity: isExpanded ? 1 : 0,
    };

    return (
      <div
        ref={(inst) => (this.accordionPanelRef = inst)}
        className={classNames(className, { 'is-expanded': isExpanded })}
        style={{ ...style, ...defaultStyle, ...styles }}
      >
        {this.renderChildren()}
      </div>
    );
  }
}

AccordionPanel.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  speed: PropTypes.number,
  isExpanded: PropTypes.bool,
};
AccordionPanel.defaultProps = defaultProps;
