import styled from "styled-components/native";

const Container = styled.View`
  background-color: #4a99e9;
  flex: 1;
  align-items: center;
`;
const TittleBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: white;
  font-size: 50px;
  font-weight: 600;
`;
const ContentsBox = styled.View`
  background-color: white;
  border: 2px solid #4a99e9;
  border-radius: 30px;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  padding: 30px 25px 30px 25px;
  width: 250px;
  flex: 1.5;
`;
const LogoBox = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Logo = styled.Image`
  height: 30px;
  width: 40px;
`;
const InputBox = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;
const InputText = styled.Text`
  font-size: 18px;
  flex: 1.5;
  font-weight: 600;
  color: #4a99e9;
`;
const Input = styled.TextInput`
  border-radius: 10px;
  border: 2px solid #4a99e9;
  /* flex-grow: 1; */
  flex: 2;
  margin-left: 5px;
  font-size: 18px;
  /* width: 100%; */
`;
const BtnBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 0.6;
  margin-top: 10px;
`;
const Btn = styled.TouchableOpacity``;
const BtnText = styled.Text`
  font-size: 12px;
  color: #4a99e9;
`;
const Footer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const FooterBtn = styled.TouchableOpacity`
  background-color: white;
  border-radius: 30px;
  margin-bottom: 30px;
  padding: 10px 30px 10px 30px;
`;
const FooterBtnText = styled.Text`
  color: #4a99e9;
  font-size: 25px;
  font-weight: 900;
`;

export {
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
};
