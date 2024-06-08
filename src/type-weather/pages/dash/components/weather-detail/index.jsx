import { Container, DescriptionText, DetailContainer, DetailDescription, DetailImage, DetailText } from "./styles";
import Term from "../../../../assets/images/termometro.png"
import Cloud from "../../../../assets/images/cloud-icon.png"
import Vento from "../../../../assets/images/vento.png"
import Gota from "../../../../assets/images/gota.png"
import Sun from "../../../../assets/images/sun.png"


export default function WeatherDetail() {
    return (
        <Container>
            <DetailContainer>
                <DetailDescription>
                    <DetailImage source={Term} />
                    <DetailText>Sensação térmica</DetailText>
                </DetailDescription>
                <DescriptionText>26ºc</DescriptionText>
            </DetailContainer>

            <DetailContainer>
                <DetailDescription>
                    <DetailImage source={Cloud} />
                    <DetailText>Probabilidade de chuva</DetailText>
                </DetailDescription>
                <DescriptionText>0%</DescriptionText>
            </DetailContainer>

            <DetailContainer>
                <DetailDescription>
                    <DetailImage source={Vento} />
                    <DetailText>Velocidade do vento</DetailText>
                </DetailDescription>
                <DescriptionText>8 km/h</DescriptionText>
            </DetailContainer>

            <DetailContainer>
                <DetailDescription>
                    <DetailImage source={Gota} />
                    <DetailText>Umidade do ar</DetailText>
                </DetailDescription>
                <DescriptionText>40%</DescriptionText>
            </DetailContainer>

            <DetailContainer>
                <DetailDescription>
                    <DetailImage source={Sun} />
                    <DetailText>Índice UV</DetailText>
                </DetailDescription>
                <DescriptionText>5</DescriptionText>
            </DetailContainer>
        </Container>
    )
}