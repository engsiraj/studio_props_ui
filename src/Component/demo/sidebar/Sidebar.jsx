import React from 'react'
import { VscGithub,VscNote,VscLibrary } from "react-icons/vsc";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';

import { Section, Flex, Text, } from '../App'

const Sidebar = () => {
  const SideBartop = {width: '55px',position: 'fixed',};
  const LinkColor = { color: 'rgba(158, 158, 158, 1)', };
  return (
    <>
      <Section bg='bgc' darktext style={SideBartop}>
        <Flex flexDirection='column' justifyContent='space-between' height='100vh' >
          <Section>
            <Text Start='2' Top='3' ><Link style={LinkColor} to='/'><MdOutlineDashboard size={36}/></Link></Text>
            <Text Start='3' Top='5'><Link style={LinkColor} to='intro'><VscNote size={24}/></Link></Text>
            <Text Start='3' Top='3'><Link style={LinkColor} to='library'><VscLibrary size={24}/></Link></Text>
          </Section>
          <Text Bottom='3'  Start='3' smallHeading><Link to='https://github.com/engsiraj/studio' style={LinkColor}><VscGithub /></Link></Text>
          </Flex>
      </Section>
    </>
  )
}

export default Sidebar