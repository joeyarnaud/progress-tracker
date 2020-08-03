import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BlankButton = styled.button`
  border: none;
  background: inherit;
`;

export const QuickStartButton = styled(Link)`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.colorDark};
  color: ${(props) => props.theme.colors.colorWhite};
  width: 100%;
  font-size: 3rem;
  text-align: center;
  border-radius: 10px;
  padding: 4rem;
  margin-top: 2rem;

  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.colors.colorWhite};
  }
`;

export const OptionButton = styled(Link)`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.colorDark};
  color: ${(props) => props.theme.colors.colorWhite};
  font-size: 3rem;
  text-align: center;
  border-radius: 10px;
  margin: 1rem 0;
  padding: 4rem;
  width: calc(50% - 0.5rem);

  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.colors.colorWhite};
  }
`;
