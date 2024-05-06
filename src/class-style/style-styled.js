import styled from "styled-components/native";

const ComponentExample = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: blue;
`

const Title = styled.Text`
    font-size: 50px;
    font-weight: bold;
    color: white;
`

const Subtitle = styled.Text`
    padding-top: 20px;
    font-size: 30px;
    color: yellow;
`

export default function ExampleStyles() {
  return (
    <ComponentExample>
      <Title>INDMO</Title>
      <Subtitle>Hello World!</Subtitle>
    </ComponentExample>
  );
}
