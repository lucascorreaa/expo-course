import styled from "styled-components";

export const Container = styled.ImageBackground`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  gap: 10px;
  margin-top: 48px;
`;

export const HeaderImg = styled.Image`
  width: 176px;
  height: 108px;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 188px;
  gap: 4px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: white;
`;

export const TitleColored = styled.Text`
  font-size: 20px;
  color: #8fb2f5;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  margin-top: 49px;
  color: white;
  width: 360px;
  height: 47px;
  padding-left: 20px;
  border-radius: 10px;
  background-color: #000000;
  opacity: 0.5;
`;

export const ForecastContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 13px;
  padding-bottom: 100px;
`;

export const Forecast = styled.View`
  width: 80px;
  height: 160px;
  background-color: #000000;
  border-radius: 10px;
  opacity: 0.5;
`;
