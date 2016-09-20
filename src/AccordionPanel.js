import React, {Component, Children, cloneElement} from 'react';
import ReactDOM from 'react-dom';

const defaultStyles = {
  overflow: 'hidden',  //IMPORTANT!!!
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
      this.calcHeight()
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
      let img = new Image();
      img.src = images[i].src;
      img.onload = img.onerror = imgLoaded;
    }
  }

  calcHeight() {
    Children.forEach(this.props.children, (child) => {
      const { clientHeight } = this.refs[`item-${child.props.key}`];
      this.setState({
        originalHeight: clientHeight
      })
    });
  }

  renderChildren() {
    if (!this.props.children) {
      throw new Error('AccordionPanel must have at least one child!');
    }
    return Children.map(this.props.children, (child) => {
      /***************************************************************
       create a ref so we calculate its height on componentDidMount()
       ***************************************************************/
      return cloneElement(child, {
        ref: `item-${child.props.key}`
      });
    });
  }

  render() {

    const style = {
      transition: `all ${this.props.speed || 250}ms ease-in-out`,
      maxHeight: this.props.isExpanded ? this.state.originalHeight : 0,
      opacity: this.props.isExpanded ? 1 : 0
    };

    return (
      <div ref="accordionPanel" className="accordion-panel" style={{...defaultStyles, ...style}}>
        {this.renderChildren()}
      </div>
    );
  }
}
