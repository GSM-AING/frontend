import styled from "styled-components";

export const Header = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const TextMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 51px;
  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const ImageMenu = styled.div`
  display: none;
  @media screen and (max-width: 375px) {
    display: block;
  }
`;
