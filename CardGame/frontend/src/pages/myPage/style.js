import styled from "styled-components";

const Wrap = styled.div`
  width: 1600px;
  margin: auto;
  padding-top: 20px;
  font-size: 30px;
`;
const Inventory = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 40px;
  height: 300px;
  background-color: white;
  border: 2px solid black;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 30px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  height: 230px;
  margin-right: 100px;
  & > svg {
    width: 180px;
    height: 180px;
  }
`;

export { Wrap, Inventory, Item };
