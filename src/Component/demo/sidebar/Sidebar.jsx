import React from 'react'
import { VscGithub,VscNote,VscLibrary } from "react-icons/vsc";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { typography, space, color, layout, border,  flexbox } from 'studio-props-system';



const Text = styled.p`
  ${typography}
  ${space}
  ${color}
`;
const CardLink = styled(Link)`
  ${typography}
  ${color}
  cursor: pointer;
  text-decoration: none;
  :hover{
    opacity:0.6;
    transition: ease-in 450ms;
    transition: ease-out 300ms;
  }
`;
const Card = styled.div`
  ${typography}
  ${border}
  ${space}
  ${color}
`;
const Box = styled.div`
   ${flexbox}
   ${layout}
`;

const Sidebar = () => {
  const SideBartop = {position: 'fixed'};
  return (
    <>
      <Card backgroundColor='Dark400' width='55px' style={SideBartop}>
        <Box flexDirection='column' justifyContent='space-between' height='100vh'>
          <Card>
            <Text pt='20px' px='9px'><CardLink color='Gray600' to='/'><MdOutlineDashboard size={36}/></CardLink></Text>
            <Text px='14px' pt='18px'><CardLink color='Gray600' to='intro'><VscNote size={24}/></CardLink></Text>
            <Text px='14px' pt='12px'><CardLink color='Gray600' to='library'><VscLibrary size={24}/></CardLink></Text>
          </Card>
          <Text px='14px'   pb='18px' smallHeading><CardLink color='Gray600' to='https://github.com/engsiraj/studio' ><VscGithub size={24}/></CardLink></Text>
          </Box>
      </Card>
    </>
  )
}

export default Sidebar