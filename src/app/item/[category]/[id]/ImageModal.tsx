'use client';

import { useGlobalContext } from '@/utils/context'; // Update the import path as needed
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import styles from './Modal.module.css'; // Ensure the CSS module is correctly imported
import { useEffect } from 'react';

const ImageModal = () => {
  const { isModalOpen, modalImageUrl, closeModal } = useGlobalContext();

  useEffect(() => {
    console.log(`Modal URL: ${modalImageUrl}, isOpen: ${isModalOpen}`);
    // You can also place modal opening logic here if modalImageUrl is the trigger
  }, [modalImageUrl, isModalOpen]);

  if (!isModalOpen) return null;

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // Assert that e.target is an HTMLElement before accessing classList
    if ((e.target as HTMLElement).classList.contains(styles.modal_overlay)) {
      closeModal();
    }
  };

  return (
    <div
      className={`${styles.modal_overlay} ${
        isModalOpen ? styles.modal_show : ''
      }`}
      onClick={handleOverlayClick}
    >
      <div className={styles.modal__container}>
        <Image
          src={modalImageUrl}
          alt="Modal Content"
          sizes="80vw"
          fill
          className="absolute object-contain p-8"
          priority
        />
        <button
          className={`text-red-600 ${styles.close_modal_btn}`}
          onClick={closeModal}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
