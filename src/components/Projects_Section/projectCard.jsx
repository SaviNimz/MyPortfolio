// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s;
  height: 300px; /* Increased card height */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 220px; /* Adjusted image height */
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px 16px 30px; 
  text-align: center; /* Center text in the content area */
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem; /* Adjust font size as needed */
  margin: 0;
`;

const ProjectCard = ({ project, onClick }) => {
  return (
    <Card onClick={() => onClick(project)}>
      <Image src={project.image} alt={project.title} />
      <Content>
        <ProjectTitle>{project.title}</ProjectTitle>
      </Content>
    </Card>
  );
};

export default ProjectCard;
