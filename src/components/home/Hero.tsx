import ExternalLink from '../root/ExternalLink';
import FadeIn from '../root/FadeIn';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiFileList3Fill } from 'react-icons/ri';
import PageHeading from '../root/PageHeading';
import PageButton from '../root/PageButton';
import Link from 'next/link';

export default function Hero(): JSX.Element {
  return (
    <div className='max-w-2xl pt-40 sm:pt-64'>
      <PageHeading title='Hi, I’m Raphael Gatchalian.'>
        <h2 className='flex text-xl sm:text-2xl text-light font-thin pb-8'>
          he/him/
          <ExternalLink href='https://en.wiktionary.org/wiki/siya#Tagalog' className='hover:text-lighter'>
            siya
          </ExternalLink>
          &nbsp;•&nbsp;
          <span className='flex space-x-3 my-auto'>
            <ExternalLink href='https://www.linkedin.com/in/raphaelg09/' className='hover:text-lighter'>
              <FaLinkedin />
            </ExternalLink>
            <ExternalLink href='https://github.com/raphaeling' className='hover:text-lighter'>
              <FaGithub />
            </ExternalLink>
            <Link href='/assets/resume.pdf' className='text-light hover:text-lighter'>
              <RiFileList3Fill />
            </Link>
          </span>
        </h2>
      </PageHeading>
      <FadeIn order={2}>
        <div className='font-thin text-base sm:text-lg leading-6'>
          <p>
            I’m a lover of software engineering, design, community, and paving intersections in between.
          </p>
          <br />
          <p>
            I recently graduated Cum Laude from&nbsp;
            <ExternalLink
              href='https://www.ucla.edu/'
              className='underline-offset-4
              text-light hover:text-lighter'>
              UCLA
            </ExternalLink>
            &nbsp;in Linguistics & Computer Science with minors in&nbsp;
            <ExternalLink
              href='https://dh.ucla.edu/'
              className='underline-offset-4 text-light hover:text-lighter'>
              Digital Humanities
            </ExternalLink>
            &nbsp;and&nbsp;
            <ExternalLink
              href='https://catalog.registrar.ucla.edu/major/2022/cognitivesciencebs?siteYear=2022'
              className='underline-offset-4 text-light hover:text-lighter'>
              Cognitive Science</ExternalLink>
            . I’ve previously built software for&nbsp;
            <ExternalLink
              href='https://www.tesla.com/'
              className='underline-offset-4 text-light hover:text-lighter'>
              Tesla
            </ExternalLink>
            ,&nbsp;
            <ExternalLink
              href='https://www.farm2people.org/'
              className='underline-offset-4 text-light hover:text-lighter'>
              Farm2People
            </ExternalLink>
            , and&nbsp;
            <ExternalLink
              href='https://www.linkedin.com/company/disney-streaming/'
              className='underline-offset-4 text-light hover:text-lighter'>
              Disney Streaming
            </ExternalLink>
            , and held leadership roles at&nbsp;
            <ExternalLink
              href='https://www.uclaacm.com/'
              className='underline-offset-4 text-light hover:text-lighter'>
              ACM at UCLA
            </ExternalLink>
            ,&nbsp;
            <ExternalLink
              href='https://www.exploretech.la/'
              className='underline-offset-4 text-light hover:text-lighter'>
              exploretech.la
            </ExternalLink>
            , and&nbsp;
            <ExternalLink
              href='https://instagram.com/samahangpilipino'
              className='underline-offset-4 text-light hover:text-lighter'>
              Samahang Pilipino
            </ExternalLink>
            &nbsp;in undergrad. Right now, I’m focused on advancing my front-end dev skills while continuing
            to gain experience in the full stack.
            {/* As an undergraduate, I advocated for the needs of college
            students in tech at ACM at UCLA and hosted dev workshops and panels for high school students from underserved
            areas of Los Angeles at exploretech.la. */}
          </p>
          <PageButton label='View my resume' href='/assets/resume.pdf' className='bg-light hover:bg-lighter text-white font-display text-darker font-bold py-2 px-4 mt-8' />
        </div>
      </FadeIn>
    </div>
  );
}
