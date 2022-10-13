import styled from "styled-components";
const randNum = Math.floor(Math.random() * 36 + 1) * 10;

const Whole = styled.div``;
const Wrap = styled.div`
  width: 1300px;
  margin: auto;
  padding-top: 50px;
`;
const Items = styled.div`
  height: 250px;
  padding: 30px;
  width: 100%;
  border: 1px solid white;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  transform: scale(0.98);
  will-change: transform;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  font-size: 0;
  perspective: 1000px;
`;
const Item = styled.div`
  width: 200px;
  height: 200px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 0 0 10px rgba(0, 0, 0, 0.15);
  :nth-child(even) {
    transform: scaleX(1.31) rotateY(40deg);
  }
  :nth-child(odd) {
    transform: scaleX(1.31) rotateY(-40deg);
  }
  /* transform: translateX(0); */
`;
export { Whole, Wrap, Items, Item };
