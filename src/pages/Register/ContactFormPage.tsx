import ContactForm from '../../components/ContactForm/index'
import { BackLink } from '../../components/ContactList/styles'
import { Title } from '../../styles'

const ContactFormPage = () => {
  return (
    <>
      <Title>Adicionar/Editar Contato</Title>
      <BackLink to="/">cancelar</BackLink>
      <ContactForm />
    </>
  )
}

export default ContactFormPage
