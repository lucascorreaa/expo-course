import { Text, View } from "react-native";

import { styles } from "./style-externo";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INDMO</Text>
      <Text style={styles.paragraph}>Hello World!</Text>
    </View>
  );
}
