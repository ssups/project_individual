import styled from "styled-components";

const Wrap = styled.div`
  width: 90%;
  min-width: 1100px;
  margin: auto;
  padding-top: 20px;
  font-size: 25px;
`;
const Inventory = styled.div`
  width: 100%;
  /* width: 1200px; */
  margin: auto;
  margin-top: 20px;
  margin-bottom: 40px;
  height: 330px;
  background-color: white;
  border: 2px solid black;
  border-radius: 30px;
  /* overflow-wrap: normal; */
`;
const InventoryWrap = styled.div`
  width: 95%;
  margin: auto;
  min-width: 900px;
  height: 100%;
  display: flexbox;
  align-items: center;
  padding: 30px 0 30px 0;
  overflow-x: scroll;
  perspective: 1000px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  height: 250px;
  margin-right: 100px;
  & > svg {
    width: 200px;
    height: 200px;
  }
`;

export { Wrap, Inventory, InventoryWrap, Item };