import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TitleContainer = styled(Form.Group)``;

export const TitleLabel = styled(Form.Label)`
  font-size: 1.6rem;
`;

export const TitleInput = styled(Form.Control)`
  font-size: 1.6rem;
`;

export const ExerciseInputContainer = styled(Form.Group)`
  position: relative;
  width: 100%;
`;

export const ExerciseInputLabel = styled(Form.Label)`
  font-size: 1.4rem;
`;

export const ExerciseInput = styled(Form.Control)`
  width: 28rem;
  font-size: 1.6rem;
  width: 100%;
`;

export const Container = styled.div`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

export const MarginRight = styled.div`
  margin-right: 2rem;
  /* display: inline; */
`;

export const Select = styled.select`
  position: absolute;
  top: 3rem;
  right: 0;
  height: 3.2rem;
`;
