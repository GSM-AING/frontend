import styled, { keyframes } from "styled-components";

export const CenterObject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  gap: 10px;
`;

export const CenterText = styled.div`
  font-weight: 500;
`;
export const CenterMainText = styled.div`
  font-size: 64px;
  font-weight: 800;
`;

export const CenterButtonObject = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const CatEarObject = styled.div`
  display: flex;
  flex-direction: row;
  gap: 150px;
  margin-bottom: 10px;
`;

export const ScrollDownObject = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CenterButton = styled.div`
  width: 100px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #d9d9d9;
  text-align: center;
  justify-items: center;
  line-height: 40px;
`;

export const CenterTextButton = styled.div`
  color: #000;
  text-align: center;
  line-height: 40px;
`;

export const SecondObject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 140px;
`;

export const SecondMainText = styled.div`
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  white-space: pre-wrap;
  text-overflow: clip;
  line-height: normal;
`;

const flowing = keyframes`
  0% {
    transform: translate3d(0  , 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

export const FlowBox = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const FlowWrap = styled.div`
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  width: 100%;
  height: 100%;
  white-space: nowrap;
`;

export const Flow = styled.div`
  font-size: clamp(60px, 5vw, 8rem);
  animation: ${flowing} 20s linear infinite;
  span {
    color: rgba(0, 0, 0, 0.5);

    display: inline-block;
    font-weight: 600;
    padding: 0 10px;
    font-size: 40px;
    margin-left: 20px;
  }
`;
