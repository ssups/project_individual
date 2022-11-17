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
  Button,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useSelector, useDispatch } from "react-redux";
import { postAction } from "../../redux/middleware";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
// console.log(Dimensions.get("window"));

// 유저아이디값 스토리지에 저장하기 뒤로가기하면 삭제됨

// 키보드 사이즈 따서 스크롤밑에 키보드높이만큼 보장해줄 더미View 만들기

const Posting = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const dispatch = useDispatch();
  const scrollRef = useRef();
  const [keboardHeight, setKeboardHeight] = useState(0);
  const [text, setText] = useState("");
  const userId = useSelector(state => state.loginReducer.userId);
  // useSelector addPost 함수안에 넣으니깐 안됨
  const allPosts = useSelector(state => state.postReducer.allPosts);

  useEffect(() => {
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
  }, []);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRightBtn}>
          <Button title="트윗" color={color.main} onPress={addPost} />
        </View>
      ),
    });
    // 밑에 text 스테이트값 안넣어주면 최신 text값 못가져온다
  }, [navigation, text, allPosts]);

  function addPost() {
    console.log(allPosts);
    dispatch(postAction.addPost(allPosts, new Date(), userId, text));
    navigation.navigate("Main", {});
  }

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={styles.container}
    // >
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ ...styles.wrapper }} ref={scrollRef}>
        <ProfileBox>
          <ProfileImg source={profile} resizeMode="cover"></ProfileImg>
        </ProfileBox>
        <PostingInput
          // 인풋텍스트 자체 스크롤은 막고
          scrollEnabled={false}
          autoFocus={true}
          autoCorrect={false}
          multiline={true}
          placeholder={`${userId}님 무슨 일이 일어나고 있나요?`}
          heightprops={screenHeight - headerHeight - keboardHeight}
          keyboardType="email-address"
          onChangeText={payload => setText(payload)}
        ></PostingInput>
        <TextInput></TextInput>
      </ScrollView>
      <View style={{ height: keboardHeight }}></View>
    </View>
    // </KeyboardAvoidingView>
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
  headerRightBtn: {
    borderRadius: 50,
    backgroundColor: "white",
    fontSize: 9,
  },
});

export default Posting;
