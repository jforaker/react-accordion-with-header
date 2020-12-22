import React, { Children, cloneElement, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  useAccordionState,
  AccordionWithHeaderProvider,
} from './accordion-with-header-context';
import { validateActive } from './utils';

export function AccordionWithHeaderConsumer(props) {
  const [active, setActive] = useAccordionState();

  useEffect(() => {
    // mount
    const { children, firstOpen, active } = props;

    if (!children) {
      throw new Error('AccordionWithHeader must have children!');
    }

    validateActive(
      active,
      children.map((_, i) => i),
      firstOpen
    ); // internal check to validate correct usages

    if (firstOpen) {
      setActive([0]); // internal
      if (props.onChange) {
        props.onChange([0]); // send to external
      }
    }
  }, []);

  useEffect(() => {
    // updates, controlled etc
    setActive(props.active);
  }, [props.active]);

  useEffect(() => {
    // Only needs to render if children have been dynamically aded/removed
    validateActive(
      active,
      props.children.map((_, i) => i)
    );
  }, [props.children.length]);

  const onClickHeader = (panelIndex) => {
    const baseNewActive = props.multipleOkay ? active : [];
    const filtered = (arr) => arr.filter((p) => p !== panelIndex).sort();
    let newActive;

    if (active.includes(panelIndex)) {
      // panel was open, just filter it out of the active array
      newActive = filtered(baseNewActive);
      setActive(newActive);
    } else {
      // panel was not open, add it to active array along with previously open panels
      newActive = [...filtered(baseNewActive), panelIndex];
      setActive(newActive);
    }

    if (props.onChange) {
      // pass array of active panels back to onChange props function
      props.onChange(newActive);
    }
    if (props.actionCallback && !props.onChange) {
      console.warn(
        `The actionCallback prop will be deprecated in a future. Prefer "onChange" instead.`
      );
      props.actionCallback(newActive);
    }
  };

  const checkExpanded = (indexKey, activePanelOrPanelsProps) => {
    if (Array.isArray(activePanelOrPanelsProps)) {
      //multipleOkay is true
      return activePanelOrPanelsProps.some((panel) => panel === indexKey);
    } else {
      return indexKey === activePanelOrPanelsProps;
    }
  };

  const { className, style, children } = props;
  const cx = `${className} accordion-with-header-root`.trim();

  return (
    <div className={cx} style={{ ...style }}>
      {Children.map(children, (item, index) => {
        // lets render the <AccordionNode /> and its kids
        return cloneElement(item, {
          indexKey: index, // needed for child ref if template prop is used
          key: index,
          onClickHeader: () => onClickHeader(index),
          isExpanded: checkExpanded(index, active),
        });
      })}
    </div>
  );
}

export default function AccordionWithHeader(props) {
  return (
    <AccordionWithHeaderProvider>
      <AccordionWithHeaderConsumer {...props}>
        {props.children}
      </AccordionWithHeaderConsumer>
    </AccordionWithHeaderProvider>
  );
}

AccordionWithHeader.propTypes /* remove-proptypes */ = {
  className: PropTypes.string,
  style: PropTypes.object,
  firstOpen: PropTypes.bool,
  multipleOkay: PropTypes.bool,
  active: PropTypes.array,
  actionCallback: PropTypes.func, // deprecate
  onChange: PropTypes.func,
};

AccordionWithHeader.defaultProps = {
  active: [],
  panels: [],
  className: '',
  multipleOkay: false,
  firstOpen: false,
  style: {
    boxShadow: '0 0 0 1px rgba(63,63,68,.05), 0 1px 3px 0 rgba(63,63,68,.15)',
    borderRadius: 3,
  },
};
