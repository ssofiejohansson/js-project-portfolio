import { Card } from "./components/Card"
import styled from "styled-components"

const ProjectsContainer = styled.section`
   display: flex;
    flex-wrap: wrap;
    gap: 40px; 
    justify-content: center;
    padding-top: 50px;
   
  
   @media (min-width: 768px) {
    padding: 50px;
    gap: 20px;
  }
`;

const ProjectHeading = styled.h2`
    padding-top: 100px;
  `

export const Projects = () => {
  return (
    <>
      <ProjectHeading id='projects'>Featured Projects</ProjectHeading>
      <ProjectsContainer >
        <Card />
      </ProjectsContainer>
    </>
  )
}
