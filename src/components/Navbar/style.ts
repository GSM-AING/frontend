import styled from "styled-components";

export const NavbarObject = styled.div`
  background-color: black;
  width: auto;
  height: 400px;
  display: grid;
  grid-template-columns: 150px 150px 100px;
  @media screen and (max-width: 375px) {
    grid-template-rows: 150px 150px 100px;
  }
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
  padding: 50px;
  white-space: nowrap;
`;

export const MenuText = styled.div`
  color: #fff;
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
