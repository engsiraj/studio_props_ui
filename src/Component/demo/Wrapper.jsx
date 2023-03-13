import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";
import { space,color } from 'studio-props-system';

import { GlobalStyles } from './App';
import Sidebar from './sidebar/Sidebar';
import Intro from './intro/main';
import Layout from './layout/main';
import Landingpage from './landing/main';

/*
todo: routeers
-  routes
-  route
-  links 
*/
const Container = styled.div`
  ${space}
  ${color}
`
const Wrapper = () => {
  return (
    <>
      <GlobalStyles />
        <Sidebar />
        <Container pr='3%' pl='calc(55px + 3%)' backgroundColor='Dark500'>
           <Routes>
                <Route index element={<Landingpage />}/>
                <Route path='intro' element={<Intro/>}/>
                <Route path='library' element={<Layout/>}/>
           </Routes> 
        </Container>
    </>
    

  )
}

export default Wrapper