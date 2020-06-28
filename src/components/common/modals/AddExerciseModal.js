import React, { useState, useReducer } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { FlexBoxCenter } from 'components/common/styled-components';
import { ExerciseCreate } from 'components/workouts/add-workout';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const DeleteButton = styled.button`
  color: ${(props) => props.theme.colors.colorDanger};
  background-color: inherit;
  border: none;
`;

const InfoContainer = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.colorInfo};
  margin-top: 3rem;
`;

const ModalButton = styled(Button)`
  font-size: 1.8rem;
  margin-right: 1rem;
`;

const ModalExit = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  border: none;
  color: ${(props) => props.theme.colors.colorDanger};
  background: inherit;
  font-size: 2.5rem;
`;

const AddExerciseModal = (props) => {
  const [isOpen, setModalVisible] = useState(false);
  const { name, id, action, buttonText, size } = props;
  return (
    <React.Fragment>
      <DeleteButton
        style={{ fontSize: size }}
        onClick={() => setModalVisible(true)}
      >
        <i className='fas fa-plus-circle'></i>
        {' ' + buttonText}
      </DeleteButton>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setModalVisible(false)}
        closeTimeoutMS={200}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <InfoContainer>
          <ExerciseCreate name={name} id={id} handleSubmit={action} />

          <ModalExit onClick={() => setModalVisible(false)}>
            <i className='fas fa-times-circle'></i>
          </ModalExit>
        </InfoContainer>
      </Modal>
    </React.Fragment>
  );
};

// <FlexBoxCenter style={{ marginTop: '2rem' }}>
//             <ModalButton
//               onClick={() => {
//                 action(id);
//                 setModalVisible(false);
//               }}
//               variant='outline-success'
//               size='lg'
//             >
//               Add Exercise
//             </ModalButton>
//             <ModalButton variant='secondary' size='lg'>
//               Cancel
//             </ModalButton>
//           </FlexBoxCenter>

AddExerciseModal.defaultProps = {
  warningText: '',
  size: '1rem',
};

export { AddExerciseModal };
