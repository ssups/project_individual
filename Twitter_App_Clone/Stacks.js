import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Entrance, Main, Posting } from "./src/pages";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderBackButton } from "@react-navigation/elements";
import color from "./src/color";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Stacks = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Stack.Navigator>
        {/* name값이랑 component이름이랑 다르면 오류남 */}
        <Stack.Screen name="Entrance" component={Entrance} options={{ headerShown: false }} />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "",
            // headerTransparent: true,
            // headerBackground: () => <View style={{ backgroundColor: "red" }}></View>,
            headerStyle: { backgroundColor: color.main },
          }}
        />
        <Stack.Screen
          name="Posting"
          component={Posting}
          options={{
            title: "",
            headerStyle: { backgroundColor: color.main },
            // 헤더 밑줄 없애기
            headerShadowVisible: false,
            // headerTransparent: true,
            headerLeft: props => (
              <Button
                title="취소"
                color="red"
                onPress={() => navigation.navigate("Main", {})}
                canGoBack={true}
              />
            ),
            headerRight: () => (
              <View style={styles.headerRightBtn}>
                <Button title="트윗" color={color.main} />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  headerRightBtn: {
    borderRadius: 50,
    backgroundColor: "white",
    fontSize: 9,
  },
});

export default Stacks;
