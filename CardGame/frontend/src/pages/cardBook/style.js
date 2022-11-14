import styled from "styled-components";
const Whole = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrap = styled.div`
  height: calc(100vh - 200px);
  /* width: 90%; */
  /* width: max-content; */
  width: fit-content;
  max-width: 90%;
  background-color: white;
  margin: auto;
  padding: 20px 0 10px 20px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  /* justify-content: center; */
  overflow-y: scroll;
`;
const CardWrap = styled.div`
  width: 330px;
  /* width: 100%; */
  /* width: calc(20% - 12px); */
  min-width: 320px;
  height: 400px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :nth-child(5n + 0) {
    margin-right: none;
  }
  :nth-child(n + 0) {
    /* margin-left: 10px; */
  }
  border: 6px solid black;
  position: relative;
`;
const CardCount = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(30%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardImg = styled.img`
  width: 90%;
  height: 80%;
  border: 4px solid black;
`;

export { Whole, Wrap, CardWrap, CardCount, CardImg };
