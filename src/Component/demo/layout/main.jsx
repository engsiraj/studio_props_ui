import React from 'react';
import styled from 'styled-components';
import { typography, space, color, flexbox, layout, border  } from 'studio-props-system';

import Code from '../Code';
import { spaceCode, spaceUsage, typoCode, typoUsage, flexCode, flexUsage, gridCode, gridUsage, bgCode, bgUsage, borderCode, borderUsage, shCode, shUsage, layCode, layUsage, colCode, colUsage } from './data';
import  {Red,Pink,Purple,Deeppurple,Indigo,Blue,Lightblue,Cyan,Teal,Green,Lightgreen,Lime,Yellow,Amber,Orange,Deeporange,Brown,Gray,Bluegray,Dark,Bw } from './data'


/*
todo: Components page 
---------
? section
---------

space {"0.25rem", "0.5rem", "0.75rem", "1.25rem", "1.5rem", "2rem"}
color {https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors}

*/

const device = {
  phone: `(max-width: 37.5rem)`,
  tab: `(max-width: 56.25rem)`,
  laptop: `(min-width: 75rem)`,
  desktop: `(min-width: 112.5rem)`,
};

const Wrapper = styled.div`
 ${space}
  li{
    padding:1px 0;
  }`
const Box = styled.div`
  ${flexbox}
  ${space}
`;
const Item = styled.div`
  flex: 1 0 1;
  width:200px;
  @media ${device.phone} {
      width:100%;}
`;

const Text = styled.p`
  ${typography}
  ${space}
  ${color}
`;
const CardLink = styled.a`
  ${typography}
  ${color}
  cursor: pointer;
  text-decoration: none;
  :hover{
    padding-bottom: 1px;
    border-bottom: 2px solid gray;
    color: gray;
  }
`;
const Card = styled.div`
  ${layout}
  ${typography}
  ${border}
  ${space}
  ${color}
  @media ${device.phone} {
    width:100%;}
`;

const Span = styled.span`
  ${typography}

`;

const Gridsys = styled.div`
margin-top: 12px;
display: grid;
grid-gap: 6px;
 grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
`;

export default function Layout() {


  return (
    <Wrapper  pt='3%' pb='3%'>
      <Card width='70%'>
       <Header/>
        <Box my='20px' flexWrap='wrap' >
          <Item><CardSec title='Space' link='#space' desc='mär-jən ' /></Item>
           <Item><CardSec title='Colors' link='#colors' desc=' kuh·lr' /></Item>
           <Item><CardSec title='Typography' link='#typo' desc='tai·po·gruh·fee'/></Item>
           <Item><CardSec title='Flexbox' link='#flex' desc='Flexible Box Layout' /></Item>
           <Item><CardSec title='Grid' link='#grid' desc='CSS Grid Layout ' /></Item>
           <Item><CardSec title='Background' link='#bg' desc='bak·grownd' /></Item>
           <Item><CardSec title='Border' link='#border' desc='baw·duh' /></Item>
           <Item><CardSec title='Shadow' link='#sh' desc='sha·dow' /></Item>
           <Item><CardSec title='Layout' link='#lay' desc='lay·owt' /></Item>
        </Box>
        <Space addres='space' />
        <Type addres='typo'/>
        <Flex addres='flex'/>
        <Grid addres='grid'/>
        <Background addres='bg'/>
        <Border addres='border'/>
        <Shadow addres='sh'/>
        <LayoutSec addres='lay' />
         <Colors addres='colors'/>
      </Card>
    </Wrapper>
  )
}

const Header = () => {
  return (
    <>
      <Text fontSize='lgHeading' color='Gray400'  fontWeight='600' pb='18px' >Documentation</Text>
        <Text  fontSize='text' color='Gray600'>studio props system of styled-components and react js.</Text>
    </>
  )
}

const CardSec = p => {
  return (
    <>
      <Card
        corner='.75rem'
        mt='6px'
        mr='6px'
        p='10px'
        backgroundColor='Dark400'
        border='1px solid rgba(100, 100, 100, 0.1);'>
        <CardLink color='Gray400' fontSize='regualar' fontWeight='500' href={p.link}>
          {p.title}
        </CardLink>
        <Text color='Gray600' pt='3px'>{p.desc}</Text>
      </Card>
    </>
  )
}

const Space = (p) => {
  return (
    <Card id={p.addres} color='Gray600'>
      <Text fontSize='smHeading' fontWeight='500' py='12px' color='Gray400'>Space</Text>
        <Card py='6px'><Code code={spaceCode} lang="jsx" /></Card>
        <Text fontSize='regualar' py='6px' color='Gray400'>Margin</Text>
        <Text  fontSize='text' >css property <Span code>margin</Span> is defined as shorthand <Span code>m</Span></Text>
         <Card py='12px' >
          <li>for margin all directions  <Span code>m</Span></li>
          <li>for margin top  <Span code>mt</Span></li>
          <li>for margin bottom  <Span code>mb</Span></li>
          <li>for margin left  <Span code>ml</Span></li>
          <li>for margin right  <Span code>mr</Span></li>
          <li>for margin x aixs or left and right  <Span code>mx</Span></li>
          <li>for margin y aixs or top and bottom  <Span code>my</Span></li>
      </Card>
       <Text fontSize='regualar' py='6px'color='Gray400'>Padding</Text>
        <Text  fontSize='text'>css property <Span code>padding</Span> is defined as shorthand <Span code>p</Span></Text>
         <Card py='12px' >
          <li>for padding all directions  <Span code>p</Span></li>
          <li>for padding top  <Span code>pt</Span></li>
          <li>for padding bottom  <Span code>pb</Span></li>
          <li>for padding left  <Span code>pl</Span></li>
          <li>for padding right  <Span code>pr</Span></li>
          <li>for padding x aixs or left and right  <Span code>px</Span></li>
          <li>for padding y aixs or top and bottom  <Span code>py</Span></li>
      </Card>
       <Text fontSize='regualar' py='6px' color='Gray400'>Usage</Text>
       <Card py='6px'><Code code={spaceUsage} lang="jsx" /></Card>
    </Card>
  )
}
  
const Type = (p) => {
  return (
    <Card id={p.addres}  color='Gray600'>
      <Text fontSize='smHeading' fontWeight='500' py='12px'  color='Gray400'>Typography</Text>
        <Card py='6px'><Code code={typoCode} lang="jsx" /></Card>
        <Text fontSize='regualar' py='6px' color='Gray400'>Font Size</Text>
        <Text  fontSize='text' >css property <Span code>font-size</Span> rules are pre-defined and you can define in your way with your own property units as well <Span code>px/rem/em/etc</Span>.</Text>
         <Card py='12px' >
          <li><Span code>fontSize='text'</Span> of 14px</li>
          <li><Span code>fontSize='regular'</Span> of 18px</li>
          <li><Span code>fontSize='smHeading'</Span> of 24px</li>
          <li><Span code>fontSize='mdHeading'</Span> of 30px</li>
          <li><Span code>fontSize='lgHeading'</Span> of 36px</li>
          <li><Span code>fontSize='xlHeading'</Span> of 42px</li>
          <li><Span code>fontSize='xxlHeading'</Span> of 56px</li>
      </Card>
       <Text fontSize='regualar' py='6px' color='Gray400'>Usage</Text>
       <Card py='6px'><Code code={typoUsage} lang="jsx" /></Card>
    </Card>
  )
}

const Flex = (p) => {
  return (
    <Card id={p.addres}  color='Gray400'>
      <Text fontSize='smHeading' fontWeight='500' py='12px'>Flex Box</Text>
        <Card py='6px'><Code code={flexCode} lang="jsx" /></Card>
        <Text py='6px' fontSize='text' color='Gray600'>css property <Span code>display:flex;</Span> rules are pre-defined and you can define in your way with your own properties as needed.</Text>
       <Text fontSize='regualar' py='6px'>Usage</Text>
       <Card py='6px'><Code code={flexUsage} lang="jsx" /></Card>
    </Card>
  )
}

const Grid = (p) => {
  return (
    <Card id={p.addres} color='Gray400'>
      <Text fontSize='smHeading' fontWeight='500' py='12px' >Grid</Text>
        <Card py='6px'><Code code={gridCode} lang="jsx" /></Card>
        <Text py='6px' fontSize='text' color='Gray600'>css property <Span code>display:grid;</Span> rules are pre-defined and you can define in your way with css properties</Text>
       <Text fontSize='regualar' py='6px'>Usage</Text>
       <Card py='6px'><Code code={gridUsage} lang="jsx" /></Card>
    </Card>
  )
}

const Background = (p) => {
  return (
    <Card id={p.addres} color='Gray400'>
      <Text fontSize='smHeading' fontWeight='500' py='12px' >Background</Text>
        <Card py='6px'><Code code={bgCode} lang="jsx" /></Card>
        <Text py='6px' fontSize='text' color='Gray600'>css property <Span code>background:url('');</Span> rules are pre-defined and you can define in your way with css properties</Text>
       <Text fontSize='regualar' py='6px'>Usage</Text>
       <Card py='6px'><Code code={bgUsage} lang="jsx" /></Card>
    </Card>
  )
}
  
const Border = (p) => {
  return (
    <Card id={p.addres} color='Gray400'>
      <Text fontSize='smHeading' fontWeight='500' py='12px' >Border</Text>
        <Card py='6px'><Code code={borderCode} lang="jsx" /></Card>
        <Text py='6px' fontSize='text' color='Gray600'>css property <Span code>border:1px solid white;</Span> rules are pre-defined and you can define in your way with css properties</Text>
       <Text fontSize='regualar' py='6px'>Usage</Text>
       <Card py='6px'><Code code={borderUsage} lang="jsx" /></Card>
    </Card>
  )
}

const Shadow = p => {
  return (
    <Card id={p.addres} color='Gray400'>
      <Text fontSize='smHeading' fontWeight='500' py='12px' >Shadow</Text>
        <Card py='6px'><Code code={shCode} lang="jsx" /></Card>
        <Text py='6px' fontSize='text' color='Gray600'>css property <Span code>box-shadow:;</Span> rules are pre-defined and you can define in your way with css properties</Text>
       <Text fontSize='regualar' py='6px'>Usage</Text>
       <Card py='6px'><Code code={shUsage} lang="jsx" /></Card>
    </Card>
  )
}

const LayoutSec = p => {
  return (
    <Card id={p.addres} color='Gray400'>
      <Text fontSize='smHeading' fontWeight='500' py='12px' >Layout</Text>
        <Card py='6px'><Code code={layCode} lang="jsx" /></Card>
        <Text py='6px' fontSize='text' color='Gray600'>css property <Span code>box-shadow:;</Span> rules are pre-defined and you can define in your way with css properties</Text>
       <Text fontSize='regualar' py='6px'>Usage</Text>
       <Card py='6px'><Code code={layUsage} lang="jsx" /></Card>
    </Card>
  )
}
  

const Colors = p => {


  return (
    
    <Card id={p.addres} color='Gray400'>
      <Text fontSize='smHeading' fontWeight='500' py='12px' >Color System</Text>
        <Card py='6px'><Code code={colCode} lang="jsx" /></Card>
        <Text py='6px' fontSize='text' color='Gray600'>css property <Span code>color:green;</Span> rules are pre-defined and you can define in your way with css properties</Text>
       <Text fontSize='regualar' py='6px'>Usage</Text>
       <Card py='6px'><Code code={colUsage} lang="jsx" /></Card>
      <Text fontSize='regualar' py='6px'>Color Pallet</Text>
      <Gridsys>
        <Card>{Red()}</Card>
        <Card>{Pink()}</Card>
        <Card>{Blue()}</Card>
        <Card>{Purple()}</Card>
        <Card>{Deeppurple()}</Card>
        <Card>{Indigo()}</Card>     
        <Card>{Lightblue()}</Card>
        <Card>{Cyan()}</Card>
        <Card>{Teal()}</Card>
        <Card>{Green()}</Card>
        <Card>{Lightgreen()}</Card>
        <Card>{Lime()}</Card>
        <Card>{Yellow()}</Card>
        <Card>{Amber()}</Card>
        <Card>{Orange()}</Card>
        <Card>{Deeporange()}</Card>
        <Card>{Brown()}</Card>
        <Card>{Gray()}</Card>
        <Card>{Bluegray()}</Card>
        <Card>{Dark()}</Card>
        <Card>{Bw()}</Card>
      </Gridsys>
    </Card>
  )
}

