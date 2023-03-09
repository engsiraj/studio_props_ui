import React from 'react'
import styled from 'styled-components';
import { VscGithub, VscGlobe, VscTwitter } from "react-icons/vsc";
import { typography,space,color,flexbox,layout,border } from 'studio-props-system'

import { Button,  design, component, library } from '../App'

/*
todo: landing page  
- have to create full page with description
---------------
? sections
- header
- update and news
- library 
- components
- cards sections
---------------
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
img{
  border-radius: calc(.75rem - 5px);
}
 `
const StyledSec = styled.div`
  padding-top: 5%;
 `
const Card = styled.div`
  ${border}
  ${space}
  ${color}
  ${layout}
  @media ${device.phone} {
    width:100%;}
`;
 const Box = styled.div`
  ${flexbox}
   @media ${device.phone} {
    flex-direction: column;}
`;
 const Text = styled.p`
  ${typography}
  ${space}
  ${color}
`;
const TextStyle = styled(Text)`
  position: fixed;
`

const Landingpage = () => {
  return (
    <>
        <TextStyle py='6px' px='6px' backgroundColor='Dark500' fontSize='text' fontWeight='600' color='Yellow200'>🚧 website under developement errors expected</TextStyle>
        <Wrapper>
          <Header />
          <Design />
          <Comp/>
        </Wrapper>
    </>

  )
}

export default Landingpage

const Header = () => {
  return (
      <>
      <Box justifyContent='space-between'>
        <Card mt='18px' corner='.75rem'  p='20px' backgroundColor='Dark400' color='Dark100' width='49%'  border='1px solid rgba(100, 100, 100, 0.1);'>
           <Text fontSize='smHeading' fontWeight='600' pb='12px'>Studio - Props System</Text>
           <Text pb='18px' color='Dark200'>Reactjs props system is enhanced with styled-components, a unique approach for designing and developing user interfaces with styled-components.</Text>
           <Button med default round>Get started</Button>
        </Card>

        <Card mt='18px' corner='.75rem' p='20px' backgroundColor='Dark400' color='Dark100' width='49%'  border='1px solid rgba(100, 100, 100, 0.1);'>
          <Text  fontSize='smHeading' fontWeight='600' pb='12px'>Siraj <Button default circle>author</Button></Text>
          <Text pb='18px' color='Dark200'>  Hi, i am siraj. a Front-end engineer and designs system developer</Text>
          <Button default icon round><VscGithub size={20}/> </Button>
          <Button mx='6px' default icon round ><VscTwitter size={20}/></Button>
          <Button  default icon round ><VscGlobe size={20} /></Button>
        </Card>
      </Box>

       <StyledSec>
          <Box justifyContent='space-between' >
            <CCard
              title='Studio props system 0.1.7 is avaible now!'
              desc='fully functional props and stable in design system views.'
              bLine='updated on 06-03-23' />
            <CCard
              title='props system: why to use? '
              desc='better way of using styled-components providing value based props.'
            bLine='published 20-02-23' />
            <CCard
              title='is props system is complete design system?'
              desc='props system provide solution for styled props can be build one using the system.'
              bLine='~ author' />
          </Box>
      </StyledSec>
     </>
  )
}

const Design = () => {
 
  return (
    <>
<Wrapper>
        <MainText
          lgText='Studio v 0.1.7'
          smText='studio props is props system for react styled-components.' />
        </Wrapper>
        
        <Box justifyContent='space-between' >     
          <TCard
            img={design}
            title='Design language'
            desc='react js / styled-components and css3.'
           />
          <TCard
            img={library}
            title='Props library'
            desc='covers styled-components with props.'
           />
          <TCard
            img={component}
            title='Design guide'
            desc='install using npm and follow friendly guide.'
           />
        </Box>
    </>
  )
}

const Comp = () => {
 
  return (
    <>
        <Wrapper>
          <MainText
            lgText='Props System'
            smText='props ways of using styled-components to combine react and css' />
        </Wrapper>
        <Box justifyContent='space-between' >
          <BCard
            title='color'
            desc='this is card description in case'/>
          <BCard
            title='layout'
            desc='this is card description in case'/>
          <BCard
            title='space'
            desc='this is card description in case'/>
        </Box>
    </>
  )
}





const MainText = p => {
  return (
    <>
      <Text textAlign='center' color='Dark50' fontSize='xlHeading' fontWeight='600' pb='18px' >{p.lgText}</Text>
      <Text textAlign='center' color='Dark50'>{p.smText}</Text>
    </>
  )
}

const TCard = p => {
  return (
    <>
      <Card corner='.75rem' p='12px' backgroundColor='Dark400' width='32%' mt='18px' border='1px solid rgba(100, 100, 100, 0.1);'>
        <img src={p.img} alt="Header Image" />
        <Text color='Dark50' pt='8px' pb='4px' fontSize='regualar' fontWeight='600'>{p.title}</Text>
        <Text fontSize='text' color='Dark200'>{p.desc}</Text>
      </Card>
    </>
  )
}

const CCard = p => {
  return (
    <>
    <Card corner='.75rem' p='18px' backgroundColor='Dark400' width='32%' mt='18px' border='1px solid rgba(100, 100, 100, 0.1);'>
      <Text fontSize='text' fontWeight='700' pb='6px' color='Dark100'>{p.title}</Text>
      <Text fontSize='text'  color='Dark200' pb='20px'>{p.desc}</Text>
      <Text fontSize='text'  color='Dark100'>{p.bLine}</Text>
    </Card>
    </>
  )
}

const BCard = p => {
  return (
    <>
    <Card corner='.75rem' p='18px'  backgroundColor='Dark300'  width='32%' mt='18px' border='1px solid rgba(100, 100, 100, 0.1);'>
      <Text fontSize='regualar' fontWeight='600' pb='6px' color='Dark100'>{p.title}</Text>
      <Text color='Dark200'>{p.desc}</Text>
    </Card>
    </>
  )
}


