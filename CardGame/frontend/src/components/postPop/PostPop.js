import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import parser from "html-react-parser";
import { Editor } from "../";
import {
  Whole,
  Wrap,
  InnerWrap,
  TitleWrap,
  Title,
  InputTitle,
  SubTitle,
  TextArea,
  CommentWrap,
  CommentInputWrap,
  CommentInput,
  CommentBtn,
  ButtonWrap,
  Button,
} from "./style";
import { commetAction, postAction } from "../../redux/middleware";
const PostPop = ({ setIsPostPop, setOrder }) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.postReducer.popUpPost);
  const loginId = useSelector(state => state.loginReducer.id);
  const comments = useSelector(state => state.postReducer.popUpPost_comments);
  const [mode, setMode] = useState("normal");
  const [modifyData, setModifyData] = useState(data?.main);
  const tittleRef = useRef();
  const commentRef = useRef();

  function closePostingPop(e) {
    if (e.target.dataset.for === "backGround") {
      setIsPostPop(false);
      setMode("normal");
    }
  }
  function modify() {
    setMode("modify");
  }
  function delPost() {
    dispatch(postAction.delPost(data.id, setIsPostPop, setOrder));
  }
  function submitModify() {
    const titleVal = tittleRef.current.value;
    const filteredVal = titleVal.replaceAll(" ", "");
    if (filteredVal === "" || undefined) {
      alert("제목을 적어주세요");
      return;
    }
    dispatch(postAction.modifyPost(data.id, titleVal, modifyData, setOrder, setMode));
  }
  function registerComment() {
    const commentVal = commentRef.current.value;
    const filteredVal = commentVal.replaceAll(" ", "");
    if (filteredVal === "" || undefined) {
      alert("댓글을 입력하세요");
      return;
    }
    dispatch(commetAction.registerComment(data.id, loginId, commentVal));
    commentRef.current.value = "";
  }

  return (
    <Whole data-for="backGround" onClick={closePostingPop}>
      <Wrap>
        <InnerWrap>
          <TitleWrap>
            {mode === "normal" ? (
              <Title> 제목 : {data?.title}</Title>
            ) : (
              <>
                제목: <InputTitle defaultValue={data?.title} ref={tittleRef}></InputTitle>
              </>
            )}
          </TitleWrap>
          <SubTitle>
            <span>작성자:{data?.user_id}</span>
            {mode === "normal" ? (
              <span>조회수:{loginId !== data?.user_id ? data?.visited + 1 : data?.visited}</span>
            ) : null}
          </SubTitle>
          <div style={{ display: "flex" }}>
            <TextArea>
              {mode === "normal" ? (
                <div style={{ padding: "0 20px 0 20px" }}> {parser(data?.main)}</div>
              ) : (
                <Editor mode={mode} data={data?.main} setModifyData={setModifyData} />
              )}
            </TextArea>
          </div>
          {mode === "normal" && (
            <CommentWrap>
              <summary>댓글</summary>
              <div style={{ padding: "20px" }}>
                <CommentInputWrap>
                  {loginId} : <CommentInput type="text" ref={commentRef} />
                  <CommentBtn onClick={registerComment}>등록</CommentBtn>
                </CommentInputWrap>
                {comments.map(
                  el =>
                    el && (
                      <div key={el.id}>
                        {el.writer} : {el.text}
                      </div>
                    )
                )}
              </div>
              {/* <div>gdgd</div>
            <div>gdgd</div>
            <div>gdgd</div> */}
            </CommentWrap>
          )}
          <ButtonWrap>
            {data?.user_id === loginId && mode === "normal" ? (
              <>
                <Button onClick={modify}>수정</Button>
                <Button onClick={delPost}>삭제</Button>
              </>
            ) : data?.user_id === loginId && mode === "modify" ? (
              <Button onClick={submitModify}>완료</Button>
            ) : null}
          </ButtonWrap>
        </InnerWrap>
      </Wrap>
    </Whole>
  );
};

export default PostPop;
