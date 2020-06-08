import React from 'react';
import { Form } from 'react-bootstrap';
import Label from './FormLabel';

function InputPassword(props) {
  const { text } = props;

  return (
    <Form.Group>
      <Label variant='light' text={text} />
      <Form.Control type='password' placeholder='Password' size='lg' />
    </Form.Group>
  );
}

export default InputPassword;
