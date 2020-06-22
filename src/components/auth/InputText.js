import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import Label from './FormLabel';
import { ErrorText } from './CommonElems';

function InputText(props) {
  const { handleChange, value, error } = props;
  return (
    <Form.Group>
      <Label variant='light' text='Full Name' htmlFor='name' />
      <Form.Control
        name='name'
        type='text'
        placeholder='Full Name'
        size='lg'
        onChange={(e) => handleChange(e)}
        value={value}
      />
      <ErrorText>{error}</ErrorText>
    </Form.Group>
  );
}

InputText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default InputText;
