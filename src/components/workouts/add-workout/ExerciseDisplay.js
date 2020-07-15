import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ExerciseContainer } from './commonElems';

const DisplayContainer = styled(ExerciseContainer)`
  background-color: ${(props) => props.theme.colors.colorWhite};
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const InfoSegment = styled.div`
  font-size: 1.4rem;
`;

function ExerciseDisplay(props) {
  const { name, weight, reps, sets, weightType } = props;
  console.log(props);
  return (
    <DisplayContainer>
      <InfoSegment>Exercise Name: {name}</InfoSegment>
      <InfoSegment>
        Weight: {weight}
        {weightType}
      </InfoSegment>
      <InfoSegment>Reps: {reps}</InfoSegment>
      <InfoSegment>Sets: {sets}</InfoSegment>
    </DisplayContainer>
  );
}

ExerciseDisplay.defaultProps = {
  weightType: 'kg',
};

ExerciseDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  reps: PropTypes.number.isRequired,
  sets: PropTypes.number.isRequired,
  weightType: PropTypes.string.isRequired,
};

export { ExerciseDisplay };
