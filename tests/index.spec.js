import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter() });

import {
  AccordionWithHeader,
  AccordionHeader,
  AccordionPanel,
  AccordionNode
} from '../src';

let Component = props => (
  <AccordionWithHeader {...props}>
    {[1, 2, 3, 4].map((item, i) => {
      return (
        <AccordionNode key={i}>
          <AccordionHeader>
            <h2>Some title!</h2>
          </AccordionHeader>
          <AccordionPanel>
            <section>Interesting things...</section>
          </AccordionPanel>
        </AccordionNode>
      );
    })}
  </AccordionWithHeader>
);

describe('<AccordionWithHeader />', () => {
  it('renders four <AccordionNode /> components', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.find(AccordionNode)).to.have.length(4);
  });

  it('renders a <AccordionHeader /> components', () => {
    const wrapper = shallow(
      <AccordionHeader>
        <h2>Some title!</h2>
      </AccordionHeader>
    );
    expect(wrapper.find('h2')).to.have.length(1);
  });

  it('renders an AccordionNode with `.header-is-expanded` element because active={[0]} prop is truthy', () => {
    const wrapper = mount(<Component active={[0]} />);
    expect(
      wrapper
        .find(AccordionNode)
        .first()
        .find('.header-is-expanded')
    ).to.have.length(1);
  });

  it('renders an AccordionPanel with `.is-expanded` element because active={[0]} prop is truthy', () => {
    const wrapper = mount(<Component active={[0]} />);
    expect(
      wrapper
        .find(AccordionPanel)
        .first()
        .find('.is-expanded')
    ).to.have.length(1);
  });

  it('renders an AccordionNode with `.header-is-expanded` element because deprecated firstOpen prop is falsy', () => {
    const wrapper = mount(<Component firstOpen={false} />);
    expect(
      wrapper
        .find(AccordionNode)
        .first()
        .find('.header-is-expanded')
    ).to.have.length(0);
  });

  it('renders an AccordionPanel with `.is-expanded` element because deprecated firstOpen prop is falsy', () => {
    const wrapper = mount(<Component firstOpen={false} />);
    expect(
      wrapper
        .find(AccordionPanel)
        .first()
        .find('.is-expanded')
    ).to.have.length(0);
  });

  it('renders a <AccordionNode /> components', () => {
    const wrapper = shallow(<AccordionNode />);
    expect(wrapper.children()).to.have.length(0);
  });
});
