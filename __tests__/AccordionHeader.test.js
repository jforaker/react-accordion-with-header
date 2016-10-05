/**
 * Created by jakeforaker on 10/5/16.
 *
 */

import React from 'react';
import {mount, shallow, render} from 'enzyme';
import {it, describe, beforeEach} from 'mocha'; //just to quiet down webstorm
import {expect} from 'chai';
import sinon from 'sinon';

import AccordionHeader from '../src/AccordionHeader';

describe('<AccordionHeader/>', function () {

  let props = AccordionHeader.defaultProps;

  let HeaderTpl = () => <div><h1>Tpl</h1></div>;

  let shall = shallow(<AccordionHeader {...props}><h1>header</h1></AccordionHeader>);

  it('should be a React Component', () => {
    //noinspection BadExpressionStatementJS
    expect(shall.instance() instanceof React.Component).to.be.true;
  });

  it('renders as a <div>', () => {
    expect(shall.type()).to.eql('div');
  });

  it('renders a template component when passed in as props', () => {
    let shall = shallow(<AccordionHeader template={<HeaderTpl />} />);
    expect(shall.find(HeaderTpl).length).to.equal(1);
  });

  it('renders a template component when passed in as jsx', () => {
    let shall = shallow(<AccordionHeader><HeaderTpl /></AccordionHeader>);
    expect(shall.find(HeaderTpl).length).to.equal(1);
  });

  it('calls this.renderChildren() once', () => {
    sinon.spy(AccordionHeader.prototype, 'renderChildren');
    mount(<AccordionHeader  {...props} ><h1>header</h1></AccordionHeader>);
    expect(AccordionHeader.prototype.renderChildren.calledOnce).to.equal(true);
  });

  it('should have class .is-expanded if props.isExpanded is true', () => {
    let props = {isExpanded: true};
    let shall = shallow(<AccordionHeader {...props}><HeaderTpl /></AccordionHeader>);
    expect(shall.find('.is-expanded')).to.have.length(1);
  });
});
