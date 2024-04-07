import * as S from "./style.ts";

export default function Home() {
  return (
    <div>
      <S.CenterObject>
        <S.CenterText>당신을 위한 심리상담 플랫폼</S.CenterText>
        <S.CenterMainText>먀옹</S.CenterMainText>
        <S.CenterButtonObject>
          <S.CenterButton>시작하기</S.CenterButton>
          <S.CenterTextButton>로그인하기</S.CenterTextButton>
        </S.CenterButtonObject>
      </S.CenterObject>
      <S.SecondObject>
        <S.SecondMainText>
          오늘의
          <br />
          기분은
          <br />
          어떠신가요?
        </S.SecondMainText>
      </S.SecondObject>
    </div>
  );
}
