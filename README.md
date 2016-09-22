
# React accordion component with flexbox header 

> "You've got 5 seconds... and 3 are up." - *Steven Seagal*

### [Check out the demo NOW](https://jforaker.github.io/react-accordion-with-header/demo/)

<img src="https://d17oy1vhnax1f7.cloudfront.net/items/0m0u2f260j0E163X1u2k/Screen%20Recording%202016-09-21%20at%2005.16%20PM.gif" width="600" />

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
    AccordionPanel
} from 'react-accordion-with-header';

```

Items can be passed in to `<AccordionHeader />` and `<AccordionPanel />` one of three ways:

- a component passed into the `template` prop
- a component passed into the body (in between opening and closing tags of parent components)
- as plain html 

*NOTE: We cannot pass in a stateless component as a template at this time because of the way we use refs to calculate height... and according to react: "`Stateless function components cannot be given refs`"* 


The elements passed in to `<AccordionHeader />` can be **horizontally justified and vertically aligned** via their respective props 
:tada: :boom: :beers:  
 
- `horizontalAlignment`
- `verticalAlignment`


### Pass in a component as a template via `template` prop:

```javascript

class HeaderTpl extends React.Component {
   render() {
     return (
       <header>
         <img src={`http://www.stevensegallery.com/100/10${(Math.floor(Math.random() * 5) + 1)}`}/>
         <img src={`http://www.stevensegallery.com/100/10${(Math.floor(Math.random() * 5) + 1)}`}/>
       </header>
     );
   }
 }
 
 class BodyTpl extends React.Component {
   render() {
     return (
       <article>
         <figcaption>...the blood bank</figcaption>
         <img src={`http://www.stevensegallery.com/200/20${(Math.floor(Math.random() * 5) + 1)}`}/>
       </article>
     );
   }
 }
 
...

  render() {
    return (
      <AccordionWithHeader>
        {[1, 2, 3, 4].map((item, i) => {
          return (
            <AccordionNode key={i}>
              <AccordionHeader template={<HeaderTpl />} horizontalAlignment="centerSpaceBetween" />
              <AccordionPanel template={<BodyTpl />} />
            </AccordionNode>
          );
        })}
      </AccordionWithHeader>
    );
  }

```


### Pass in a component as children:


```javascript
…
  render() {
    return (
      <AccordionWithHeader>
        {[1, 2, 3, 4].map((item, i) => {
          return (
            <AccordionNode key={i} className="foobar-node">
              <AccordionHeader className="foobar-header"
                               titleColor="#607D8B"
                               horizontalAlignment="centerSpaceAround"
                               verticalAlignment="center">
                <HeaderTpl />
              </AccordionHeader>
              <AccordionPanel>
                <BodyTpl />
              </AccordionPanel>
            </AccordionNode>
          );
        })}
      </AccordionWithHeader>
    );
  }
…
```

### ...or as plain HTML
 

```javascript
…
  render() {
    return (
      <AccordionWithHeader>
        {[1, 2, 3, 4].map((item, i) => {
          return (
            <AccordionNode key={i}>
              <AccordionHeader>
                <div>
                  <h2>Some title!</h2>
                </div>
              </AccordionHeader>
              <AccordionPanel>
                <section>
                  <header>Some body information etc</header>
                  <article>Interesting things...</article>
                </section>
              </AccordionPanel>
            </AccordionNode>
          );
        })}
      </AccordionWithHeader>
    );
  }
…
```


## options / PropTypes

#### AccordionNode
| Property | Type | Description | Default |
|:---|:---|:---|:---|
| className | `String` | Custom classname applied to root item div | `accordion-node` |


#### AccordionHeader
| Property | Type | Description | Default |
|:---|:---|:---|:---|
| title | `String` | For simple headers, a title will render an `<h1>` and disallow child elements | `null` |
| titleColor | `String` | some valid CSS color or rgb or hex | `black` |
| horizontalAlignment | `String` | One of: 'centerSpaceBetween', 'centerSpaceAround', 'center', 'left', 'right'. Maps to corresponding flex-box CSS property | `centerSpaceAround` |
| verticalAlignment | `String` | One of: 'top', 'center', 'bottom' | `center` |
| className | `String` | Custom classname applied to root div | `accordion-header` |
| style | `Object` | Inline styles applied to root div | `null` |
| template | `Element` | Component to be rendered as a template | `null` |

#### AccordionPanel
| Property | Type | Description | Default |
|:---|:---|:---|:---|
| template | `Element` | Component to be rendered as a template | `null` |


--------------

### Roadmap

- allow one panel active
- add callbacks to open/close methods


