import ExternalLink from './ExternalLink';

export default function Footer() {
  return (
    <div className='px-12 lg:px-24 font-body text-sm sm:text-base text-dark font-thin justify-center pt-6 pb-4'>
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
      {/* TODO: Separate client-side component to capture pathname to scroll back to top
      <p>
        <Link>
          Scroll back to top
        </Link>
      </p> */}
    </div>
  );
}
