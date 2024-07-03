import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../Models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Anne Vaccaro',
      email: 'AnneVaccaro@gmail.com',
      telefone: '110964952315'
    },
    {
      id: 2,
      nome: 'Lucas Charles',
      email: 'Charles.lc@gmail.com',
      telefone: '11 349120329'
    },
    {
      id: 3,
      nome: 'keveen nunes',
      email: 'kevemNune.s@gmail.com',
      telefone: '11987459098'
    },
    {
      id: 4,
      nome: 'Paulo draxelr',
      email: 'draxelr@gmail.com',
      telefone: '11937387388'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions
export default contatoSlice.reducer