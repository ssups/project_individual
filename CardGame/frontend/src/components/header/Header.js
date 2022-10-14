import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Whole, Wrap, Logo, Menu, MenuLi, User, UserContents } from "./style";

const Header = ({ setOnLoad }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const userNick = useSelector(state => state.loginReducer.nickName);
  function move(path) {
    setOnLoad(true);
    nav(`${path}`);
  }
  function logout() {
    sessionStorage.clear();
    dispatch({ type: "LOGOUT" });
    setOnLoad(true);
    // nav("/");
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
            <UserContents data-path="/mypage" onClick={e => move(e.target.dataset.path)}>
              {userNick}의 마이페이지
            </UserContents>
            /
            <UserContents data-path="/logout" onClick={logout}>
              로그아웃
            </UserContents>
          </User>
        </Wrap>
      </Whole>
    </div>
  );
};

export default Header;
