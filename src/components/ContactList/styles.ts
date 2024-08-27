import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variables from '../../styles/variables'

export const List = styled.ul`
  list-style: none;
  padding: 0;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-size: 36px;
`

export const ContactInfo = styled.div`
  margin-bottom: 10px;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`

export const Button = styled.button`
  padding: 5px 10px;
  background-color: ${variables.red};
  font-size: 32px;
  border-radius: 4px;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${variables.red2};
  }
`

export const SearchInput = styled.input`
  padding: 8px;
  font-size: 32px;
`

export const StyledLink = styled(Link)`
  padding: 5px 10px;
  font-size: 32px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`

export const AddContactLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: ${variables.green};
  color: white;
  font-size: 32px;
  text-decoration: none;
  border-radius: 4px;
  margin-bottom: 20px;
  margin-right: 26px;

  border-radius: 50%;

  &:hover {
    background-color: ${variables.green};
  }
`

export const BackLink = styled(Link)`
  display: inline-block;
  padding: 10px 15px;
  background-color: ${variables.red};
  color: white;
  font-size: 32px;
  text-decoration: none;
  border-radius: 4px;
  margin-bottom: 20px;

  &:hover {
    background-color: ${variables.red2};
  }
`
