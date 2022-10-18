import styled, { keyframes } from "styled-components";

const Whole = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  /* border-bottom: 2px solid black; */
  background-color: white;
`;
const Wrap = styled.div`
  width: 90%;
  min-width: 1100px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 23px;
  :hover {
    transform: scale(1.1);
  }
  /* background-color: yellow; */
`;
const Menu = styled.ul`
  width: max-content;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  list-style: none;
`;
const MenuLi = styled.li`
  /* width: 100%; */
  width: max-content;
  height: 40px;
  border-right: 2px solid rgba(0, 0, 0, 0.2);
  :last-child {
    border-right: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 15px;
  padding-right: 15px;
  :hover {
    transform: scale(1.1);
  }
`;
const MenuImg = styled.img`
  height: 30px;
  margin-right: 5px;
`;
const User = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: yellow; */
`;
const UserContents = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  :first-child {
    margin-right: 10px;
  }
  :last-child {
    margin-left: 10px;
  }
  :hover {
    transform: scale(1.2);
  }
`;
const alarmMotion = keyframes`
  25%{
    transform: rotate(-20deg);
  }
  75%{
    transform: rotate(20deg);
  }
`;
const Alarm = styled.div`
  margin-left: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  color: red;
  & > svg {
    height: 35px;
    animation: ${alarmMotion} 1s infinite linear;
    /* animation-timing-function: linear; */
  }
  /* :hover {
    transform: scale(1.1);
  } */
`;
const AlarmNum = styled.span`
  font-size: 20px;
  position: absolute;
  right: 10px;
`;
export { Whole, Wrap, Logo, Menu, MenuLi, MenuImg, User, UserContents, Alarm, AlarmNum };
