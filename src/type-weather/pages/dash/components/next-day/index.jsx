import { Container, DayContainer, DayText, DayImage, TempContainer, MaxTempText, MinTempText} from "./styles";

import Ter from "../../../../assets/images/trovoadas.png";
import Qua from "../../../../assets/images/chuva.png";
import Qui from "../../../../assets/images/sol-com-nuvens.png";
import Sex from "../../../../assets/images/nuvens.png";
import Sab from "../../../../assets/images/sol.png";

export default function NextDays() {
    return (
        <Container>
            <DayContainer>
            <DayText>Ter</DayText>
            <DayImage source={Ter} />
            <TempContainer>
            <MaxTempText>32ºc</MaxTempText>
            <MinTempText>26ºc </MinTempText>
            </TempContainer>
            </DayContainer>

            <DayContainer>
            <DayText>Qua</DayText>
            <DayImage source={Qua} />
            <TempContainer>
            <MaxTempText>32ºc</MaxTempText>
            <MinTempText>26ºc </MinTempText>
            </TempContainer>
            </DayContainer>

            <DayContainer>
            <DayText>Qui</DayText>
            <DayImage source={Qui} />
            <TempContainer>
            <MaxTempText>32ºc</MaxTempText>
            <MinTempText>26ºc </MinTempText>
            </TempContainer>
            </DayContainer>

            <DayContainer>
            <DayText>Sex</DayText>
            <DayImage source={Sex} />
            <TempContainer>
            <MaxTempText>32ºc</MaxTempText>
            <MinTempText>26ºc </MinTempText>
            </TempContainer>
            </DayContainer>

            <DayContainer>
            <DayText>Sab</DayText>
            <DayImage source={Sab} />
            <TempContainer>
            <MaxTempText>32ºc</MaxTempText>
            <MinTempText>26ºc </MinTempText>
            </TempContainer>
            </DayContainer>

        </Container>
    )
}