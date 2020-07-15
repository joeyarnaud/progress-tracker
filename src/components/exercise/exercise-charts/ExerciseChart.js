import React from 'react';
import styled from 'styled-components';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryContainer,
} from 'victory';
import moment from 'moment';
import { isEmpty } from 'helpers';

const ChartsContainer = styled.div``;

const ChartContainer = styled.div`
  height: 40rem;
  position: relative;
  width: 40rem;
`;

const ChartTitle = styled.h3`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;

function ExerciseChart(props) {
  const { inputs } = props;
  !isEmpty(inputs) && console.log(moment(inputs[0].date).format('DD/MM'));
  return (
    <ChartsContainer>
      <ChartContainer>
        <ChartTitle>Weight vs Time</ChartTitle>
        <VictoryChart name='weight' theme={VictoryTheme.material}>
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
        </VictoryChart>
      </ChartContainer>
    </ChartsContainer>
  );
}

export default ExerciseChart;
