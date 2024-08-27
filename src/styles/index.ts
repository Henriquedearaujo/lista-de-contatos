import styled, { createGlobalStyle } from 'styled-components'

const EstyleGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`
export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`
export const Title = styled.h1`
  font-size: 64px;
  font-family: 'Roboto', sans-serif;
`
export const Input = styled.input`
  padding: 8px;
  font-size: 32px;
`
export default EstyleGlobal
