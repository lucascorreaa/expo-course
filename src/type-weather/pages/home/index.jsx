import React from "react";
import {
  Container,
  Forecast,
  ForecastContainer,
  HeaderContainer,
  HeaderImg,
  Input,
  Subtitle,
  Tempeature,
  TitleColored,
  TitleContainer,
  TitleText,
} from "./styles";

import Background from "../../assets/images/ceu-limpo-background.png";
import Logo from "../../assets/images/logotipo-NoSeuTempo.png";
import { useFonts, Nunito_700Bold } from "@expo-google-fonts/nunito";

export default function Search() {
  const [fontLoaded] = useFonts({
    Nunito_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <Container source={Background} resizeMode="cover">
      <HeaderContainer>
        <HeaderImg source={Logo} />
      </HeaderContainer>
      <Input
        placeholder="Pesquisar cidade"
        placeholderTextColor={"#CBCBCB"}
        style={{ fontFamily: "Nunito_700Bold" }}
      ></Input>
      <Tempeature></Tempeature>
      <ForecastContainer>
        <Forecast></Forecast>
        <Forecast></Forecast>
        <Forecast></Forecast>
        <Forecast></Forecast>
      </ForecastContainer>
    </Container>
  );
}
