import React, { useEffect, useRef, useState } from "react";
import { Container, Wrapper, PostingInput, ProfileBox, ProfileImg } from "./style";
import { profile } from "../../images";
import {
  StyleSheet,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  View,
  Platform,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
// console.log(Dimensions.get("window"));

// 유저아이디값 스토리지에 저장하기 뒤로가기하면 삭제됨

// 키보드 사이즈 따서 스크롤밑에 키보드높이만큼 보장해줄 더미View 만들기

const Posting = ({ route }) => {
  const headerHeight = useHeaderHeight();
  const scrollRef = useRef();
  const [keboardHeight, setKeboardHeight] = useState(0);

  useEffect(() => {
    console.log(Platform.OS);
    Keyboard.addListener("keyboardDidShow", e => {
      setKeboardHeight(e.endCoordinates.height);
    });
    Keyboard.addListener("keyboardDidHide", e => {
      setKeboardHeight(0);
    });
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  });

  return (
    // <Container>
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={styles.container}
    // >
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ ...styles.wrapper }}
        // ref={scroll => (scrollRef.scroll = scroll)}
        ref={scrollRef}
        onContentSizeChange={() => {
          // this.scroll.scrollToEnd();
          // console.log(scrollRef.scroll);
          // console.log(this);
          // this.scrollView.scrollToEnd({ animated: false });
        }}
      >
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
          heightprops={screenHeight - headerHeight - keboardHeight}
          // onSubmitEditing={() => Keyboard.dismiss()}
          keyboardType="email-address"
        ></PostingInput>
        <TextInput></TextInput>
      </ScrollView>
      <View style={{ height: keboardHeight }}></View>
    </View>
    // </KeyboardAvoidingView>
    // </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.main,
  },
  wrapper: {
    width: screenWidth - 50,
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 10000,
    padding: 10,
  },
});

export default Posting;
