import Link from 'next/link';

export default function ExperienceBody(): JSX.Element {
  return (
    <div className='font-thin'>
      <p>More functionality coming soon!&nbsp;
        <Link href='assets/resume.pdf' className='transition font-bold text-light hover:text-lighter'>Refer to my resume for now</Link> :)</p>
    </div>
  );
}
