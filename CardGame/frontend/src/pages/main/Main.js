import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { userAction } from "../../redux/middleware";
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
  const rankData = useSelector(state => state.pointReducer.all_users);
  useEffect(() => {
    dispatch(userAction.getAllUsersPoints());
  }, []);
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
            <Title>랭킹</Title>
            <BoardContents>
              <BoardList>
                <span style={{ width: "100%" }}>등수</span>
                <span style={{ width: "100%", textAlign: "center" }}>아이디</span>
                <span style={{ width: "100%", textAlign: "right" }}>점수</span>
              </BoardList>
              {rankData.map((el, ind) => {
                return (
                  <BoardList key={el && el.user_id}>
                    <span style={{ width: "100%" }}>{ind + 1}</span>
                    <span style={{ width: "100%", textAlign: "center" }}>{el?.user_id}</span>
                    <span style={{ width: "100%", textAlign: "right" }}>
                      {el?.point?.toLocaleString() + "점"}
                    </span>
                  </BoardList>
                );
              })}
            </BoardContents>
          </CenterBoard>
          <RightBoard>
            <Title>게시판</Title>
            <BoardContents>
              <BoardList>첫번째글</BoardList>
            </BoardContents>
          </RightBoard>
        </BoardWrap>
      </Wrap>
    </div>
  );
};

export default Main;
