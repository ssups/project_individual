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
  background-color: rgba(255, 255, 255, 0.5);
  & > svg {
    width: 350px;
    height: 350px;
    animation: ${itemMotion} 2s infinite;
  }
`;
const Attribute = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  & > div {
    font-size: 30px;
  }
  & > div > input {
    font-size: 30px;
    width: 60px;
    height: 50px;
  }
`;
const Button = styled.button`
  width: 200px;
  height: 50px;
  font-family: "arirang";
  font-size: 30px;
`;
const CardWrap = styled.div`
  width: 100%;
  height: 100%;

  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const CardDescription = styled.div`
  background-color: white;
  width: 90%;
  height: 130px;
  border: 1px solid black;
  font-size: 35px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardStatusWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Whole, Wrap, Attribute, Button, CardWrap, CardDescription, CardStatusWrap };
