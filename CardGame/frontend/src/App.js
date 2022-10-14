import "./App.css";
import { Header } from "./components";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { Login, Loading, Main, Shop } from "./pages";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./redux/middleware";

const LoginCheck = ({ component }) => {
  const dispatch = useDispatch();
  // 페이지 이동시 토큰검사
  dispatch(loginAction.loginCheck());
  const isLogin = sessionStorage.getItem("isLogin") || false;
  // const isLogin = useSelector(state => state.loginReducer.isLogin);
  console.log("로그인", isLogin);
  if (isLogin) return component;
  else
    return (function redirect() {
      // alert('로그인 하세요')
      return <Navigate to={"/"} />;
    })();
};

function App() {
  const [onLoad, setOnLoad] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const dispatch = useDispatch();
  // const isLogin = useSelector(state => state.loginReducer.isLogin);
  const isLogin = sessionStorage.getItem("isLogin") || false;

  useEffect(() => {
    // 로그인 한적 있을때만 로그인첵 실행되도록
    // 새로고침시 토큰검사
    if (sessionStorage.length !== 0) {
      dispatch(loginAction.loginCheck());
    }
    setOnLoad(true);
  }, []);
  useEffect(() => {
    if (onLoad === true) {
      setTimeout(() => {
        // console.log("바꾸기실행");
        setOnLoad(false);
      }, 2000);
    }
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
              onLoad ? (
                <Loading />
              ) : isLogin ? (
                <Navigate to="/main" />
              ) : (
                <Login setIsLoginPage={setIsLoginPage} setOnLoad={setOnLoad} />
              )
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
// isLogin 값을 storage에 저장해서 관리
