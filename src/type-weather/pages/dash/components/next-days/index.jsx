import { Container, DayContainer, DayText, MaxTempText, MinTempText, TempContainer, Dayimage } from "./styles";
import clounds from "../../../../assets/images/clounds.png";
import rain from "../../../../assets/images/rain.png";
import sunclounds from "../../../../assets/images/sun-clounds.png";
import nuvem from "../../../../assets/images/nuvem.png";
import sun from "../../../../assets/images/sun-2.png";

export default function NextDays() {
    return (
        <Container>
            <DayContainer>
                <DayText>Ter</DayText>
                <Dayimage source={clounds}/>
                <TempContainer>
                <MaxTempText>32ºc</MaxTempText>
                <MinTempText>26ºc</MinTempText>
                </TempContainer>
            </DayContainer>
            <DayContainer>
                <DayText>Qua</DayText>
                <Dayimage source={rain}/>
                <TempContainer>
                <MaxTempText>32ºc</MaxTempText>
                <MinTempText>26ºc</MinTempText>
                </TempContainer>
            </DayContainer>
            <DayContainer>
                <DayText>Qui</DayText>
                <Dayimage source={sunclounds}/>
                <TempContainer>
                <MaxTempText>32ºc</MaxTempText>
                <MinTempText>26ºc</MinTempText>
                </TempContainer>
            </DayContainer>
            <DayContainer>
                <DayText>Sex</DayText>
                <Dayimage source={nuvem}/>
                <TempContainer>
                <MaxTempText>32ºc</MaxTempText>
                <MinTempText>26ºc</MinTempText>
                </TempContainer>
            </DayContainer>
            <DayContainer>
                <DayText>Sab</DayText>
                <Dayimage source={sun}/>
                <TempContainer>
                <MaxTempText>32ºc</MaxTempText>
                <MinTempText>26ºc</MinTempText>
                </TempContainer>
            </DayContainer>
        </Container>
    )
}