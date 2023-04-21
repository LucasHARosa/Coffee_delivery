import { useContext } from "react";
import { CoffeContext } from "../../contexts/CoffeContext";
export function Order() {
  const {dataUser} = useContext(CoffeContext)
  
  const values = Object.values(dataUser)
  let allValuesAreNotEmpty = values.every((value) => value !== '');
  return (
    <div>
      {allValuesAreNotEmpty ? 
        <h1>Seu pedido foi realizado com sucesso</h1>
      :
        <h1>Ah não, complete as informações do seu pedido</h1>
      }
    </div>
  );
}