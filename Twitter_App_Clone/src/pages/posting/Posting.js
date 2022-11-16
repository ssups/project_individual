import React from "react";
import { Container, Wrapper, PostingInput, ProfileBox, ProfileImg } from "./style";
import { profile } from "../../images";
import { StyleSheet, Dimensions } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
// console.log(Dimensions.get("window"));

const Posting = ({ route }) => {
  const headerHeight = useHeaderHeight();
  return (
    <Container>
      <Wrapper contentContainerStyle={{ ...styles.wrapper }}>
        <ProfileBox>
          <ProfileImg source={profile} resizeMode="cover"></ProfileImg>
        </ProfileBox>
        <PostingInput
          // 인풋텍스트 자체 스크롤은 막고
          scrollEnabled={false}
          autoFocus={true}
          autoCorrect={false}
          multiline={true}
          placeholder={`${route.params.id}님 무슨 일이 일어나고 있나요?`}
          heightprops={screenHeight - headerHeight}
        ></PostingInput>
      </Wrapper>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: screenWidth - 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
  },
});

export default Posting;
