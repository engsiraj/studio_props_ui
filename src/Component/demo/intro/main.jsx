import React from 'react';
import styled from 'styled-components';
import { typography, space, color, layout } from 'studio-props-system';

import { Button } from '../App';
import Code from './Code';

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
    padding:1px 0;
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
`;
const Install=`npm install studio-props-system`
const Intro = () => {
  return (
    <Wrapper >
      <Section width='70%' color='Dark100'>
              <Text fontSize='lgHeading' fontWeight='600'  pb='0.5rem' >Introduction</Text>
              <Text pb='1.5rem' color='Dark200'>
               How to get best out the Dashboard ui design system? well that's a good point to start. but its really based on tech stack using for your design(always keep it simple) and what you gonna build? using design system for your large projects may release your pain same time if your project is small it may cause effect on loading speed of website! choose wisely
              </Text>
            <Section>
              <Button End='2' med round default >library </Button> 
              <Button Start='2' med round danger >props </Button>
            </Section>
          <Section py='1.5rem'><Code code={Install} language="js" /></Section>
          <Text fontSize='smHeading' fontWeight='500' pb='0.75rem'> Guide and Resources</Text>
          <Section color='Dark200'>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          </Section>
        <Text fontSize='smHeading' fontWeight='500' pt='0.75rem' pb='0.75rem'>Features ✨</Text>
          <Section color='Dark200'>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          </Section>
        <Text fontSize='smHeading' fontWeight='500' pt='0.75rem' pb='0.75rem'>Who Created? ✨</Text>
       </Section>
    </Wrapper>
  )
}
export default Intro

// How to get best out the Dashboard ui design system? well that's a good point to start. but its really based on tech stack using for your design(always keep it simple) and what you goona build? using design system for your large projects may release your pain same time if your project is small it may cause effect on loading speed of website! choose wisely