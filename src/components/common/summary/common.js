import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Relative = styled.div`
  position: relative;
`;

export const ModifierContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: -4rem;
  display: flex;
  flex-direction: column;
`;

export const Container = styled(Link)`
  display: block;
  background-color: ${(props) => props.theme.colors.colorWhite};
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem 0.2rem rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.colorInfo};
  padding: 1rem;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: none;
  }
`;

export const ContentContainer = styled.div`
  font-size: 1.6rem;
  color: ${(props) =>
    props.dark
      ? props.theme.colors.colorDark
      : props.theme.colors.colorSuccess};
`;
