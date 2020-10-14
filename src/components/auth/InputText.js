import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import Label from './FormLabel';
import { ErrorText } from './common';

function InputText(props) {
  const { handleChange, value, error, name, type, placeholder, text } = props;
  return (
    <Form.Group>
      <Label variant='light' text={text} htmlFor={name} />
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        size='lg'
        onChange={(e) => handleChange(e)}
        aria-label={type}
        aria-required='true'
        value={value}
      />
      <ErrorText>{error}</ErrorText>
    </Form.Group>
  );
}

InputText.defaultProps = {
  type: 'text',
};

InputText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default InputText;
