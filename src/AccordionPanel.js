import React, {
  useState,
  useRef,
  useEffect,
  Children,
  cloneElement,
} from 'react';
import PropTypes from 'prop-types';

// Wait for images to load before calculating height of element
const preloadImages = (images = []) => {
  let imagesLoaded = 0;
  const imgLoaded = (data) => {
    imagesLoaded++;
    if (imagesLoaded === images.length) return;
  };
  images.forEach((element) => {
    let img = new Image();
    img.onload = img.onerror = imgLoaded;
    img.src = element.src;
  });
};

const defaultStyle = {
  overflow: 'hidden',
  padding: 0, // TODO should be only when not expanded
};

export default function AccordionPanel(props) {
  let accordionPanelRef = useRef(null);
  const [panelHeight, setPanelHeight] = useState(0);
  const { className, isExpanded, style, speed } = props;
  const styles = {
    transition: `all ${speed}ms ease-in-out`,
    maxHeight: isExpanded ? panelHeight : 0,
    opacity: isExpanded ? 1 : 0,
  };
  const itemsRefs = useRef(new Map());

  useEffect(() => {
    const el = accordionPanelRef.current;
    if (!el) return; // tests only?
    const images = el.querySelectorAll('img');

    if (images.length > 0) {
      preloadImages(images);
    }
  }, []);

  useEffect(() => {
    if (itemsRefs.current) {
      // 1. for multiple children passed in, iterate over each dom node's ref to get height
      // 2. then add them up to get and set the total panelHeight value
      const height = Array.from(itemsRefs.current.values())
        .map((el) => el.clientHeight)
        .reduce((prev, curr) => prev + curr, 0);

      setPanelHeight(height);
    }
  }, [itemsRefs]);

  const renderChildren = () => {
    if (!props.template && !props.children) {
      throw new Error('AccordionPanel must have at least one child!');
    }

    /***************************************************************
     create a ref so we calculate its height on mount
     this way we know how high to expand the panel
     ***************************************************************/

    const wrapComponent = (components) => {
      return Children.map(components, (child, index) => {
        const WrappedComponent = React.forwardRef((props, ref) => (
          <div ref={ref} className={`acc-ref-${index}`}>
            {child}
          </div>
        ));
        return (
          <WrappedComponent ref={(el) => itemsRefs.current.set(index, el)} />
        );
      });
    };

    if (props.template) {
      // for template prop that contains a class component
      console.warn(
        `The template prop will be deprecated in the future. 
          Prefer passing in your component directly as children: https://reactjs.org/docs/composition-vs-inheritance.html`
      );
      return wrapComponent(cloneElement(props.template));
    }

    return wrapComponent(props.children);
  };

  const cx = `${className} accordion-panel ${
    isExpanded ? 'is-open' : ''
  }`.trim();

  return (
    <div
      ref={accordionPanelRef}
      className={cx}
      style={{ ...style, ...defaultStyle, ...styles }}
    >
      {renderChildren()}
    </div>
  );
}

AccordionPanel.propTypes /* remove-proptypes */ = {
  className: PropTypes.string,
  style: PropTypes.object,
  speed: PropTypes.number,
  isExpanded: PropTypes.bool,
};

AccordionPanel.defaultProps = {
  speed: 250,
  className: '',
  style: {
    padding: 10,
    boxShadow:
      'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 1px 1px 0px 0px',
    borderRadius: 3,
  },
};
