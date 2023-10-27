import PageHeading from '@/components/root/PageHeading';
import PageBody from '@/components/root/PageBody';
import ExperienceCard from '@/components/experience/ExperienceCard';
import experienceItems from '@/content/experienceItems';

export default function Experience(): JSX.Element {
  return (
    <div className='pt-32'>
      <PageHeading title='Experience.'>
        <h2 className='text-2xl text-light font-thin pb-8'>
          Things I’ve done.
        </h2>
      </PageHeading>
      <PageBody className=''>
        {experienceItems.map((exp) => {
          return (
            <>
              <ExperienceCard
                workplace={exp.workplace}
                title={exp.title}
                startDate={exp.startDate}
                endDate={exp.endDate}
                description={exp.description}
                skills={exp.skills}
              />
            </>
          );
        })}
        {/* <ExperienceCard />
        <ExperienceCard /> */}
      </PageBody>
    </div>
  );
}
