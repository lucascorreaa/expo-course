import React from "react";
import {
  Container,
  HeaderContainer,
  HeaderImg,
  Input,
  Subtitle,
  TitleColored,
  TitleContainer,
  TitleText,
} from "./styles";

import Background from "../../assets/images/background.png";
import Cloud from "../../assets/images/cloud.png";

export default function Search() {
  return (
    <Container source={Background} resizeMode="cover">
      <HeaderContainer>
        <HeaderImg source={Cloud} />
        <TitleText>TypeWeather</TitleText>
      </HeaderContainer>
      <TitleContainer>
        <TitleText>
          Boas vindas ao <TitleColored>TypeWeather</TitleColored>
        </TitleText>
        <Subtitle>Escolha um local para ver a previsão do tempo</Subtitle>
      </TitleContainer>
      <Input>Buscar Local</Input>
    </Container>
  );
}
