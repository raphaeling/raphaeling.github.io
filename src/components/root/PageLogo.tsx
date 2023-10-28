'use client';

import Logo from './Logo';
import FadeIn from './FadeIn';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiFileList3Fill } from 'react-icons/ri';
import ExternalLink from './ExternalLink';

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
          <div className='flex flex-col sm:flex-row text-xl sm:text-2xl'>
            <Link href='/'>
              <Logo className={'transition text-light hover:text-lighter max-h-16 w-16 mr-4'}/>
            </Link>
            <span className='flex space-x-1 mt-2 sm:space-x-3 sm:ml-1 sm:mt-1 mb-auto'>
              <ExternalLink href='https://www.linkedin.com/in/raphaelg09/' className='text-dark hover:text-light'>
                <FaLinkedin />
              </ExternalLink>
              <ExternalLink href='https://github.com/raphaeling' className='text-dark hover:text-light'>
                <FaGithub />
              </ExternalLink>
              <Link href='/assets/resume.pdf' className='text-dark hover:text-light'>
                <RiFileList3Fill />
              </Link>
            </span>
          </div>
        </FadeIn>
      </div>
    )
  );
}
