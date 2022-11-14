import styled from "styled-components";

const Whole = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  border-bottom: 2px solid black;
  background-color: aqua;
`;
const Wrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 100px;
  height: 100%;
  background-color: aliceblue;
`;
const Menu = styled.ul`
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;
const MenuLi = styled.li`
  width: 100%;
  border-right: 2px solid black;
  :last-child {
    border-right: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
`;
const User = styled.div`
  width: 100px;
  height: 100%;
  background-color: blue;
`;

export { Whole, Wrap, Logo, Menu, MenuLi, User };
