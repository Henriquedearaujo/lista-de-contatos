import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import EstyleGlobal, { Container } from './styles'

import ContactListPage from './pages/Home/ContactListPage'
import ContactFormPage from './pages/Register/ContactFormPage'
import { store } from './store'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <ContactListPage />
  },
  {
    path: '/edit-contact/:id',
    element: <ContactFormPage />
  },
  {
    path: '/add-contact',
    element: <ContactFormPage />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstyleGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
