import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import PintOS from "./project_images/PintOS.png";
import flower from "./project_images/flower exchange.png";
import sriflix from "./project_images/Sri Flix.png";
import cStore from "./project_images/Cstore.png";
import TradeVision from "./project_images/TradeVision.png";
import PulseX from "./project_images/PulseX.png";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3, FaDocker} from 'react-icons/fa';
import { SiFlask, SiTensorflow, SiScikitlearn, SiMongodb, SiFirebase, SiPandas, SiCplusplus } from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: "Trade Vision",
    image: TradeVision,
    description: 'A web application for predicting stock market trends using real-time data and advanced forecasting algorithms. The app provides real-time stock prices, news, technical analysis, and supports user-uploaded CSV files for custom forecasts.',
    link: 'https://github.com/project-one',
    technologies: [
      <FaReact color="#61DAFB" />,
      <SiFlask color="#000000" />,
      <SiMongodb color="#47A248" />,
      <SiFirebase color="#FFCA28" />,
      <FaDocker color="#2496ED" />,
      <SiTensorflow color="#FF6F00" />,
      <SiScikitlearn color="#F9D0C4" />
    ],
  },
  {
    id: 2,
    title: 'C Store',
    image: cStore,
    description: 'Created a single vendor e-commerce platform with Product and order management, reporting features. Mainly worked on the backend and database design for optimized queries.',
    link: 'https://github.com/project-two',
    technologies: [
      <FaHtml5 color="#E34F26" />,
      <FaCss3 color="#1572B6" />,
      <SiFlask color="#000000" />,
      <FaDatabase color="#336791" />,
    ],
  },
  {
    id: 3,
    title: 'Sri Flix',
    image: sriflix,
    description: 'Built a full stack website similar to Netflix. Users can sign up and log in to personalized accounts to browse and manage a real-time collection of movies and TV shows, including a watch list feature.',
    link: 'https://github.com/project-three',
    technologies: [
      <FaReact color="#61DAFB" />,
      <FaNodeJs color="#339933" />,
      <SiMongodb color="#47A248" />,
      <SiFirebase color="#FFCA28" />
    ],
  },
  {
    id: 4,
    title: 'Flower Exchange', 
    image: flower,
    description: 'Implemented a high-performance trading system in C++ for a flower exchange, utilizing techniques such as multithreading and efficient data structure usage.',
    link: 'https://github.com/project-four',
    technologies: [
      <SiCplusplus color="#00599C" />,
      <SiFlask color="#000000" />,
      <FaHtml5 color="#E34F26" />
    ],
  },
  {
    id: 5,
    title: 'Steer Safe',
    image: PulseX,
    description: 'We made a product that uses EEG signals and machine learning to predict the driver’s drowsiness state in real time. I developed the machine learning model used for real-time prediction of the drowsiness state.',
    link: 'https://github.com/project-five',
    technologies: [
      <SiPandas color="#150458" />,
      <SiScikitlearn color="#F9D0C4" />,
      <SiTensorflow color="#FF6F00" />
    ],
  },
  {
    id: 6,
    title: 'PintOS',
    image: PintOS,
    description: 'Implemented schedulers and user programs using C programming language in a simple operating system framework, gaining a deeper understanding of low-level memory management, Data Structure usage, system calls, and thread interactions.',
    link: 'https://github.com/project-six',
    technologies: [
      <SiCplusplus color="#00599C" />
    ],
  },
];

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <Title>Projects</Title>
      <GalleryContainer>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => openModal(project)} />
        ))}
      </GalleryContainer>

      {selectedProject && (
        <Modal show={!!selectedProject} onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%' }} />
            <p>{selectedProject.description}</p>
            <Technologies>
              {selectedProject.technologies.map((tech, index) => (
                <IconWrapper key={index}>{tech}</IconWrapper>
              ))}
            </Technologies>
            <ViewProjectButton href={selectedProject.link} target="_blank" rel="noopener noreferrer">View Project</ViewProjectButton>
          </ModalContent>
        </Modal>
      )}
    </section>
  );
};

export default ProjectGallery;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: ${props => props.show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  height: 60%; /* Increased height */
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    max-height: 40%; /* Reduced image height */
    object-fit: contain;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    flex-grow: 1; /* Allow the paragraph to take up remaining space */
    overflow-y: auto; /* Make sure to enable scrolling if content overflows */
  }

  a {
    align-self: flex-end;
    margin-top: 1rem;
    color: #007bff;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 10px;
    margin: 0 10px;
    max-width: 90%;
    height: 65%;

    img {
      max-height: 40%;
    }

    h2 {
      font-size: 1.25rem;
    }
  }
`;

const Technologies = styled.div`
  display: flex;
  gap: 8px;
  margin: 10px 0;
`;

const IconWrapper = styled.div`
  font-size: 24px;
  color: inherit; /* Inherit the color from the icon itself */
`;

const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  text-align: center;
  color: #333;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

const ViewProjectButton = styled.a`
  align-self: flex-end;
  margin-top: 1rem;
  background-color: #f0f0f0; /* Light grey background */
  color: #000; /* Black text */
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0); /* Initial shadow */
  
  &:hover {
    background-color: #e0e0e0; /* Slightly darker grey on hover */
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Subtle shadow effect */
  }

  &:active {
    background-color: #d0d0d0; /* Even darker grey on click */
  }
`;
