import React, {Component} from 'react';
import className from 'classnames';

const defaultStyles = {
  overflow: 'hidden',
  border: '1px solid green'
};

export default class AccordionPanel extends Component {

  constructor(props) {
    super(props);

    this.renderChildren = this.renderChildren.bind(this);

    this.state = {
      originalHeight: 0
    };
  }

  componentDidMount() {
    React.Children.forEach(this.props.children, (child) => {
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
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
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
      <div className="accordion-panel" style={{...defaultStyles, ...style}}>
        {this.renderChildren()}
      </div>
    );
  }
}
