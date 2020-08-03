import styled from 'styled-components';

export const FlexBoxBetween = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FlexBoxCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const PerfectCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
