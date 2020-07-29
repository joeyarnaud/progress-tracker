import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BlankButton = styled.button`
  border: none;
  background: inherit;
`;

export const QuickStartButton = styled(Link)`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.colorPrimary};
  color: ${(props) => props.theme.colors.colorWhite};
  width: 100%;
  font-size: 3rem;
  text-align: center;
  border-radius: 10px;
  margin: 1rem;
  padding: 4rem;

  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.colors.colorWhite};
  }
`;
