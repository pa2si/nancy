'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextInterface {
  isModalOpen: boolean;
  modalImageUrl: string;
  openImageModal: (imageUrl: string) => void;
  closeModal: () => void;
}

const defaultState = {
  isModalOpen: false,
  modalImageUrl: '',
  openImageModal: () => {},
  closeModal: () => {},
};

const AppContext = createContext<AppContextInterface>(defaultState);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');

  const openImageModal = (imageUrl: string) => {
    console.log('Modal is opening from context');

    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ isModalOpen, modalImageUrl, openImageModal, closeModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
