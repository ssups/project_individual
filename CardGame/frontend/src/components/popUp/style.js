import styled, { keyframes } from "styled-components";

const itemMotion = keyframes`
  50%{
    transform: scale(1.15);
  }
  100%{
    transform: scale(1);
  }
`;
const Whole = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: calc(100vh - 100px);
  z-index: 999;
  backdrop-filter: blur(5px);
`;
const Wrap = styled.div`
  border: 2px solid black;
  width: 500px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* background-color: white; */
  & > svg {
    width: 350px;
    height: 350px;
    animation: ${itemMotion} 2s infinite;
  }
`;
const Button = styled.button`
  width: 200px;
  height: 50px;
  font-family: "arirang";
  font-size: 30px;
`;

export { Whole, Wrap, Button };
