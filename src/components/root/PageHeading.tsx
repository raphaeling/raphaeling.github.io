import FadeIn from './FadeIn';

export default function PageHeading({
  children,
  title,
}: {
  children: React.ReactNode,
  title: string,
}): JSX.Element {
  return (
    <div className='max-w-2xl font-display'>
      <FadeIn>
        <h1 className='text-4xl pb-2'>{title}</h1>
      </FadeIn>
      <FadeIn order={1}>
        <span>{children}</span>
      </FadeIn>
      {/* <h2 className='text-2xl text-light font-thin pb-8'>
        Things I made.
      </h2> */}
    </div>
  );
}
