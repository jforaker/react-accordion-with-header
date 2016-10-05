
import React from 'react';
import { it, describe, beforeEach } from 'mocha'; //just to quiet down webstorm
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import AccordionWithHeader from '../src/AccordionWithHeader';
import AccordionNode from '../src/AccordionNode';
import AccordionHeader from '../src/AccordionHeader';
import AccordionPanel from '../src/AccordionPanel';

describe('<AccordionWithHeader/>', function () {

  /* { multipleOkay: false, firstOpen: true }*/
  let props = AccordionWithHeader.defaultProps;

  const iterator = [0, 1, 2, 3, 4, 5];
  let node = (i) => (
    <AccordionNode key={i}>
      <AccordionHeader><h1>foo</h1></AccordionHeader>
      <AccordionPanel>
        <div style={{height:20}}>bar</div>
      </AccordionPanel>
    </AccordionNode>);

  let shall;
  let mounted;

  beforeEach(() => {
    shall = shallow(<AccordionWithHeader>{iterator.map((el, i) => node(i))}</AccordionWithHeader>);

    mounted = mount(
      <AccordionWithHeader {...props}>
        {iterator.map((el, i) => node(i))}
      </AccordionWithHeader>
    );
  });

  it('should be a React Component', () => {
    //noinspection BadExpressionStatementJS
    expect(shall.instance() instanceof React.Component).to.be.true;
  });

  it('calls this.renderChildren()', () => {
    sinon.spy(AccordionWithHeader.prototype, 'renderChildren');
    mount(
      <AccordionWithHeader  {...AccordionWithHeader.defaultProps}>
        {iterator.map((el, i) => node(i))}
      </AccordionWithHeader>
    );
    expect(AccordionWithHeader.prototype.renderChildren.calledOnce).to.equal(true);
  });

  it('renders as a <div>', () => {
    expect(shall.type()).to.eql('div');
  });

  it('renders <AccordionNode> component when passed in as an array.map()', () => {
    expect(shall.find(AccordionNode).length).to.equal(iterator.length);
  });

  it('should render with default props', function () {
    expect(mounted.props().multipleOkay).to.equal(AccordionWithHeader.defaultProps.multipleOkay);
    expect(mounted.props().firstOpen).to.equal(AccordionWithHeader.defaultProps.firstOpen);
  });

  it('props.onSelect should be a function', function () {
    expect(shall.props().onSelect).to.be.function;
  });

  it('state.panels and state.active should be arrays', function () {
    expect(shall.state().panels).to.be.a('array');
    expect(shall.state().active).to.be.a('array');
  });

  it('should set state for number of panels equal to number children', function () {
    const children = shall.props().children;
    const childCount = children.length;
    expect(shall.state().panels.length).to.equal(childCount)
  });

  it('should set state for first panel if firstOpen is true', function () {
    if (mounted.props().firstOpen) {
      expect(mounted.state().active.length).to.equal(1);
    } else {
      expect(mounted.state().active.length).to.equal(0)
    }
  });

  it('should correctly implement panelControl(panelIndex)', function () {
    const panelIndex = 2;
    let state = mounted.state();
    let activePanelArray;

    if (state.active.indexOf(panelIndex) !== -1) {
      activePanelArray = state.active.filter(item => item !== panelIndex);

    } else {
      activePanelArray = !mounted.props().multipleOkay ? [] : state.active;
      activePanelArray.push(state.panels[panelIndex]);
    }

    mounted.setState({
      active: activePanelArray
    });

    if (mounted.state().active.filter(item => item === panelIndex).length) {
      if (mounted.props().firstOpen && panelIndex !== 0) {
        //first is open and panel passed in is not first panel
        expect(mounted.find('.is-expanded')).to.have.length(state.active.length + 1);
      } else {
        expect(mounted.find('.is-expanded')).to.have.length(state.active.length);
      }
    }

    expect(mounted.state().active).to.equal(activePanelArray);
  });
});
