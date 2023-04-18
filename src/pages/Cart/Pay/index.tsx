import { ContainerPay, ContainerButton } from './styles';
import { CurrencyDollar, CreditCard, Money, Bank} from 'phosphor-react'

export function Pay() {
  return(
    <ContainerPay> 
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
    </ContainerPay>
  )
}