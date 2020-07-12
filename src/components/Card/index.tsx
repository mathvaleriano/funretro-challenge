import React, { memo } from 'react'
import * as S from './styled'

type Props = {
  readonly image: string
  readonly title: string
  readonly subtitle: string
  readonly text: string
}

const Card: React.FC<Props> = ({ image, title, subtitle, text }) => (
  <S.Wrapper>
    <S.Header>
      <S.Thumb src={image} alt={title} />
    </S.Header>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Text>{text}</S.Text>
    </S.Content>
  </S.Wrapper>
)

export default memo(Card)
