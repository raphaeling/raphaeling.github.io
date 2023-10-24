import PageBody from '@/components/root/PageBody';
import PageHeading from '@/components/root/PageHeading';
import Link from 'next/link';
import { Fragment } from 'react';

// Future: talk about design, leadership, and favorites (music, movies, books, food, games)
export default function More(): JSX.Element {
  return (
    <Fragment>
      <PageHeading title='More of me.'>
        <h2 className='text-2xl text-light font-thin pb-8'>
          Other things I do!
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
