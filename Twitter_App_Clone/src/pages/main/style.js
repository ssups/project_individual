import styled from "styled-components/native";
import color from "../../color";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${color.main};
`;
const Wrapper = styled.View`
  /* position: relative; */
  flex: 0.9;
  width: 80%;
  background-color: white;
  border-radius: 20px;
`;
const PostingBtnBox = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  /* box-shadow: 10px 5px 5px black; */
`;
const PostingBtn = styled.TouchableOpacity`
  background-color: ${color.main};
  border: 2px solid white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  /* box-shadow: 10px black; */
`;
const PostingBtnText = styled.Text`
  font-size: 30px;
  color: white;
  text-align: center;
`;

export { Container, Wrapper, PostingBtnBox, PostingBtn, PostingBtnText };
