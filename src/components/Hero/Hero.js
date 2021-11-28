import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          HI, <br />
         I'm Ayoub EL RHANNI
        </SectionTitle>
        <SectionText>
        I am a freshly graduated web developer, passionate about new technologies, I am looking for a first opportunity.        </SectionText>
        <Button onClick={()=>window.open('https://1drv.ms/b/s!AhqQV2cbv6f5miYUU3fvpHGV5-jx','_blank')}>My resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;