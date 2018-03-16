import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

const defaultProps = {
  speed: 250
};

const defaultStyle = {
  overflow: 'hidden',
  padding: 0
};

export default class AccordionPanel extends Component {
  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
    this.preloadImages = this.preloadImages.bind(this);
    this.calcHeight = this.calcHeight.bind(this);

    this.state = {
      originalHeight: 0
    };
  }

  componentDidMount() {
    const bodyNode = ReactDOM.findDOMNode(this.refs.accordionPanel);
    const images = bodyNode.querySelectorAll('img');

    if (images.length > 0) {
      this.preloadImages(bodyNode, images);
    } else {
      this.calcHeight();
    }
  }

  // Wait for images to load before calculating height of element
  preloadImages(node, images = []) {
    var imagesLoaded = 0;
    var imgLoaded = () => {
      imagesLoaded++;
      if (imagesLoaded === images.length) this.calcHeight();
    };

    for (let i = 0; i < images.length; i += 1) {
      //recurse over images
      let img = new Image();
      img.src = images[i].src;
      img.onload = img.onerror = imgLoaded;
    }
  }

  calcHeight() {
    if (this.props.template) {
      const { clientHeight } = this.refs[`item-${this.props.indexKey}`];
      this.setState({
        originalHeight: clientHeight
      });
      return;
    }

    let totalHeight = Children.map(this.props.children, child => {
      return this.refs[`item-${child.props.key}`];
    }).reduce(
      (previousValue, child) => previousValue + child.clientHeight,
      this.state.originalHeight
    );

    this.setState({
      originalHeight: totalHeight
    });
  }

  renderChildren() {
    if (!this.props.template && !this.props.children) {
      throw new Error('AccordionPanel must have at least one child!');
    }

    /***************************************************************
     create a ref so we calculate its height on componentDidMount()
     this way we know how high to expand the panel
     ***************************************************************/

    if (this.props.template) {
      /* templates are special in that we cannot iterate over them with React.Children.map */
      return cloneElement(this.props.template, {
        ref: `item-${this.props.indexKey}`
      });
    }

    return Children.map(this.props.children, child => {
      return cloneElement(child, {
        ref: `item-${child.props.key}`
      });
    });
  }

  render() {
    const { className, isExpanded, style } = this.props;

    const styles = {
      transition: `all ${this.props.speed || defaultProps.speed}ms ease-in-out`,
      maxHeight: this.props.isExpanded ? this.state.originalHeight : 0,
      opacity: this.props.isExpanded ? 1 : 0
    };

    return (
      <div
        ref="accordionPanel"
        className={classNames(className, { 'is-expanded': isExpanded })}
        style={{ ...defaultStyle, ...styles, ...style }}
      >
        {this.renderChildren()}
      </div>
    );
  }
}

AccordionPanel.propTypes = {
  className: PropTypes.string,
  speed: PropTypes.number
};
AccordionPanel.defaultProps = defaultProps;
