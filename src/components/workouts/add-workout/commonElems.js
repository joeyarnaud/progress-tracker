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
  /* font-size: 1.4rem; */
`;

export const TitleInput = styled(Form.Control)`
  font-size: 1.6rem;
`;
