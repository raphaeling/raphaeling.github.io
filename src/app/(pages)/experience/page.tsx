import FadeIn from '@/components/root/FadeIn';
import ExperienceHeading from '@/components/experience/ExperienceHeading';
import ExperienceBody from '@/components/experience/ExperienceBody';

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
