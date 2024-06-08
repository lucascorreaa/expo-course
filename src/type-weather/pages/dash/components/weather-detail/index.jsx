
import { Container, DescriptionText, DetailContainer, DetailDescription, DetailImage, DetailText } from "./styles";
import term from "../../../../assets/images/termometro.png";
import cloud from "../../../../assets/images/cloud.png";
import wind from "../../../../assets/images/wind.png";
import drop from "../../../../assets/images/drop.png";
import sun from "../../../../assets/images/sun.png";

export default function WeatherDetail() {
    return (
        <Container>
            <DetailContainer>
                <DetailDescription>
                    <DetailImage source={term} />
                    <DetailText>Sensação térmica</DetailText>
                </DetailDescription>
                <DescriptionText>26ºc</DescriptionText>
            </DetailContainer>
            <DetailContainer>
                <DetailDescription>
                    <DetailImage source={cloud} />
                    <DetailText>Probabilidade de chuva</DetailText>
                </DetailDescription>
                <DescriptionText>0%</DescriptionText>
            </DetailContainer>
            <DetailContainer>
                <DetailDescription>
                    <DetailImage source={wind} />
                    <DetailText>Velocidade do vento</DetailText>
                </DetailDescription>
                <DescriptionText>8 km/h</DescriptionText>
            </DetailContainer>
            <DetailContainer>
                <DetailDescription>
                    <DetailImage source={drop} />
                    <DetailText>Umidade do ar</DetailText>
                </DetailDescription>
                <DescriptionText>40%</DescriptionText>
            </DetailContainer>
            <DetailContainer>
                <DetailDescription>
                    <DetailImage source={sun} />
                    <DetailText>Índice UV</DetailText>
                </DetailDescription>
                <DescriptionText>5</DescriptionText>
            </DetailContainer>
        </Container>
    )
}