import React from 'react';
import styled from 'styled-components';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import moment from 'moment';
import { isEmpty } from 'helpers';

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

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
  console.log(inputs);
  return (
    <ChartsContainer>
      <ChartContainer>
        <ChartTitle>1RM (calculated) vs Time</ChartTitle>
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
                y: input.weight / (1.0278 - 0.0278 * input.reps),
              }))}
            />
          )}
          <VictoryAxis dependentAxis fixLabelOverlap />
          <VictoryAxis fixLabelOverlap />
        </VictoryChart>
      </ChartContainer>
      <ChartContainer>
        <ChartTitle>Total weight moved vs Time</ChartTitle>
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
    </ChartsContainer>
  );
}

export default ExerciseChart;
