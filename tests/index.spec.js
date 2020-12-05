import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

import {
  AccordionWithHeader,
  AccordionHeader,
  AccordionPanel,
  AccordionNode,
} from '../src';

const data = [1, 2, 3, 4];

let Component = (props) => (
  <AccordionWithHeader {...props}>
    {data.map((item, i) => {
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
  it('renders correctly', () => {
    const tree = renderer.create(<Component active={[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders four <AccordionNode /> components', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.find(AccordionNode).length).toEqual(data.length);
  });

  it('renders a <AccordionHeader /> components', () => {
    const wrapper = shallow(
      <AccordionHeader>
        <h2>Some title!</h2>
      </AccordionHeader>
    );
    expect(wrapper.find('h2').length).toEqual(1);
  });

  it('renders an AccordionNode with `.header-is-expanded` element because active={[0]} prop is truthy', () => {
    const wrapper = mount(<Component active={[0]} />);
    expect(
      wrapper.find(AccordionNode).first().find('.header-is-expanded')
    ).toHaveLength(1);
  });

  it('renders an AccordionPanel with `.is-expanded` element because active={[0]} prop is truthy', () => {
    const wrapper = mount(<Component active={[0]} />);
    expect(
      wrapper.find(AccordionPanel).first().find('.is-expanded')
    ).toHaveLength(1);
  });

  it('renders an AccordionNode with `.header-is-expanded` element because firstOpen prop is falsy', () => {
    const wrapper = mount(<Component firstOpen={false} />);
    expect(
      wrapper.find(AccordionNode).first().find('.header-is-expanded')
    ).toHaveLength(0);
  });

  it('renders an AccordionPanel with `.is-expanded` element because  firstOpen prop is falsy', () => {
    const wrapper = mount(<Component firstOpen={false} />);
    expect(
      wrapper.find(AccordionPanel).first().find('.is-expanded')
    ).toHaveLength(0);
  });

  it('<AccordionNode /> does not render a children if none are passed in', () => {
    const wrapper = shallow(<AccordionNode />);
    expect(wrapper.children()).toHaveLength(0);
  });

  it('renders 2 AccordionPanel with `.is-expanded` element because active={[0, 1]} prop', () => {
    const wrapper = mount(<Component active={[0, 1]} />);
    expect(wrapper.find(AccordionPanel).find('.is-expanded')).toHaveLength(2);
  });

  it('renders an AccordionNode with `.header-is-expanded` element because active={[0, 1]} prop', () => {
    const wrapper = mount(<Component active={[0, 1]} />);
    expect(
      wrapper.find(AccordionNode).find('.header-is-expanded')
    ).toHaveLength(2);
  });
});
