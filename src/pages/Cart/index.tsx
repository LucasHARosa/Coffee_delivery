import { CoffeItem } from "./CoffeItem";
import { BaseInput, ContainerButton, ContainerData, ContainerFormAdress, ContainerFormPay, ContainerMain, ContainerPedido, ContainerResume, DivInfos, InputLong, InputMedio, InputSmall, Inputblock } from "./styles";
import { CoffeContext } from "../../contexts/CoffeContext";

import {MapPinLine, CurrencyDollar, CreditCard, Money, Bank} from 'phosphor-react'
import { useContext } from "react";

export function Cart() {

  const {coffeSelected} = useContext(CoffeContext)
  return (
    <ContainerMain>
      <ContainerData>
        <h3>Complete seu pedido</h3>
        <ContainerFormAdress>
          <div>
            <span>
              <MapPinLine size={22} />
            </span>
            <div>
              <h4>Endereço de entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
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
                <InputSmall type="text" placeholder="UF" />
              </div>
            </div>
            
            
          </form>
        </ContainerFormAdress>
        <ContainerFormPay> 
          <div>
            <span>
              <CurrencyDollar size={22} />
            </span>
            <div>
              <h4>Pagamento</h4>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>
          <ContainerButton>
            <button type="button">
              <span> <CreditCard size={16}/> </span>
              <p>CARTÃO DE CRÉDITO</p>
            </button>
            <button type="button">
              <span><Bank size={16}/></span>
              <p>CARTÃO DE DÉBITO</p>
            </button>
            <button type="button">
              <span><Money size={16}/></span>
              <p>DINHEIRO</p>
            </button>
          </ContainerButton>
        </ContainerFormPay>
      </ContainerData>
      <ContainerPedido>
        <h3>Cafés selecionados</h3>
        <ContainerResume>
          {coffeSelected.map(coffeUser => {
            console.log(coffeUser)
            return(
              <CoffeItem 
                key={coffeUser.coffe.title} 
                coffe={coffeUser.coffe}
              />
            )
          })}
          
          <DivInfos>
            <div>
              <p>Total de itens</p>
              <p>R$ {coffeSelected.length}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>
          </DivInfos>
          <button>
            <p>CONFIRMAR PEDIDO</p>
          </button>
        </ContainerResume>
      </ContainerPedido>
    </ContainerMain>
  )
}