import Card from "./components/card";
import WeatherDetail from "./components/weather-detail";
import NextDays from "./components/next-days";
import { Container } from "./styles";

export default function Dash() {
   return (
      <Container
      contentContainerStyle={{
         display: "flex",
          flexDirection: "column", 
          alignItems: "center"}}
          >
         <Card />
         <WeatherDetail />
         <NextDays />
      </Container>
   )
}