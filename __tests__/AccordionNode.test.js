/**
 * Created by jakeforaker on 9/25/16.
 */

import React from 'react';
import {mount, shallow, render} from 'enzyme';
import {it, describe, beforeEach} from 'mocha'; //just to quiet down webstorm
import {expect} from 'chai';
import sinon from 'sinon';

import AccordionNode from '../src/AccordionNode';
import AccordionHeader from '../src/AccordionHeader';
import AccordionPanel from '../src/AccordionPanel';

describe('<AccordionNode/>', function () {

  let props = AccordionNode.defaultProps;

  let header = <AccordionHeader><h1>header</h1></AccordionHeader>;
  let panel = <AccordionPanel><h1>panel</h1></AccordionPanel>;

  let shall = shallow(<AccordionNode {...props}>{header}{panel}</AccordionNode>);

  it('renders as a <div>', () => {
    expect(shall.type()).to.eql('div');
  });

  it('renders <AccordionHeader> and <AccordionPanel> component when passed in', () => {
    expect(shall.find(AccordionHeader).length).to.equal(1);
    expect(shall.find(AccordionPanel).length).to.equal(1);
  });

  it('should be a React Component', () => {
    //noinspection BadExpressionStatementJS
    expect(shall.instance() instanceof React.Component).to.be.true;
  });

  it('calls this.renderNodeItems() once', () => {
    sinon.spy(AccordionNode.prototype, 'renderNodeItems');
    mount(<AccordionNode  {...props} >{header}{panel}</AccordionNode>);
    expect(AccordionNode.prototype.renderNodeItems.calledOnce).to.equal(true);
  });

  it('should render with default className .accordionNode', function () {
    expect(shall.props().className).to.include('accordionNode')
  });

  it('should have props for onSelect()', function () {
    expect(shall.props().onSelect).to.be.defined;
  });

  it('should correctly return true for checkExpanded(indexKey, activePanelOrPanels)', function () {
    expect(shall.instance().checkExpanded(1, [1, 2, 3])).to.be.true;
  });
});
