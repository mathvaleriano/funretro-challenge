import styled from 'styled-components'

type Props = {
  readonly alignItems?: string
  readonly flow?: string
  readonly justify?: string
}

export default styled.div`
  display: flex;
  ${({
    alignItems = 'center',
    flow = 'row wrap',
    justify = 'space-around',
  }: Props) => `
    aling-items: ${alignItems};
    flex-flow: ${flow};
    justify-content: ${justify};
  `}
`
