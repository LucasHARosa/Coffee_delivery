import { Plus, Minus, Trash} from "phosphor-react"
import { ContainerCoffe, ContainerCoffeInfo } from "./styles"
import {Coffe} from '../../Home'


interface CoffeProps{
  coffe: Coffe
}

export function CoffeItem({coffe}: CoffeProps){
  return(
    <ContainerCoffe>
      <div>
        <img src="/coffes/Image.png" alt="" />
        <ContainerCoffeInfo>
          <p>Expresso Tradicional</p>
          <div>
            <div>
              <button type="button">
                <Minus size={14} weight="light"/>
              </button>
              <p>1</p>
              <button type="button" >
                <Plus size={14} weight="light"/>
              </button>
            </div>
            <button>
              <Trash size={16}/>
              <p>REMOVER</p>
            </button>
          </div>
        </ContainerCoffeInfo>
      </div>
      <p>R$9,90</p>
    </ContainerCoffe>
  )
} 