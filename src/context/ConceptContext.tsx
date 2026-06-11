import React, { createContext, useContext, useState, useEffect } from 'react';

export type UIConcept = 'neo-classic' | 'brutalist' | 'skeuomorphic' | 'avant-garde' | 'cyber-gold' | 'ottoman-palace' | 'monolithic-matte' | 'world-cup';

interface ConceptContextType {
  concept: UIConcept;
  setConcept: (concept: UIConcept) => void;
}

const ConceptContext = createContext<ConceptContextType>({
  concept: 'neo-classic',
  setConcept: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useConcept = () => useContext(ConceptContext);

const getInitialConcept = (): UIConcept => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('huerrem_ui_concept') as UIConcept;
    if (saved && ['neo-classic', 'brutalist', 'skeuomorphic', 'avant-garde', 'cyber-gold', 'ottoman-palace', 'monolithic-matte', 'world-cup'].includes(saved)) {
      return saved;
    }
  }
  return 'neo-classic';
};

export const ConceptProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [concept, setConcept] = useState<UIConcept>(getInitialConcept);

  useEffect(() => {
    document.documentElement.setAttribute('data-concept', concept);
  }, [concept]);

  const handleSetConcept = (c: UIConcept) => {
    setConcept(c);
    localStorage.setItem('huerrem_ui_concept', c);
    
    // Set a global attribute so global CSS can hook into it
    document.documentElement.setAttribute('data-concept', c);
  };

  return (
    <ConceptContext.Provider value={{ concept, setConcept: handleSetConcept }}>
      {children}
    </ConceptContext.Provider>
  );
};
