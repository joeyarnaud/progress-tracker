import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ErrorText = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.colorDanger};
`;

export const LandingContainer = styled.div`
  background-size: 100% 100%;
  height: 100vh;
`;

export const OverlayContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const CenteredContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.colorDark};
  padding: 2rem;
  border-radius: 10px;
  min-width: 50rem;
`;

export const SubmitButton = styled(Button)`
  font-size: 2rem;
  padding: 0.5rem 4rem;
`;

export const Center = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

export const Text = styled(Link)`
  color: ${(props) => props.theme.colors.colorWhite};
  font-size: 1.6rem;
`;
