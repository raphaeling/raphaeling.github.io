import PageHeading from '@/components/root/PageHeading';
import PageBody from '@/components/root/PageBody';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Experience(): JSX.Element {
  return (
    <Fragment>
      <PageHeading title='Experience.'>
        <h2 className='text-2xl text-light font-thin pb-8'>
          Things I did.
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
    </Fragment>
  );
}
