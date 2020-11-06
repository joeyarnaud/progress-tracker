import React, { useState } from 'react';
import { ChartsContainer } from './common';
import ChartSelection, {
  ONE_REP_MAX,
  TONNAGE,
  REPS_SETS_CHART,
} from './ChartSelection';
import OneRepMaxChart from './OneRepMaxChart';
import RepsSetsChart from './RepsSetsChart';
import TonnageChart from './TonnageChart';

function ExerciseChart(props) {
  const [chart, setChart] = useState('oneRepMax');
  const { inputs } = props;

  let Chart;

  if (chart === ONE_REP_MAX) {
    Chart = <OneRepMaxChart inputs={inputs} />;
  } else if (chart === TONNAGE) {
    Chart = <TonnageChart inputs={inputs} />;
  } else if (chart === REPS_SETS_CHART) {
    Chart = <RepsSetsChart inputs={inputs} />;
  }

  return (
    <ChartsContainer>
      <ChartSelection chart={chart} setChart={setChart} />
      {Chart}
    </ChartsContainer>
  );
}

export default ExerciseChart;
