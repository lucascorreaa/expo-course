import { Container, ContainerTitle, Description, Title, WeatherContainer, WeatherImage, WeatherWrapper, WeatherTitle, WeatherDescription, WeatherRange, ContainerWrapper } from "./styles";

import CardBackground from "../../../../assets/images/background.png";
import moon from "../../../../assets/images/moon.png";

export default function Card() {
    return (
        <ContainerWrapper>
            <Container source={CardBackground} imageStyle={{ borderRadius: 8 }}>
                <ContainerTitle>
                    <Title>Porto Alegre, RS</Title>
                    <Description>Segunda-feira, 15 de maio de 2023</Description>
                </ContainerTitle>

                <WeatherWrapper>
                    <WeatherContainer>
                        <WeatherTitle>28ºc</WeatherTitle>
                        <WeatherRange>26ºc / 32ºc</WeatherRange>
                        <WeatherDescription>Poucas nuvens</WeatherDescription>
                    </WeatherContainer>
                    <WeatherImage source={moon} />
                </WeatherWrapper>

            </Container>
        </ContainerWrapper>
    )
}