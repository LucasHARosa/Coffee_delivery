import { CardCart, CardCointainer, CardDescription, CardPrice, CardTag, CardTags, CardTitle, Cardfunction, Cardinfo } from "./styles"
import { Coffe } from "../index"
import { Plus, Minus ,ShoppingCartSimple } from "phosphor-react"
import { useContext, useEffect, useState } from "react"
import { CoffeContext } from "../../../contexts/CoffeContext"


interface CardCoffeProps{
  coffe: Coffe
}


export function CardCoffe ({coffe}: CardCoffeProps){
  const [quantidade, setQuantidade] = useState(0)
  const [enablebutton, setEnablebutton] = useState(false)
  const {addCoffe} = useContext(CoffeContext)
  
  function addQuantidade(){
    setQuantidade(quantidade + 1)
  }  
  
  function removeQuantidade(){
    if(quantidade > 0){
      setQuantidade(quantidade - 1)
    }
  }
  function handleAddCoffe(){
    addCoffe(coffe,quantidade)
  }
  
  
  useEffect(()=>{
    if(quantidade > 0){
      setEnablebutton(true)
    }
    else{
      setEnablebutton(false)
    }
  },[quantidade])


  return(
    <CardCointainer>
      <img src={coffe.img} alt="" />
      <Cardinfo>
        <CardTags>
          {coffe.tags.map((tag,indice)=>{
            return(
              <CardTag key={indice}>{tag}</CardTag>
            )
          })} 
        </CardTags>
        
        <CardTitle>{coffe.title}</CardTitle>
        <CardDescription>{coffe.descricao}</CardDescription>
        <CardPrice>
          <div>
            <span>R$</span>
            <p>9,90</p>
          </div>
          <Cardfunction >
            <div>
              <button type="button" onClick={removeQuantidade}>
                <Minus size={14} weight="light"/>
              </button>
              <span>{quantidade}</span>
              <button type="button" onClick={addQuantidade}>
                <Plus size={14} weight="light"/>
              </button>
            </div>
            <CardCart disabled={!enablebutton} onClick={handleAddCoffe}>
              <ShoppingCartSimple size={22} weight="fill"/>
            </CardCart>
          </Cardfunction >
        </CardPrice>
      </Cardinfo>
    </CardCointainer>
      
  )
}