import { ContainerData, ContainerFormAdress, ContainerFormPay, ContainerMain, ContainerPedido } from "./styles";

export function Cart() {
  return (
    <ContainerMain>
      <ContainerData>
        <h3>Complete seu pedido</h3>
        <ContainerFormAdress>
          <p>Endereço de entrega</p>
        </ContainerFormAdress>
        <ContainerFormPay> 
          <p>Forma de pagamento</p>
        </ContainerFormPay>
      </ContainerData>
      <ContainerPedido>
        <h3>Cafés selecionados</h3>
      </ContainerPedido>
    </ContainerMain>
  )
}