import * as S from "./styles";

function CreativeCard(props) {
  return (
    <S.CardContainer>
      <S.CardTitle>{props.title}</S.CardTitle>
      <S.CardSubtitle>{props.description}</S.CardSubtitle>
    </S.CardContainer>
  );
}

export default function CreativeComponent() {
  return (
    <S.Container>
      <CreativeCard title="titulo" description="descrição" />
      <CreativeCard title="titulo" description="descrição" />
      <CreativeCard title="titulo" description="descrição" />
      <CreativeCard title="titulo" description="descrição" />
    </S.Container>
  );
}
