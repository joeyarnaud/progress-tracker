import styled from 'styled-components';

export const Title1 = styled.h1`
  font-size: 4rem;
  font-family: ${(props) => props.theme.fontStyles.boldest};
  text-align: center;
  color: ${(props) => props.theme.colors.colorWhite};
`;

export const Title2 = styled.h2`
  font-size: 3.5rem;
  font-family: ${(props) => props.theme.fontStyles.boldest};
`;

export const Title4 = styled.h2`
  color: ${(props) => props.theme.colors.colorDark};
  margin-top: 2rem;
  font-size: 2rem;
`;
