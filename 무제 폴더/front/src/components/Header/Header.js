import React from "react";
import { Whole, Wrap, Logo, Menu, MenuLi, User } from "./style";

const Header = () => {
  return (
    <div>
      <Whole>
        <Wrap>
          <Logo>로고</Logo>
          <Menu>
            <MenuLi>메뉴1</MenuLi>
            <MenuLi>메뉴2</MenuLi>
            <MenuLi>메뉴3</MenuLi>
          </Menu>
          <User>유저</User>
        </Wrap>
      </Whole>
    </div>
  );
};

export default Header;
