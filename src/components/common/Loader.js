import React from 'react';
import styled from 'styled-components';
import loading from 'assets/loading.gif';

const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Image = styled.img`
  width: 5rem;
`;

export default function Loader() {
  return (
    <LoadingContainer>
      <Image src={loading} alt='loading' />
    </LoadingContainer>
  );
}
