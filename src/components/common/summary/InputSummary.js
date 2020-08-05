import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { FlexBoxBetween } from 'components/common/styled-components';
import { WarningModal } from 'components/common/modals';
import {
  Relative,
  ContentContainer,
  ModifierContainer,
  Container,
} from './common';

// const EditButton = styled.button`
//   color: ${(props) => props.theme.colors.colorWarning};
//   font-size: 2.5rem;
//   border: none;
//   background-color: transparent;
// `;

function InputSummary(props) {
  const { date, reps, sets, type, weight, name, id, deleteInput } = props;
  return (
    <Relative>
      <Container>
        <FlexBoxBetween>
          <ContentContainer dark>
            {moment(date).format('DD/MM/yyyy')}
          </ContentContainer>
        </FlexBoxBetween>
        <FlexBoxBetween style={{ marginTop: '1rem' }}>
          <ContentContainer>
            Weight: {weight}
            {type}
          </ContentContainer>
          <ContentContainer>Reps: {reps}</ContentContainer>
          <ContentContainer>Sets: {sets}</ContentContainer>
        </FlexBoxBetween>
      </Container>
      <ModifierContainer>
        {
          //   <EditButton>
          //   <i className='fas fa-edit'></i>
          // </EditButton>
        }
        <WarningModal name={name} id={id} action={deleteInput} />
      </ModifierContainer>
    </Relative>
  );
}

export { InputSummary };