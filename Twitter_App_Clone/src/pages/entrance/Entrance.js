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
import { Text, View, Button } from "react-native";
import React from "react";
import { twitter_logo } from "../../images";

const Entrance = () => {
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
          <Input></Input>
        </InputBox>
        <InputBox>
          <InputText>비밀번호:</InputText>
          <Input></Input>
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
        <FooterBtn>
          <FooterBtnText>로그인</FooterBtnText>
        </FooterBtn>
      </Footer>
    </Container>
  );
};

export default Entrance;
