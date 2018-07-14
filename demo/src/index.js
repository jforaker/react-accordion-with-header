import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import GitHubButton from 'github-buttons/dist/react/GitHubButton';

import MyAccordion from './MyAccordion';

class Demo extends Component {
  state = {
    multipleOkay: false,
    firstOpen: true,
    active: [0, 2]
  };

  render() {
    return (
      <div className="container">
        <div id="h" className="jumbotron">
          <h1>react-accordion-with-header</h1>
          <h3>
            React accordion component with customizable flexbox based header
          </h3>
          <div>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=jforaker&repo=react-accordion-with-header&type=star&count=true"
              frameborder="0"
              scrolling="0"
              width="170px"
              height="20px"
            />
            <iframe
              src="https://ghbtns.com/github-btn.html?user=jforaker&repo=react-accordion-with-header&type=fork&count=true"
              frameborder="0"
              scrolling="0"
              width="170px"
              height="20px"
            />
          </div>

          <img src="http://www.stevensegallery.com/100/100" />
          <blockquote>
            "I'm gunna to take you to the bank senator Trent, the blood bank."
          </blockquote>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              className="btn btn-info"
              onClick={() =>
                this.setState({ multipleOkay: !this.state.multipleOkay })
              }
            >
              multipleOkay: {this.state.multipleOkay.toString()}
            </button>
            <MyAccordion
              {...this.state}
              setActionCallback={state => {
                this.setState({ ...state });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
