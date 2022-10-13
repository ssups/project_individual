import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Whole, Wrap, Logo, Menu, MenuLi, User, UserContents } from "./style";

const Header = ({ setOnLoad }) => {
  const nav = useNavigate();
  const userNick = useSelector(state => state.loginReducer.nickName);
  function move(path) {
    setOnLoad(true);
    nav(`${path}`);
  }
  return (
    <div className="Header">
      <Whole>
        <Wrap>
          <Logo data-path="/main" onClick={e => move(e.target.dataset.path)}>
            로고
          </Logo>
          <Menu>
            <MenuLi data-path="/shop" onClick={e => move(e.target.dataset.path)}>
              상점
            </MenuLi>
            <MenuLi>메뉴2</MenuLi>
            <MenuLi>메뉴3</MenuLi>
          </Menu>
          <User>
            <UserContents data-path="/login" onClick={e => move(e.target.dataset.path)}>
              마이페이지
            </UserContents>
            /
            <UserContents data-path="/join" onClick={e => move(e.target.dataset.path)}>
              {userNick}
            </UserContents>
          </User>
        </Wrap>
      </Whole>
    </div>
  );
};

export default Header;
