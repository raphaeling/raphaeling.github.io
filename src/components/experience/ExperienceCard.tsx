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
    <div className='flex relative mb-6 py-6 px-6 transition hover:bg-dark hover:bg-opacity-20 hover:shadow-sm rounded-xl font-display font-thin'>
      <div className='text-right text-xl flex-none w-32 lg:w-44 px-4'>
        <h1 className='font-extrabold mb-1'>
          {workplace}
        </h1>
        <h3 className='leading-snug text-dark text-base lg:leading-snug'>
          {`${startDate} - ${endDate}`}
        </h3>
      </div>
      <div className=''> {/* To be used for a line connector for each experience in the future*/}
        .
      </div>
      <div className='grow px-4'>
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
