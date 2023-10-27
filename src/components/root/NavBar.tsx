'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navItems from '@/utils/navItems';

// In the future, possibly change response to viewport being less than large to
// a fixed top navbar rather than a sidebar list that stays at the top
export default function NavBar(): JSX.Element {
  const currentPage = usePathname();
  return (
    <nav className='w-48 absolute inset-y-0 right-0 pt-12 lg:pt-20 pr-12 mr-2'>
      <ul className='flex flex-col text-right lg:fixed z-10 w-40 font-display font-thin text-dark text-2xl'>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`
              transition hover:text-light ${item.style} ${currentPage === item.url ? 'text-light font-bold' : ''}`}>
            <Link href={`${item.url}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
