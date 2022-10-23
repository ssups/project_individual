import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostList } from "../../components";
import {
  Wrap,
  Title,
  Selection,
  PostsWrap,
  Description,
  Attributes,
  PageNum,
  Button,
} from "./style";

const Board = ({ name, setIsPosting }) => {
  let allPosts = useSelector(state => state.postReducer.allPosts);
  const loginUserId = useSelector(state => state.loginReducer.id);
  const pageNumRef = useRef([]);
  const [amountPerPage, setAmountPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState("latest");
  const postsAmount = name === "게시판" ? allPosts?.length : null;
  const dispatch = useDispatch();

  function onChange(e) {
    setAmountPerPage(e.target.value * 1);
    setCurrentPage(1);
  }
  function pageChange(e) {
    setCurrentPage(e.currentTarget.innerText * 1);
  }
  function sortByDate() {
    if (order === "old") {
      dispatch({ type: "SORT_POSTS_BY_NEW" });
      setOrder("latest");
    } else {
      dispatch({ type: "SORT_POSTS_BY_OLD" });
      setOrder("old");
    }
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
          <option value="6">6</option>
          <option value="8">8</option>
        </Selection>
      </div>
      <Wrap>
        <Description>
          <span style={{ width: "30px" }}></span>
          <span style={{ width: "60%" }}>제목</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "100px" }}> 작성자 </div>
            <div style={{ width: "120px" }} onClick={sortByDate}>
              작성일 {order === "latest" ? "⇧" : order === "old" ? "⇩" : null}
            </div>
            <div style={{ width: "60px" }}> 조회수 </div>
          </div>
        </Description>
        {name === "게시판" ? (
          <PostsWrap>
            {Array(amountPerPage)
              .fill(0)
              .map((el, ind) => (
                <PostList
                  key={allPosts[ind + (currentPage - 1) * amountPerPage]?.id || -ind}
                  data={allPosts[ind + (currentPage - 1) * amountPerPage]}
                  LiNum={ind + (currentPage - 1) * amountPerPage + 1}
                  amountPerPage={amountPerPage}
                />
              ))}
          </PostsWrap>
        ) : null}
        <Attributes>
          {Array(Math.ceil(postsAmount / amountPerPage))
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
