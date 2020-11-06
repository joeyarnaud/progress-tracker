import React from 'react';
import PropTypes from 'prop-types';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import moment from 'moment';
import { ChartContainer, ChartTitle } from './common';
import { isEmpty } from 'helpers';

function RepsSetsChart(props) {
  const { inputs } = props;
  return (
    <ChartContainer>
      <ChartTitle>Reps, Sets, Weight vs Time</ChartTitle>
      <VictoryChart theme={VictoryTheme.material}>
        {!isEmpty(inputs) && (
          <VictoryLine
            style={{
              data: { stroke: '#c43a31' },
              parent: {
                border: '1px solid #ccc',
              },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            data={inputs.map((input) => ({
              x: moment(input.date).format('DD/MM'),
              y: input.weight,
            }))}
          />
        )}
        {!isEmpty(inputs) && (
          <VictoryLine
            style={{
              data: { stroke: '#c43a31' },
              parent: {
                border: '1px solid purple',
              },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            data={inputs.map((input) => ({
              x: moment(input.date).format('DD/MM'),
              y: input.reps * input.sets,
            }))}
          />
        )}
        {!isEmpty(inputs) && (
          <VictoryLine
            style={{
              data: { stroke: '#c43a31' },
              parent: {
                border: '1px solid blue',
              },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            data={inputs.map((input) => ({
              x: moment(input.date).format('DD/MM'),
              y: input.sets,
            }))}
          />
        )}
        <VictoryAxis dependentAxis />
        <VictoryAxis fixLabelOverlap />
      </VictoryChart>
    </ChartContainer>
  );
}

RepsSetsChart.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RepsSetsChart;
