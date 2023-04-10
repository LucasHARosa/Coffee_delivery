import styled from 'styled-components'

export const ContainerMain = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const ContainerData = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 640px;
  flex-grow: 1;
  h3{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
  }
`
export const ContainerFormAdress = styled.div`
  padding: 2.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};

  div:first-child{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    span{
      color: ${(props) => props.theme['yellow-dark']};
    }
    div{
      h4{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;

        color: ${(props) => props.theme['base-subtitle']};
      }
      p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;

        color: ${(props) => props.theme['base-text']};

        margin-top: 2px;
      }
    }
  }
  form{
    div:first-child{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 2rem;
      div:nth-child(3){
        display: flex; 
        gap: 0.75rem;
      }
      div:nth-child(4){
        display: flex;
        gap: 0.75rem;
      }
    }
    
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
  width: 12.5rem;
`
export const InputLong = styled(BaseInput)`
  flex-grow: 1;
`
export const InputMedio = styled(BaseInput)`
  flex-grow:1;
`
export const InputSmall = styled(BaseInput)`
  width: 50px;
`


export const ContainerFormPay = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};

  div:first-child{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    span{
      color: ${(props) => props.theme['purple']};
    }
    div{
      h4{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;

        color: ${(props) => props.theme['base-subtitle']};
      }
      p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;

        color: ${(props) => props.theme['base-text']};

        margin-top: 2px;
      }
    }
  }
`
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 2rem;
  button{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;

    background-color: ${(props) => props.theme['base-button']};
    border: 0;
    border-radius: 6px;
    padding: 1rem;

    width:178.67px;
    span{
      display: flex;
      align-items: center;

      color: ${(props) => props.theme['purple']};
    }
    p{
      display: flex;
      justify-content: flex-start;
      align-items: center;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
    }
  }
`


export const ContainerPedido = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 448px;
  gap:0.75rem;
  h3{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
  }
`

export const ContainerResume = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;
`

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  div{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`