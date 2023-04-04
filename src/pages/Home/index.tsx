import { Intro } from './Intro'
import { CoffeList } from '../../contexts/CoffeContext'
import { CardCoffe } from './CardCoffe'

export function Home(){
  return (
    <div>
      <Intro/>
      {CoffeList.map((coffe)=>{
        return(
          <CardCoffe/>
        )
      })}
    </div>
    
  )
}