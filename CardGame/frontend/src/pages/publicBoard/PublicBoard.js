import React, { useState } from "react";
import { Whole, Attributes, Button } from "./style";
import { Board, PostingPop } from "../../components/";

const PublicBoard = () => {
  const [isPosting, setIsPosting] = useState(false);
  return (
    <div className="contents">
      {isPosting ? <PostingPop setIsPosting={setIsPosting} /> : null}
      <Whole>
        <Board name="게시판" />
        <div></div>
        <Attributes>
          <Button onClick={() => setIsPosting(true)}>글쓰기</Button>
        </Attributes>
      </Whole>
    </div>
  );
};

export default PublicBoard;
