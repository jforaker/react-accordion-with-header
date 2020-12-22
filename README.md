# react-accordion-with-header

### React accordion component with customizable flexbox header

[![NPM](https://nodei.co/npm/react-accordion-with-header.png?downloads=true)](https://nodei.co/npm/react-accordion-with-header?downloads=true)

[![jforaker](https://circleci.com/gh/jforaker/react-accordion-with-header.svg?style=svg)](LINK)

> "You've got 5 seconds... and 3 are up." - _Steven Seagal_

<img src="https://media.giphy.com/media/BakXonJxQzoIM/giphy.gif" width="300" />

### [Check out the demo NOW](https://react-accordion.xyz/)

#### Install via yarn:

```
yarn add react-accordion-with-header
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

The elements passed in to `<AccordionHeader />` can be **horizontally justified and vertically aligned** via their respective props.

- `horizontalAlignment`
- `verticalAlignment`

##### Use composition to pass components or whatever you wish to `AccordionHeader` and `AccordionPanel`:

```javascript
const MyAccordion = () => (
  <AccordionWithHeader>
    {[1, 2, 3, 4].map((item, i) => {
      return (
        <AccordionNode key={i}>
          <AccordionHeader
            horizontalAlignment="centerSpaceAround"
            verticalAlignment="center"
          >
            <span>This is the header 🎉</span>
            <span>It has flexbox layout 🚀</span>
          </AccordionHeader>
          <AccordionPanel>
            <div>Look at this great {item}</div>
          </AccordionPanel>
        </AccordionNode>
      );
    })}
  </AccordionWithHeader>
);
```

### `onChange`

```javascript
…
  onChange = (state) => {
    // called any time the panels change state, either by clicking or using in a controlled situation
    // receives array of active panels by index, for example: [1, 3]
    console.log('state', state);
  }

  render() {
    return (
      <AccordionWithHeader onChange={onChange}>
        // ... stuff
      </AccordionWithHeader>
    );
  }
…
```

---

### CSS and styling

The `<AccordionHeader />` and `<AccordionPanel />` will add an `is-open` class when the corresponding panel is open. This opens up the door for creative styling options. See demo.

The minimal built in styles can be easily overriden by adding a `style` prop or `className` prop to any of the components.

For example: `<AccordionHeader style={{ border: '1px solid' }}>`

Or: `<AccordionHeader className="myClass">`

---

### `useAccordionState()`

For some advanced use cases, you may tap the accordion context with `useAccordionState()`

```javascript
import { useAccordionState } from 'react-accordion-with-header';

const MyComponentWithContext = () => {
  const [state] = useAccordionState();
  console.log('state: ', state);
  return <div></div>;
};
```

Note you will receive an error if `<MyComponentWithContext />` is not a child of `<AccordionWithHeader />`

## Props

### `<AccordionWithHeader />`

| Property       | Type       | Description                                                                                                                                            | Default |
| :------------- | :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :------ |
| firstOpen      | `Boolean`  | Determines if the first panel should be expanded on init                                                                                               | `false` |
| active         | `Array`    | Determines which panels are open on mount, or to which panels to open by controlling the component. See demo.                                          | `[]`    |
| multipleOkay   | `Boolean`  | True allows multiple panels to be expanded at the same time. False allows only one panel to be expanded at any time.                                   | `false` |
| onChange       | `Function` | Callback function fired when a header is clicked and panel is opened or closed. Returns an array representing panels and the AccordionWithHeader state | `none`  |
| actionCallback | `Function` | _Deprecated_ in favor of `onChange`                                                                                                                    | `none`  |
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

---
