import FadeIn from '@/components/fade-in';

export default function ExperienceHeading(): JSX.Element {
  return (
    <FadeIn>
      <div className='max-w-2xl'>
        <div className='font-display'>
          <h1 className='text-4xl pb-2'>Experience.</h1>
          <h2 className='text-2xl text-light font-thin pb-8'>
            Things I did.
          </h2>
        </div>
      </div>
    </FadeIn>
  );
}
