import React from 'react';
import moment from 'moment';
import { FlexBoxBetween } from 'components/common/styled-components';
import { WarningModal } from 'components/common/modals';
import {
  Relative,
  ContentContainer,
  ModifierContainer,
  NoLinkContainer,
} from './common';

function InputSummary(props) {
  const { date, reps, sets, type, weight, name, id, deleteInput } = props;
  return (
    <Relative>
      <NoLinkContainer>
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
      </NoLinkContainer>
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
