import FadeIn from './FadeIn';

export default function PageBody({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <FadeIn order={2}>
      <div className='font-thin'>
        {children}
      </div>
    </FadeIn>
  );
}
