import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.colorWhite};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem 0.2rem rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.colorDanger};
`;
