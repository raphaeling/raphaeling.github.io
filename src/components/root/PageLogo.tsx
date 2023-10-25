'use client';

import Logo from './Logo';
import FadeIn from './FadeIn';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function PageLogo({
  className,
}: {
  className?: string,
}) {
  const currentPage = usePathname();
  return (
    (currentPage !== '/') && (
      <div className={`${className}`}>
        <FadeIn order={-1}>
          <Link href='/'>
            <Logo className={'transition text-dark hover:text-light max-h-16 w-16'}/>
          </Link>
        </FadeIn>
      </div>
    )
  );
}
