import React, { useEffect, useRef, useState } from "react";
import { Whole } from "./style";
import { Board, PostingPop } from "../../components/";
import { useDispatch } from "react-redux";
import { postAction } from "../../redux/middleware";

const PublicBoard = () => {
  const dispatch = useDispatch();
  const [isPosting, setIsPosting] = useState(false);
  useEffect(() => {
    dispatch(postAction.getAllPosts());
  }, []);
  return (
    <div className="contents">
      {isPosting ? <PostingPop setIsPosting={setIsPosting} /> : null}
      <Whole>
        <Board name="게시판" setIsPosting={setIsPosting} />
      </Whole>
    </div>
  );
};

export default PublicBoard;
