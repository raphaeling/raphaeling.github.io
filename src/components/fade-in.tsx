'use client';

import React, { useEffect, useState } from 'react';

// Wrapper component that takes in an input order to decide the amount of delay. Currently set to just either 0 or 200
// delay to maximize user experience
export default function FadeIn({
  children,
  order = 0,
}: {
  children: JSX.Element,
  order?: number
}) {
  const [animate, setAnimate] = useState('opacity-0 translate-y-10');
  const delay = (order === 0) ? 'delay-0' : 'delay-200';

  useEffect(() => {
    setAnimate('opacity-100 translate-y-0');
  }, []);
  
  return (
    <div className={`transition duration-700 ease-in-out ${delay} ${animate}`}>
      {children}
    </div>
  );
}
