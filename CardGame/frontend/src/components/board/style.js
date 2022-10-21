import styled from "styled-components";

const Title = styled.div`
  width: 200px;
  height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  font-size: 50px;
`;
const Selection = styled.select`
  position: absolute;
  right: 0;
  width: 50px;
  height: 100%;
  font-family: "arirang";
  font-size: 25px;
`;
const Wrap = styled.div`
  width: 100%;
  height: calc(100vh - 250px);
  border: 2px solid black;
`;
const PostsWrap = styled.div`
  width: 100%;
  height: calc(100vh - 300px);
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
`;
const Post = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid black;
`;
const Attributes = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const PageNum = styled.span`
  border-left: 2px solid rgba(0, 0, 0, 0.5);
  padding-left: 10px;
  margin-right: 10px;
  :first-child {
    border: none;
  }
  &.active {
    color: red;
  }
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  font-family: "arirang";
  font-size: 30px;
  box-sizing: border-box;
  position: absolute;
  right: 0;
`;

export { Wrap, Title, Selection, PostsWrap, Attributes, PageNum, Button, Post };
