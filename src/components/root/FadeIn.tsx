'use client';

import React, { useEffect, useState } from 'react';

// Wrapper component that takes in an input order to decide the amount of delay.
// Currently accepts up to 4 different delay levels but we'll see if we need more... 
export default function FadeIn({
  children,
  order = 0,
}: {
  children: JSX.Element | JSX.Element[],
  order?: number
}) {
  const [animate, setAnimate] = useState('opacity-0 translate-y-10');
  
  let delay = 'delay-0';
  switch (order) {
    case 0:
      delay = 'delay-75';
      break;
    case 1:
      delay = 'delay-100';
      break;
    case 2:
      delay = 'delay-200';
      break;
    case 3:
      delay = 'delay-300';
      break;
    case -1:
      delay = '';
      break;
    default:
      delay = 'delay-400';
  }

  useEffect(() => {
    setAnimate('opacity-100 translate-y-0');
  }, []);
  
  return (
    <div className={`transition duration-700 ease-in-out ${delay} ${animate}`}>
      {children}
    </div>
  );
}
