import {
  Tempeature,
  TempeatureCity,
  TemperatureNumber,
  TempeatureDescription,
} from "./styles";
import { useFonts, Nunito_700Bold } from "@expo-google-fonts/nunito";

export default function Card(props) {
  const [fontLoaded] = useFonts({
    Nunito_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }
  return (
    <Tempeature>
      <TempeatureCity style={{ fontFamily: "Nunito_700Bold" }}>
        {props.city}
      </TempeatureCity>
      <TemperatureNumber style={{ fontFamily: "Nunito_700Bold" }}>
        {props.temp}
      </TemperatureNumber>
      <TempeatureDescription style={{ fontFamily: "Nunito_700Bold" }}>
        {props.desc}
      </TempeatureDescription>
    </Tempeature>
  );
}
