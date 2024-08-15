import React from 'react';
import styled from 'styled-components';
import { FaPython, FaJava, FaJs, FaHtml5, FaReact, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiTensorflow, SiPandas, SiNumpy, SiOpencv, SiMongodb, SiPostman, SiKeras, SiMysql, SiTypescript,SiDocker,SiFlask  } from 'react-icons/si';


const Skills = () => {
  const programmingLanguages = [
    { name: 'Python', icon: <FaPython color="#3776AB" />, level: 'Experienced' },
    { name: 'C++', icon: <SiCplusplus color="#00599C" />, level: 'Intermediate' },
    { name: 'C', icon: <SiCplusplus color="#A8B9CC" />, level: 'Intermediate' },
    { name: 'Java', icon: <FaJava color="#007396" />, level: 'Intermediate' },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" />, level: 'Intermediate' },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" />, level: 'Experienced' },
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" />, level: 'Experienced' },
    { name: 'TypeScript', icon: <SiTypescript color="#007ACC" />, level: 'Basic' },
  ];

  const machineLearning = [
    { name: 'SciKit-learn', icon: <SiPandas color="#F7931E" />, level: 'Experienced' },
    { name: 'Numpy', icon: <SiNumpy color="#013243" />, level: 'Experienced' },
    { name: 'Pandas', icon: <SiPandas color="#150458" />, level: 'Experienced' },
    { name: 'Langchain', icon: <SiOpencv color="#5C3EE8" />, level: 'Intermediate' },
    { name: 'OpenCV', icon: <SiOpencv color="#5C3EE8" />, level: 'Intermediate' },
    { name: 'TensorFlow', icon: <SiTensorflow color="#FF6F00" />, level: 'Basic' },
    { name: 'Keras', icon: <SiKeras color="#D00000" />, level: 'Basic' }
  ];

  const webDevelopment = [
    { name: 'ReactJS', icon: <FaReact color="#61DAFB" />, level: 'Experienced' },
    { name: 'Git', icon: <FaGitAlt color="#F05032" />, level: 'Experienced' },
    { name: 'Flask', icon: <SiFlask color="#000000" />, level: 'Experienced' },
    { name: 'NodeJS', icon: <FaNode color="#339933" />, level: 'Intermediate' },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" />, level: 'Intermediate' },
    { name: 'Postman', icon: <SiPostman color="#FF6C37" />, level: 'Intermediate' },
    { name: 'Docker', icon: <SiDocker color="#2496ED" />, level: 'Basic' }

  ];

  return (
    <Section id="skills">
      <Title>Skills</Title>
      <SkillsContainer>
        <Topic>
          <TopicTitle>Languages</TopicTitle>
          <SkillList>
            {programmingLanguages.map((skill, index) => (
              <SkillItem key={index}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
                <SkillLevel>{skill.level}</SkillLevel>
              </SkillItem>
            ))}
          </SkillList>
        </Topic>

        <Topic>
          <TopicTitle>Machine Learning & Data Manipulation</TopicTitle>
          <SkillList>
            {machineLearning.map((skill, index) => (
              <SkillItem key={index}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
                <SkillLevel>{skill.level}</SkillLevel>
              </SkillItem>
            ))}
          </SkillList>
        </Topic>

        <Topic>
          <TopicTitle>Technologies and Frameworks</TopicTitle>
          <SkillList>
            {webDevelopment.map((skill, index) => (
              <SkillItem key={index}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
                <SkillLevel>{skill.level}</SkillLevel>
              </SkillItem>
            ))}
          </SkillList>
        </Topic>
      </SkillsContainer>
    </Section>
  );
};

export default Skills;


const Section = styled.section`
  padding: 2rem;
  background-color: #0000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem; /* Added gap for spacing between topics */
  max-width: 1000px; /* Ensure it doesn't stretch too wide */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Topic = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  max-width: 30%; /* Adjusted width for better alignment */
  box-sizing: border-box; /* Ensures padding and border are included in the width */
  
  @media (max-width: 1024px) {
    max-width: 45%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const TopicTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }
`;

const SkillIcon = styled.div`
  font-size: 1.25rem;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-right: 0.4rem;
  }
`;

const SkillName = styled.span`
  font-weight: 600;
  color: #333;
  margin-right: auto;
`;

const SkillLevel = styled.span`
  font-weight: 400;
  color: #888;
`;