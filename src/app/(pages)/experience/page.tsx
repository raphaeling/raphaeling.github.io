import FadeIn from '@/components/root/fade-in';
import ExperienceHeading from '@/components/experience/experience-heading';
import ExperienceBody from '@/components/experience/experience-body';

export default function Experience(): JSX.Element {
  return (
    <div>
      <FadeIn>
        <ExperienceHeading />
      </FadeIn>
      <FadeIn order={1}>
        <ExperienceBody />
      </FadeIn>
    </div>
  );
}
