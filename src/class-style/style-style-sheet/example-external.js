import { Text, View } from "react-native";

import { styles } from "./style-external";

export default function ExampleStylesExternal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INDMO</Text>
      <Text style={styles.paragraph}>Hello World!</Text>
    </View>
  );
}
