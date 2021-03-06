import React from 'react';
import PropTypes from 'prop-types';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import moment from 'moment';
import { ChartContainer, ChartTitle } from './common';
import { isEmpty } from 'helpers';

function OneRepMaxChart(props) {
  const { inputs } = props;
  return (
    <ChartContainer>
      <ChartTitle>1RM (calculated) vs Time</ChartTitle>
      <VictoryChart theme={VictoryTheme.material}>
        {!isEmpty(inputs) && (
          <VictoryLine
            style={{
              data: {
                fill: '#c43a31',
                fillOpacity: 0.6,
                stroke: '#c43a31',
                strokeWidth: 3,
              },
              parent: { border: '1px solid #ccc' },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            data={inputs.map((input) => ({
              x: moment(input.date).format('DD/MM'),
              y: input.weight / (1.0278 - 0.0278 * input.reps),
            }))}
          />
        )}
        <VictoryAxis dependentAxis fixLabelOverlap label='Weight (kg)' />
        <VictoryAxis fixLabelOverlap label='Date' />
      </VictoryChart>
    </ChartContainer>
  );
}

OneRepMaxChart.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OneRepMaxChart;
