import PageBody from '@/components/root/PageBody';
import PageHeading from '@/components/root/PageHeading';
import Link from 'next/link';

export default function Projects(): JSX.Element {
  return (
    <div className='pt-32'>
      <PageHeading title='Projects.'>
        <h2 className='text-2xl text-light font-thin pb-8'>
          Things I made.
        </h2>
      </PageHeading>
      <PageBody>
        <p>
          More functionality coming soon!&nbsp;
          <Link href='assets/resume.pdf' className='transition font-bold text-light hover:text-lighter'>
            Refer to my resume for now
          </Link>
          &nbsp;:)
        </p>
      </PageBody>
    </div>
  );
}
