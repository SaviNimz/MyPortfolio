import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import myImage from '../assets/myimg2.jpg';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  text-align: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  margin: 1rem;
`;

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  color: #333;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 1rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  
  @media (min-width: 768px) {
    margin-left: 2rem;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
`;

const IconsContainer = styled.div`
  margin-top: 2rem;
  
  a {
    color: #333;
    margin: 0 1rem;
    font-size: 1.5rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #007bff;
    }
  }
`;

const Introduction = () => {
  return (
    <Section id="introduction">
      <TextContainer>
        <Title>Savinu Aththanayake</Title>
        <SubTitle>Computer Science and Engineering Undergraduate specializing in Data Science</SubTitle>
        <IconsContainer>
          <a
            href="https://github.com/SaviNimz"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip-id="github-tooltip"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/savinu-aththanayake/"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip-id="linkedin-tooltip"
          >
            <FaLinkedin />
          </a>
          <a
            href=""
            download
            data-tooltip-id="cv-tooltip"
          >
            <FaFileDownload />
          </a>
          <ReactTooltip id="github-tooltip" place="top" type="dark" effect="solid" content="GitHub Profile" />
          <ReactTooltip id="linkedin-tooltip" place="top" type="dark" effect="solid" content="LinkedIn Profile" />
          <ReactTooltip id="cv-tooltip" place="top" type="dark" effect="solid" content="Download CV" />
        </IconsContainer>
      </TextContainer>
      <ImageContainer>
        <Image src={myImage} alt="Savinu Aththanayake" />
      </ImageContainer>
    </Section>
  );
};

export default Introduction;
