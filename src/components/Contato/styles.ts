import styled from 'styled-components'

export const CardDeContato = styled.div`
  display: block;
`

export const Nome = styled.textarea`
  font-size: 24px;
  font-weight: bold;
  display: block;
  resize: none;
  border: none;
  max-height: 32px;
  width: 100%;
`

export const Email = styled.textarea`
  font-size: 16px;
  display: block;
  resize: none;
  border: none;
  max-height: 24px;
  width: 100%;
`

export const Telefone = styled.textarea`
  font-size: 16px;
  resize: none;
  border: none;
  max-height: 24px;
  width: 100%;
`

export const Infos = styled.div`
  display: flex;
`


export const ListaDeInfo = styled.div`
  margin: 0;
  padding-left: 24px;
  max-width: 500px;
  width: 100%;
`
export const ContainerBotoes = styled.div`
  display: flex;
  justify-content: flex-end;
`