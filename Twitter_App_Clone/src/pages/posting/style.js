import styled from "styled-components/native";
import color from "../../color";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${color.main};
`;
const Wrapper = styled.ScrollView``;
const ProfileBox = styled.View`
  height: 50px;
  justify-content: center;
`;
const ProfileImg = styled.Image`
  height: 35px;
  width: 35px;
  border-radius: 100%;
  border-radius: 100%;
`;
const PostingInput = styled.TextInput`
  flex: 9;
  font-size: 17px;
  padding-left: 40px;
  min-height: ${props => props.heightprops - 80 + "px"};
`;

export { Container, Wrapper, PostingInput, ProfileBox, ProfileImg };
