'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navItems from '@/utils/nav-items';

export default function NavBar(): JSX.Element {
  const currentPage = usePathname();
  return (
    <nav className='w-48 absolute inset-y-0 right-0 pt-12 md:pt-24 pr-12 mr-10'>
      <ul className='lg:fixed z-10 w-48 font-display font-thin text-right text-dark text-2xl'>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`
              transition hover:text-light ${item.url === currentPage ? 'text-light font-bold' : ''}`}>
            <Link href={`${item.url}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
