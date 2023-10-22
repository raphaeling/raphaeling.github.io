'use client';

import React, { useEffect, useState } from 'react';

export default function FadeIn({
  children,
  className,
}: {
  children: JSX.Element
  className: string | undefined
}) {
  const [animate, setAnimate] = useState('opacity-0 translate-y-10');
  // const delayTime = 1000 + order * 1000;
  // const delay = "delay-" + delayTime;
  // console.log(delay);

  useEffect(() => {
    setAnimate('opacity-100 translate-y-0');
  }, []);

  console.log(animate);

  return (
    <div className={`transition duration-700 ease-in-out ${className} ${animate}`}>
      {children}
    </div>
  );
}
