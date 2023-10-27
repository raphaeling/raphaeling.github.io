import Link from 'next/link';
import ExternalLink from './ExternalLink';

export default function Footer() {
  return (
    <div className='px-12 lg:px-24 font-body text-md text-dark font-thin justify-center pt-6 pb-6'>
      <p>
        Made with ♡ + matcha using&nbsp;
        <ExternalLink href='https://nextjs.org/' underline className='hover:text-light'>
          Next.js
        </ExternalLink>
        &nbsp;and&nbsp;
        <ExternalLink href='https://tailwindcss.com/' underline className='hover:text-light'>
          Tailwind CSS
        </ExternalLink>
        &nbsp;& deployed with&nbsp;
        <ExternalLink href='https://vercel.com/' underline className='hover:text-light'>
          Vercel
        </ExternalLink>
        . Check out my&nbsp;
        <ExternalLink href='https://github.com/raphaeling/raphaeling.github.io' underline className='hover:text-light'>
          source code
        </ExternalLink>
      </p>
      <p className='mt-2 font-display text-sm lg:invisible'>
        <Link href='/' className='transition hover:text-light'>
          about
        </Link>
        &nbsp;•&nbsp;
        <Link href='/experience' className='transition hover:text-light'>
          experience
        </Link>
        &nbsp;•&nbsp;
        <Link href='/projects' className='transition hover:text-light'>
          projects
        </Link>
        &nbsp;•&nbsp;
        <Link href='/skills' className='transition hover:text-light'>
          skills
        </Link>
        &nbsp;•&nbsp;
        <Link href='/more' className='transition hover:text-light'>
          more
        </Link>
      </p>
    </div>
  );
}
