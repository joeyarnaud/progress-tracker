import React from 'react';
import { Container } from './styled-components';
import PropTypes from 'prop-types';

function NoData(props) {
  return <Container>{props.text}</Container>;
}

NoData.propTypes = {
  text: PropTypes.string.isRequired,
};

export { NoData };
