import styled from "styled-components/native";
import color from "../../color";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${color.main};
`;
const PostingBtnBox = styled.View`
  position: absolute;
  bottom: 10px;
  right: 35px;
`;
const PostingBtn = styled.TouchableOpacity`
  background-color: ${color.main};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
const PostingBtnText = styled.Text`
  font-size: 30px;
  color: white;
  text-align: center;
`;

export { Container, PostingBtnBox, PostingBtn, PostingBtnText };
