import { ContainerPay, ContainerButton } from './styles';
import { CurrencyDollar, CreditCard, Money, Bank} from 'phosphor-react'
import { CoffeContext } from "../../../contexts/CoffeContext";
import { useContext, useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: (event: any) => void;
}

const Button = ({ children, active, onClick }: ButtonProps) => {
  return (
    <button
      className={`button ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export function Pay() {
  const [selectedButton , setSelectedButton ] = useState('')
  const {savePayment} = useContext(CoffeContext)
  function handleSavePayment(event: any){
    const formatted = event.target.textContent.toLowerCase()
    savePayment(formatted)
    if(formatted === 'cartão de crédito'){
      setSelectedButton('credit')
    }else if(formatted === 'cartão de débito'){
      setSelectedButton('debit')
    }else{
      setSelectedButton('money')
    }
  }
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
        <Button  onClick={handleSavePayment} active={selectedButton == 'credit'}>
          <span> <CreditCard size={16}/> </span>
          <p>CARTÃO DE CRÉDITO</p>
        </Button>
        <Button  onClick={handleSavePayment} active={selectedButton == 'debit'}>
          <span><Bank size={16}/></span>
          <p>CARTÃO DE DÉBITO</p>
        </Button>
        <Button  onClick={handleSavePayment} active={selectedButton == 'money'}>
          <span><Money size={16}/></span>
          <p>DINHEIRO</p>
        </Button>
      </ContainerButton>
    </ContainerPay>
  )
}