import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Stacks from "./Stacks";

export default function App() {
  // 헤더부분에 useNavigation 함수 쓸려고 Stacks 컴포넌트 따로 만듬
  // useNavigation()은 NavigationContainer 안에있는 컴포넌트에서만 선언이 가능하기 때문
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </Provider>
  );
}
