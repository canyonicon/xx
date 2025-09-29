import React, { createContext, useContext, useState } from 'react';

// Create a context for modals
const ModalContext = createContext();

// Create a ModalProvider to manage the modal state and functions
export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  const openModal = (modalId) => {
    setModals((prevModals) => [...prevModals, modalId]);
  };

  const closeModal = (modalId) => {
    setModals((prevModals) => prevModals.filter((id) => id !== modalId));
  };

  // Provide the modal state and functions through context
  const contextValue = {
    modals,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

// Create custom hooks to easily access the modal context
export const useModal = (modalId) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  const isModalOpen = context.modals.includes(modalId);
  const openModal = () => context.openModal(modalId);
  const closeModal = () => context.closeModal(modalId);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};
