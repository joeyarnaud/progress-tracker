import React from 'react';
import PropTypes from 'prop-types';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import moment from 'moment';
import { ChartContainer, ChartTitle } from './common';
import { isEmpty } from 'helpers';

function TonnageChart(props) {
  const { inputs } = props;
  return (
    <ChartContainer>
      <ChartTitle>Tonnage vs Time</ChartTitle>
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
              y: input.weight * input.reps * input.sets,
            }))}
          />
        )}
        <VictoryAxis dependentAxis />
        <VictoryAxis fixLabelOverlap />
      </VictoryChart>
    </ChartContainer>
  );
}

TonnageChart.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TonnageChart;
