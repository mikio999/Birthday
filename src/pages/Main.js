import React, { useState, useEffect } from "react";
import styled from "styled-components";
import JSConfetti from "js-confetti";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [showReady, setShowReady] = useState(true);
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const [showFive, setShowFive] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);

  const jsConfetti = new JSConfetti();

  const navigate = useNavigate();

  useEffect(() => {
    let confettiInterval;

    if (showBirthday) {
      confettiInterval = setInterval(() => {
        jsConfetti.addConfetti({
          confettiColors: [
            "#ff0a54",
            "#ff477e",
            "#ff7096",
            "#ff85a1",
            "#fbb1bd",
            "#f9bec7",
          ],
          confettiRadius: 5,
          confettiNumber: 500,
        });
      }, 1000);
    }
    return () => {
      if (confettiInterval) {
        clearInterval(confettiInterval);
      }
    };
  }, [showBirthday]);

  useEffect(() => {
    setTimeout(() => {
      setShowReady(false);
      setShowBirthday(true);
    }, 2 * 5000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowOne(true);
    }, 1500);
  });

  useEffect(() => {
    setTimeout(() => {
      setShowTwo(true);
    }, 3000);
  });

  useEffect(() => {
    setTimeout(() => {
      setShowThree(true);
    }, 4500);
  });

  useEffect(() => {
    setTimeout(() => {
      setShowFour(true);
    }, 6000);
  });

  useEffect(() => {
    setTimeout(() => {
      setShowFive(true);
    }, 8000);
  });

  return (
    <Container>
      {showReady && (
        <Ready>
          {showOne && <OneWord>야야 벌써 발소리 들리는데?</OneWord>}
          {showTwo && <TwoWord>헐 아직 준비 다 못했어.. 조용히해봐!!!</TwoWord>}
          {showThree && (
            <ThreeWord>그나저나 이거 불 어떻게 키는거야?</ThreeWord>
          )}
          {showFour && <FourWord>온다.. 온다..!!!</FourWord>}
          {showFive && <FiveWord>내가 불 킬게!</FiveWord>}
        </Ready>
      )}
      {showBirthday && (
        <>
          <Celebration>
            서프라이즈!! <br />
            생일축하해!!!
            <br /> 정은아!!
          </Celebration>
          <Birthday>
            <CakeImg src="/cake.png" alt="케이케이케이케이크" />
          </Birthday>
          <StartBtn
            onClick={() => {
              navigate("/test");
            }}
          >
            정은이인거 인증하고 마저 축하받기
          </StartBtn>
        </>
      )}
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: 100dvh;
  background-color: black;
`;

const Ready = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  color: white;
  display: flex;
`;

const OneWord = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
`;
const TwoWord = styled.div`
  margin-top: 1rem;
  justify-content: flex-end;
`;
const ThreeWord = styled.div`
  margin-top: 1rem;
  justify-content: flex-start;
`;
const FourWord = styled.div`
  margin-top: 1rem;
`;
const FiveWord = styled.div`
  margin-top: 1rem;
`;

const Birthday = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 30dvh;
  height: 30dvh;
  box-shadow: -5px -5px 30px 5px red, 5px 5px 30px 5px blue;
`;

const CakeImg = styled.img`
  width: 20dvh;
`;

const Celebration = styled.h1`
  color: #0bec12;
  text-align: center;
  line-height: 1.5;
  font-size: 1.2rem;
  margin-bottom: 5rem;
`;

const StartBtn = styled.button`
  margin-top: 2rem;
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
