import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
`;

const Header = () => {
  return <StyledHeader>My Tasks</StyledHeader>;
};

export default Header;
