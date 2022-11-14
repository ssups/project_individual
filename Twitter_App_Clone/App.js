import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Entrance } from "./src/pages";

export default function App() {
  return (
    <View style={styles.container}>
      <Entrance></Entrance>
      <StatusBar style="auto" />
    </View>
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
