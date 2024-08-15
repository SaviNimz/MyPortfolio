import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCode, FaGlobe, FaTrophy, FaChevronDown,FaBook  } from 'react-icons/fa';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
  z-index: 1;
`;

const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 800px;
  margin: 0 auto;
`;

const ListItem = styled.li`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  position: relative;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  border: 1px solid ${({ isActive }) => (isActive ? '#007bff' : 'transparent')};
  box-shadow: ${({ isActive }) => (isActive ? '0 0 10px rgba(255, 215, 0, 0.5)' : '0 2px 8px rgba(0, 0, 0, 0.1)')};
  transition: transform 0.3s ease;

  ${({ isActive }) => !isActive && `
    &:hover {
      transform: scale(1.02);
      background-color: #f1f1f1;
    }
  `}
`;
const Icon = styled.div`
  font-size: 2rem;
  color: #007bff;
  margin-right: 1rem;
`;

const Content = styled.div`
  flex: 1;
  h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }

  p {
    margin: 0.5rem 0;
    color: #555;
  }
`;

const DropdownContent = styled.div`
  max-height: ${({ isActive }) => (isActive ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding-left: 1.5rem;

  p {
    margin: 0.5rem 0;
    color: #555;
    position: relative;

    &::before {
      content: '•';
      color: #007bff;
      position: absolute;
      left: -1.5rem;
    }
  }
`;
const DropdownIcon = styled.div`
  font-size: 1.5rem;
  color: #007bff;
  transition: transform 0.3s ease;
  transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : 'rotate(0)')};
`;

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section id="experience">
      <Title>Experience</Title>
      <List>
        <ListItem
          isActive={activeIndex === 1}
          onClick={() => handleToggle(1)}
        >
          <Icon><FaGlobe /></Icon>
          <Content>
            <h3>Web Development Teams</h3>
            <DropdownContent isActive={activeIndex === 1}>
              <p><strong>CSE Official Website:</strong> Member of the web team responsible for maintaining and managing the official website of the Computer Science Engineering Department at the University of Moratuwa.</p>
              <p><strong>SO XVI:</strong> Updated and maintained the official website of Speech Olympiad XVI as the website pillar head.</p>
              <p><strong>MERCON 2024:</strong> Member of the web team for MERCON 2024, focusing on web development and maintenance.</p>
            </DropdownContent>
          </Content>
          <DropdownIcon isActive={activeIndex === 1}><FaChevronDown /></DropdownIcon>
        </ListItem>
        <ListItem
          isActive={activeIndex === 2}
          onClick={() => handleToggle(2)}
        >
          <Icon><FaTrophy /></Icon>
          <Content>
            <h3>Hackathon Achievements</h3>
            <DropdownContent isActive={activeIndex === 2}>
              <p><strong>GENESIZ 2023:</strong> Champions - A competition testing skills in mathematical knowledge, coding, robotics, and an ideathon pitch.</p>
              <p><strong>ENIGMA’ 24:</strong> Finalists - Secured a position among the finalists in ENIGMA’24, a mathematical coding hackathon</p>
              <p><strong>Mini IEEE-Extreme UoM:</strong> Rank 1 - Achieved the top score among 350+ undergraduates in the mini IEEE-Extreme competition at UoM.</p>
              <p><strong>CODEFEST 2024:</strong> Finalists - Secured a position among the top 10 teams in SLIIT’s Codefest Designathon competition.</p>
              <p><strong>CYPHER 2.0:</strong> First Runners Up - Emerged as 1st runners up in the cybersecurity CTF challenge</p>
            </DropdownContent>
          </Content>
          <DropdownIcon isActive={activeIndex === 2}><FaChevronDown /></DropdownIcon>
        </ListItem>
        <ListItem
        isActive={activeIndex === 0}
        onClick={() => handleToggle(0)}
        >
        <Icon><FaBook /></Icon> {/* Updated icon */}
        <Content>
            <h3>Courses and Certifications</h3>
            <DropdownContent isActive={activeIndex === 0}>
            <p><strong>Machine Learning Specialization - Coursera:</strong> Completed a 3-course specialization covering fundamental and advanced concepts in machine learning.</p>
            <p><strong>AWS Machine Learning Foundations:</strong> Gained foundational knowledge of machine learning concepts and practices, and the use of AWS tools and services for building and scaling machine learning solutions.</p>
            <p><strong>High Performance C++ Software Development:</strong> Completed a workshop on high-performance and mission-critical software development using C++ conducted by LSEG (London Stock Exchange Group).</p>
            <p><strong>Deep Learning Specialization - Coursera:</strong> Ongoing</p>
            <p><strong>IBM Introduction to DevOps:</strong> Ongoing</p>
            </DropdownContent>
        </Content>
        <DropdownIcon isActive={activeIndex === 0}><FaChevronDown /></DropdownIcon>
        </ListItem>
      </List>
    </Section>
  );
};

export default Experience;
