import { Text, View, StyleSheet } from "react-native";

export default function StyleInternal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INDMO</Text>
      <Text style={styles.paragraph}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
  paragraph: {
    paddingTop: 20,
    fontSize: 30,
    color: "yellow",
  },
});
