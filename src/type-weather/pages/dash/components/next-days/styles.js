import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 359px;
    height: 176px;
    background-color: #16161F;
    border-radius: 8px;
`

export const DayContainer = styled.View`
    width: 67px;
    height: 152px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
`

export const DayText = styled.Text`
    font-size: 14px;
    font-weight: 700;
    color: #BFBFD4;
`

export const Dayimage = styled.Image`
    width: 56px;
    height: 56px;
`

export const TempContainer = styled.View`
    display: flex;
    flex-direction: column;
`

export const MaxTempText = styled.Text`
    font-size: 14px;
    color: white;
    font-weight: 700;
`

export const MinTempText = styled.Text`
    font-size: 14px;
    color: #7F7F98;
    font-weight: 700;
`