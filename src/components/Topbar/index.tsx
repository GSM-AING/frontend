import * as S from "./style.ts";
import menu from "../../assets/menu.svg";

export default function Topbar(props: any) {
  return (
    <S.Header>
      <h1>먀옹</h1>
      <S.TextMenu>
        <a>소개</a>
        <a>캐릭터</a>
        <a>서비스</a>
      </S.TextMenu>
      <S.ImageMenu>
        <img src={menu} width="40" height="40" alt="menu" />
      </S.ImageMenu>
    </S.Header>
  );
}
