import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdderButton = styled(Link)`
  color: ${(props) => props.theme.colors.colorWarning};
  font-size: 3.5rem;
`;
