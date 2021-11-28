import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { Name: 'Responsive Web Design', text: 'FreeCodeCamp' , link:'https://1drv.ms/b/s!AhqQV2cbv6f5iQrjr7QWUJaIwXQN',},
  { Name: 'Microsoft Office Specialist: Excel 2010 Expert', text: 'Microsoft', link:'https://1drv.ms/b/s!AhqQV2cbv6f5iQorYhDbimQGxHQg',},
  { Name: "L'essentiel de ReactJs", text: 'LinkedIn',link:'https://1drv.ms/b/s!AhqQV2cbv6f5iR5lt6NyXC4nG90A', },
  { Name: "Become A Certified Web Developer From Scratch", text: 'Eduonix Learning Solutions Pvt Ltd',link:'https://1drv.ms/u/s!AhqQV2cbv6f5iQlV8cBWgqvViZ77', }
];


const Acomplishments = () => (
  <Section>
    <SectionTitle>Certificates</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum onClick={()=>window.open(card.link, '_blank')}>{`${card.Name}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
