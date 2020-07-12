import styled from 'styled-components'

export const Wrapper = styled.article`
  background-color: #fff;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
  width: 300px;
  border-radius: 7px;
  margin: 1rem auto;

  @media screen and (min-width: 900px) {
    width: 400px;
  }

  @media screen and (min-width: 1920) {
    width: 600px;
  }
`

export const Header = styled.header`
  height: 200px;
  border-radius: 7px 7px 0 0;
  overflow: hidden;
`

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Content = styled.section`
  padding: 1rem;
`

export const Title = styled.h2`
  font-size: 2rem;
  line-height: 2.05rem;
`

export const Subtitle = styled.h3`
  font-size: 1.6rem;
  line-height: 1.8rem;
`

export const Text = styled.p`
  font-size: 1rem;
`
