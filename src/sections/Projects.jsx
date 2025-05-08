import { Cards } from "./components/Cards";
import { ScrollAnimation } from "./components/ScrollAnimation";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  padding: 50px 10px;

  @media (min-width: 768px) {
    gap: 60px;
  }
`;


export const Projects = () => {
  return (
    <>
      <ScrollAnimation>
        <h2 id="projects">Featured Projects</h2>
        <ProjectsContainer>
          <Cards />
        </ProjectsContainer>
      </ScrollAnimation>
    </>
  );
};