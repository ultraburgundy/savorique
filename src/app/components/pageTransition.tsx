"use client"
import { Transition } from '@headlessui/react';
import { useState, useEffect } from 'react';

type PageTransitionProps = {
    children: React.ReactNode;
  };

const PageTransition: React.FC<PageTransitionProps> = ({ children })=> {
  const [show, setShow] = useState(false);

  useEffect(() => {
      setShow(false);

      setTimeout(() => {
        setShow(true);
      }, 100);
    setShow(true)
  });

  return (
    <Transition
      show={show}
      enter="fade-enter"
      enterFrom="fade-enter"
      enterTo="fade-enter-active"
      leave="fade-exit"
      leaveFrom="fade-exit"
      leaveTo="fade-exit-active"
    >
      {children}
    </Transition>
  );
};

export default PageTransition;
