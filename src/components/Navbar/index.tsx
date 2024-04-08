import * as S from "./style.ts";
import instagramlogo from "../../assets/instagram.svg";
export default function Topbar() {
  return (
    <S.NavbarObject>
      <S.MenuObject>
        <S.MenuSubject>제휴</S.MenuSubject>
        <S.MenuText>도입문의</S.MenuText>
        <S.MenuText>파트너쉽 신청</S.MenuText>
      </S.MenuObject>
      <S.MenuObject>
        <S.MenuSubject>약관</S.MenuSubject>
        <S.MenuText>개인정보처리약관</S.MenuText>
        <S.MenuText>서비스 이용 약관</S.MenuText>
      </S.MenuObject>
      <S.MenuObject>
        <S.MenuSubject>먀옹 </S.MenuSubject>
        <S.SnsRound>
          <img src={instagramlogo} alt="instagram" width="25" height="25" />
        </S.SnsRound>
      </S.MenuObject>
    </S.NavbarObject>
  );
}
