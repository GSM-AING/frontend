import styled from "styled-components";

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
  margin-top: 500px;
  overflow: scroll;
  margin-bottom: 200px;
`;

export const SecondMainText = styled.div`
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  white-space: pre-wrap;

  line-height: normal;
`;

export const LineUpText = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 50px;
  margin-top: 40px;
`;

export const LineText = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
`;
