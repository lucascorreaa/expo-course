import styled from "styled-components/native";

export const ContainerWrapper = styled.View`
    margin-top: 25px;
    width: 359px;
    height: 328px;
    background-color: #16161F;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.ImageBackground`
    width: 335px;
    height: 304px;
    justify-content: space-between;
    display: flex;
`

export const ContainerTitle = styled.View`
    padding: 20px;
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color:white;
`

export const Description = styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: white;
`

export const WeatherContainer = styled.View`
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    padding-bottom: 16px;
`

export const WeatherTitle = styled.Text`
    font-size: 48px;
    font-weight: 800;
    color: white;
`

export const WeatherRange = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: white;
`

export const WeatherDescription = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: white;
`

export const WeatherWrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const WeatherImage = styled.Image`
    width: 160px;
    height: 160px;
`