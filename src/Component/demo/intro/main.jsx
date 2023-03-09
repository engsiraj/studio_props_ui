import React from 'react';
import styled from 'styled-components';
import { typography, space, color, layout } from 'studio-props-system';

import { Button } from '../App';
import Code from '../Code';
import {install, usage} from './data'


/*
todo: Introduction page 
------------
? sections
! - container width  width='8'
- intro center
- guide section
- features
- creator
------------
space 
"0.25rem", "0.5rem", "0.75rem", "1.25rem", "1.5rem", "2rem"
*/
const device = {
  phone: `(max-width: 37.5rem)`,
  tab: `(min-width: 56.25rem)`,
  laptop: `(min-width: 75rem)`,
  desktop: `(min-width: 112.5rem)`,
};
const Wrapper = styled.div`
  padding-top: 5%;
  padding-bottom: 5%;
  li{
    padding:2px 0;
  }
`
const Section = styled.div`
  ${layout}
  ${color}
  ${space}
  @media ${device.phone} {
    width:100%;}
`;
const Text = styled.p`
  ${typography}
  ${space}
  ${color}
`
const Link = styled.a`
  ${color}
  cursor: pointer;
  text-decoration: none;
  :hover{
    padding-bottom: 1px;
    border-bottom: 2px solid gray;
    color: gray;
  }
`;

const Intro = () => {
  return (
    <>
     <Wrapper >
      <Section width='70%' color='Dark100'>
              <Text fontSize='lgHeading'  fontWeight='600' pb='18px' >Introduction</Text>
              <Text pb='1.5rem' color='Gray500'>
               How to get best out the Dashboard ui design system? well that's a good point to start. but its really based on tech stack using for your design(always keep it simple) and what you gonna build? using design system for your large projects may release your pain same time if your project is small it may cause effect on loading speed of website! choose wisely
              </Text>
            <Section>
          <Button mr='12px' med round primary >Props</Button>
          <Button med round default >Github</Button> 
        </Section>
          <Text fontSize='smHeading' fontWeight='500' pb='6px' pt='36px'>Version 📄</Text>
            <Section color='Gray500'  pt='6px' pb='12px' >
              <li>stable <Text code>0.1.7</Text>.</li>
              <li>Modren browsers support.</li>
            </Section>
        <Text fontSize='text' color='Gray500'>update of latest versions availeble on github repo linked in navigation</Text>
          <Text fontSize='smHeading' fontWeight='500' pb='6px' pt='18px'>Features ✨</Text>
          <Section color='Gray500' py='12px'>
          <li>🌈 small file size (light weight) </li>
          <li>🎊 pre-defined and not defined rule sets</li>
          <li>✅ specified css objects</li>
          <li>👨‍💻 well commented and manageable code</li>
          <li>💅 advanced styled-components</li>
        </Section>
         <Text fontSize='smHeading' fontWeight='500' pb='6px' pt='18px'> Guide and resource ✍</Text>
            <Text fontSize='regualar' py='12px'> install using npm</Text>
            <Text fontSize='text' color='Gray500'> install using effective javascript tooling for easier developement after installing </Text>
           <Section py='18px'><Code code={install} lang='bash' /></Section>
        <Text fontSize='smHeading' fontWeight='500'>Usage 👩‍💻</Text>
        <Section py='18px'><Code code={usage} lang='jsx' /></Section>
        <Text fontSize='smHeading' fontWeight='500' pt='0.75rem' pb='0.75rem'>Who Created? 🎓</Text>
        <Text fontSize='regualar' pb='.5rem'>Hi, I am <Link color='Dark100' href=''>Siraj</Link>.</Text>
        <Text fontSize='text' color='Gray500'>Experienced React JS Developer with a deep understanding of the framework.  Skilled in developing complex user interfaces, integrating with back-end APIs, and optimizing performance for fast load times. Effective communicator with strong problem-solving skills, dedicated to delivering exceptional results and exceeding client expectations. Passionate about staying up-to-date with the latest trends in React and web development.</Text>
       </Section>
      </Wrapper>
    </>
  )
}
export default Intro
