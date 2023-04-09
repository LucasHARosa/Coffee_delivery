import styled from 'styled-components'

export const ContainerMain = styled.main`
  display: flex;
  justify-content: space-between;
`

export const ContainerData = styled.section`
  display: flex;
  flex-direction: column;
`
export const ContainerFormAdress = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  div:first-child{
    display: flex;
    flex-direction: column;
    gap: 1rem
  }
  div:nth-child(3){
    display: flex;
    gap: 0.75rem;
  }
  div:nth-child(4){
    display: flex;
    gap: 0.75rem;
  }
`

export const BaseInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  padding: 0.75rem;
  border: 0;
  border-radius: 0.25rem;
  &::placeholder {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
  }
`
export const Inputblock = styled(BaseInput)`
  display: block;
  width: 12.5rem;

`
export const InputLong = styled(BaseInput)`
  width: 100%;
`
export const InputMedio = styled(BaseInput)`
  width: 17.25rem;
`

export const ContainerFormPay = styled.div`
  background-color: ${(props) => props.theme['base-card']};
`


export const ContainerPedido = styled.section`
  display: flex;
`

export const ContainerResume = styled.div`
  background-color: ${(props) => props.theme['base-card']};
`