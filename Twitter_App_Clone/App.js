import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Entrance, Main, Posting } from "./src/pages";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import color from "./src/color";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Navigator>
          {/* name값이랑 component이름이랑 다르면 오류남 */}
          <Stack.Screen name="Entrance" component={Entrance} options={{ headerShown: false }} />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              title: "게시판",
              // headerTransparent: true,
              // headerBackground: () => <View style={{ backgroundColor: "red" }}></View>,
              headerStyle: { backgroundColor: color.main },
            }}
          />
          <Stack.Screen
            name="Posting"
            component={Posting}
            options={{ title: "게시글 작성", headerStyle: { backgroundColor: color.main } }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
