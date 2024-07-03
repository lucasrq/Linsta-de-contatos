import styled from 'styled-components'

export const Container = styled.header`
  padding: 20px;
  background-color: white;
  margin-bottom: 50px;
  margin-top:20px;
  position:relative;
  text-align:center;
  animation: content 5s infinite;
  @keyframes content {
  0%{
    border-top: 4px solid black;
    border-right: 4px solid red;
    border-bottom: 4px solid green;
    border-left: 4px solid yellow;
  }
  25% {
    border-top: 4px solid red;
    border-right: 4px solid green;
    border-bottom: 4px solid yellow;
    border-left: 4px solid black;
  }
  50% {
    border-top: 4px solid green;
    border-right: 4px solid yellow;
    border-bottom: 4px solid black ;
    border-left: 4px solid red;
  }
  75% {
    border-top: 4px solid black;
    border-right: 4px solid red;
    border-bottom: 4px solid green;
    border-left: 4px solid yellow;
  }
  100% {
    border-top: 4px solid yellow;
    border-right: 4px solid black;
    border-bottom: 4px solid red;
    border-left: 4px solid green;
  }
  }

`

export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: bold;

  animation: plug 2s infinite;
  @keyframes plug {
    0%{
      transform: scale(1)
    }
    50%{
      transform: scale(1.2)
    }
    100%{
      transform: scale(1)
    }
  }
`

export const Subtitulo = styled.h2`
  font-size: 24px;
  font-weight: bold;
`