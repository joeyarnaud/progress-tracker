import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import Label from './FormLabel';
import { ErrorText } from './common';

function InputEmail(props) {
  const { handleChange, value, error } = props;
  return (
    <Form.Group>
      <Label variant='light' text='Email' htmlFor='email' />
      <Form.Control
        name='email'
        type='email'
        placeholder='Email'
        size='lg'
        onChange={(e) => handleChange(e)}
        value={value}
      />
      <ErrorText>{error}</ErrorText>
    </Form.Group>
  );
}

InputEmail.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default InputEmail;
