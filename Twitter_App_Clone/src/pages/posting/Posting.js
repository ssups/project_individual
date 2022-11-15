import React from "react";
import { Container, Wrapper, PostingInput, PostingBox, PostingBtn, PostingBtnText } from "./style";

const Posting = () => {
  return (
    <Container>
      <Wrapper>
        <PostingBox>
          <PostingInput></PostingInput>
          <PostingBtn>
            <PostingBtnText>등록</PostingBtnText>
          </PostingBtn>
        </PostingBox>
      </Wrapper>
    </Container>
  );
};

export default Posting;
