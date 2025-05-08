import { ScrollAnimation } from "./components/ScrollAnimation";
import { useState } from "react";
import styled from "styled-components";

const BlogContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
    justify-content: center;
  }
`;

const BlogPost = styled.article`
  background-color: var(--secondary);
  border: 1px solid var(--primary);
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const BlogExcerpt = styled.p`
  font-family: var(--font-family-text);
  color: var(--font-secondary);
  margin-bottom: 10px;
`;

const BlogContent = styled.p`
  font-family: var(--font-family-text);
  color: var(--font-secondary);
  margin-top: 10px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const ToggleButton = styled.button`
  font-family: var(--font-family-text);
  color: var(--primary);
  background: none;
  border: 1px solid var(--primary);
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary);
    color: var(--secondary);
  }
`;

export const Blog = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ScrollAnimation>
      <h2>Blog posts</h2>
      <BlogContainer>
        <BlogPost>
          <h3>Blog title 1</h3>
          <BlogExcerpt>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </BlogExcerpt>
          <BlogContent isVisible={isExpanded}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </BlogContent>
          <ToggleButton onClick={toggleContent}>
            {isExpanded ? "Read Less" : "Read More"}
          </ToggleButton>
        </BlogPost>

        <BlogPost>
          <h3>Blog title 2</h3>
          <BlogExcerpt>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </BlogExcerpt>
          <BlogContent isVisible={isExpanded}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </BlogContent>
          <ToggleButton onClick={toggleContent}>
            {isExpanded ? "Read Less" : "Read More"}
          </ToggleButton>
        </BlogPost>

      </BlogContainer>
    </ScrollAnimation>
  );
};