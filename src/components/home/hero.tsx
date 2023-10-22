import ExternalLink from '../root/external-link';
import FadeIn from '../root/fade-in';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero(): JSX.Element {
  return (
    <div className='max-w-2xl'>
      <div className='font-display'>
        <FadeIn>
          <h1 className='text-4xl pb-2'>Hi, I’m Raphael Gatchalian.</h1>
        </FadeIn>
        <FadeIn order={1}>
          <h2 className='flex text-2xl text-light font-thin pb-8'>
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
            </span>
          </h2>
        </FadeIn>
      </div>
      <FadeIn order={2}>
        <div className='font-thin text-lg leading-6'>
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
            . Right now, I’m focused on advancing my front-end dev skills while continuing
            to gain experience in the full stack.
            {/* As an undergraduate, I advocated for the needs of college
            students in tech at ACM at UCLA and hosted dev workshops and panels for high school students from underserved
            areas of Los Angeles at exploretech.la. */}
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
