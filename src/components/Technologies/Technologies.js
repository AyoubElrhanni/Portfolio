import React from 'react';
import { DiFirebase, DiReact, DiCodeBadge } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Front-End
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiCodeBadge size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Langages</ListTitle>
          <ListParagraph>
            HTML5<br />
            CSS3<br />
            JavaScript<br />
            PHP<br />
            Python<br />
            C#<br />
            C<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frameworks & libraries</ListTitle>
          <ListParagraph>
            ReactJs <br />
            jQuery <br />
            Bootstrap<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            MySql <br />
            Sql Server <br />
            Oracle
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
