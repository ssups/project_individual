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
import { Text, View, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { twitter_logo } from "../../images";

const Entrance = ({ navigation }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState();
  const inputIdRef = useRef();
  const inputPwRef = useRef();

  const login = () => {
    // 공백처리
    if (id === "") {
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
            autoFocus={true}
            onSubmitEditing={() => inputPwRef.current.focus()}
            onChangeText={payload => setId(payload)}
            value={id}
            autoCapitalize="none"
          ></Input>
          {/* <TextInput></TextInput> */}
        </InputBox>
        <InputBox>
          <InputText>비밀번호:</InputText>
          <Input
            ref={inputPwRef}
            autoCorrect={false}
            onSubmitEditing={login}
            secureTextEntry={true}
            onChangeText={payload => setPw(payload)}
            value={pw}
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
        <FooterBtn onPress={login}>
          <FooterBtnText>로그인</FooterBtnText>
        </FooterBtn>
      </Footer>
    </Container>
  );
};

export default Entrance;
