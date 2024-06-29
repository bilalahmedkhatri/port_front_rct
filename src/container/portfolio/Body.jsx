import {
  About,
  ContactBlock,
  FirstView,
  MobileRes,
  Resume,
  Skill,
  ProjectView,
  Testimonial,
} from "../../component";

export default function Body() {
  return (
    <>
      <MobileRes />
      <FirstView />
      <About />
      <Skill />
      <Resume />
      <ProjectView />
      <Testimonial />
      <ContactBlock />
    </>
  );
}
