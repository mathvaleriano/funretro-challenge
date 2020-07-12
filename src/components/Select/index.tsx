import React, { memo, SyntheticEvent } from 'react'
import * as S from './styled'

type Props = {
  readonly label: string
  readonly id: string
  readonly items: string[]
  readonly onChange: (
    event: SyntheticEvent & {
      readonly target: { readonly value?: string }
    }
  ) => void
  readonly renderOption: (item: string) => React.ReactNode
}

const Select: React.FC<Props> = ({
  label,
  id,
  items,
  onChange,
  renderOption,
}) => (
  <div>
    <S.Label htmlFor={id}>{label}</S.Label>
    <select onChange={onChange} id={id}>
      <option value="">-</option>
      {items.map(renderOption)}
    </select>
  </div>
)

export default memo(Select)
