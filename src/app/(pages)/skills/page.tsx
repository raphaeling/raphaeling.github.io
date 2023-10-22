import FadeIn from '@/components/root/fade-in';

export default function Skills(): JSX.Element {
  return (
    <FadeIn>
      <div className='max-w-2xl'>
        <div className='font-display'>
          <h1 className='text-4xl pb-2'>Skills.</h1>
          <h2 className='text-2xl text-light font-thin pb-8'>
            Things I know.
          </h2>
        </div>
      </div>
    </FadeIn>
  );
}
