import styled from "styled-components";

const Whole = styled.div`
  width: 90%;
  min-width: 1250px;
  margin: auto;
  height: calc(100vh - 150px);
  border: 2px solid red;
`;
const Attributes = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  font-family: "arirang";
  font-size: 30px;
  box-sizing: border-box;
`;

export { Whole, Attributes, Button };
