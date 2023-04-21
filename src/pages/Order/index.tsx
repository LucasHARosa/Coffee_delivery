import { useContext } from "react";
import { CoffeContext } from "../../contexts/CoffeContext";
import Illustration from "../../assets/Illustration.png";

import {CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { BorderGradiente, Container, ContainerOrder, ContainerOrderInfo, ContainerOrderInfoItems, ContainerTitle, DollarIcons, PinIcons, TimerIcons } from "./styles";
export function Order() {
  const {dataUser} = useContext(CoffeContext)
  
  return (
    <Container>
      <ContainerTitle>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </ContainerTitle>
      <ContainerOrder>
        <BorderGradiente>
          <ContainerOrderInfo>
            <ContainerOrderInfoItems>
              <PinIcons>
                <MapPin size={16} weight="fill" />
              </PinIcons>
              <div>
                <p>Entrega em <span>{dataUser.rua}, {dataUser.numero}</span></p>
                <p>{dataUser.bairro} - {dataUser.cidade}, {dataUser.uf}</p>
              </div>
            </ContainerOrderInfoItems>
            <ContainerOrderInfoItems>
              <TimerIcons>
                <Timer size={16} weight="fill" />
              </TimerIcons>
              <div>
                <p>Previsão de entrega</p>
                <p><span>20min - 30 min</span></p>
              </div>
            </ContainerOrderInfoItems>
            <ContainerOrderInfoItems>
              <DollarIcons>
                <CurrencyDollar size={16} weight="fill" />
              </DollarIcons>
              <div>
                <p>Pagamento na entrega</p>
                <p><span>{dataUser.payment}</span></p>
              </div>
            </ContainerOrderInfoItems>
          </ContainerOrderInfo>
        </BorderGradiente>
        <img src={Illustration} alt="" />
      </ContainerOrder> 
    </Container>  
      
    
  );
}