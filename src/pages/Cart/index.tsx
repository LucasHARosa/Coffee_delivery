import { CoffeItem } from "./CoffeItem";
import { ContainerData, ContainerMain, ContainerPedido, ContainerResume, DivInfos,  TextSmall, TextBig, TextMedium, CheckButton } from "./styles";
import { CoffeContext } from "../../contexts/CoffeContext";


import { useContext } from "react";
import { FormAdress } from "./FormAddress";
import { Pay } from "./Pay";

export function Cart() {

  const {coffeList} = useContext(CoffeContext)

  let priceCoffes = coffeList.reduce((total, coffeUser) => {
    return total + (coffeUser.price * coffeUser.amount)
  }
  , 0)

  const priceDelivery = 3.5;
  let priceTotal = priceCoffes + priceDelivery;

  return (
    <ContainerMain>
      <ContainerData>
        <h3>Complete seu pedido</h3>
        <FormAdress />
        <Pay />
      </ContainerData>
      <ContainerPedido>
        <h3>Cafés selecionados</h3>
        <ContainerResume>
          {coffeList.map(coffeUser => {
            // console.log(coffeUser)
            if(coffeUser.amount > 0){
              return(
                <CoffeItem 
                  key={coffeUser.title} 
                  coffe={coffeUser}
                />
              )
            }
          })}
          
          <DivInfos>
            <div>
              <TextSmall>Total de itens</TextSmall>
              <TextMedium>
                R$ {(priceCoffes.toFixed(2)).toString().replace('.',',')}
              </TextMedium>
            </div>
            <div>
              <TextSmall>Entrega</TextSmall>
              <TextMedium>
                R$ {(priceDelivery.toFixed(2)).toString().replace('.',',')}
              </TextMedium>
            </div>
            <div>
              <TextBig>Total</TextBig>
              <TextBig>
                R$ {(priceTotal.toFixed(2)).toString().replace('.',',')}
              </TextBig>
            </div>
          </DivInfos>
          <CheckButton>
            CONFIRMAR PEDIDO
          </CheckButton>
        </ContainerResume>
      </ContainerPedido>
    </ContainerMain>
  )
}