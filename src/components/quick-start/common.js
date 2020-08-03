import styled from 'styled-components';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const QSContainer = styled.div`
  background-color: ${(props) => props.theme.colors.colorDark};
  border-radius: 10px;
  margin: 0 2rem;
  padding: 2rem;
`;

export const StartContainer = styled.div`
  background-color: ${(props) => props.theme.colors.colorPrimaryLight};
  color: ${(props) => props.theme.colors.colorWhite};
  width: 100%;
  height: calc(100vh - 5.4rem);
  margin-top: 10vh;
`;

export const StartButton = styled(Button)`
  font-size: 1.6rem;
  margin-right: 1rem;
  width: 20rem;
`;

export const InfoPageContainer = styled(Container)`
  padding: 2rem;
  text-align: center;
`;

export const InfoImportant = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const InfoFurther = styled.p`
  font-size: 1.6rem;
  margin: 0 5%;
  margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  /* background-color: ${(props) => props.theme.colors.colorDark};
  border-radius: 10px; */
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.colorWhite};
  font-size: 2.5rem;
  text-align: center;
  padding-top: 2rem;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const OptionButton = styled(Link)`
  width: 8rem;
  font-size: 1.2rem;
  /* margin-right: 1rem; */
  margin-bottom: 1rem;
`;

export const ExerciseInputText = styled.p`
  font-size: 1.6rem;
`;

export const TitleText = styled.p`
  font-size: 1.6rem;
`;
