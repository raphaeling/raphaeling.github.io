export default function ExperienceCard({
  workplace,
  title,
  startDate,
  endDate,
  description,
  skills,
}: {
  workplace: string,
  title: string,
  startDate: string,
  endDate: string,
  description: string,
  skills: string[],
}): JSX.Element {
  return (
    <div className='bg-darker sm:flex sm:px-6 sm:py-6 relative mb-6 transition sm:hover:bg-dark sm:hover:bg-opacity-20 sm:hover:shadow-sm rounded-xl font-display font-thin'>
      <div className='sm:text-right sm:w-40 sm:px-4 text-xl flex-none lg:w-44'>
        <h1 className='font-extrabold mb-1'>
          {workplace}
        </h1>
        <h3 className='leading-snug text-dark text-base lg:leading-snug'>
          {`${startDate} - ${endDate}`}
        </h3>
      </div>
      <div className='hidden sm:block'> {/* To be used for a line connector for each experience in the future*/}
        .
      </div>
      <div className='grow sm:px-4 mt-2 sm:mt-0'>
        <h2 className='text-xl text-light mb-1'>
          {title}
        </h2>
        <p className='font-body text-base leading-relaxed'>
          {description}
        </p>
        <div className='flex flex-wrap'>
          {skills.map((skill: string, index: number) => {
            const colorStyles = (index % 2 === 0) ? 'bg-light text-darkest' : 'bg-dark text-light';
            return (
              <span key={index} className={`${colorStyles} font-normal text-sm px-2 py-1 mr-3 mt-3`}>
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
