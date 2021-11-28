import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCodepen } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" ,marginBottom:'20px'}}>
          <DiCodepen size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons onClick={()=>window.open('https://github.com/AyoubElrhanni','_blank')}>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons  onClick={()=>window.open('https://www.linkedin.com/in/ayoubelrhanni/','_blank')}>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        
      </Div3>
    </Container>
);

export default Header;
