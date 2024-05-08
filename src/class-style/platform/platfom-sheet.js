import { StyleSheet, View, Text, Platform } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INDMO</Text>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "1",
    display: "flex",
    backgroundColor: Platform.OS === "android" ? "blue" : "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "purple",
    fontSize: 20,
    fontStyle: "italic",
  },
  text: {
    color: "green",
    fontSize: 20,
  },
});
