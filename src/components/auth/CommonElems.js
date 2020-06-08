import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import landing from '../../assets/landing.jpeg';
import { Link } from 'react-router-dom';

export const LandingContainer = styled.div`
  background: url(${landing}) no-repeat;
  background-size: 100% 100%;
  height: 100vh;
`;

export const OverlayContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
`;

export const CenteredContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 10px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.colorWhite};
  font-size: 5rem;
  font-family: ${(props) => props.theme.fontStyles.boldest};
  margin-bottom: 4rem;
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
