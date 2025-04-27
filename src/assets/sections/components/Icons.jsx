import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import styled from "styled-components";

const IconStyling = styled.div`
  display: flex;
  gap: 20px;
  font-size: 30px;
  padding-top: 20px;

  svg {
    color: ${({ color }) => color}; 
    transition: color 0.3s ease; 
     cursor: pointer;

    &:hover {
      color: var(--complementary);
    }
  }
`;

export const Icons = ({ color }) => {
  return (
    <IconStyling color={color}>
      <FontAwesomeIcon icon={faLinkedinIn} />
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faFile} />
    </IconStyling>
  );
};