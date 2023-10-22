import ExternalLink from './external-link';

export default function Footer() {
  return (
    <div className='px-12 md:px-24 font-body text-md text-dark font-thin justify-center pt-6 sm:pt-24 pb-6'>
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
    </div>
  );
}
