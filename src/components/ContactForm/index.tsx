import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { addContact, editContact } from '../../store/reducers/contact'
import { RootState } from '../../store'
import { Form, ButtonSave } from './styles'
import { Input } from '../../styles'

const ContactForm = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find((contact) => contact.id === Number(id))
  )

  const [name, setName] = useState(contact ? contact.name : '')
  const [email, setEmail] = useState(contact ? contact.email : '')
  const [phone, setPhone] = useState(contact ? contact.phone.toString() : '')
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' })

  useEffect(() => {
    if (contact) {
      setName(contact.name)
      setEmail(contact.email)
      setPhone(contact.phone.toString())
    }
  }, [contact])

  const validatePhone = (phone: string) => {
    const re = /^\d{10,11}$/
    return re.test(phone.replace(/\D/g, ''))
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '')
    let formattedValue = rawValue

    if (rawValue.length > 2) {
      formattedValue = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2)}`
    }
    if (rawValue.length > 7) {
      formattedValue = `(${rawValue.slice(0, 2)}) ${rawValue.slice(
        2,
        7
      )}-${rawValue.slice(7)}`
    }

    setPhone(formattedValue)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const phoneError = validatePhone(phone) ? '' : 'Telefone inválido'

    if (phoneError) {
      setErrors({ name: '', email: '', phone: phoneError })
      return
    }

    const phoneNumber = Number(phone.replace(/\D/g, ''))

    if (id) {
      dispatch(editContact({ id: Number(id), name, email, phone: phoneNumber }))
    } else {
      dispatch(addContact({ id: Date.now(), name, email, phone: phoneNumber }))
    }
    navigate('/')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome Completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={handlePhoneChange}
        required
      />
      {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
      <ButtonSave type="submit">
        {id ? 'Editar Contato' : 'Adicionar Contato'}
      </ButtonSave>
    </Form>
  )
}

export default ContactForm
