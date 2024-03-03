'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ScrollContextType {
  isHeroVisible: boolean;
  setHeroVisibility: (isVisible: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const setHeroVisibility = (isVisible: boolean) => {
    setIsHeroVisible(isVisible);
  };

  return (
    <ScrollContext.Provider value={{ isHeroVisible, setHeroVisibility }}>
      {children}
    </ScrollContext.Provider>
  );
};
