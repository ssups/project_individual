import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Image,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import { Container, PostingBtnBox, PostingBtn, PostingBtnText, Wrapper } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { useHeaderHeight } from "@react-navigation/elements";
import { postAction } from "../../redux/middleware";
import { profile } from "../../images";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import color from "../../color";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Main = ({ navigation }) => {
  const userId = useSelector(state => state.loginReducer.userId);
  const allPosts = useSelector(state => state.postReducer.allPosts);
  // const [modal, setModal] = useState({});
  const [modalOnPost, setModalOnPost] = useState();
  const dispatch = useDispatch();
  const headerHeight = useHeaderHeight();

  // AsyncStorage.clear();

  useEffect(() => {
    // 스토리지에 저장된값 최초에 가져오기
    dispatch(postAction.getAllPosts());
    console.log("실행");
  }, []);
  useEffect(() => {}, [allPosts]);

  function delPost(postId) {
    console.log(postId);
    dispatch(postAction.delPost(allPosts, postId));
  }
  function goPosting() {
    navigation.navigate("Posting", { mode: "posting" });
    setModalOnPost(null);
  }
  function goModify(postId, text) {
    navigation.navigate("Posting", { mode: "modifying", postId, text });
    setModalOnPost(null);
  }

  return (
    // <TouchableWithoutFeedback
    //   onPress={() => {
    //     setModalOnPost(null);
    //   }}
    // >
    <Container>
      <ScrollView
        contentContainerStyle={{ ...styles.wrapper, minHeight: screenHeight - headerHeight }}
        onTouchStart={() => setModalOnPost(null)}
      >
        {allPosts &&
          allPosts?.map((post, ind) => {
            const time = new Date(post?.postId);
            return (
              <View
                key={post?.postId ? post.postId : ind}
                style={{ ...styles.post, zIndex: modalOnPost === post.postId && 999 }}
              >
                <View style={styles.postProfile}>
                  <Image source={profile} resizeMode="cover" style={styles.proflieImg}></Image>
                </View>
                <View style={styles.postMain}>
                  <View style={styles.postHead}>
                    <Text style={styles.postWriter}>{post?.writer}</Text>
                    <Text style={styles.postTime}>
                      {time.toString().slice(0, 10) === new Date().toString().slice(0, 10)
                        ? new Date().getHours() === time.getHours()
                          ? time.getHours() + ":" + time.getMinutes()
                          : new Date().getHours() - time.getHours() + "시간 전"
                        : time.getFullYear() + "." + (time.getMonth() + 1) + "." + time.getDate()}
                    </Text>
                  </View>
                  <Text>{post?.text}</Text>
                </View>

                <View style={{ ...styles.postModal }}>
                  <Pressable
                    style={styles.postModalBtn}
                    onPress={() => setModalOnPost(post.postId)}
                  >
                    <MaterialCommunityIcons
                      name="dots-horizontal"
                      size={24}
                      color={modalOnPost === post.postId ? color.main : "lightgray"}
                    />
                  </Pressable>
                  <View
                    style={{
                      ...styles.postModalMenu,
                      display: modalOnPost !== post.postId && "none",
                    }}
                  >
                    {post.writer === userId && (
                      <>
                        <Pressable style={styles.menuBtn} onPress={() => delPost(post.postId)}>
                          <Text style={{ color: "red" }}>삭제</Text>
                        </Pressable>
                        <Pressable
                          style={{ ...styles.menuBtn }}
                          onPress={() => goModify(post.postId, post.text)}
                          // onPress={() => navigation.navigate("Posting", {})}
                        >
                          <Text>수정</Text>
                        </Pressable>
                      </>
                    )}
                    <Pressable
                      style={{ ...styles.menuBtn, borderBottomWidth: 0 }}
                      onPress={() => console.log("hi")}
                    >
                      <Text>신고</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            );
          })}
      </ScrollView>
      <PostingBtnBox style={styles.shadow}>
        <PostingBtn onPress={goPosting}>
          <PostingBtnText>+</PostingBtnText>
        </PostingBtn>
      </PostingBtnBox>
    </Container>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: screenWidth - 50,
    backgroundColor: "white",
    borderRadius: 20,
  },
  shadow: {
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "black",
    shadowOpacity: 1,
  },
  post: {
    borderBottomWidth: 2,
    borderBottomColor: "lightgray",
    flexDirection: "row",
    padding: 10,
    width: "100%",
  },
  postProfile: {
    marginRight: 20,
  },
  proflieImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  postMain: {
    flexGrow: 1,
  },
  postHead: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    marginBottom: 10,
  },
  postWriter: {
    fontSize: 15,
    fontWeight: "600",
  },
  postTime: {
    marginLeft: 5,
    fontSize: 12,
    textAlign: "center",
  },
  postModal: {
    position: "absolute",
    right: 5,
  },
  postModalBtn: {
    right: 10,
    flexDirection: "row-reverse",
  },
  postModalMenu: {
    // position: "absolute",
    borderRadius: 15,
    // borderWidth: 2,
    width: 100,
    // height: 100,
    paddingVertical: 0,
    backgroundColor: "rgba(255,255,255,0.9)",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "lightgray",
    shadowOpacity: 0.5,
  },
  menuBtn: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default Main;
