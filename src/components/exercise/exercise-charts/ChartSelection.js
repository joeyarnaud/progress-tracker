import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

export const ONE_REP_MAX = 'oneRepMax';
export const TONNAGE = 'tonnage';
export const REPS_SETS_CHART = 'repsSetsCharts';

function ChartSelection(props) {
  const { chart, setChart } = props;
  return (
    <ButtonGroup toggle>
      <ToggleButton
        type='radio'
        variant='secondary'
        name='chart'
        value={ONE_REP_MAX}
        checked={chart === ONE_REP_MAX}
        onChange={(e) => setChart(e.currentTarget.value)}
      >
        One Rep Max
      </ToggleButton>
      <ToggleButton
        type='radio'
        variant='secondary'
        name='chart'
        value={TONNAGE}
        checked={chart === TONNAGE}
        onChange={(e) => setChart(e.currentTarget.value)}
      >
        Tonnage
      </ToggleButton>
      <ToggleButton
        type='radio'
        variant='secondary'
        name='chart'
        value={REPS_SETS_CHART}
        checked={chart === REPS_SETS_CHART}
        onChange={(e) => setChart(e.currentTarget.value)}
      >
        Reps and Sets
      </ToggleButton>
    </ButtonGroup>
  );
}

ChartSelection.propTypes = {
  chart: PropTypes.string.isRequired,
  setChart: PropTypes.func.isRequired,
};

export default ChartSelection;
