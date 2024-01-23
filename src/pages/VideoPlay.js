import { useRef } from "react";
import Video from "../video/birthday.mp4";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function VideoPlay() {
  const videoRef = useRef();
  const navigate = useNavigate();
  const setPlayBackRate = () => {
    videoRef.current.playbackRate = 0.5;
  };
  return (
    <Container>
      <Title>Short Movie</Title>
      <StyledVideo
        autoPlay
        loop
        ref={videoRef}
        onCanPlay={() => setPlayBackRate()}
      >
        <source src={Video} type="video/mp4" />
      </StyledVideo>
      <BtnBox>
        <LetterBtn
          onClick={() => {
            navigate("/celebration");
          }}
        >
          편지로 돌아가기
        </LetterBtn>
        <MainBtn
          onClick={() => {
            navigate("/");
          }}
        >
          메인으로 돌아가기
        </MainBtn>
      </BtnBox>
    </Container>
  );
}

export default VideoPlay;

const Title = styled.h1`
  color: white;
  font-size: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  min-height: 100dvh;
`;

const StyledVideo = styled.video`
  margin-top: 10px;
  width: 90vw;
  height: auto;
`;

const LetterBtn = styled.button`
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

const MainBtn = styled.button`
  margin-left: 1rem;
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

const BtnBox = styled.div`
  margin-top: 2rem;
  display: flex;
`;
