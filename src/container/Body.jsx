import * as React from 'react';
import { About, ContactBlock, FirstView, MobileRes, Resume, Skill, Testimonial } from '../component'


export const Body = () => {
  return (
    <>
      <MobileRes />
      <FirstView />
      <About />
      <Skill />
      <Resume />
      <Testimonial />
      <ContactBlock />
    </>
  );
};