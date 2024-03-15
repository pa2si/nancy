'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface CombinedContextType {
  isHeroVisible: boolean;
  setHeroVisibility: (isVisible: boolean) => void;
  itemsToShow: number;
  showMoreItems: () => void;
}

const CombinedContext = createContext<CombinedContextType | undefined>(
  undefined
);

export const useCombinedContext = () => {
  const context = useContext(CombinedContext);
  if (!context) {
    throw new Error(
      'useCombinedContext must be used within a CombinedProvider'
    );
  }
  return context;
};

export const CombinedProvider: React.FC<{
  children: ReactNode;
  initialItems: number;
  increment: number;
}> = ({ children, initialItems, increment }) => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(initialItems);

  const setHeroVisibility = (isVisible: boolean) => {
    setIsHeroVisible(isVisible);
  };

  const showMoreItems = () => {
    setItemsToShow((prev) => prev + increment);
  };

  return (
    <CombinedContext.Provider
      value={{ isHeroVisible, setHeroVisibility, itemsToShow, showMoreItems }}
    >
      {children}
    </CombinedContext.Provider>
  );
};
