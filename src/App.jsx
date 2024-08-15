import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Skills from './components/skills';
import ProjectGallery from './components/Projects_Section/projectGallery';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f8f9fa;
    color: #333;
  }
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AppContainer>
        <Introduction />
        <Skills />
        <ProjectGallery />
        <Experience />
      </AppContainer>
    </>
  );
}

export default App;