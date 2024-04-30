import { Text, View } from "react-native";

export default function StyleInline() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          fontWeight: "bold",
          color: "white",
        }}
      >
        INDMO
      </Text>
      <Text
        style={{
          paddingTop: 20,
          fontSize: 30,
          color: "yellow",
        }}
      >
        Hello World!
      </Text>
    </View>
  );
}
