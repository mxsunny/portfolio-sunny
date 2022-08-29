import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi,<br />
          I'm Sunny <br />
          I am a Computer science engineer focused on constantly learning new things and expanding my abilities. Most recently I've been focused on honing my full-stack development skills using React/Next JS and Node JS to build maintainable, scalable, and responsive web applications. <br />
          Thanks for visiting!
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;