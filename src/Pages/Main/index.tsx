import * as S from "./style.ts";
import leftear from "../../assets/left-cat-ear.svg";
import rightear from "../../assets/right-cat-ear.svg";
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
        <S.CenterButtonObject>
          <img src={leftear} width="80" height="80" alt="left" />
          <img src={rightear} width="80" height="80" alt="right" />
        </S.CenterButtonObject>
        <S.SecondMainText>
          오늘의
          <br />
          기분은
          <br />
          어떠신가요?
        </S.SecondMainText>
        <S.LineUpText>
          <S.LineText>기쁨</S.LineText>
          <S.LineText>슬픔</S.LineText>
          <S.LineText>화남</S.LineText>
          <S.LineText>흥분함</S.LineText>
          <S.LineText>가슴뛰는</S.LineText>
          <S.LineText>미묘한</S.LineText>
        </S.LineUpText>
        <S.LineUpText>
          <S.LineText>지루한</S.LineText>
          <S.LineText>놀라운</S.LineText>
          <S.LineText>외로운</S.LineText>
          <S.LineText>의기소침한</S.LineText>
          <S.LineText>달콤한</S.LineText>
          <S.LineText>초조한</S.LineText>
        </S.LineUpText>
      </S.SecondObject>
    </div>
  );
}
