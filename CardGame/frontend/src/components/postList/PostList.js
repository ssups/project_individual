import React from "react";
import { List, ThumbNail, Title } from "./style";
import parser from "html-react-parser";

const PostList = ({ data, LiNum, amountPerPage }) => {
  const Html = <>parser(data?.main)</>;
  const time = new Date(data?.createdAt);
  // 달이 좀 이상함;
  const month = time.getMonth() + 1;
  function showPost() {
    console.log("하이");
  }

  return (
    <>
      {data ? (
        <List>
          <span style={{ width: "30px", fontSize: `${100 / (amountPerPage / 2)}px` }}>{LiNum}</span>
          <span style={{ width: "60%", display: "flex", alignItems: "center" }}>
            {data.thumb_nail && (
              <ThumbNail src={data.thumb_nail} alt="" amountPerPage={amountPerPage}></ThumbNail>
            )}
            <Title amountPerPage={amountPerPage} onClick={showPost}>
              {data.title}
            </Title>
          </span>
          <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
            <div style={{ width: "100px" }}> {data.user_id} </div>
            <div style={{ width: "120px" }}>
              <div>{time.getFullYear() + "-" + month + "-" + time.getDate()}</div>
              <div>{time.getHours() + ":" + time.getMinutes()}</div>
            </div>
            <div style={{ width: "60px" }}> {data.visited} </div>
          </div>
        </List>
      ) : (
        <div style={{ height: "100%" }}></div>
      )}
    </>
  );
};

export default PostList;
