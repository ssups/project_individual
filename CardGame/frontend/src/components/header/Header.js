import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Whole, Wrap, Logo, Menu, MenuLi, MenuImg, User, UserContents } from "./style";
import {
  logo,
  flower_greyblue,
  flower_purple,
  flower_red,
  flower_skyblue,
  flower_yellow,
} from "../../images";

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
            <img data-path="/main" style={{ width: "80px" }} src={logo} alt="" />
            <div data-path="/main" style={{ width: "120px", textAlign: "center" }}>
              페이지 이름
            </div>
          </Logo>
          <Menu>
            <MenuLi data-path="/shop" onClick={e => move(e.target.dataset.path)}>
              <MenuImg src={flower_red} alt="" />
              상점
            </MenuLi>
            <MenuLi>
              <MenuImg src={flower_greyblue} alt="" /> 게임
            </MenuLi>
            <MenuLi>
              <MenuImg src={flower_purple} alt="" />
              카드북
            </MenuLi>
            <MenuLi>
              <MenuImg src={flower_skyblue} alt="" />
              공지사항
            </MenuLi>
            <MenuLi>
              <MenuImg src={flower_yellow} alt="" />
              이벤트
            </MenuLi>
          </Menu>
          <User>
            <UserContents data-path="/mypage" onClick={e => move(e.target.dataset.path)}>
              {/* {userNick}의 마이페이지 */}
              마이페이지
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
