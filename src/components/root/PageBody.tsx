import FadeIn from './FadeIn';

export default function PageBody({
  children,
  className,
}: {
  children: React.ReactNode,
  className?: string,
}): JSX.Element {
  return (
    <FadeIn order={2}>
      <div className={`font-thin max-w-5xl lg:mr-32 ${className}`}>
        {children}
      </div>
    </FadeIn>
  );
}
