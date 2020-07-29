import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InfoContainer = styled.div``;

const InfoTitle = styled.h2``;

const InfoText = styled.div``;

const WorkoutFinishedButton = styled(Link)``;

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
      <WorkoutFinishedButton to='/dashboard'>Dashboard</WorkoutFinishedButton>
    </Container>
  );
}
