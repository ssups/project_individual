import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Whole,
  Wrap,
  InnerWrap,
  Title,
  InputTitle,
  SubTitle,
  TextArea,
  ButtonWrap,
  Button,
} from "./style";

const PostingPop = ({ setIsPosting }) => {
  const dispatch = useDispatch();
  const writer = useSelector(state => state.loginReducer.id);
  function closePostingPop(e) {
    if (e.target.dataset.for === "backGround") setIsPosting(false);
  }
  return (
    <Whole data-for="backGround" onClick={closePostingPop}>
      <Wrap>
        <InnerWrap>
          <Title>
            제목 : <InputTitle></InputTitle>
          </Title>
          <SubTitle> 작성자: {writer}</SubTitle>
          <TextArea></TextArea>
          <ButtonWrap>
            <Button>작성</Button>
            <Button>취소</Button>
          </ButtonWrap>
        </InnerWrap>
      </Wrap>
    </Whole>
  );
};

export default PostingPop;
