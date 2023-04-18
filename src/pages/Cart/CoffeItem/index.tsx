import { Plus, Minus, Trash} from "phosphor-react"
import { ContainerCoffe, ContainerCoffeInfo } from "./styles"
import {Coffe} from '../../Home'


interface CoffeProps{
  coffe: Coffe
  quantidade: number
}

export function CoffeItem({coffe, quantidade}: CoffeProps){
  return(
    <ContainerCoffe>
      <div>
        <img src={coffe.img} alt="" />
        <ContainerCoffeInfo>
          <p>{coffe.title}</p>
          <div>
            <div>
              <button type="button">
                <Minus size={14} weight="light"/>
              </button>
              <p>{quantidade}</p>
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