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

export const CatImgObject = styled.div`
  width: 500px;
  height: 281.25px;
  flex-shrink: 0;
  margin-top: 80px;
`;

export const CuteTagBox = styled.div`
  width: 125px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--d-9-d-9-d-9, #d9d9d9);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  position: relative;
`;

export const CatTagBox = styled.div`
  width: 125px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #d9d9d9;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  display: flex;
`;

export const ThirdPageSubTextBox = styled.div`
  display: inline-flex;
  padding: 7px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const OutsideOptionBox = styled.div`
  display: flex;
  width: 1188px;
  justify-content: center;
  align-items: center;
  gap: 17px;
`;

export const OptionBox = styled.div`
  display: flex;
  padding: 17px 37px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 20px;
  border: 0.5px solid #d9d9d9;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
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
  text-align: center;
`;

export const ThirdMainText = styled.div`
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  font-family: Pretendard;
  line-height: normal;
`;

export const ThirdPageSubText = styled.div`
  color: #6b6b6b;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-family: Pretendard;
  line-height: normal;
  letter-spacing: 1px;
`;

export const ThirdPageOptionText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const TagBoxText = styled.div`
  width: 96px;
  height: 28px;
  flex-shrink: 0;
  color: var(--000000, #000);
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const flowing = keyframes`
  0% {
    transform: translate3d(0  , 0, 0);
  }
  100% {W
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
