import React, { useState, createContext, useContext } from 'react';

const AccordionWithHeaderContext = createContext();

const AccordionWithHeaderProvider = ({ children }) => {
  const [active, setActive] = useState([]);

  return (
    <AccordionWithHeaderContext.Provider value={[active, setActive]}>
      {children}
    </AccordionWithHeaderContext.Provider>
  );
};

const useAccordionState = () => {
  const context = useContext(AccordionWithHeaderContext);
  if (context === undefined) {
    throw new Error(
      'useAccordionState must be used within a AccordionWithHeaderContext'
    );
  }
  return context;
};

export { AccordionWithHeaderProvider, useAccordionState };
