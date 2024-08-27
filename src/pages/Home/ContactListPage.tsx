import ContactList from '../../components/ContactList'
import { AddContactLink } from '../../components/ContactList/styles'
import { Title } from '../../styles'

const ContactListPage = () => {
  return (
    <>
      <Title>Lista de Contatos</Title>
      <AddContactLink to="/add-contact">+</AddContactLink>
      <ContactList />
    </>
  )
}

export default ContactListPage
