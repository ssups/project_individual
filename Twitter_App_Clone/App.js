import { NavigationContainer } from "@react-navigation/native";
import {} from "";
import React from "react";

import Stacks from "./Stacks";

export default function App() {
  // 헤더부분에 useNavigation 함수 쓸려고 Stacks 컴포넌트 따로 만듬
  // useNavigation()은 NavigationContainer 안에있는 컴포넌트에서만 선언이 가능하기 때문
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}
ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd;
