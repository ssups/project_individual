import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Wrap, Title, Selection, PostsWrap, Post, Attributes, PageNum, Button } from "./style";

const Board = ({ name, setIsPosting }) => {
  const allPosts = useSelector(state => state.postReducer.allPosts);
  const loginUserId = useSelector(state => state.loginReducer.id);
  const pageNumRef = useRef([]);
  const [amountPerPage, setAmountPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const postsAmount = name === "게시판" ? allPosts?.length : null;

  function onChange(e) {
    setAmountPerPage(e.target.value * 1);
    setCurrentPage(1);
  }
  function pageChange(e) {
    setCurrentPage(e.currentTarget.innerText * 1);
  }
  useEffect(() => {
    pageNumRef.current.forEach(el => el?.classList.remove("active"));
    pageNumRef.current[currentPage - 1]?.classList.add("active");
  }, [currentPage]);
  useEffect(() => {
    console.log(allPosts);
  }, [allPosts]);
  return (
    <div>
      <Title>{name}</Title>
      <div style={{ height: "30px", position: "relative" }}>
        <Selection name="" id="" onChange={onChange}>
          <option value="4">4</option>
          <option value="8">8</option>
        </Selection>
      </div>
      <Wrap>
        {name === "게시판" ? (
          <PostsWrap>
            {Array(amountPerPage)
              .fill(0)
              .map((el, ind) => (
                <Post key={ind}>{allPosts[ind + (currentPage - 1) * amountPerPage]?.id}</Post>
              ))}
          </PostsWrap>
        ) : null}
        <Attributes>
          {Array(postsAmount / amountPerPage)
            .fill(0)
            .map((el, ind) => (
              <PageNum key={ind} onClick={pageChange} ref={el => (pageNumRef.current[ind] = el)}>
                {ind + 1}
              </PageNum>
            ))}
          {name === "게시판" ? (
            <Button onClick={() => setIsPosting(true)}>글쓰기</Button>
          ) : loginUserId === "admin" ? (
            <Button onClick={() => setIsPosting(true)}>공지쓰기</Button>
          ) : null}
        </Attributes>
      </Wrap>
    </div>
  );
};

export default Board;
