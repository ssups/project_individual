import styled from "styled-components";

const Title = styled.div`
  width: 200px;
  height: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  font-size: 50px;
`;
const Wrap = styled.div`
  width: 100%;
  height: calc(100vh - 300px);
  border: 2px solid black;
`;

export { Wrap, Title };
