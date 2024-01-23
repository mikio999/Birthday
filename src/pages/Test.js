import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThree, setAnswerThree] = useState("");
  const [answerFour, setAnswerFour] = useState("");
  const [answerFive, setAnswerFive] = useState("");
  const [answerSix, setAnswerSix] = useState("");
  const [answerSeven, setAnswerSeven] = useState("");
  const [answerEight, setAnswerEight] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (
      answerOne === "3월 21일" &&
      answerTwo === "예은" &&
      answerThree == "247" &&
      answerFour === "오레노라멘" &&
      answerFive === "도쿄" &&
      answerSix === "라따뚜이" &&
      answerSeven === "최선" &&
      answerEight === "까르보나라"
    ) {
      alert("축하합니다. 당신은 정은이가 맞군요! o0o");
      navigate("/celebration");
    } else {
      alert(
        "아쉽지만 틀렸습니다. 당신은 정은이가 아니군요? 그래도 다시 시도해보세요."
      );
    }
  };

  return (
    <Container>
      <Top>
        <Title>2024학년도 정은인증시험 문제지</Title>
        <Information>
          * 본 문제를 전부 맞혀야 정은 인증이 완료됩니다.
          <br /> 한 문제라도 틀릴 시 올해는 곽민경의 축하를 받을 수 없습니다.
          <br /> 전부 주관식이며 문제에서 요구하는 사항을 잘 보시오
        </Information>
      </Top>
      <Content>
        <Question>
          <label>
            1 . 민경과 정은의 공식 파이썬 스터디 날짜는 몇월 몇일인가? <br />
            (ex. <BlueColor>1월 24일</BlueColor> 형태로 쓸 것)
          </label>
          <AnswerInput
            type="text"
            placeholder="0월 00일"
            required
            value={answerOne}
            onChange={(e) => setAnswerOne(e.target.value)}
          />
        </Question>
        <Question>
          <label>2 . 정은과 민경이 처음 만난 곳은 분당구의 OO유치원이다.</label>
          <AnswerInput
            type="text"
            placeholder="유치원 이름만 써라"
            required
            value={answerTwo}
            onChange={(e) => setAnswerTwo(e.target.value)}
          />
        </Question>
        <Question>
          <label>
            3 . 정은과 민경은 고3 입시의 쓴맛을 봤다. <br />
            눈물을 머금고 2018년 이투스OOO 이라는 재수학원에 들어갔다.
          </label>
          <AnswerInput
            type="text"
            placeholder="숫자만 써라"
            required
            value={answerThree}
            onChange={(e) => setAnswerThree(e.target.value)}
          />
        </Question>
        <Question>
          <label>
            4. 2023년 상반기, 정은과 민경이 합정역에서 먹었던 라멘집 이름은?
            <br />
            (hint: 오00라멘)
          </label>
          <AnswerInput
            type="text"
            placeholder="다섯글자다"
            required
            value={answerFour}
            onChange={(e) => setAnswerFour(e.target.value)}
          />
        </Question>
        <Question>
          <label>
            5. 민경과 정은은 정은 자취방에서 OO올림픽 개막식을 보기로 한 적이
            있다.
          </label>
          <AnswerInput
            type="text"
            placeholder="지역만 써라"
            required
            value={answerFive}
            onChange={(e) => setAnswerFive(e.target.value)}
          />
        </Question>
        <Question>
          <label>
            6. 다음 중 둘이 같이 본 디즈니 픽사 애니메이션이 아닌 것은? <br />
            (엘리멘탈, 토이스토리, 라따뚜이){" "}
          </label>
          <AnswerInput
            type="text"
            placeholder="하나만 써라"
            required
            value={answerSix}
            onChange={(e) => setAnswerSix(e.target.value)}
          />
        </Question>
        <Question>
          <label>7. 민경 정은이는 2011년에 OO어학원을 같이 다녔다.</label>
          <AnswerInput
            type="text"
            placeholder="두글자만 적어라"
            required
            value={answerSeven}
            onChange={(e) => setAnswerSeven(e.target.value)}
          />
        </Question>
        <Question>
          <label>
            8. 정은이는 7살때 민준 오빠의 파스타를 뺏어 먹다가 혼난 적이 있다.{" "}
            <br /> 무슨 파스타일까? hint: 로제파스타, 오일파스타, 까르보나라
          </label>
          <AnswerInput
            type="text"
            placeholder="다섯글자로 써라"
            required
            value={answerEight}
            onChange={(e) => setAnswerEight(e.target.value)}
          />
        </Question>
      </Content>
      <SubmitBtn onClick={handleSubmit}>제출하기</SubmitBtn>
    </Container>
  );
};

export default Test;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
  width: inherit;
  background-color: antiquewhite;
`;

const Title = styled.h1`
  margin-top: 1rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bolder;
`;
const Information = styled.div`
  margin-top: 1rem;
  font-size: 0.7rem;
  line-height: 1.2;
`;

const Top = styled.div`
  margin-top: 2rem;
  border: 1px solid black;
  width: 90%;
  padding: 10px;
  height: 8rem;
`;

const Content = styled.div`
  margin-top: 2rem;
  border: 1px solid black;
  width: 90%;
  padding: 10px;
  min-height: 70vh;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const BlueColor = styled.span`
  color: blue;
`;

const Question = styled.div`
  margin-top: 1rem;
  word-break: keep-all;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

const AnswerInput = styled.input`
  border: none;
  margin-top: 10px;
  width: 35vw;
  height: 3vh;
  padding: 10px;
`;

const SubmitBtn = styled.button`
  margin-top: 20px;
  margin-bottom: 30px;
  width: 10rem;
  height: 3rem;
  background-color: none;
  font-size: 1.2rem;
`;
