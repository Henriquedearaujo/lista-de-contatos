import styled from 'styled-components'
import variables from '../../styles/variables'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ButtonSave = styled.button`
  padding: 10px;
  font-size: 32px;
  background-color: ${variables.green};
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${variables.green2};
  }
`
