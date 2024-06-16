import { Container, DescriptionText, DetailContainer, DetailDescription, DetailImage, DetailText } from "./styles";

import Term from "../../../../assets/images/termometro.png"
import Nuvem from "../../../../assets/images/nuvem-chovendo.png"
import Vento from "../../../../assets/images/vento.png"
import Gota from "../../../../assets/images/gota.png"
import Sol from "../../../../assets/images/sol.png"

export default function WeatherDetail () {
    return(
     <Container>
        <DetailContainer>
            <DetailDescription>
                <DetailImage source={Term}/>
                <DetailText>Sensação térmica</DetailText>
            </DetailDescription>
            <DescriptionText>26ºc</DescriptionText>
        </DetailContainer>
        <DetailContainer>
            <DetailDescription>
                <DetailImage source={Nuvem}/>
                <DetailText>Probabilidade de chuva</DetailText>
            </DetailDescription>
            <DescriptionText>0%</DescriptionText>
        </DetailContainer>
        <DetailContainer>
            <DetailDescription>
                <DetailImage source={Vento}/>
                <DetailText>Velocidade do vento</DetailText>
            </DetailDescription>
            <DescriptionText>8 km/h</DescriptionText>
        </DetailContainer>
        <DetailContainer>
            <DetailDescription>
                <DetailImage source={Gota}/>
                <DetailText>Umidade do ar</DetailText>
            </DetailDescription>
            <DescriptionText>40%</DescriptionText>
        </DetailContainer>
        <DetailContainer>
            <DetailDescription>
                <DetailImage source={Sol}/>
                <DetailText>Índice UV</DetailText>
            </DetailDescription>
            <DescriptionText>5</DescriptionText>
        </DetailContainer>
     </Container>   
    )
}