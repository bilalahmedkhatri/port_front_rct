import { useState } from 'react';
import { About, ContactBlock, FirstView, MobileRes, Resume, Skill, ProjectView, Testimonial } from '../../component'


export default function Body() {
  const [projects, setPojects] = useState(false);
  const [testimonial, setTestimonial] = useState(false);


  return (
    <>
      <MobileRes />
      <FirstView />
      <About />
      <Skill />
      <Resume />
      {projects === true ? <ProjectView /> : ""}
      {testimonial === true ? <Testimonial /> : ""}
      <ContactBlock />
    </>
  );
};