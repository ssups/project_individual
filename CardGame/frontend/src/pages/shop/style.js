import styled from "styled-components";
const randNum = Math.floor(Math.random() * 36 + 1) * 10;

const Whole = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrap = styled.div`
  width: 1300px;
  margin: auto;
  padding-top: 50px;
`;
const Items = styled.div`
  height: 400px;
  padding: 30px;
  width: 100%;
  border: 5px solid black;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  transform: scale(0.98);
  will-change: transform;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  /* background: rgba(255, 255, 255, 0.1); */
  font-size: 0;
  perspective: 1000px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Item = styled.div`
  width: 300px;
  height: 340px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.15);
  /* 테두리 색 */
  /* box-shadow: inset 0 0 0 10px rgba(0, 0, 0, 0.15); */
  box-shadow: inset 0 0 0 10px rgba(0, 0, 0, 0.5);
  :nth-child(even) {
    transform: scaleX(1.31) rotateY(40deg);
  }
  :nth-child(odd) {
    transform: scaleX(1.31) rotateY(-40deg);
  }
  :last-child {
    margin-right: 60px;
  }
  /* transform: translateX(0); */
`;
// const PopUpWrap = styled.div`
//   position: absolute;
//   background-color: rgba(0, 0, 0, 0.3);
//   width: 100%;
//   height: calc(100vh - 100px);
//   z-index: 999;
// `;
// const PopUp = styled.div`
//   background-color: black;
//   width: 500px;
//   height: 500px;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
// `;
export { Whole, Wrap, Items, Item };
