import React from 'react';
import { Container } from 'react-bootstrap';
import { QuickStartButton, OptionButton } from 'components/common/buttons';
import { FlexBoxBetween } from 'components/common/styled-components';

const Dashboard = () => {
  return (
    <Container>
      <QuickStartButton style={{ marginTop: '20vh' }} to='/quick-start'>
        Quick Start <i className='fas fa-stopwatch'></i>
      </QuickStartButton>
      <FlexBoxBetween style={{ width: '100%' }}>
        <OptionButton to='/workouts'>
          Workouts <i className='fas fa-fire-alt'></i>
        </OptionButton>
        <OptionButton to='/exercises'>
          Exercises <i className='fad fa-dumbbell'></i>
        </OptionButton>
      </FlexBoxBetween>
    </Container>
  );
};

export default Dashboard;
