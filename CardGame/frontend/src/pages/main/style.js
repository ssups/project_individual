import styled from "styled-components";

const Wrap = styled.div`
  width: 1600px;
  margin: auto;
  padding-top: 20px;
`;
const ImgSlide = styled.div`
  background-image: url(https://mblogthumb-phinf.pstatic.net/20121214_287/sarah5918_1355471636868XWlj9_GIF/tumblr_m48i09jKHX1r6knzvo1_500.gif?type=w2);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 500px;
`;
const BoardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 20px;
`;
const CenterBoard = styled.div`
  width: 30%;
  height: 500px;
  /* background-color: #e1e5eb; */
  background-color: white;
  border-radius: 30px;
  /* border: 2px solid black; */
`;
const RightBoard = styled.div`
  width: 30%;
  height: 500px;
  /* background-color: #e1e5eb; */
  background-color: white;
  border-radius: 30px;
  /* border: 2px solid black; */
`;
const LeftBoard = styled.div`
  width: 30%;
  height: 500px;
  /* background-color: #e1e5eb; */
  background-color: white;
  border-radius: 30px;
  /* border: 2px solid black; */
`;
const Title = styled.div`
  margin: auto;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  /* border-bottom: 2px solid black; */
`;
const BoardContents = styled.ul`
  list-style: none;
  margin: auto;
  padding: 0;
  width: 80%;
  height: 80%;
  background-color: white;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* flex-direction: column; */
`;
const BoardList = styled.li`
  width: 100%;
  height: 40px;
  font-family: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  /* border-bottom: 1px solid black; */
`;

export {
  Wrap,
  ImgSlide,
  BoardWrap,
  CenterBoard,
  RightBoard,
  LeftBoard,
  Title,
  BoardContents,
  BoardList,
};
