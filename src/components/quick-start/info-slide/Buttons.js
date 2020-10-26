import React from 'react'
import {
  StartButton,
  ButtonContainer,
} from 'components/quick-start';

function Buttons(props) {
  const { startWorkout } = props;

  return (
    <ButtonContainer>
      <StartButton variant='success' onClick={() => startWorkout()}>
        Start Workout
      </StartButton>
      <StartButton variant='info' href='/dashboard'>
        Back To Dashboard
      </StartButton>
    </ButtonContainer>
  )
}

export default Buttons;