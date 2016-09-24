// import React from 'react';
// // import ReactDOM from 'react-dom';
// import TestUtils from 'react-addons-test-utils';
// import sd from 'skin-deep';
// import expect from 'unexpected';
//
//
// import AccordionWithHeader from './AccordionWithHeader';
// import AccordionNode from './AccordionNode';
// import AccordionHeader from './AccordionHeader';
// import AccordionPanel from './AccordionPanel';
// import renderer from 'react-test-renderer';
//
// // beforeEach(() => jest.resetModules());
// jest.mock('react-dom');
//
// describe('<AccordionWithHeader> renders the component', () => {
//
//   let vdom, instance, items;
//
//
//   it('should render', () => {
//     const tree = sd.shallowRender(<AccordionWithHeader />);
//
//     instance = tree.getMountedInstance();
//     vdom = tree.getRenderOutput();
//
//     expect(instance, 'to be defined');
//     expect(vdom, 'to be defined');
//   });
//
//   /*it('renders ', () => {
//     const component = renderer.create(
//       <AccordionWithHeader multipleOkay={true}>
//         <AccordionNode>
//           <AccordionHeader>
//             <h1>foo</h1>
//           </AccordionHeader>
//           <AccordionPanel>
//             <div>bar</div>
//           </AccordionPanel>
//         </AccordionNode>
//       </AccordionWithHeader>
//     );
//     let tree = component.toJSON();
//
//     expect(tree).toMatchSnapshot();
//
//     console.log('tree.props ', tree.props);
//
//     // // manually trigger the callback
//     expect(tree.props.multipleOkay).toBeDefined();
//     //
//     // expect(tree.props.multipleOkay).toBeDefined();
//
//     // // re-rendering
//     // tree = component.toJSON();
//     // expect(tree).toMatchSnapshot();
//     //
//     // // manually trigger the callback
//     // tree.props.onMouseLeave();
//     // // re-rendering
//     // tree = component.toJSON();
//     // expect(tree).toMatchSnapshot();
//   });*/
// });
//
//


import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import AccordionWithHeader from './AccordionWithHeader';
import AccordionNode from './AccordionNode';
import AccordionHeader from './AccordionHeader';
import AccordionPanel from './AccordionPanel';

describe('<AccordionWithHeader/>', function () {

  let node = <AccordionNode>Hi</AccordionNode>;
  let wrapper = shallow(<AccordionWithHeader>{[node, node]}</AccordionWithHeader>);

  let defaultProps = {
    multipleOkay: false,
    firstOopen: true
  };

  let mounted = mount(
    <AccordionWithHeader  {...defaultProps}>
      <AccordionNode>
        <AccordionHeader>
          <h1>foo</h1>
        </AccordionHeader>
        <AccordionPanel>
          <div>bar</div>
        </AccordionPanel>
      </AccordionNode>
    </AccordionWithHeader>
  );

  it('renders as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('renders as an <AccordionNode> component when passed in', () => {
    expect(wrapper.find('AccordionNode')).to.exist;
  });

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).to.be.true;
  });

  it('should render with default props', function () {
    expect(mounted.props().multipleOkay).to.be.false;
    expect(mounted.props().firstOopen).to.be.true;
  });

  it('should set state for panels equal to number children', function () {

    const childCount = wrapper.props().children.length;
    let panels = [];
    let state = {};

    wrapper.props().children.forEach(child => {
      panels.push(+child.key)
    });
    state.panels = panels;

    expect(state.panels.length).to.equal(childCount)


  });
});
