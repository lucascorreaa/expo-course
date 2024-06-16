import React from "react";
import {
  Container,
  Forecast,
  ForecastContainer,
  HeaderContainer,
  HeaderImg,
} from "./styles";
import { useState } from "react";
import Background from "../../assets/images/ceu-limpo-background.png";
import Logo from "../../assets/images/logotipo-NoSeuTempo.png";
import { useFonts, Nunito_700Bold } from "@expo-google-fonts/nunito";
import Card from "./components/temperature-card";
import { Button, TextInput } from "react-native";

export default function Home() {
  const [stateTemperatura, setStateTemperatura] = useState();
  const [descricao, setDescricao] = useState("");
  const [cidade, setCidade] = useState("");

  const [fontLoaded] = useFonts({
    Nunito_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  const callApi = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=afb5fd1ea152ce949db3fa511fc4ce34`
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((dadoTemperatura) => {
        setDescricao(dadoTemperatura.weather[0].description);
        setStateTemperatura(dadoTemperatura.main.temp);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container source={Background} resizeMode="cover">
      <HeaderContainer>
        <HeaderImg source={Logo} />
      </HeaderContainer>
      <TextInput
        style={{
          marginTop: "49px",
          color: "white",
          width: "360px",
          height: "47px",
          paddingLeft: "20px",
          backgroundColor: "#000000",
          opacity: 0.5,
        }}
        placeholder="Pesquisar cidade"
        placeholderTextColor={"#CBCBCB"}
        onChangeText={setCidade}
      ></TextInput>
      <Button onPress={() => callApi} title="Buscar"></Button>
      <Card city={cidade} temp={stateTemperatura} desc={descricao}></Card>
      <ForecastContainer>
        <Forecast></Forecast>
        <Forecast></Forecast>
        <Forecast></Forecast>
        <Forecast></Forecast>
      </ForecastContainer>
    </Container>
  );
}
