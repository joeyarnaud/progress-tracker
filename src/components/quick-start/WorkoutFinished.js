import React from 'react';
import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InfoContainer = styled.div`
  padding: 2rem 0;
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
`;

const InfoText = styled.div`
  font-size: 1.6rem;
`;

const WorkoutFinishedButton = styled(Link)`
  font-size: 1.6rem;
`;

export function WorkoutFinished(props) {
  const { id } = props;
  return (
    <Container>
      <InfoContainer>
        <InfoTitle>Workout Complete!</InfoTitle>
        <InfoText>
          You have finished the workout click{' '}
          <Link to={`/workout/${id}`}>here</Link> to view your progress
        </InfoText>
      </InfoContainer>
      <Button as={WorkoutFinishedButton} to='/dashboard'>
        Dashboard
      </Button>
    </Container>
  );
}
