import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/index'
import { removeContact } from '../../store/reducers/contact'
import * as S from './styles'
import { Input } from '../../styles'

const ContactList = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts)
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Input
        type="text"
        placeholder="Pesquisar Contatos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <S.List>
        {filteredContacts.map((contact) => (
          <S.ListItem key={contact.id}>
            <S.ContactInfo>
              <strong>Nome:</strong> {contact.name}
            </S.ContactInfo>
            <S.ContactInfo>
              <strong>Email:</strong> {contact.email}
            </S.ContactInfo>
            <S.ContactInfo>
              <strong>Telefone:</strong> {contact.phone}
            </S.ContactInfo>
            <S.ButtonGroup>
              <S.StyledLink to={`/edit-contact/${contact.id}`}>
                Editar
              </S.StyledLink>
              <S.Button onClick={() => dispatch(removeContact(contact.id))}>
                Remover
              </S.Button>
            </S.ButtonGroup>
          </S.ListItem>
        ))}
      </S.List>
    </>
  )
}

export default ContactList
