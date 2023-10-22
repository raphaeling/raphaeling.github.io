import FadeIn from '@/components/fade-in';

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
      </div>
    </FadeIn>
  );
}
