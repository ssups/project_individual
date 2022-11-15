import React, { useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { Container, PostingBtnBox, PostingBtn, PostingBtnText, Wrapper } from "./style";

const Main = ({ navigation, route }) => {
  useEffect(() => {
    // console.log(route.params);
  }, []);
  return (
    <Container>
      <Wrapper>
        <Text>{route.params.id}님 환영합니다</Text>
        <PostingBtnBox style={styles.shadow}>
          <PostingBtn
            onPress={() => {
              navigation.navigate("Posting", {});
            }}
          >
            <PostingBtnText>+</PostingBtnText>
          </PostingBtn>
        </PostingBtnBox>
      </Wrapper>
    </Container>
  );
};

const styles = StyleSheet.create({
  shadow: { shadowOffset: { width: 3, height: 3 }, shadowColor: "black", shadowOpacity: 1 },
});

export default Main;
