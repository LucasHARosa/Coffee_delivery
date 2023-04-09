import { BaseInput, ContainerData, ContainerFormAdress, ContainerFormPay, ContainerMain, ContainerPedido, ContainerResume, InputLong, InputMedio, Inputblock } from "./styles";

export function Cart() {
  return (
    <ContainerMain>
      <ContainerData>
        <h3>Complete seu pedido</h3>
        <ContainerFormAdress>
          <p>Endereço de entrega</p>
          <form action="">
            <div>
              <Inputblock type="text" placeholder="CEP" />
              <InputLong type="text" placeholder="Rua" />
              <div>
                <BaseInput type="text" placeholder="Número"/>
                <InputLong type="text" placeholder="Complemento" />
              </div>
              <div>
                <BaseInput type="text" placeholder="Bairro" />

                <InputMedio type="text" placeholder="Cidade" />
                <BaseInput type="text" placeholder="UF" />
              </div>
            </div>
            
            
          </form>
        </ContainerFormAdress>
        <ContainerFormPay> 
          <p>Forma de pagamento</p>
        </ContainerFormPay>
      </ContainerData>
      <ContainerPedido>
        <h3>Cafés selecionados</h3>
        <ContainerResume></ContainerResume>
      </ContainerPedido>
    </ContainerMain>
  )
}