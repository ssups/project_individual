import styled from "styled-components";

const Whole = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: calc(100vh - 100px);
  z-index: 999;
`;
const Wrap = styled.div`
  background-color: black;
  width: 500px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export { Whole, Wrap };
