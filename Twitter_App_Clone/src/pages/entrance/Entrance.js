import {
  Container,
  TittleBox,
  Title,
  ContentsBox,
  LogoBox,
  Logo,
  InputBox,
  InputText,
  Input,
  Footer,
  BtnBox,
  Btn,
  BtnText,
  FooterBtn,
  FooterBtnText,
} from "./style";
import {
  Text,
  View,
  TextInput,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import React, { useRef, useState } from "react";
import { twitter_logo } from "../../images";

const Entrance = ({ navigation }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState();
  const inputIdRef = useRef();
  const inputPwRef = useRef();
  const loginRef = useRef();

  const login = () => {
    // 공백처리
    if (id === "") {
      Alert.alert("경고", "아이디를 입력하세요");
      inputIdRef.current.focus();
      return;
    }
    if (pw === "") {
      inputPwRef.current.focus();
      return;
    }
    // 두번째 인수 객체는 parms 값으로 넘어감
    navigation.navigate("Main", { id });
    setId("");
    setPw("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <TittleBox>
          <Title> Twitter</Title>
        </TittleBox>
        <ContentsBox>
          <LogoBox>
            <Logo source={twitter_logo}></Logo>
          </LogoBox>
          <InputBox>
            <InputText>아이디:</InputText>
            <Input
              ref={inputIdRef}
              autoCorrect={false}
              // autoFocus={true}
              onSubmitEditing={() => inputPwRef.current.focus()}
              onChangeText={payload => setId(payload)}
              value={id}
              autoCapitalize="none"
              returnKeyType="next"
            ></Input>
            {/* <TextInput></TextInput> */}
          </InputBox>
          <InputBox>
            <InputText>비밀번호:</InputText>
            <Input
              ref={inputPwRef}
              autoCorrect={false}
              onSubmitEditing={login}
              // onSubmitEditing={() => console.log(loginRef.current)}
              secureTextEntry={true}
              onChangeText={payload => setPw(payload)}
              value={pw}
              returnKeyType="done"
            ></Input>
          </InputBox>
          <BtnBox>
            <Btn>
              <BtnText>회원가입</BtnText>
            </Btn>
            <Btn>
              <BtnText>아이디/비밀번호 찾기</BtnText>
            </Btn>
          </BtnBox>
        </ContentsBox>
        <Footer>
          <FooterBtn onPress={login} ref={loginRef}>
            <FooterBtnText>로그인</FooterBtnText>
          </FooterBtn>
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Entrance;
