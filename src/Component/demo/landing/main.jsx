import React from 'react'
import styled from 'styled-components';
import { VscGithub, VscGlobe, VscTwitter } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { typography, space, color, flexbox, layout, border } from 'studio-props-system'

import Code from '../Code';
import {colCode,colUsage,layCode,layUsage, typoCode,typoUsage } from './data';
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
  ${space}
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
    flex-direction: column;
     // width:100%;
    }
`;
 const Text = styled.p`
  ${typography}
  ${space}
  ${color}
`;
const StyledLink = styled(Link)`
  ${color}
  cursor: pointer;
  text-decoration: none;
`;

// const TextStyle = styled(Text)`
//   position: fixed;
// `
/* <TextStyle py='6px' px='6px' backgroundColor='Dark500' fontSize='12px' fontWeight='600' color='Yellow200'>🚧 website under developement</TextStyle> */

const Landingpage = () => {
  return (
    <>

        <Wrapper  pt='3%' pb='3%'>
        <Header />
          <Design />
        <Comp />
        </Wrapper>
    </>

  )
}

export default Landingpage


const Header = () => {
  return (
      <Card  color='Gray400'>
      <Box justifyContent='space-between'>
        <Card mt='18px' corner='.75rem'  p='20px' backgroundColor='Dark400'  width='49%'  border='1px solid rgba(100, 100, 100, 0.1);'>
           <Text fontSize='smHeading' fontWeight='600' pb='12px'>Studio - Props System</Text>
           <Text pb='18px' color='Gray600' >Reactjs props system is enhanced with styled-components, a unique approach for designing and developing user interfaces with styled-components.</Text>
           <Button block sm default round><StyledLink color='White' to='/intro'>Get started</StyledLink></Button>
        </Card>

        <Card mt='18px' corner='.75rem' p='20px' backgroundColor='Dark400'  width='49%'  border='1px solid rgba(100, 100, 100, 0.1);'>
          <Text  fontSize='smHeading' fontWeight='600' pb='12px'>Siraj <Button default circle>author</Button></Text>
          <Text pb='18px' color='Gray600'>Front-end engineer and designs system developer experienced React JS Developer with a deep understanding of the framework.</Text>
          <Button default icon round><StyledLink color='White' to='https://github.com/engsiraj'><VscGithub /> </StyledLink></Button>
          <Button mx='6px' default icon round ><StyledLink color='White' to='https://twitter.com/engsiraj_'><VscTwitter/></StyledLink></Button>
          <Button  default icon round ><StyledLink color='White' to='https://portfolio-2-0-hazel-one.vercel.app/'><VscGlobe /></StyledLink></Button>
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
     </Card>
  )
}

const Design = () => {
 
  return (
    <>
       <Wrapper  pt='3%' pb='3%'>
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
  const colorCode = <Card>
    <Code code={colCode} lang='jsx' />
    <Code code={colUsage} lang='jsx' />
  </Card>
    const typographyCode = <Card>
    <Code code={typoCode} lang='jsx' />
    <Code code={typoUsage} lang='jsx' />
  </Card>
    const layoutCode = <Card>
    <Code code={layCode} lang='jsx' />
    <Code code={layUsage} lang='jsx' />
  </Card>
  
  return (
    <>
        <Wrapper  pt='3%' pb='3%'>
          <MainText
            lgText='Props System'
            smText='props ways of using styled-components to combine react and css' />
        </Wrapper>
        <Box justifyContent='space-between' >
          <BCard
            title='Color System'
            desc={colorCode}/>
          <BCard
            title='Typography'
           desc={typographyCode}/>
          <BCard
          title='space'
           desc={layoutCode} />
        </Box>
    </>
  )
}





const MainText = p => {
  return (
    <>
      <Text textAlign='center'  color='Gray400' fontSize='lgHeading' fontWeight='600' pb='18px' >{p.lgText}</Text>
      <Text textAlign='center'  color='Gray600'>{p.smText}</Text>
    </>
  )
}

const TCard = p => {
  return (
    <>
      <Card corner='.75rem' p='12px' backgroundColor='Dark400' width='32%' mt='18px' border='1px solid rgba(100, 100, 100, 0.1);'>
        <img src={p.img} alt="Header Image" />
        <Text  color='Gray400' pt='8px' pb='4px' fontSize='regualar' fontWeight='600'>{p.title}</Text>
        <Text fontSize='text'  color='Gray600'>{p.desc}</Text>
      </Card>
    </>
  )
}

const CCard = p => {
  return (
    <>
    <Card corner='.75rem' p='18px' backgroundColor='Dark400' width='32%' mt='18px' border='1px solid rgba(100, 100, 100, 0.1);'>
      <Text fontSize='text' fontWeight='700' pb='6px'  color='Gray400'>{p.title}</Text>
      <Text fontSize='text' color='Gray600' pb='20px'>{p.desc}</Text>
      <Text fontSize='text'>{p.bLine}</Text>
    </Card>
    </>
  )
}

const BCard = p => {
  return (
    <>
    <Card   width='32%' mt='18px'>
      <Text fontSize='regualar' fontWeight='600' pb='12px'  color='Gray400'>{p.title}</Text>
      <Text  color='Gray600'>{p.desc}</Text>
    </Card>
    </>
  )
}


