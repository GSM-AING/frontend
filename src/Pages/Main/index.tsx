import * as S from "./style.ts";
import leftear from "../../assets/left-cat-ear.svg";
import rightear from "../../assets/right-cat-ear.svg";
import scrolldown from "../../assets/scroll.svg";
import cat from "../../assets/cat.svg";
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
          <span>계속 보기</span>
        </S.ScrollDownObject>
      </S.CenterObject>
      <S.SecondObject>
        <S.CatEarObject>
          <img src={leftear} width="80" height="80" alt="left" />
          <img src={rightear} width="80" height="80" alt="right" />
        </S.CatEarObject>
        <S.SecondMainText>
          오늘의 기분은
          <br />
          어떠신가요?
        </S.SecondMainText>
        <br />
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
        <S.SecondObject>
          <S.ThirdMainText>저와 함께 놀아봐요 :D</S.ThirdMainText>
          <S.ThirdPageSubTextBox>
            <S.ThirdPageSubText>
              오늘 기분은 어떠세요? 괜찮다면 저와 함께해볼래요?
            </S.ThirdPageSubText>
          </S.ThirdPageSubTextBox>
          <br />
          <S.OutsideOptionBox>
            <S.OptionBox>
              <S.ThirdPageOptionText>
                <span>일기 작성하기</span>
              </S.ThirdPageOptionText>
            </S.OptionBox>
            <S.OptionBox>
              <S.ThirdPageOptionText>
                <span>노래 듣기</span>
              </S.ThirdPageOptionText>
            </S.OptionBox>
            <S.OptionBox>
              <S.ThirdPageOptionText>
                <span>고양이 보러가기</span>
              </S.ThirdPageOptionText>
            </S.OptionBox>
            <S.OptionBox>
              <S.ThirdPageOptionText>
                <span>상담하기</span>
              </S.ThirdPageOptionText>
            </S.OptionBox>
          </S.OutsideOptionBox>
          <br />
          <S.CatImgObject>
            <img src={cat} width="500" height="281.25" alt="left" />
            <S.CuteTagBox>
              <S.TagBoxText>#귀여움</S.TagBoxText>
            </S.CuteTagBox>
            <S.CatTagBox>
              <S.TagBoxText>#고양이</S.TagBoxText>
            </S.CatTagBox>
          </S.CatImgObject>
        </S.SecondObject>
      </S.SecondObject>
    </div>
  );
}
