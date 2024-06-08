import { ScrollView, View } from "react-native";
import Card from "./src/type-weather/pages/dash/components/card";
import WeatherDetail from "./src/type-weather/pages/dash/components/weather-detail";
import NextDays from "./src/type-weather/pages/dash/components/next-days";

export default function App() {
  return (
    <ScrollView style={{backgroundColor: "#13131A"}}
    contentContainerStyle={{
      display: "flex",
       flexDirection: "column", 
       alignItems: "center"}}
    >
      <Card />
      <WeatherDetail />
      <NextDays />
    </ScrollView>
  )
}
