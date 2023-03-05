import React from 'react'
import styled from 'styled-components'
import { typography,space,color,flexbox,layout,border } from 'studio-props-system'

/*
todo: Components page 
------------
? sections
------------
const device = {
  phone: `(max-width: 37.5rem)`,
  tab: `(min-width: 56.25rem)`,
  laptop: `(min-width: 75rem)`,
  desktop: `(min-width: 112.5rem)`,
};

space 
"0.25rem", "0.5rem", "0.75rem", "1.25rem", "1.5rem", "2rem"
*/

const Wrapper = styled.div`
  padding-top: 5%;
  padding-bottom: 5%;
  li{
    padding:1px 0;
  }`
const Section = styled.div`
  ${layout}
  ${color}
`;
const Box = styled.div`
  ${flexbox}
`;
const Text = styled.p`
  ${typography}
  ${space}
  ${color}
`;

const Components = () => {
  return (
    <Wrapper >
      <Section width='70%' color='Dark100'>
        <Text fontSize='lgHeading'  fontWeight='600' pb='18px' >Library</Text>
        <Text pb='24px' fontSize='text' color='Gray500'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, accusamus.</Text>
        <Box justifyContent='space-between' >
          <CardSec title='grid' desc='this is other type '/>
          <CardSec title='grid' desc='description'/>
          <CardSec title='grid' desc='description'/>
          <CardSec title='grid' desc='description'/>
        </Box>
        <Box justifyContent='space-between' >
          <CardSec title='grid' desc='description'/>
          <CardSec title='grid' desc='something better'/>
          <CardSec title='grid' desc='description'/>
          <CardSec title='grid' desc='description'/>
        </Box>
      <Text fontSize='smHeading' fontWeight='500' py='12px' color='Dark100'> props name </Text>
        <Text pb='12px' fontSize='regualar'> props and description show etc</Text>
         <Section color='Gray500'>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          </Section>
        </Section>
    </Wrapper>
  )
}

const Card = styled.div`
  ${border}
  ${space}
  ${color}
  ${layout}
`;
const CardSec = p => {
  return (
    <>
     <Card corner='.75rem' p='10px' backgroundColor='Dark400' width='24%' mb='12px' border='1px solid rgba(100, 100, 100, 0.1);'>
        <Text color='Dark100' pb='6px' fontSize='regualar' fontWeight='500'>{p.title}</Text>
            <Text color='Gray500'>{p.desc}</Text>
      </Card>
    </>
  )
}

export default Components