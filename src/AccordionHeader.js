import React, {Component} from 'react';
import classNames from 'classnames';

const getAlignment = (str) => {
  let align = {
    'left': 'flex-start',
    'right': 'flex-end',
    'center': 'center',
    'default': 'flex-start'
  };
  return align[str] || align['default'];
};

export default class AccordionHeader extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  handleClick(ev) {
    ev.preventDefault();
    this.props.onSelect();
  }

  renderChildren() {
    if (this.props.title) {
      return <h1>{this.props.title}</h1>;
    }
    if (!this.props.children && !this.props.title) {
      throw new Error('AccordionHeader must have a title or at least one child!');
    }
    return this.props.children;
  }

  render() {

    console.log('getAlignment(this.props.titleAlign) ', getAlignment(this.props.titleAlign));

    var style = {
      cursor: 'pointer',
      color: this.props.titleColor || 'red',
      display: '-webkit-flex',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: getAlignment(this.props.titleAlign),
    };

    const defaultStyle = {};

    console.log('AccordionHeader this.props', this.props);

    return (
      <div className={classNames('accordion-header', this.props.className, {'is-Expando': this.props.isExpanded})}
           onClick={this.handleClick}
           style={{...defaultStyle, ...style}}>
        {this.renderChildren()}
      </div>
    );
  }
}

