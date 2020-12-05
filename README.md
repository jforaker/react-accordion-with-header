# react-accordion-with-header

### React accordion component with customizable flexbox header

[![NPM](https://nodei.co/npm/react-accordion-with-header.png?downloads=true)](https://nodei.co/npm/react-accordion-with-header?downloads=true)

[![jforaker](https://circleci.com/gh/jforaker/react-accordion-with-header.svg?style=svg)](LINK)

> "You've got 5 seconds... and 3 are up." - _Steven Seagal_

<img src="https://media.giphy.com/media/BakXonJxQzoIM/giphy.gif" width="300" />

### [Check out the demo NOW](https://react-accordion-with-header.now.sh/)

#### Install via NPM:

```
npm install react-accordion-with-header
```

#### Import the modules:

```javascript
import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel,
} from 'react-accordion-with-header';
```

Items can be passed in to `<AccordionHeader />` and `<AccordionPanel />`:

- as children (preferred)
- as a component passed into the `template` prop (deprecated)

The elements passed in to `<AccordionHeader />` can be **horizontally justified and vertically aligned** via their respective props
:tada: :boom: :beers:

- `horizontalAlignment`
- `verticalAlignment`

### Pass in a component as a child to `AccordionHeader` and `AccordionPanel`:

(or plain html of course)

```javascript
// note: due to the warning "Stateless function components cannot be given refs. Attempts to access this ref will fail."
// the components passed into <AccordionPanel> must be class components
// this allows to measure the height of the element via refs
class BodyTpl extends React.Component {
  render() {
    return <div>Look at this {this.props.item}</div>;
  }
}

class MyAccordion extends React.Component {
  render() {
    return (
      <AccordionWithHeader>
        {[1, 2, 3, 4].map((item, i) => {
          return (
            <AccordionNode key={i}>
              <AccordionHeader
                horizontalAlignment="centerSpaceAround"
                verticalAlignment="center"
              >
                <div>This is the header</div>
                <div>It has flexbox layout</div>
              </AccordionHeader>
              <AccordionPanel>
                <BodyTpl item={item} />
              </AccordionPanel>
            </AccordionNode>
          );
        })}
      </AccordionWithHeader>
    );
  }
}

…
```

### `actionCallback`

```javascript
…
  actionCallback = (panels, state) => {
    // fires any time headers are clicked and panels change state
    // receives array of panels: [{ panel: 3, open: true }, { panel: 6, open: true }]
    // and the AccordionWithHeader state
    console.log('panels, state', panels, state);
  }

  render() {
    return (
      <AccordionWithHeader actionCallback={this.actionCallback}>
        // ... stuff
      </AccordionWithHeader>
    );
  }
…
```

## Props

(all components accept a `className` and `style` prop per usual convention)

### `<AccordionWithHeader />`

| Property       | Type       | Description                                                                                                                                            | Default |
| :------------- | :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :------ |
| firstOpen      | `Boolean`  | Determines if the first panel should be expanded on init                                                                                               | `false` |
| active         | `Array`    | Determines which panels are open (on componentDidMount or to control externally)                                                                       | `[]`    |
| multipleOkay   | `Boolean`  | True allows multiple panels to be expanded at the same time. False allows only one panel to be expanded at any time.                                   | `false` |
| actionCallback | `Function` | Callback function fired when a header is clicked and panel is opened or closed. Returns an array representing panels and the AccordionWithHeader state | `none`  |
| style          | `Object`   | style object                                                                                                                                           | `none`  |
| className      | `String`   | CSS classname                                                                                                                                          | `none`  |

### `<AccordionNode />`

| Property  | Type     | Description                               | Default |
| :-------- | :------- | :---------------------------------------- | :------ |
| style     | `Object` | style object                              | `none`  |
| className | `String` | Custom classname applied to root item div | `none`  |

### `<AccordionHeader />`

| Property            | Type      | Description                                                                                                                                                             | Default             |
| :------------------ | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------ |
| title               | `String`  | For simple headers, a title will render an `<h1>` and disallow child elements                                                                                           | `none`              |
| titleColor          | `String`  | some valid CSS color or rgb or hex                                                                                                                                      | `black`             |
| horizontalAlignment | `String`  | One of: 'centerSpaceBetween', 'spaceBetween', 'centerSpaceAround', 'spaceAround', 'spaceEvenly', 'center', 'left', 'right'. Maps to corresponding flex-box CSS property | `centerSpaceAround` |
| verticalAlignment   | `String`  | One of: 'top', 'center', 'bottom'                                                                                                                                       | `center`            |
| style               | `Object`  | style object                                                                                                                                                            | `none`              |
| className           | `String`  | CSS classname                                                                                                                                                           | `none`              |
| template            | `Element` | Component to be rendered as a template                                                                                                                                  | `none`              |

### `<AccordionPanel />`

| Property  | Type      | Description                                                           | Default |
| :-------- | :-------- | :-------------------------------------------------------------------- | :------ |
| template  | `Element` | Component to be rendered as a template                                | `none`  |
| speed     | `Number`  | Speed in milliseconds to apply to CSS transition of open/close effect | `250`   |
| style     | `Object`  | style object                                                          | `none`  |
| className | `String`  | CSS classname                                                         | `none`  |

## What about styling?

You can styles to any component with a `style` prop or `className` prop

For example: `<AccordionHeader style={{border: '1px solid'}}>`

Or: `<AccordionHeader className="myCssClass">`

---
