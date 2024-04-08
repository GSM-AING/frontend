import * as S from "./style.ts";
import leftear from "../../assets/left-cat-ear.svg";
import rightear from "../../assets/right-cat-ear.svg";
import scrolldown from "../../assets/scroll.svg";
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
        <S.ScrollDownObject>
          <img src={scrolldown} width="50" height="50" alt="left" />
          <span>게속 보기</span>
        </S.ScrollDownObject>
      </S.CenterObject>
      <S.SecondObject>
        <S.CatEarObject>
          <img src={leftear} width="80" height="80" alt="left" />
          <img src={rightear} width="80" height="80" alt="right" />
        </S.CatEarObject>
        <S.SecondMainText>
          오늘의
          <br />
          기분은
          <br />
          어떠신가요?
        </S.SecondMainText>
        <S.FlowBox>
          <S.FlowWrap>
            <S.Flow>
              <span>기쁨</span>
              <span>슬픔</span>
              <span>화남</span>
              <span>흥분한</span>
              <span>가슴뛰는</span>
              <span>미묘한</span>
              <span>안정된</span>
              <span>감사한</span>
              <span>자신감있는</span>
              <span>열정적인</span>
              <span>궁금한</span>
              <span>지루한</span>
              <span>놀라운</span>
              <span>외로운</span>
              <span>의기소침한</span>
              <span>달콤한</span>
            </S.Flow>
          </S.FlowWrap>
        </S.FlowBox>
      </S.SecondObject>
    </div>
  );
}
