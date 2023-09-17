import React from 'react';

interface ModalProps {
    children: any;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 fixed inset-0" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-8 m-4 max-w-xl mx-auto relative">
        <h2 className="text-2xl mb-4 text-blue-900">{title}</h2>
        {children}
        <span className="absolute top-0 right-0 m-4" onClick={onClose}>
          <button className="text-2xl leading-none text-blue-900">×</button>
        </span>
      </div>
    </div>
  );
};

export default Modal;
