import "./App.css";
import { Header } from "./components";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { Login, Loading, Main, Shop } from "./pages";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./redux/middleware";

const LoginCheck = ({ component }) => {
  const isLogin = useSelector(state => state.loginReducer.isLogin);
  if (isLogin) return component;
  else
    return (function redirect() {
      alert("로그인 하세요");
      return <Navigate to={"/"} />;
    })();
};

function App() {
  const [onLoad, setOnLoad] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginAction.loginCheck());
  }, []);
  useEffect(() => {
    if (onLoad === true) {
      setTimeout(() => {
        console.log("바꾸기실행");
        setOnLoad(false);
      }, 2000);
    }
    console.log(onLoad);
  }, [onLoad]);
  return (
    <div className="App">
      {onLoad || isLoginPage ? null : <Header setOnLoad={setOnLoad}></Header>}
      {onLoad || isLoginPage ? null : <div style={{ height: "100px" }}></div>}
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              onLoad ? <Loading /> : <Login setIsLoginPage={setIsLoginPage} setOnLoad={setOnLoad} />
            }
          />
          <Route
            path="/main"
            element={onLoad ? <Loading /> : <LoginCheck component={<Main />} />}
          />
          <Route
            path="/shop"
            element={onLoad ? <Loading /> : <LoginCheck component={<Shop />} />}
          />
          {/* <Route path="/loading" element={<Loading />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;

// 첫페이지를 로그인창으로 만들기
// 로그인 안되어있으면 모든페이지 접근불가
