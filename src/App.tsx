import { Provider } from 'react-redux'
import store from './store'
import EstiloGlobal, { Container } from './styles'
import Cabecalho from './Containers/Cabecalho'
import FormContato from './Containers/Formulario'
import ListaDeContatos from './Containers/ListContatos'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Cabecalho />
        <FormContato />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App