/* eslint-disable quotes */
import React from 'react';
import {render} from 'react-dom';
import AccordionWithHeaderOptions from './demos/AccordionWithHeader_Options';
import AccordionHeaderOptions from './demos/AccordionHeader_Options';

class Demo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      multipleOkay: false,
      firstOpen: true
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2>Example options for &lt;AccordionWithHeader &#47;&gt;</h2>
            <button className="btn btn-default" style={{marginRight:20}} type="button"
                    onClick={() => this.setState({multipleOkay: !this.state.multipleOkay})}>
              toggle <code>multipleOkay</code>
            </button>
            <button className="btn btn-default" type="button"
                    onClick={() => this.setState({firstOpen: !this.state.firstOpen})}>
              toggle <code>firstOpen</code>
            </button>
            <AccordionWithHeaderOptions multipleOkay={this.state.multipleOkay} firstOpen={this.state.firstOpen}/>
          </div>
        </div>

        <br />
        <hr />
        <hr />
      </div>
    )
  }
}

render(
  <Demo />,
  document.getElementById('app')
);


/////

const alignment = [
  'centerSpaceBetween', 'centerSpaceAround', 'center', 'left', 'right'
];

class Demo2 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      multipleOkay: false,
      firstOpen: true
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2>Example options for &lt;AccordionHeader &#47;&gt;</h2>
            <button className="btn btn-default" style={{marginRight: 20}} type="button"
                    onClick={() => null}>
              toggle <code>multipleOkay</code>
            </button>
            <button className="btn btn-default" type="button"
                    onClick={() => null}>
              toggle <code>firstOpen</code>
            </button>
            <AccordionHeaderOptions />
          </div>
        </div>
      </div>
    )
  }
}

render(
  <Demo2 />,
  document.getElementById('app2')
);
