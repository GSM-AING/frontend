import styled from "styled-components";

export const NavbarObject = styled.div`
  background-color: black;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  text-overflow: clip;
`;

export const MenuSubject = styled.div`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const MenuObject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 80px;
`;

export const MenuText = styled.div`
  color: #fff;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const SnsRound = styled.div`
  width: 50px;
  height: 50px;
  background-color: #d9d9d9;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
