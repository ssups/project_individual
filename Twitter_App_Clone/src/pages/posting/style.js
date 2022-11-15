import styled from "styled-components/native";
import color from "../../color";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${color.main};
`;
const Wrapper = styled.View`
  flex: 0.9;
  width: 80%;
  background-color: white;
  border-radius: 20px;
`;

const PostingBox = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 20px;
`;
const PostingInput = styled.TextInput`
  border: 2px solid black;
`;
const PostingBtn = styled.TouchableOpacity`
  margin-left: 20px;
`;
const PostingBtnText = styled.Text`
  font-size: 20px;
`;

export { Container, Wrapper, PostingBox, PostingInput, PostingBtn, PostingBtnText };
