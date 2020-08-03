import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import Label from './FormLabel';
import { ErrorText } from './common';

function InputPassword(props) {
  const { text, name, handleChange, value, error } = props;

  return (
    <Form.Group>
      <Label variant='light' text={text} />
      <Form.Control
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
        type='password'
        placeholder='Password'
        size='lg'
      />
      <ErrorText>{error}</ErrorText>
    </Form.Group>
  );
}

InputPassword.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default InputPassword;
