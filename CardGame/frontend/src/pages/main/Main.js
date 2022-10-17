import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ImgSlide } from "./style";
import {
  Wrap,
  BoardWrap,
  CenterBoard,
  RightBoard,
  LeftBoard,
  Title,
  BoardContents,
  BoardList,
} from "./style";

const Main = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {}, []);
  return (
    <div className="contents">
      <Wrap>
        <ImgSlide></ImgSlide>
        <BoardWrap>
          <LeftBoard>
            <Title>공지사항</Title>
            <BoardContents>
              <BoardList>첫번째글</BoardList>
              <BoardList>두번째글</BoardList>
              <BoardList>세번째글</BoardList>
              <BoardList>네번째글</BoardList>
            </BoardContents>
          </LeftBoard>
          <CenterBoard>
            <Title>게시판</Title>
            <BoardContents>
              <BoardList>첫번째글</BoardList>
              <BoardList>두번째글</BoardList>
              <BoardList>세번째글</BoardList>
              <BoardList>네번째글</BoardList>
            </BoardContents>
          </CenterBoard>
          <RightBoard>
            <Title>패치노트</Title>
            <BoardContents>
              <BoardList>첫번째글</BoardList>
              <BoardList>두번째글</BoardList>
              <BoardList>세번째글</BoardList>
              <BoardList>네번째글</BoardList>
            </BoardContents>
          </RightBoard>
        </BoardWrap>
      </Wrap>
    </div>
  );
};

export default Main;
