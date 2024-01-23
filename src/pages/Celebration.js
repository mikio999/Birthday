import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import JSConfetti from "js-confetti";
import { useNavigate } from "react-router-dom";

const Celebration = () => {
  const [showBirthday, setShowBirthday] = useState(false);
  const navigate = useNavigate();
  const jsConfetti = new JSConfetti();

  const fullText = ` 안녕 정은아!! 난 너의 영원한 짝지 민경이야~ 벌써 우리가 함께한지 20년이
        되었구나. 매년 생일 편지에 적는 말이기는 하지만 또 10년 주기는
        남다르잖아??! 나이 25살에 20년지기 베프가 있다는 것은 나의 꽤나 큰
        자랑거리야! 실은 너라는 존재 자체부터가 나에게 큰 자랑이지 ㅎㅎ


        이번에 정은이한테 오랜만에 손글씨 편지를 받으면서 정말 기뻤어. 뭔가
        가족을 제외하면 꾸준히 매년 내 생일을 챙겨주는 사람이라 그런가 너의
        편지를 받으니까 비로소 생일인게 체감이 될 정도였어. 나는 내 생일 날짜를
        참 좋아해 (결코 0과 1로만 이루어져서 좋은건 아님). 일단 새해로부터 딱
        일주일 후라 전년도의 마무리와 새로운 마음가짐을 동시에 준비할 수 있어서
        좋고 정은이 생일이랑 가까워서 또 좋아 ㅋㅋ 좋아하는 사람과 공통점이
        많다는 것은 이토록 기쁜 일이구나!

        아무튼 올해는 우리의 20주년인만큼 어떻게 그동안의 이 감사함과 너의
        탄생과 우리의 우정을 축하하면서 전부 표현할 수 있을까하면서 나름의
        고민을 했단다. 우연히도 내 생일날 너의 손편지를 받았을때 힌트를 얻을 수
        있었어! 손편지는 축하를 표현하는 굉장히 클래식한 방법이지만 나는 역으로
        웹으로 축하해보고 싶었어. 웹은 손편지보다는 미래스러운 방식이고 또
        나는 정은이 덕분에 웹 개발을 시작하게 되어서 이 나름의 의미가 깊은 것
        같아서 도전해보게 되었어. 그리고 이 웹은 전부 리액트 + javascript 로
        구현했어. API없이 세시간 만에 만든거라 퀄리티는 허접하지만.. ㅎㅎ 나중에
        정은이가 내 백엔드를 해주겠지?! 드디어 소문의 멋쟁이 백엔드와 협업을
        흑흑 ;ㅅ;

        뭔가 작년은 특히 정은이랑 더 가까워진 기분이 들어. 나의 검도 유랑을
        받아줘서 고마워. 지금 내가 너무 사랑하게 된 웹 개발의 세계로 너가
        이끌어준 것처럼 나도 내가 좋아하는 것들을 보여주고 싶었어. 너무 내
        멋대로 내 맛집, 내 검도, 내 장소 여기저기 끌고 다닌 기분이 들지만(?)
        그럼에도 좋았다고 말해줘서 고마워 ㅋㅋ 나한테도 의미가 정말 컸던
        기간이야. 20대가 끝나기 전에 또 같이 진득하게 붙어서 밥먹고 운동하고
        대화하는 기간을 가지고 싶어 히히

        최근에 여러모로 고민이 또 많아보이는데 변함없이 난 계속 그대로 너의
        곁에서 치어리더를 하고 있을게! 고민에 고민이 너무 버거워지는 날이면
        언제든지 불러! 연락해! 그런 날이 오면 우리는 또 같이 밥먹고 운동하고
        대화하면 되는 것이야.. 그리고 정은이가 어떤 길을 가던 난 곁에서
        응원할거야..! 우리에게 특별한 20주년이고.. 또 원래 내 징크스가
        짝수해에는 고생하다가 연말에 큰일이 터지거든??! 그런고로 올해는 우리의
        해가 될 수 있을거야!!!

        다시한번 생일 축하하고!! 조금이라도 이 웹페이지가 기분 좋은 하루를
        만들어줬으면 좋겠다 ㅎㅎ
   
        `;
  const [text, setText] = useState("");
  const [showFrom, setShowFrom] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setText((prev) => prev + fullText[prev.length]);
    }, 10);

    if (text.length === fullText.length) {
      clearTimeout(timer);
      setShowFrom(true);
      setShowBirthday(true);
    }

    return () => clearTimeout(timer);
  }, [text, fullText]);

  useEffect(() => {
    let confettiInterval;

    if (showBirthday) {
      confettiInterval = setInterval(() => {
        jsConfetti.addConfetti({
          confettiColors: [
            "#DCFFB7",
            "#FF6868",
            "#ff7096",
            "#ff85a1",
            "FFBB64",
            "#FFEAA7",
          ],
          confettiRadius: 5,
          confettiNumber: 500,
        });
      }, 2000);
    }
    return () => {
      if (confettiInterval) {
        clearInterval(confettiInterval);
      }
    };
  }, [showBirthday]);

  return (
    <Container>
      <Top>To. 정은</Top>
      {/* <VideoPlay /> */}
      <SubTitle>세상에서 가장 소중한 나의 친구 정은이에게</SubTitle>
      <Content>{text}</Content>
      {showFrom && (
        <>
          <FromMent>FROM. 너의 친구 만경</FromMent>{" "}
          <VideoBtn
            onClick={() => {
              navigate("/video");
            }}
          >
            마무리 영상 보러가기
          </VideoBtn>
        </>
      )}
    </Container>
  );
};

export default Celebration;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  min-height: 100vh;
`;

const SubTitle = styled.h2`
  margin-top: 1rem;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid rgba(0, 0, 0, 0.75);
  animation: typewriter 4s steps(44) 1s forwards,
    blinkTextCursor 500ms steps(44) infinite normal;

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 90%;
    }
  }
  @media (min-width: 768px) {
    @keyframes typewriter {
      from {
        width: 0;
      }
      to {
        width: 50%;
      }
    }
  }
  @keyframes blinkTextCursor {
    from {
      border-right-color: rgba(0, 0, 0, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }
`;
const Top = styled.h1`
  margin-top: 2rem;
  font-size: 20px;
  color: #0bec12;
`;

const Content = styled.div`
  margin-top: 1rem;
  width: 85vw;
  word-break: keep-all;
  line-height: 1.5;
  font-size: 14px;

  @media (min-width: 768px) {
    width: 60vw;
    font-size: 16px;
  }
`;

const FromMent = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #0bec12;
`;

const VideoBtn = styled.button`
  margin-bottom: 2rem;
  color: #0bec12;
  border: solid 1.5px #0bec12;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1rem;
  background-color: black;

  &:hover {
    background-color: #0bec12;
    color: black;
    border-color: black;
  }
`;
