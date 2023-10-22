import FadeIn from './fade-in';

export default function Hero(): JSX.Element {
  return (
    <div className='max-w-2xl'>
      <FadeIn className=''>
        <div className='font-display'>
          <h1 className='text-4xl pb-2'>Hi, I’m Raphael Gatchalian.</h1>
          <h2 className='text-2xl text-light font-thin pb-8'>
            he/him/<a target='_blank' href='https://en.wiktionary.org/wiki/siya#Tagalog'>siya</a>
          </h2>
        </div>
      </FadeIn>
      <FadeIn className='delay-200'>
        <div className='font-thin text-lg leading-6'>
          <p>
            I’m a lover of software engineering, design, community, and paving intersections in between.
            {/* <span className="text-darkest">
              &nbsp;And if you couldn’t tell from the site colors, I’m also a die-hard matcha enthusiast.
            </span> */}
          </p>
          <br />
          <p>
            I recently graduated Cum Laude from UCLA in Linguistics & Computer Science with minors in Digital
            Humanities and Cognitive Science. I’ve previously built software for an electric car company, an
            agricultural non-profit, and a league of streaming platforms. Right now, I’m focused on advancing my
            skills in front-end development while continuing to gain experience in the full stack.
            {/* As an undergraduate, I advocated for the needs of college
            students in tech at ACM at UCLA and hosted dev workshops and panels for high school students from underserved
            areas of Los Angeles at exploretech.la. */}
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
