import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ExerciseContentContainer = styled.div`
  font-size: 1.6rem;
  margin-right: 2rem;
  color: ${(props) => props.theme.colors.colorSuccess};
`;

function ExerciseContainer(props) {
  const { name } = props;
  return <ExerciseContentContainer>{name}</ExerciseContentContainer>;
}

ExerciseContainer.propTypes = {
  name: PropTypes.string.isRequired,
};

export { ExerciseContainer, ExerciseContentContainer };
