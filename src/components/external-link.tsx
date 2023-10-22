export default function ExternalLink({
  children,
  href,
  className,
  underline,
}: {
  children: React.ReactNode,
  href: string,
  className?: string,
  underline?: boolean
}) {
  return (
    <span>
      <a href={`${href}`} target='_blank' className={`transition font-bold ${underline ? 'underline' : ''} ${className}`}>
        {children}
      </a>
    </span>
  );
}
