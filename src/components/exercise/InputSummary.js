import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { FlexBoxBetween } from 'components/common/styled-components';
import { WarningModal } from 'components/common/modals';

const Relative = styled.div`
  position: relative;
`;

const ModifierContainer = styled.div`
  position: absolute;
  top: 0;
  right: -4rem;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: block;
  background-color: ${(props) => props.theme.colors.colorWhite};
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem 0.2rem rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.colorInfo};
  padding: 1rem;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: none;
  }
`;

const ContentContainer = styled.div`
  font-size: 1.6rem;
`;

const EditButton = styled.button`
  color: ${(props) => props.theme.colors.colorWarning};
  font-size: 2.5rem;
  border: none;
`;

function InputSummary(props) {
  const { date, reps, sets, type, weight, name, id, deleteInput } = props;
  return (
    <Relative>
      <Container>
        <FlexBoxBetween>
          <ContentContainer>
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
        <EditButton>
          <i className='fas fa-edit'></i>
        </EditButton>
        <WarningModal name={name} id={id} action={deleteInput} />
      </ModifierContainer>
    </Relative>
  );
}

export { InputSummary };
