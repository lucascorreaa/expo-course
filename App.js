import { ScrollView, View } from "react-native";
import Card from "./src/type-weather/pages/dash/components/card";
import NextDay from "./src/type-weather/pages/dash/components/next-day";
import WeatherDetail from "./src/type-weather/pages/dash/components/weather-detail";

export default function App() {
  return (
    <ScrollView 
    
      style={{backgroundColor: "#13131A"}}
      contentContainerStyle= {{
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center"}}
      >
       <Card />
       <WeatherDetail />
       <NextDay />
    </ScrollView>
  )
}
