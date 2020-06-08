import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Label = styled(Form.Label)`
  color: ${(props) => props.theme.colors.colorWhite};
  font-size: 1.6rem;
`;

function FormLabel(props) {
  const { text } = props;
  return <Label>{text}</Label>;
}

FormLabel.propTypes = {
  text: PropTypes,
};

export default FormLabel;
