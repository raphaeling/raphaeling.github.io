import FadeIn from '@/components/root/fade-in';
import Link from 'next/link';

export default function Skills(): JSX.Element {
  return (
    <FadeIn>
      <div className='max-w-2xl'>
        <div className='font-display'>
          <h1 className='text-4xl pb-2'>Projects.</h1>
          <h2 className='text-2xl text-light font-thin pb-8'>
            Things I made.
          </h2>
        </div>
        <div className='font-thin'>
          <p>More functionality coming soon!&nbsp;
            <Link href='assets/resume.pdf' className='transition font-bold text-light hover:text-lighter'>Refer to my resume for now</Link> :)</p>
        </div>
      </div>
    </FadeIn>
  );
}
