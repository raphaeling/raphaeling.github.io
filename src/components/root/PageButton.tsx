import Link from 'next/link';

export default function PageButton({
  label,
  href,
  className,
}: {
  label: string,
  href: string,
  className: string,
}
) {
  return (
    <Link href={href}>
      <button className={className}>
        {label}
      </button>
    </Link>
  );
}
