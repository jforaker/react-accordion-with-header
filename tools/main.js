/* eslint-disable quotes */
import React from 'react';
import {render} from 'react-dom';
import AccordionWithHeaderOptions from './demos/AccordionWithHeader_Options';
import AccordionHeaderOptions from './demos/AccordionHeader_Options';
import DefaultOptions from './demos/Default_Options';

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
            <div className="page-header">
              <h1>Example options for &nbsp;
                <small>&lt;AccordionWithHeader &#47;&gt;</small>
              </h1>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Prop</th>
                  <th>Description</th>
                  <th>Default</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row"><code>multipleOkay</code></th>
                  <td>True allows multiple panels to be expanded at the same time. False allows only one panel to be
                    expanded at any time.
                  </td>
                  <td>false</td>
                </tr>
                <tr>
                  <th scope="row"><code>firstOpen</code></th>
                  <td>Determines if the first panel should be expanded by default</td>
                  <td>false</td>
                </tr>
                <tr>
                  <th scope="row"><code>actionCallback</code></th>
                  <td>Callback function fired when a header is clicked and panel is opened or closed. Returns an array
                    representing panels. (check the console output in your browser)</td>
                  <td>null</td>
                </tr>
                </tbody>
              </table>
            </div>
            <button className="btn btn-primary btn-lg" style={{marginRight:20}} type="button"
                    onClick={() => this.setState({multipleOkay: !this.state.multipleOkay})}>
              toggle <code>multipleOkay</code>
            </button>
            <button className="btn btn-primary btn-lg" type="button"
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

const hAlignment = [
  'centerSpaceBetween', 'centerSpaceAround', 'center', 'left', 'right'
];

const vAlignment = [
  'top', 'center', 'bottom'
];

const genHex = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

class Demo2 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: null,
      titleColor: genHex(),
      horizontalAlignment: hAlignment[0],
      verticalAlignment: vAlignment[1]
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div>
            <div className="page-header">
              <h1>Example options for &nbsp;
                <small>&lt;AccordionHeader &#47;&gt;</small>
              </h1>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Prop</th>
                  <th>Description</th>
                  <th>Default</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row"><code>title</code></th>
                  <td>For simple headers, a title will render an h1 tag and disallow child elements</td>
                  <td>null</td>
                </tr>
                <tr>
                  <th scope="row"><code>titleColor</code></th>
                  <td>Some valid CSS color or rgb or hex</td>
                  <td>black</td>
                </tr>
                <tr>
                  <th scope="row"><code>horizontalAlignment</code></th>
                  <td>One of: 'centerSpaceBetween', 'centerSpaceAround', 'center', 'left', 'right'. Maps to corresponding flex-box CSS property</td>
                  <td>centerSpaceAround</td>
                </tr>
                <tr>
                  <th scope="row"><code>verticalAlignment</code></th>
                  <td>One of: 'top', 'center', 'bottom'</td>
                  <td>center</td>
                </tr>
                </tbody>
              </table>
            </div>

            {!this.state.title &&
            <button className="btn btn-primary btn-lg" style={{marginRight: 20}} type="button"
                    onClick={() => this.setState({title: 'Some title'})}>
              toggle <code>title</code>
            </button>
            }

            {this.state.title &&
            <button className="btn btn-primary btn-lg" style={{marginRight: 20}} type="button"
                    onClick={() => this.setState({title: null})}>
              toggle <code>title</code>
            </button>
            }

            {this.state.title &&
            <button className="btn btn-primary btn-lg" style={{marginRight: 20}} type="button"
                    onClick={() => this.setState({titleColor: genHex()})}>
              toggle <code>titleColor</code>
            </button>
            }

            <button className="btn btn-primary btn-lg" style={{marginRight: 20}} type="button"
                    onClick={() => this.setState({horizontalAlignment: hAlignment[(Math.floor(Math.random() * 5))]})}>
              toggle <code>horizontalAlignment</code>
            </button>

            <button className="btn btn-primary btn-lg" style={{marginRight: 20}} type="button"
                    onClick={() => this.setState({verticalAlignment: vAlignment[(Math.floor(Math.random() * 3))]})}>
              toggle <code>verticalAlignment</code>
            </button>

            {this.state.title ? <p style={{fontStyle:'italic'}}>Note: vertical and some centering flexbox properties do not have an affect on only one element</p> : <p>&nbsp;</p>}


            <AccordionHeaderOptions title={this.state.title}
                                    titleColor={this.state.titleColor}
                                    horizontalAlignment={this.state.horizontalAlignment}
                                    verticalAlignment={this.state.verticalAlignment}/>
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


class Demo3 extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1>Example with default options</h1>
              <p>(and no custom styles applied)</p>
            </div>
            <DefaultOptions />
          </div>
        </div>
      </div>
    )
  }
}

render(
  <Demo3 />,
  document.getElementById('app3')
);
